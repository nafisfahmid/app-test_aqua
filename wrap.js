// Wraps src/index.html (the published page body) into a full HTML document in www/index.html
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const body = fs.readFileSync(path.join(root, 'src', 'index.html'), 'utf8');
const head = `<!doctype html>
<html lang="bn"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>
</head><body>
`;
fs.mkdirSync(path.join(root, 'www'), { recursive: true });
fs.writeFileSync(path.join(root, 'www', 'index.html'), head + body + '\n</body></html>\n');
console.log('www/index.html written');
