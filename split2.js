const fs = require('fs');

const html = fs.readFileSync('original_backup.html', 'utf8');

const headMatch = html.match(/<head>[\s\S]*?<\/head>/);
const head = headMatch ? headMatch[0] : '';

const ldrMatch = html.match(/(<!-- LOADER -->[\s\S]*?<div class="ldr-txt">.*?<\/div>\s*<\/div>)/);
const ldr = ldrMatch ? ldrMatch[0] : '';

// Update Nav
let navMatch = html.match(/(<!-- NAV -->[\s\S]*?<\/nav>)/);
let nav = navMatch ? navMatch[0] : '';
nav = nav.replace(/<ul>\s*/, `<ul>\n    <li><button class="na tkey" onclick="window.location.href='index.html'" data-key="nav_home">Home</button></li>\n    `);
nav = nav.replace(/onclick="showHome\(\);scrollTo\('services'\)"/g, `onclick="window.location.href='services.html'"`);
nav = nav.replace(/onclick="showHome\(\);scrollTo\('fleet'\)"/g, `onclick="window.location.href='fleet.html'"`);
nav = nav.replace(/onclick="showHome\(\);scrollTo\('destinations'\)"/g, `onclick="window.location.href='destinations.html'"`);
nav = nav.replace(/onclick="showHome\(\);scrollTo\('why'\)"/g, `onclick="window.location.href='about.html'"`);
nav = nav.replace(/onclick="showHome\(\);scrollTo\('tursab-sec'\)"/g, `onclick="window.location.href='license.html'"`);
nav = nav.replace(/onclick="showHome\(\)"/g, `onclick="window.location.href='index.html'"`);

// Update Mobile Menu
let mobMenuMatch = html.match(/(<!-- MOBILE MENU -->[\s\S]*?<\/div>\s*<\/div>)/);
let mobMenu = mobMenuMatch ? mobMenuMatch[0] : '';
mobMenu = mobMenu.replace(/<div id="mob-menu">\s*/, `<div id="mob-menu">\n  <button class="mob-link tkey" onclick="window.location.href='index.html'" data-key="nav_home">Home</button>\n  `);
mobMenu = mobMenu.replace(/onclick="closeMobNav\(\);showHome\(\);scrollToSec\('services'\)"/g, `onclick="window.location.href='services.html'"`);
mobMenu = mobMenu.replace(/onclick="closeMobNav\(\);showHome\(\);scrollToSec\('fleet'\)"/g, `onclick="window.location.href='fleet.html'"`);
mobMenu = mobMenu.replace(/onclick="closeMobNav\(\);showHome\(\);scrollToSec\('destinations'\)"/g, `onclick="window.location.href='destinations.html'"`);
mobMenu = mobMenu.replace(/onclick="closeMobNav\(\);showHome\(\);scrollToSec\('why'\)"/g, `onclick="window.location.href='about.html'"`);
mobMenu = mobMenu.replace(/onclick="closeMobNav\(\);showHome\(\);scrollToSec\('tursab-sec'\)"/g, `onclick="window.location.href='license.html'"`);

const floatMatch = html.match(/(<a class="wa-float"[\s\S]*?<\/a>)/);
const floatBtn = floatMatch ? floatMatch[0] : '';

const footerMatch = html.match(/(<footer id="footer">[\s\S]*?<\/footer>)/);
const footer = footerMatch ? footerMatch[0] : '';

const scriptsMatch = html.match(/(<script[\s\S]*?<\/script>\s*<script[\s\S]*?<\/script>\s*<script[\s\S]*?<\/script>)/);
const scripts = scriptsMatch ? scriptsMatch[0] : `
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"></script>
<script src="js/main.js"></script>
`;

// Regex extraction logic
function getSec(id) {
  const r = new RegExp(`(<section id="${id}"[\\s\\S]*?)(?=<section|<footer|<a class="wa-float"|<!-- end page-home -->)`);
  const m = html.match(r);
  return m ? m[1] : '';
}

const hero = getSec('hero');
const services = getSec('services');
const fleet = getSec('fleet');
const destinations = getSec('destinations');
const why = getSec('why');
const clients = getSec('clients');
const contact = getSec('contact-sec');
const license = getSec('tursab-sec');

const buildPage = (id, content) => {
  const page = `<!DOCTYPE html>
<html lang="en">
${head}
<body>
${ldr}
${nav}
${mobMenu}
<div id="page-${id}" class="page active" style="padding-top:80px;">
${content}
${footer}
</div>
${floatBtn}
${scripts}
</body>
</html>`;
  fs.writeFileSync(`${id}.html`, page);
};

// Also for index (hero), we shouldn't add padding top because hero assumes absolute top nav
const buildHome = () => {
  const page = `<!DOCTYPE html>
<html lang="en">
${head}
<body>
${ldr}
${nav}
${mobMenu}
<div id="page-home" class="page active">
${hero}
${services}
${fleet}
${destinations}
${why}
${clients}
${contact}
${license}
${footer}
</div>
${floatBtn}
${scripts}
</body>
</html>`;
  fs.writeFileSync(`index.html`, page);
};

buildHome();
buildPage('services', services);
buildPage('fleet', fleet);
buildPage('destinations', destinations);
buildPage('about', why + clients + contact);
buildPage('license', license);

// Update inquiry.html with new nav and mobMenu
let inqHtml = fs.readFileSync('inquiry.html', 'utf8');
inqHtml = inqHtml.replace(/<!-- NAV -->[\s\S]*?<\/nav>/, nav);
inqHtml = inqHtml.replace(/<!-- MOBILE MENU -->[\s\S]*?<\/div>\s*<\/div>/, mobMenu);
// We also need to fix back to home buttons on inquiry
inqHtml = inqHtml.replace(/onclick="showHome\(\)"/g, `onclick="window.location.href='index.html'"`);
fs.writeFileSync('inquiry.html', inqHtml);

console.log('Successfully generated all individual pages!');
