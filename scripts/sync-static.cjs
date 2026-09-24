// Optional authoring helper; the published site requires no Node dependencies.
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch(process.env.RESUME_BROWSER
    ? { executablePath: process.env.RESUME_BROWSER, headless: true }
    : { channel: 'msedge', headless: true });
  try {
    const page = await browser.newPage();
    const filename = path.resolve(__dirname, '..', 'index.html');
    await page.goto(pathToFileURL(filename).href);
    await page.evaluate(() => setLang('zh'));
    await page.evaluate(() => {
      document.documentElement.removeAttribute('style');
      document.getElementById('reading-progress')?.remove();
      document.querySelectorAll('.is-active').forEach(el => el.classList.remove('is-active'));
      document.querySelectorAll('[aria-current]').forEach(el => el.removeAttribute('aria-current'));
    });
    fs.writeFileSync(filename, (await page.content()).replace(/[ \t]+$/gm, ''), 'utf8');
    console.log('Updated Chinese static content in index.html');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
