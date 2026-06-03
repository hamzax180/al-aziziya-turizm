/* ─────────────────────────────────────────────────────────────────────────
   admin.js  ·  Al Aziziya Turizm – Admin Dashboard Logic
   ───────────────────────────────────────────────────────────────────────── */

const API_URL = '/api/inquiries';

let allInquiries = [];

/* ── DOM refs ── */
const loginScreen    = document.getElementById('login-screen');
const dashboard      = document.getElementById('dashboard');
const loginForm      = document.getElementById('login-form');
const passInput      = document.getElementById('admin-pass');
const loginErr       = document.getElementById('login-error');
const logoutBtn      = document.getElementById('logout-btn');
const refreshBtn     = document.getElementById('refresh-btn');
const searchInput    = document.getElementById('search-input');
const filterService  = document.getElementById('filter-service');
const filterNat      = document.getElementById('filter-nat');
const tableBody      = document.getElementById('inq-tbody');
const totalCount     = document.getElementById('total-count');
const todayCount     = document.getElementById('today-count');
const topService     = document.getElementById('top-service');
const topNat         = document.getElementById('top-nat');
const loadingRow     = document.getElementById('loading-row');
const emptyRow       = document.getElementById('empty-row');

let adminToken = sessionStorage.getItem('adminToken') || '';

/* ── Boot ── */
if (adminToken) {
  showDashboard();
  loadData();
}

/* ── Login ── */
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const pass = passInput.value.trim();
  if (!pass) return;

  loginErr.textContent = '';
  loginErr.style.display = 'none';

  const btn = loginForm.querySelector('button[type="submit"]');
  btn.textContent = 'Verifying…';
  btn.disabled = true;

  try {
    const res = await fetch(API_URL, {
      headers: { Authorization: `Bearer ${pass}` }
    });
    if (res.ok) {
      adminToken = pass;
      sessionStorage.setItem('adminToken', pass);
      showDashboard();
      loadData();
    } else {
      loginErr.textContent = '❌ Wrong password. Please try again.';
      loginErr.style.display = 'block';
      passInput.value = '';
      passInput.focus();
    }
  } catch {
    loginErr.textContent = '⚠️ Cannot reach server. Check your connection.';
    loginErr.style.display = 'block';
  } finally {
    btn.textContent = 'Login';
    btn.disabled = false;
  }
});

/* ── Logout ── */
logoutBtn.addEventListener('click', () => {
  adminToken = '';
  sessionStorage.removeItem('adminToken');
  dashboard.style.display = 'none';
  loginScreen.style.display = 'flex';
  passInput.value = '';
});

/* ── Refresh ── */
refreshBtn.addEventListener('click', loadData);

/* ── Search & Filter ── */
searchInput.addEventListener('input', renderTable);
filterService.addEventListener('change', renderTable);
filterNat.addEventListener('change', renderTable);

/* ── Show dashboard panel ── */
function showDashboard() {
  loginScreen.style.display = 'none';
  dashboard.style.display = 'block';
}

