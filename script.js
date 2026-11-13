/* Rendering is progressive enhancement: index.html also contains the Chinese content. */
const UI = {
  skip:['跳至正文','Skip to content'], location:['新加坡','Singapore'], moreContact:['更多联系方式','More contact details'],
  sideNote:['软件开发 · 数据与 AI · 项目协作','Software · Data & AI · Collaboration'],
  heroEyebrow:['个人简介 / 2027 届','PROFESSIONAL PROFILE / CLASS OF 2027'], viewCapstone:['查看毕业项目 ↓','View capstone ↓'], primaryDownload:['下载个人简历','Download résumé'],
  graduatePreview:['毕业后预览 · 模拟 2027 年 2 月','Graduation preview · February 2027 scenario'], exitPreview:['返回公开页','Return to public view'],
  personal:['生活','Life'], guardian:['守护者','Defender'], growth:['我在练习的事','What I am working on'],
  projects:['作品集','Portfolio'], projectsIntro:['按时间倒序排列。展开项目，查看我的贡献、验证结果和演示截图。','Most recent projects first. Open a project to see my contribution, validation results and demo screenshots.'],
  experience:['工作经历','Work experience'], moreContributions:['查看其余 {count} 项贡献','Show {count} more contributions'], hideContributions:['收起其余贡献','Hide additional contributions'],
  education:['教育与能力','Education & capabilities'], skills:['技术与方法','Tools & methods'], leadership:['证书','Certificates'],
  contactTitle:['进一步交流','Get in touch'], contactIntro:['欢迎就项目合作或工作机会联系我。','Open to conversations about projects and job opportunities.'],
  print:['打印详细网页','Print detailed webpage'], generalDownload:['下载标准个人简历 · PDF','Download standard résumé · PDF'], github:['查看 GitHub ↗','Explore GitHub ↗'], roleResumes:['简历下载 · 中文与英文','Download CVs · Chinese & English'], downloadIntro:['六个版本均提供中文 PDF、可编辑 Word 和对应英文 PDF。按投递方向选择，网页保留完整项目细节。','Each of the six versions has a Chinese PDF, an editable Chinese Word file and a corresponding English PDF. Choose a version for your application; the website retains the full project details.'], englishDownload:['英文版 ↓','English PDF ↓'], backTop:['回到顶部 ↑','Back to top ↑'],
  problem:['项目目标','The problem'], contribution:['我的贡献','My contribution'], delivery:['实现与交付','Implementation & delivery'], decision:['关键决策','Key decisions'], validation:['验证与结果','Validation & results'], details:['工程方法、验证与复盘','Methods, validation & reflection'], code:['代码仓库 ↗','Source code ↗'], original:['查看原图','View original'], case:['查看项目 →','View project →'], lesson:['复盘与后续改进','Reflection & next steps'], directory:['项目目录','Project directory']
};
const MOBILE_NAV = {about:['概览','Intro'],projects:['项目','Projects'],experience:['经历','Work'],education:['背景','Study'],personal:['生活','Life'],resources:['联系','Contact']};
let lang='zh';
const t = value => value?.[lang] ?? value?.zh ?? '';
const ui = key => UI[key][lang==='en'?1:0];
const escapeHTML = value => String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tx = value => escapeHTML(t(value));
const $ = id => document.getElementById(id);
const disclosureSelector='.project-details, .work-details';
const englishMonth=new Intl.DateTimeFormat('en',{month:'short',year:'numeric',timeZone:'UTC'});
const projectMonth=value=>lang==='zh'?value.replace('-','.'):englishMonth.format(new Date(value+'-01T00:00:00Z'));
const projectTeam=size=>size===1
  ? (lang==='zh'?'个人项目':'Solo project')
  : (lang==='zh'?`${size} 人团队项目`:`${size}-person team project`);

