import { test, expect } from '@playwright/test';

test('all routes, language, old link, refresh and browser navigation',async({page})=>{
  await page.goto('./?lang=en');
  await expect(page.getByRole('heading',{name:'Hi, I’m Junjie Chu.'})).toBeVisible();
  for(const [name,heading] of [['Experience','Experience'],['Projects','Projects'],['Skills','Skills'],['AI Match','AI Job Match'],['About','About me'],['Contact','Let’s Create VALUE!']]){
    await page.getByRole('navigation',{name:'Main navigation'}).getByRole('link',{name,exact:true}).click();
    await expect(page.locator('h1')).toHaveText(heading);
  }
  await page.goBack();
  await expect(page.locator('h1')).toHaveText('About me');
  await page.goForward();
  await expect(page.locator('h1')).toHaveText('Let’s Create VALUE!');
  await page.goto('./?lang=en#scamwise-quality');
  await expect(page).toHaveURL(/#\/projects\/scamwise\?tab=evidence/);
  await page.reload();
  await expect(page.locator('h1')).toHaveText('ScamWise Campus');
  await page.getByRole('button',{name:'切换到中文'}).click();
  await expect(page.getByRole('tab',{name:'证据'})).toHaveAttribute('aria-selected','true');
  await page.goto('./?lang=en#/unknown');
  await expect(page.locator('h1')).toHaveText('404');
});

test('project filters, original gallery, and evidence tabs',async({page})=>{
  await page.goto('./?lang=en#/projects');
  await expect(page.locator('.project-tile')).toHaveCount(8);
  await page.getByRole('button',{name:'Data & Analytics'}).click();
  await expect(page.locator('.project-tile')).toHaveCount(2);
  await page.getByRole('button',{name:'All',exact:true}).click();
  await page.locator('.project-tile').first().click();
  await page.getByRole('button',{name:'Next image'}).click();
  await expect(page.locator('.gallery')).toContainText('2 /');
  await page.getByRole('button',{name:'View full size'}).click();
  await expect(page.getByRole('dialog').getByRole('link',{name:'Original'})).toBeVisible();
  await page.keyboard.press('Escape');
  await page.getByRole('tab',{name:'My work'}).click();
  await expect(page.getByRole('heading',{name:'Individual contribution'})).toBeVisible();
  await page.getByRole('tab',{name:'Evidence',exact:true}).click();
  await expect(page.locator('.evidence-list a').first()).toBeVisible();
  await page.getByRole('link',{name:'Next project'}).click();
  await expect(page.locator('h1')).toHaveText('ScamWise Campus');
});

test('search and skill drawer show relevant evidence',async({page})=>{
  await page.goto('./?lang=en');
  await page.getByRole('button',{name:'Search',exact:true}).click();
  const input=page.getByRole('searchbox');
  await input.fill('python');
  await expect(page.locator('.search-results a').first()).toBeVisible();
  await input.fill('a-technology-which-does-not-exist');
  await expect(page.getByText('No matching public information.')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await page.goto('./?lang=en#/skills');
  await page.getByRole('button',{name:/Python AI connectors/}).click();
  await expect(page.getByRole('dialog').getByRole('link',{name:'SG-Navi'})).toBeVisible();
  await page.getByLabel('Explore another skill').selectOption('kotlin');
  await expect(page.getByRole('dialog').getByRole('heading',{name:'Kotlin'})).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
});

test('original résumé renders and downloads, document formats follow existing files',async({page})=>{
  await page.goto('./?lang=zh');
  await page.locator('.header-resume').click();
  const dialog=page.getByRole('dialog');
  await expect(dialog.getByRole('button',{name:'软件开发工程师'})).toHaveAttribute('aria-pressed','true');
  await expect(dialog.locator('canvas')).toBeVisible({timeout:15000});
  const width=await dialog.locator('canvas').evaluate(el=>el.width);
  await dialog.getByRole('button',{name:'放大'}).click();
  await expect.poll(()=>dialog.locator('canvas').evaluate(el=>el.width)).toBeGreaterThan(width);
  const download=page.waitForEvent('download');
  await dialog.getByRole('link',{name:'下载 PDF'}).click();
  expect((await download).suggestedFilename()).toBe('software-development.pdf');
  await dialog.getByLabel('文件语言').selectOption('en');
  await expect(dialog.getByRole('link',{name:'下载 PDF'})).toHaveAttribute('href',/software-development-en\.pdf$/);
  await expect(dialog.getByRole('link',{name:'下载 Word'})).toHaveCount(0);
  await dialog.getByRole('button',{name:'标准个人简历'}).click();
  await expect(dialog.getByRole('link',{name:'下载 Word'})).toHaveAttribute('href',/general-en\.docx$/);
  await page.keyboard.press('Escape');
  await expect(page.locator('.header-resume')).toBeFocused();
});

test('mobile navigation, local PDF DOCX TXT extraction and unavailable AI',async({page})=>{
  await page.setViewportSize({width:320,height:740});
  await page.goto('./?lang=en');
  await page.getByRole('button',{name:'Navigation menu'}).click();
  await page.getByRole('navigation',{name:'Main navigation'}).getByRole('link',{name:'AI Match'}).click();
  await expect(page.locator('h1')).toHaveText('AI Job Match');
  const file=page.locator('input[type=file]');
  for(const path of ['assets/resumes/general-en.docx','assets/resumes/general-en.pdf']){
    await file.setInputFiles(path);
    await expect(page.locator('textarea')).toHaveValue(/Junjie|CHU/i,{timeout:15000});
    await page.locator('textarea').clear();
  }
  await file.setInputFiles({name:'sample.txt',mimeType:'text/plain',buffer:Buffer.from('Must use Python and SQL. Optional Kotlin.')});
  await expect(page.locator('textarea')).toHaveValue('Must use Python and SQL. Optional Kotlin.');
  await file.setInputFiles({name:'invalid.txt',mimeType:'text/plain',buffer:Buffer.from('')});
  await expect(page.getByText('The file exceeds the size or page limit.')).toBeVisible();
  await page.getByRole('button',{name:'Open Copilot'}).click();
  await expect(page.getByRole('dialog').getByRole('heading',{name:'Copilot'})).toBeVisible();
  await page.keyboard.press('Escape');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
