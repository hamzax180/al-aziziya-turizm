const fs = require('fs');

// Get all translation keys from main.js
const mainJs = fs.readFileSync('js/main.js', 'utf8');
const enMatch = mainJs.match(/en:\s*\{([\s\S]*?)\},\s*ar:/);
const enKeys = enMatch ? [...enMatch[1].matchAll(/(\w+):/g)].map(m => m[1]) : [];

console.log('=== TRANSLATION KEYS IN main.js ===');
console.log('Total EN keys:', enKeys.length);
console.log(enKeys.join(', '));

// Scan HTML files for data-key usage
const files = ['index.html','services.html','fleet.html','destinations.html','about.html','license.html','inquiry.html'];
const allUsedKeys = new Set();

files.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  const matches = [...html.matchAll(/data-key="([^"]+)"/g)].map(m => m[1]);
  matches.forEach(k => allUsedKeys.add(k));
});

console.log('\n=== DATA-KEY ATTRIBUTES USED IN HTML ===');
console.log('Total unique keys used:', allUsedKeys.size);
console.log([...allUsedKeys].join(', '));

// Keys used in HTML but missing from EN translations
console.log('\n=== KEYS IN HTML BUT MISSING FROM TRANSLATIONS ===');
const missing = [...allUsedKeys].filter(k => !enKeys.includes(k));
console.log(missing.length ? missing.join(', ') : 'None — all good!');

// Keys in translations but never used in HTML
console.log('\n=== KEYS IN TRANSLATIONS BUT NOT USED IN HTML ===');
const unused = enKeys.filter(k => !allUsedKeys.has(k));
console.log(unused.length ? unused.join(', ') : 'None — all used!');

// Per-page breakdown of data-key usage
console.log('\n=== PER-PAGE KEY USAGE ===');
files.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  const keys = [...html.matchAll(/data-key="([^"]+)"/g)].map(m => m[1]);
  console.log(f + ': ' + keys.join(', '));
});
