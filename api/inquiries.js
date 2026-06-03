const { MongoClient } = require('mongodb');

// ─── Connection Cache ────────────────────────────────────────────────────────
let cachedClient = null;
async function getClient() {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 5000,
  });
  await client.connect();
  cachedClient = client;
  return client;
}

// ─── Rate Limiter (in-memory, per IP) ───────────────────────────────────────
// Limits to 30 requests per IP per minute for POST, 10 for GET (admin login)
const rateLimitStore = new Map();

function rateLimit(ip, maxRequests, windowMs) {
  const now = Date.now();
  const key = ip;
  const entry = rateLimitStore.get(key) || { count: 0, resetAt: now + windowMs };

  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + windowMs;
  }

  entry.count++;
  rateLimitStore.set(key, entry);

  // Clean up old entries periodically
  if (rateLimitStore.size > 5000) {
    for (const [k, v] of rateLimitStore) {
      if (now > v.resetAt) rateLimitStore.delete(k);
    }
  }

  return entry.count > maxRequests;
}

// ─── Brute Force Protection for Admin Login ─────────────────────────────────
const loginAttempts = new Map();

function checkBruteForce(ip) {
  const now = Date.now();
  const entry = loginAttempts.get(ip) || { attempts: 0, lockedUntil: 0 };

  if (entry.lockedUntil > now) {
    const remaining = Math.ceil((entry.lockedUntil - now) / 1000 / 60);
    return { blocked: true, remaining };
  }

  return { blocked: false };
}

function recordFailedLogin(ip) {
  const now = Date.now();
  const entry = loginAttempts.get(ip) || { attempts: 0, lockedUntil: 0 };
  entry.attempts++;

  // Lock for 15 minutes after 5 failed attempts
  if (entry.attempts >= 5) {
    entry.lockedUntil = now + 15 * 60 * 1000;
    entry.attempts = 0;
  }

  loginAttempts.set(ip, entry);
}

function resetLoginAttempts(ip) {
  loginAttempts.delete(ip);
}

// ─── Input Sanitizer ────────────────────────────────────────────────────────
function sanitize(value) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/<[^>]*>/g, '')           // strip HTML tags
    .replace(/[<>"'`]/g, '')           // strip dangerous chars
    .replace(/javascript:/gi, '')      // strip JS protocol
    .replace(/on\w+\s*=/gi, '')        // strip event handlers
    .trim()
    .slice(0, 500);
}

// ─── Security Headers ────────────────────────────────────────────────────────
function setSecurityHeaders(res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
}

// ─── CORS ────────────────────────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
  'https://al-aziziya-turizm.vercel.app',
  'https://alaziziyaturizm.com',
  'https://www.alaziziyaturizm.com',
];

function setCors(req, res) {
  const origin = req.headers['origin'] || '';
  // Allow if it's a known origin OR if there's no origin (direct API call / server-to-server)
  if (!origin || ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  }
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

// ─── Main Handler ────────────────────────────────────────────────────────────
module.exports = async function handler(req, res) {
  setSecurityHeaders(res);
  setCors(req, res);

  if (req.method === 'OPTIONS') return res.status(200).end();

  // Get client IP
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress ||
    'unknown';

  const { MONGODB_URI, ADMIN_PASSWORD } = process.env;

  if (!MONGODB_URI) {
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  try {
    const client = await getClient();
    const collection = client.db('alaziziya').collection('inquiries');

    // ── POST: Save inquiry ──────────────────────────────────────────────────
    if (req.method === 'POST') {
      // Rate limit: max 10 form submissions per IP per 10 minutes
      if (rateLimit(ip + ':post', 10, 10 * 60 * 1000)) {
        return res.status(429).json({ error: 'Too many requests. Please try again later.' });
      }

      const body = req.body || {};

      if (!body.name || !body.phone) {
        return res.status(400).json({ error: 'Name and Phone are required.' });
      }

      // Validate phone: must contain digits
      const rawPhone = String(body.phone || '');
      if (!/[\d\+\s\-]{5,20}/.test(rawPhone)) {
        return res.status(400).json({ error: 'Invalid phone number.' });
      }

      const doc = {
        name:        sanitize(body.name),
        phone:       sanitize(body.phone),
        nationality: sanitize(body.nationality),
        service:     sanitize(body.service),
        dateFrom:    sanitize(body.dateFrom),
        dateTo:      sanitize(body.dateTo),
        adults:      sanitize(body.adults),
        destination: sanitize(body.destination),
        notes:       sanitize(body.notes),
        lang:        sanitize(body.lang),
        ip:          ip,
        createdAt:   new Date().toISOString(),
      };

      await collection.insertOne(doc);
      return res.status(201).json({ success: true });
    }

    // ── GET: Fetch all inquiries (admin only) ───────────────────────────────
    if (req.method === 'GET') {
      // Rate limit: max 20 admin requests per IP per 5 minutes
      if (rateLimit(ip + ':get', 20, 5 * 60 * 1000)) {
        return res.status(429).json({ error: 'Too many requests. Please wait 5 minutes.' });
      }

      // Brute force check
      const bruteCheck = checkBruteForce(ip);
      if (bruteCheck.blocked) {
        return res.status(429).json({
          error: `Too many failed login attempts. Try again in ${bruteCheck.remaining} minute(s).`
        });
      }

      const auth = req.headers['authorization'] || '';
      const storedPass = (ADMIN_PASSWORD || '').trim();

      if (!storedPass || auth !== `Bearer ${storedPass}`) {
        recordFailedLogin(ip);
        // Intentional delay to slow down brute force
        await new Promise(r => setTimeout(r, 1000));
        return res.status(401).json({ error: 'Unauthorized' });
      }

      // Successful login — reset failed attempts
      resetLoginAttempts(ip);

      const inquiries = await collection
        .find({})
        .sort({ createdAt: -1 })
        .toArray();

      return res.status(200).json(inquiries);
    }

    return res.status(405).json({ error: 'Method Not Allowed' });

  } catch (err) {
    console.error('[API Error]', err.message);
    cachedClient = null;
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
