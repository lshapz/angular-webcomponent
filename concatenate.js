const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/angular-webcomponents-demo/runtime.js',
'./dist/angular-webcomponents-demo/polyfills.js',
'./dist/angular-webcomponents-demo/scripts.js',
'./dist/angular-webcomponents-demo/main.js',
]
await fs.ensureDir('elements')
await concat(files, 'elements/bar-chart.js');
await fs.copyFile('./dist/angular-webcomponents-demo/styles.css', 'elements/styles.css')
// await fs.copy('./dist/angular-webcomponents-demo/assets/', 'elements/assets/' )
})()
