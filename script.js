/* Rendering is progressive enhancement: index.html also contains the Chinese content. */
const UI = {
  skip:['跳至正文','Skip to content'], location:['新加坡','Singapore'], moreContact:['更多联系方式','More contact details'],
  sideNote:['软件开发 · 数据与 AI · 项目协作','Software · Data & AI · Collaboration'],
  heroEyebrow:['个人作品与经历 / 2026','PROJECTS & EXPERIENCE / 2026'], viewProjects:['浏览项目 ↓','Explore projects ↓'], contactMe:['邮件联系 ↗','Get in touch ↗'],
  projects:['精选项目','Selected projects'], projectsIntro:['从目标到实现，关注我的具体贡献与验证方式。','The problem, my contribution and how the work was validated.'],
  experience:['实习经历','Experience'], education:['教育与能力','Education & capabilities'], skills:['技术与方法','Tools & methods'], leadership:['校园贡献与荣誉','Mentoring & recognition'],
  contactTitle:['进一步交流','Get in touch'], contactIntro:['欢迎就项目、实习与工作机会联系我。','Open to conversations about projects, internships and graduate opportunities.'],
  print:['打印 / 保存通用简历','Print / Save general résumé'], github:['查看 GitHub ↗','Explore GitHub ↗'], roleResumes:['按岗位查看简历 · 中文 Word','Role-specific CVs · Chinese Word files'], backTop:['回到顶部 ↑','Back to top ↑'],
  problem:['项目目标','The problem'], contribution:['我的贡献','My contribution'], decision:['关键决策','Key decisions'], validation:['验证与结果','Validation & results'], details:['展开方法与验证','Methods & validation'], code:['代码仓库 ↗','Source code ↗'], original:['查看原图','View original'], case:['查看项目 →','View project →'], lesson:['复盘与后续改进','Reflection & next steps']
};
let lang='zh';
const t = value => value?.[lang] ?? value?.zh ?? '';
const ui = key => UI[key][lang==='en'?1:0];
const escapeHTML = value => String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tx = value => escapeHTML(t(value));
const $ = id => document.getElementById(id);