function renderProjects(){
  const projects=[...DATA.projects].sort((a,b)=>b.period[1].localeCompare(a.period[1])||b.period[0].localeCompare(a.period[0]));
  const expandLabel=lang==='en'?'Show details':'展开详情';
  const collapseLabel=lang==='en'?'Hide details':'收起详情';
  $('project-directory').innerHTML=projects.map(p=>`<a href="#${p.id}">${tx(p.title)} <span aria-hidden="true">↘</span></a>`).join('');
  $('project-directory').setAttribute('aria-label',ui('directory'));
  $('mobile-project-links').innerHTML=projects.map(p=>`<a href="#${p.id}">${tx(p.title)} <span aria-hidden="true">↘</span></a>`).join('');
  $('mobile-project-links').setAttribute('aria-label',ui('directory'));
  $('featured-list').innerHTML=DATA.featured.map((id,i)=>{
    const p=DATA.projects.find(p=>p.id===id);
    return `<a class="feature-card${p.kind==='capstone'?' feature-card--capstone':''}" href="#${p.id}"><span class="feature-top"><span>0${i+1}</span><span aria-hidden="true">↘</span></span><span class="feature-category">${tx(p.category)}</span><strong>${tx(p.title)}</strong><span class="feature-result">${tx(p.result)}</span></a>`;
  }).join('');
  $('projects-list').innerHTML=projects.map(p=>`<article class="project${p.kind==='capstone'?' project--capstone':''}" id="${p.id}" aria-labelledby="${p.id}-title">
    <details class="project-details" id="${p.id}-details">
      <summary class="project-summary" aria-labelledby="${p.id}-title">
        <span class="project-top"><span class="project-tags"><span class="eyebrow">${tx(p.category)}</span><span class="project-team">${projectTeam(p.teamSize)}</span></span><span class="project-date"><time datetime="${p.period[0]}">${projectMonth(p.period[0])}</time>–<time datetime="${p.period[1]}">${projectMonth(p.period[1])}</time></span></span>
        <h3 id="${p.id}-title">${tx(p.title)}</h3>
        <span class="project-toggle" aria-hidden="true"><span class="project-toggle-show">${expandLabel}</span><span class="project-toggle-hide">${collapseLabel}</span></span>
        <span class="project-role">${tx(p.role)}</span>
        <span class="project-result">${tx(p.result)}</span>
      </summary>
      <div class="project-body">
    <dl class="case-summary"><div><dt>${ui('problem')}</dt><dd>${tx(p.problem)}</dd></div><div><dt>${ui('contribution')}</dt><dd>${tx(p.contribution)}</dd></div></dl>
    ${p.bullets?.length?`<div class="project-delivery"><h4>${ui('delivery')}</h4><ul>${p.bullets.map(b=>`<li>${tx(b)}</li>`).join('')}</ul></div>`:''}
    <p class="project-stack">${p.stack.map(escapeHTML).join(' · ')}</p>
    ${p.screenshots?`<div class="project-gallery">${p.screenshots.map(shot=>`<figure><a href="assets/scamwise/${shot.file}.jpg" target="_blank" rel="noopener" aria-label="${tx(shot)} — ${ui('original')}"><img src="assets/scamwise/${shot.file}.jpg" alt="ScamWise Campus — ${tx(shot)}" loading="lazy" decoding="async" width="474" height="1001"></a><figcaption>${tx(shot)}</figcaption></figure>`).join('')}</div>`:''}
    ${p.evidence?`<div class="evidence-gallery${p.evidence.length===3?' evidence-gallery-three':''}">${p.evidence.map(shot=>`<figure class="${shot.width<shot.height?'evidence-portrait':'evidence-landscape'}"><a href="${escapeHTML(shot.src)}" target="_blank" rel="noopener" aria-label="${tx(shot.caption)} — ${ui('original')}"><img src="${escapeHTML(shot.src)}" alt="${tx(shot.caption)}" loading="lazy" decoding="async" width="${shot.width}" height="${shot.height}"></a><figcaption>${tx(shot.caption)}<span>${tx(shot.source)}</span></figcaption></figure>`).join('')}</div>`:''}
    ${p.boundary?`<p class="project-boundary">${tx(p.boundary)}</p>`:''}
    <div class="project-links">${(p.links||[]).map(link=>`<a class="text-link" href="${escapeHTML(link.url)}" target="_blank" rel="noopener">${t(link.label)==='GitHub'?ui('code'):tx(link.label)+' ↗'}</a>`).join('')}</div>
    <div class="detail-body"><h4>${ui('decision')}</h4><p>${tx(p.decision)}</p><h4 id="${p.id}-quality">${ui('validation')}</h4><p>${tx(p.validation)}</p>${p.reflection?`<h4>${ui('lesson')}</h4><p>${tx(p.reflection)}</p>`:''}</div>
      </div>
    </details>
  </article>`).join('');
}
function timelineBullets(bullets){
  return bullets.length?`<ul>${bullets.map(b=>`<li>${tx(b)}</li>`).join('')}</ul>`:'';
}
function renderTimeline(id,items){
  $(id).innerHTML=items.map((p,i)=>{
    const count=p.highlightCount??p.bullets.length;
    const more=p.bullets.slice(count);
    return `<article class="timeline-item"><p class="timeline-date">${tx(p.date)}</p><div><h3>${tx(p.title)}</h3><p class="timeline-org">${tx(p.org)}</p>${timelineBullets(p.bullets.slice(0,count))}${more.length?`<details class="work-details" id="${id}-${i+1}-details"><summary><span class="work-show">${ui('moreContributions').replace('{count}',more.length)}</span><span class="work-hide">${ui('hideContributions')}</span></summary>${timelineBullets(more)}</details>`:''}</div></article>`;
  }).join('');
}
function renderDownloads(){
  $('downloads-list').innerHTML=DATA.resumes.map(p=>{
    const name=`褚俊杰_${p.zh}`;
    const format=lang==='zh'?'中文 / English · 一页':'Chinese / English · One page';
    const chinese=lang==='zh'?'中文版':'Chinese version';
    const english=lang==='zh'?'英文版':'English version';
    return `<article class="resume-option"><h4>${tx(p)}</h4><p>${format}</p><div><a class="download-pdf" aria-label="${tx(p)} · ${chinese} PDF" href="assets/resumes/${escapeHTML(p.file)}.pdf" download="${escapeHTML(name)}.pdf">PDF ↓</a><a aria-label="${tx(p)} · ${chinese} Word" href="assets/resumes/${escapeHTML(p.file)}.docx" download="${escapeHTML(name)}.docx">Word ↓</a><a class="download-english" aria-label="${tx(p)} · ${english} PDF" href="assets/resumes/${escapeHTML(p.file)}-en.pdf" download="Junjie_Chu_${escapeHTML(p.file)}_EN.pdf">${ui('englishDownload')}</a></div></article>`;
  }).join('');
  const isEnglish=lang==='en';
  const primary=document.querySelector('[data-ui="primaryDownload"]');
  primary.setAttribute('href',`assets/resumes/software-development${isEnglish?'-en':''}.pdf`);
  primary.download=isEnglish?'Junjie_Chu_Software_Development_EN.pdf':'褚俊杰_软件开发工程师.pdf';
  document.querySelectorAll('[data-ui="generalDownload"]').forEach(a=>{
    a.href=`assets/resumes/${isEnglish?'general-en':'general'}.pdf`;
    a.download=isEnglish?'Junjie_Chu_Standard_Resume_EN.pdf':'褚俊杰_标准个人简历.pdf';
  });
}
function renderContacts(){
  if(!Array.isArray(DATA.contact))return;
  const contacts=DATA.contact.filter(p=>['phone','wechat','mail-alt'].includes(p.key));
  const details=document.querySelector('.more-contact');
  details.innerHTML=`<summary data-ui="moreContact">${ui('moreContact')}</summary>${contacts.map(p=>p.href?`<a href="${escapeHTML(p.href)}">${tx(p)}</a>`:`<p>${tx(p)}</p>`).join('')}`;
  const mail=DATA.contact.find(p=>p.key==='mail');
  if(mail){
    document.querySelectorAll('.primary-contact a[href^="mailto:"],.contact-email').forEach(a=>a.href=mail.href);
    document.querySelector('.contact-email').textContent=`${t(mail)} ↗`;
  }
}
function render(){
  const preview=new URLSearchParams(location.search).get('preview')==='graduate'&&!DATA.graduation.confirmed;
  const graduated=preview||DATA.graduation.confirmed;
  document.documentElement.lang=lang==='en'?'en':'zh-CN';
  document.body.classList.toggle('lang-en',lang==='en');
  document.querySelectorAll('[data-ui]').forEach(el=>el.textContent=ui(el.dataset.ui));
  document.querySelectorAll('[data-nav]').forEach(el=>el.textContent=t(DATA.nav[el.dataset.nav]));
  document.querySelectorAll('[data-mobile-nav]').forEach(el=>el.textContent=MOBILE_NAV[el.dataset.mobileNav][lang==='en'?1:0]);
  $('name').textContent=lang==='en'?'Junjie Chu':'褚俊杰';
  $('role-text').textContent=t(DATA.role); $('degree-text').textContent=t(graduated?DATA.graduation.completedDegree:DATA.degree);
  $('hero-title').textContent=t(DATA.hero); $('profile-lead').textContent=t(DATA.profileLead);
  $('summary-text').textContent=t(DATA.summary); $('profile-details').textContent=t(DATA.profileDetails);
  $('profile-focus').textContent=t(DATA.profileFocus);
  $('graduation-text').hidden=!graduated;
  $('graduation-text').textContent=graduated?t(DATA.graduation.completed):'';
  $('graduate-preview').hidden=!preview;
  const publicUrl=new URL(location.href);
  publicUrl.searchParams.delete('preview');
  $('exit-graduate-preview').setAttribute('href',(publicUrl.pathname.split('/').at(-1)||'./')+publicUrl.search+publicUrl.hash);
  $('personal-type').textContent=DATA.personal.mbti;
  $('personal-story').innerHTML=DATA.personal.paragraphs.map(p=>`<p>${tx(p)}</p>`).join('');
  $('personal-growth-text').textContent=t(DATA.personal.growth);
  $('lang-toggle').setAttribute('aria-label',lang==='zh'?'Switch to English':'切换为中文');
  $('lang-toggle').setAttribute('aria-pressed',String(lang==='en'));
  $('side-nav').setAttribute('aria-label',lang==='zh'?'页面导航':'Page navigation');
  $('mobile-chapters').setAttribute('aria-label',lang==='zh'?'章节导航':'Section navigation');
  $('featured-list').setAttribute('aria-label',lang==='zh'?'代表项目':'Featured projects');
  document.title=lang==='zh'?'褚俊杰 Junjie Chu — 项目与经历':'Junjie Chu — Projects & Experience';
  document.querySelector('meta[name="description"]').content=t(DATA.summary);
  renderProjects(); renderTimeline('experience-list',DATA.experience);
  renderTimeline('education-list',graduated?DATA.education.map(item=>item.current?{...item,date:DATA.graduation.completedDate,org:DATA.graduation.completedProgramme}:item):DATA.education);
  $('skills-list').innerHTML=DATA.skills.map(p=>`<div class="skill-group"><h4>${tx(p.label)}</h4><p>${p.items.map(escapeHTML).join(' · ')}</p></div>`).join('');
  $('leadership-list').innerHTML=DATA.leadership.map(p=>`<article class="lead-item"><h4>${tx(p.title)}</h4><p>${tx(p.body)}</p>${p.link?`<a class="text-link certificate-link" href="${escapeHTML(p.link.url)}" target="_blank" rel="noopener">${tx(p.link.label)} ↗</a>`:''}</article>`).join('');
  renderDownloads(); renderContacts();
  $('footer-text').textContent=t(DATA.footer);
  document.dispatchEvent(new Event('portfolio:render'));
}
function setLang(next){
  const guide=(parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)+1;
  const readingTarget=scrollY>guide?[...document.querySelectorAll('.section, .project, #downloads')]
    .filter(element=>element.getBoundingClientRect().top<=guide).at(-1):null;
  const rect=readingTarget?.getBoundingClientRect();
  const progress=rect?.height?Math.min(1,Math.max(0,(guide-rect.top)/rect.height)):0;
  const detailStates=[...document.querySelectorAll(disclosureSelector)].map(el=>[el.id,el.open]);
  lang=next==='en'?'en':'zh';
  try{localStorage.setItem('site-lang',lang)}catch{}
  const url=new URL(location.href); url.searchParams.set('lang',lang);
  try{history.replaceState(null,'',url)}catch{}
  render(); detailStates.forEach(([id,open])=>{if($(id))$(id).open=open});
  const translatedTarget=readingTarget&&$(readingTarget.id);
  if(translatedTarget){
    const translated=translatedTarget.getBoundingClientRect();
    window.scrollBy({top:translated.top+translated.height*progress-guide,behavior:'instant'});
  }
  updateNavigation();
}
const fragmentAliases=new Map([['skills','skills-list'],['leadership','leadership-list']]);
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
function fragmentDestination(hash){
  let id;try{id=decodeURIComponent(hash.slice(1))}catch{return null}
  if(!id)return null;
  const top=id==='top';
  const target=top?$('name'):$(fragmentAliases.get(id)||id);
  return target?{target,top}:null;
}
function focusDestination(target){
  if(!target.hasAttribute('tabindex')&&target.tabIndex<0){
    target.tabIndex=-1;
    target.addEventListener('blur',()=>target.removeAttribute('tabindex'),{once:true});
  }
  target.focus({preventScroll:true});
}
function openFragmentDetails(target){
  const detail=target.closest('details')||target.querySelector(':scope > .project-details');
  if(detail)detail.open=true;
  return detail;
}
function moveToFragment({target,top},{smooth=false,focus=false}={}){
  const behavior=smooth&&!reducedMotion.matches?'smooth':'instant';
  document.dispatchEvent(new CustomEvent('portfolio:navigate',{detail:{smooth:behavior==='smooth'}}));
  const detail=openFragmentDetails(target);
  if(focus)focusDestination(target.matches('.project, .project-details')?detail?.querySelector('summary')||target:target);
  if(top)window.scrollTo({top:0,behavior});
  else target.scrollIntoView({block:'start',behavior});
  updateNavigation();
}
let fragmentFrame=0;
function revealHash(scroll=true){
  const destination=fragmentDestination(location.hash);if(!destination)return;
  openFragmentDetails(destination.target);
  if(scroll){
    cancelAnimationFrame(fragmentFrame);
    fragmentFrame=requestAnimationFrame(()=>moveToFragment(destination));
  }
}
function updateNavigation(){
  const links=[...document.querySelectorAll('#side-nav a')];
  const threshold=innerWidth<=900?$('mobile-navigation').getBoundingClientRect().bottom+32:160;
  let active=links[0];
  for(const link of links){
    const destination=fragmentDestination(link.hash);
    if(destination&&destination.target.getBoundingClientRect().top<=threshold)active=link;
  }
  if(window.scrollY+innerHeight>=document.documentElement.scrollHeight-4)active=links.at(-1);
  for(const link of document.querySelectorAll('#side-nav a,#mobile-chapters a')){if(link.hash===active?.hash)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')}
}
let pending=false;
window.addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(()=>{updateNavigation();pending=false})}},{passive:true});
window.addEventListener('resize',()=>{updateNavigation();if(innerWidth>900)$('mobile-project-menu').open=false});
window.addEventListener('hashchange',()=>revealHash());
const projectMenu=$('mobile-project-menu');
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&projectMenu.open){event.preventDefault();projectMenu.open=false;projectMenu.querySelector('summary').focus()}
});
document.addEventListener('pointerdown',event=>{if(projectMenu.open&&!projectMenu.contains(event.target))projectMenu.open=false});
document.addEventListener('focusin',event=>{if(projectMenu.open&&!projectMenu.contains(event.target))projectMenu.open=false});
document.addEventListener('click',event=>{
  if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  const link=event.target.closest?.('a[href^="#"]');
  if(!link||link.hasAttribute('download')||(link.target&&link.target!=='_self'))return;
  const hash=link.hash;
  const destination=fragmentDestination(hash);if(!destination)return;
  // Changing the address with History avoids a second native fragment jump.
  try{if(hash!==location.hash)history.pushState(null,'',hash)}catch{return}
  event.preventDefault();
  cancelAnimationFrame(fragmentFrame);
  projectMenu.open=false;
  moveToFragment(destination,{smooth:!link.classList.contains('skip-link'),focus:true});
});
$('lang-toggle').addEventListener('click',()=>setLang(lang==='zh'?'en':'zh'));
$('print-button').addEventListener('click',()=>window.print());
let printStates=[];
window.addEventListener('beforeprint',()=>{printStates=[...document.querySelectorAll(disclosureSelector)].map(el=>[el,el.open]);printStates.forEach(([el])=>el.open=true)});
window.addEventListener('afterprint',()=>printStates.forEach(([el,open])=>el.open=open));
let saved;try{saved=localStorage.getItem('site-lang')}catch{}
const query=new URLSearchParams(location.search).get('lang');
lang=(query==='zh'||query==='en')?query:(saved==='en'?'en':'zh');
render(); revealHash(); updateNavigation();
