const fs = require('fs');

const html = fs.readFileSync('al_aziziya_turizm (9).html', 'utf8');

const headMatch = html.match(/<head>[\s\S]*?<\/head>/);
let head = headMatch ? headMatch[0] : '';
// Replace inline style with link to css
head = head.replace(/<style>[\s\S]*?<\/style>/, '<link rel="stylesheet" href="css/styles.css">');

const navMatch = html.match(/(<!-- NAV -->[\s\S]*?<\/nav>)/);
const nav = navMatch ? navMatch[0] : '';

const mobMenuMatch = html.match(/(<!-- MOBILE MENU -->[\s\S]*?<\/div>)/);
const mobMenu = mobMenuMatch ? mobMenuMatch[0] : '';

const ldrMatch = html.match(/(<!-- LOADER -->[\s\S]*?<\/div>)/);
const ldr = ldrMatch ? ldrMatch[0] : '';

const homeMatch = html.match(/(<!-- ==================== HOME PAGE ==================== -->[\s\S]*?<!-- end page-home -->)/);
let home = homeMatch ? homeMatch[0] : '';

const inqMatch = html.match(/(<!-- ==================== INQUIRY PAGE ==================== -->[\s\S]*?<!-- end page-inquiry -->)/);
let inquiry = inqMatch ? inqMatch[0] : '';

const floatMatch = html.match(/(<a class="wa-float"[\s\S]*?<\/a>)/);
const float = floatMatch ? floatMatch[0] : '';

// Scripts
const scripts = `
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"></script>
<script src="js/main.js"></script>
`;

// Build index.html
const indexHtml = `<!DOCTYPE html>
<html lang="en">
${head}
<body>
${ldr}
${nav}
${mobMenu}
${home}
${float}
${scripts}
</body>
</html>`;

// Build inquiry.html
let inquiryHtmlStr = `<!DOCTYPE html>
<html lang="en">
${head}
<body>
${ldr}
${nav}
${mobMenu}
${inquiry}
${float}
${scripts}
</body>
</html>`;

// In inquiry.html, we should make the page active
inquiryHtmlStr = inquiryHtmlStr.replace('id="page-inquiry" class="page"', 'id="page-inquiry" class="page active"');
// In index.html, remove 'display:none' for page
indexHtmlStr = indexHtml.replace('id="page-home" class="page active"', 'id="page-home" class="page active"');

fs.writeFileSync('index.html', indexHtmlStr);
fs.writeFileSync('inquiry.html', inquiryHtmlStr);

console.log('Successfully generated index.html and inquiry.html');