function renderProjects(){
  $('featured-list').innerHTML=DATA.featured.map((id,i)=>{
    const p=DATA.projects.find(p=>p.id===id);
    return `<a class="feature-card" href="#${p.id}"><span class="feature-top"><span>0${i+1}</span><span aria-hidden="true">↗</span></span><span class="feature-category">${tx(p.category)}</span><strong>${tx(p.title)}</strong><span class="feature-result">${tx(p.result)}</span></a>`;
  }).join('');
  $('projects-list').innerHTML=DATA.projects.map((p,i)=>`<article class="project" id="${p.id}" aria-labelledby="${p.id}-title">
    <div class="project-top"><p class="eyebrow">${tx(p.category)}</p><span class="project-date">${tx(p.meta)}</span></div>
    <h3 id="${p.id}-title">${tx(p.title)}</h3><p class="project-role">${tx(p.role)}</p>
    <p class="project-result">${tx(p.result)}</p>
    <dl class="case-summary"><div><dt>${ui('problem')}</dt><dd>${tx(p.problem)}</dd></div><div><dt>${ui('contribution')}</dt><dd>${tx(p.contribution)}</dd></div></dl>
    ${p.screenshots?`<div class="project-gallery">${p.screenshots.map(shot=>`<figure><a href="assets/scamwise/${shot.file}.jpg" target="_blank" rel="noopener" aria-label="${tx(shot)} — ${ui('original')}"><img src="assets/scamwise/${shot.file}.jpg" alt="ScamWise Campus — ${tx(shot)}" loading="lazy" decoding="async" width="474" height="1001"></a><figcaption>${tx(shot)}</figcaption></figure>`).join('')}</div>`:''}
    ${p.evidence?`<div class="evidence-gallery">${p.evidence.map(shot=>`<figure><a href="${escapeHTML(shot.src)}" target="_blank" rel="noopener" aria-label="${tx(shot.caption)} — ${ui('original')}"><img src="${escapeHTML(shot.src)}" alt="${tx(shot.caption)}" loading="lazy" decoding="async" width="${shot.width}" height="${shot.height}"></a><figcaption>${tx(shot.caption)}<span>${tx(shot.source)}</span></figcaption></figure>`).join('')}</div>`:''}
    ${p.boundary?`<p class="project-boundary">${tx(p.boundary)}</p>`:''}
    <div class="project-links">${(p.links||[]).map(link=>`<a class="text-link" href="${escapeHTML(link.url)}" target="_blank" rel="noopener">${t(link.label)==='GitHub'?ui('code'):tx(link.label)+' ↗'}</a>`).join('')}</div>
    <details class="case-details" id="${p.id}-details"><summary>${ui('details')}</summary><div class="detail-body"><h4>${ui('decision')}</h4><p>${tx(p.decision)}</p><h4 id="${p.id}-quality">${ui('validation')}</h4><p>${tx(p.validation)}</p>${p.reflection?`<h4>${ui('lesson')}</h4><p>${tx(p.reflection)}</p>`:''}<p class="stack">${p.stack.map(escapeHTML).join(' · ')}</p></div></details>
  </article>`).join('');
}
function renderTimeline(id,items){
  $(id).innerHTML=items.map(p=>`<article class="timeline-item"><p class="timeline-date">${tx(p.date)}</p><div><h3>${tx(p.title)}</h3><p class="timeline-org">${tx(p.org)}</p>${p.bullets.length?`<ul>${p.bullets.map(b=>`<li>${tx(b)}</li>`).join('')}</ul>`:''}</div></article>`).join('');
}
function render(){
  document.documentElement.lang=lang==='en'?'en':'zh-CN';
  document.body.classList.toggle('lang-en',lang==='en');
  document.querySelectorAll('[data-ui]').forEach(el=>el.textContent=ui(el.dataset.ui));
  document.querySelectorAll('[data-nav]').forEach(el=>el.textContent=t(DATA.nav[el.dataset.nav]));
  $('name').textContent=lang==='en'?'Junjie Chu':'褚俊杰';
  $('role-text').textContent=t(DATA.role); $('degree-text').textContent=t(DATA.degree);
  $('hero-title').textContent=t(DATA.hero); $('summary-text').textContent=t(DATA.summary); $('availability-text').textContent=t(DATA.availability);
  $('lang-toggle').setAttribute('aria-label',lang==='zh'?'Switch to English':'切换为中文');
  $('lang-toggle').setAttribute('aria-pressed',String(lang==='en'));
  $('side-nav').setAttribute('aria-label',lang==='zh'?'页面导航':'Page navigation');
  $('featured-list').setAttribute('aria-label',lang==='zh'?'代表项目':'Featured projects');
  document.title=lang==='zh'?'褚俊杰 Junjie Chu — 项目与经历':'Junjie Chu — Projects & Experience';
  document.querySelector('meta[name="description"]').content=t(DATA.summary);
  renderProjects(); renderTimeline('experience-list',DATA.experience); renderTimeline('education-list',DATA.education);
  $('skills-list').innerHTML=DATA.skills.map(p=>`<div class="skill-group"><h4>${tx(p.label)}</h4><p>${p.items.map(escapeHTML).join(' · ')}</p></div>`).join('');
  $('leadership-list').innerHTML=DATA.leadership.map(p=>`<article class="lead-item"><h4>${tx(p.title)}</h4><p>${tx(p.body)}</p></article>`).join('');
  $('downloads-list').innerHTML=DATA.resumes.map(p=>`<a href="assets/resumes/${p.file}.docx" download="褚俊杰_${p.zh}.docx"><span>${tx(p)}</span><small>DOCX ↓</small></a>`).join('');
  $('footer-text').textContent=t(DATA.footer);
  document.dispatchEvent(new Event('portfolio:render'));
}
function setLang(next){
  const openIds=[...document.querySelectorAll('.case-details[open]')].map(el=>el.id);
  lang=next==='en'?'en':'zh';
  try{localStorage.setItem('site-lang',lang)}catch{}
  const url=new URL(location.href); url.searchParams.set('lang',lang);
  try{history.replaceState(null,'',url)}catch{}
  render(); openIds.forEach(id=>$(id).open=true); revealHash(false); updateNavigation();
}
function revealHash(scroll=true){
  let id; try{id=decodeURIComponent(location.hash.slice(1))}catch{return}
  // Legacy section links remain valid after reorganising the page.
  const aliases={skills:'skills-list',leadership:'leadership-list'};
  const target=$(aliases[id]||id); if(!target)return;
  const detail=target.closest('details'); if(detail)detail.open=true;
  if(scroll)requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:'instant'}));
}
function updateNavigation(){
  const links=[...document.querySelectorAll('#side-nav a')];
  let active=links[0];
  for(const link of links){if($(link.hash.slice(1)).getBoundingClientRect().top<=160)active=link}
  if(window.scrollY+innerHeight>=document.documentElement.scrollHeight-4)active=links.at(-1);
  for(const link of links){if(link===active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')}
}
let pending=false;
window.addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(()=>{updateNavigation();pending=false})}},{passive:true});
window.addEventListener('resize',updateNavigation);
window.addEventListener('hashchange',()=>revealHash());
$('lang-toggle').addEventListener('click',()=>setLang(lang==='zh'?'en':'zh'));
$('print-button').addEventListener('click',()=>window.print());
let saved;try{saved=localStorage.getItem('site-lang')}catch{}
const query=new URLSearchParams(location.search).get('lang');
lang=(query==='zh'||query==='en')?query:(saved==='en'?'en':'zh');
render(); revealHash(); updateNavigation();