/* ── Load data from API ── */
async function loadData() {
  tableBody.innerHTML = '';
  loadingRow.style.display = '';
  emptyRow.style.display = 'none';
  refreshBtn.disabled = true;

  try {
    const res = await fetch(API_URL, {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    if (res.status === 401) {
      adminToken = '';
      sessionStorage.removeItem('adminToken');
      dashboard.style.display = 'none';
      loginScreen.style.display = 'flex';
      return;
    }
    allInquiries = await res.json();
    populateFilters();
    renderStats();
    renderTable();
  } catch {
    loadingRow.cells[0].textContent = '⚠️ Failed to load data. Check your connection.';
  } finally {
    loadingRow.style.display = 'none';
    refreshBtn.disabled = false;
  }
}

/* ── Populate filter dropdowns ── */
function populateFilters() {
  const services = [...new Set(allInquiries.map(i => i.service).filter(Boolean))];
  const nats     = [...new Set(allInquiries.map(i => i.nationality).filter(Boolean))];

  filterService.innerHTML = '<option value="">All Services</option>';
  services.forEach(s => {
    filterService.innerHTML += `<option value="${s}">${s}</option>`;
  });

  filterNat.innerHTML = '<option value="">All Nationalities</option>';
  nats.forEach(n => {
    filterNat.innerHTML += `<option value="${n}">${n}</option>`;
  });
}

/* ── Render stats cards ── */
function renderStats() {
  const today = new Date().toISOString().slice(0, 10);
  const todayInqs = allInquiries.filter(i => i.createdAt?.slice(0, 10) === today);

  totalCount.textContent = allInquiries.length;
  todayCount.textContent = todayInqs.length;

  // Most popular service
  const svcMap = {};
  allInquiries.forEach(i => { if (i.service) svcMap[i.service] = (svcMap[i.service] || 0) + 1; });
  const topSvc = Object.entries(svcMap).sort((a,b) => b[1]-a[1])[0];
  topService.textContent = topSvc ? topSvc[0] : '—';

  // Most popular nationality
  const natMap = {};
  allInquiries.forEach(i => { if (i.nationality) natMap[i.nationality] = (natMap[i.nationality] || 0) + 1; });
  const topN = Object.entries(natMap).sort((a,b) => b[1]-a[1])[0];
  topNat.textContent = topN ? topN[0] : '—';
}

/* ── Render data table ── */
function renderTable() {
  const query   = searchInput.value.toLowerCase().trim();
  const svcFilt = filterService.value;
  const natFilt = filterNat.value;

  const filtered = allInquiries.filter(i => {
    const matchSearch = !query ||
      (i.name || '').toLowerCase().includes(query) ||
      (i.phone || '').toLowerCase().includes(query) ||
      (i.nationality || '').toLowerCase().includes(query) ||
      (i.destination || '').toLowerCase().includes(query) ||
      (i.notes || '').toLowerCase().includes(query);

    const matchSvc = !svcFilt || i.service === svcFilt;
    const matchNat = !natFilt || i.nationality === natFilt;
    return matchSearch && matchSvc && matchNat;
  });

  tableBody.innerHTML = '';

  if (filtered.length === 0) {
    emptyRow.style.display = '';
    return;
  }
  emptyRow.style.display = 'none';

  filtered.forEach((inq, idx) => {
    const date = inq.createdAt ? new Date(inq.createdAt).toLocaleString('en-GB', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    }) : '—';

    const travel = [inq.dateFrom, inq.dateTo].filter(Boolean).join(' → ') || '—';
    const langBadge = { en: '🇬🇧', ar: '🇸🇦', tr: '🇹🇷' }[inq.lang] || '';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${filtered.length - idx}</td>
      <td><strong>${esc(inq.name)}</strong></td>
      <td><a href="tel:${esc(inq.phone)}" style="color:var(--b)">${esc(inq.phone)}</a></td>
      <td>${esc(inq.nationality)}</td>
      <td><span class="svc-badge">${esc(inq.service)}</span></td>
      <td>${esc(inq.destination) || '—'}</td>
      <td>${travel}</td>
      <td>${esc(inq.adults) || '—'}</td>
      <td class="notes-cell">${esc(inq.notes) || '—'}</td>
      <td>${langBadge} ${(inq.lang || '').toUpperCase()}</td>
      <td class="date-cell">${date}</td>
    `;
    tableBody.appendChild(tr);
  });
}

/* ── Escape HTML ── */
function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── CSV Export ── */
document.getElementById('export-btn').addEventListener('click', () => {
  if (!allInquiries.length) return;
  const headers = ['#','Name','Phone','Nationality','Service','Destination','Date From','Date To','Adults','Notes','Language','Submitted At'];
  const rows = allInquiries.map((i, idx) => {
    // Prefix phone with tab character so Excel forces it as text instead of scientific notation
    const phoneSafe = i.phone ? '\t' + i.phone : '';
    return [
      idx + 1, i.name, phoneSafe, i.nationality, i.service,
      i.destination, i.dateFrom, i.dateTo, i.adults,
      i.notes, i.lang, i.createdAt
    ].map(v => `"${(v || '').toString().replace(/"/g, '""')}"`);
  });

  // Prepend \uFEFF (Byte Order Mark) to force Excel to read the file as UTF-8
  const csv = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `inquiries_${new Date().toISOString().slice(0,10)}.csv`;
  link.click();
});
