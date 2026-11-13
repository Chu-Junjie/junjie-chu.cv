/* Rendering is progressive enhancement: index.html also contains the Chinese content. */
const UI = {
  skip:['跳至正文','Skip to content'], moreContact:['更多联系方式','More contact details'],
  profileKicker:['软件开发 · 数据分析 · 项目协作','Software Development · Data Analysis · Project Collaboration'], highlights:['代表成果','Selected work'],
  heroEyebrow:['个人简介 / 2027 届','PROFESSIONAL PROFILE / CLASS OF 2027'], viewCapstone:['查看毕业项目','View capstone'], primaryDownload:['下载个人简历','Download résumé'],
  graduatePreview:['毕业后预览 · 模拟 2027 年 2 月','Graduation preview · February 2027 scenario'], exitPreview:['返回公开页','Return to public view'],
  personal:['生活','Life'], guardian:['守护者','Defender'], growth:['我在练习的事','What I am working on'],
  projects:['作品集','Portfolio'], projectsIntro:['按时间倒序排列。点击项目查看我的贡献、验证结果和演示截图。','Most recent projects first. Select a project to see my contribution, validation results and demo screenshots.'],
  experience:['工作经历','Work experience'], moreContributions:['查看其余 {count} 项贡献','Show {count} more contributions'], hideContributions:['收起其余贡献','Hide additional contributions'],
  education:['教育与能力','Education & capabilities'], skills:['技术与方法','Tools & methods'], leadership:['证书','Certificates'],
  contactTitle:['联系方式','Contact details'], roleResumes:['简历下载','Résumé downloads'], resumePreview:['预览','Preview'],
  resumeLanguage:['简历语言','Résumé language'], downloadPdf:['下载 PDF','Download PDF'], downloadWord:['下载 Word','Download Word'], closeDialog:['关闭弹窗','Close dialog'],
  zoomIn:['放大','Zoom in'], fitWidth:['适合宽度','Fit width'],
  previewUnavailable:['预览暂不可用，请下载 PDF 查看。','Preview unavailable. Download the PDF to view it.'], backTop:['回到顶部 ↑','Back to top ↑'],
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
  const expandLabel=lang==='en'?'View details':'查看详情';
  const collapseLabel=lang==='en'?'Hide details':'收起详情';
  $('project-directory').innerHTML=projects.map(p=>`<a href="#${p.id}">${tx(p.title)} <span aria-hidden="true">↘</span></a>`).join('');
  $('project-directory').setAttribute('aria-label',ui('directory'));
  $('mobile-project-links').innerHTML=projects.map(p=>`<a href="#${p.id}">${tx(p.title)} <span aria-hidden="true">↘</span></a>`).join('');
  $('mobile-project-links').setAttribute('aria-label',ui('directory'));
  $('featured-list').innerHTML=DATA.featured.map(id=>{
    const p=DATA.projects.find(p=>p.id===id);
    return `<a class="feature-card${p.kind==='capstone'?' feature-card--capstone':''}" href="#${p.id}"><span class="feature-copy"><strong>${tx(p.title)}</strong><span class="feature-result">${tx(p.result)}</span></span><span class="feature-arrow" aria-hidden="true">›</span></a>`;
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
      <div class="project-body" data-project="${p.id}">
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
const resumeStem=(resume,language)=>resume.file+(language==='en'?'-en':'');
const resumePdf=(resume,language)=>`assets/resumes/${resumeStem(resume,language)}.pdf`;
const resumeFilename=(resume,language,extension='pdf')=>language==='en'
  ? `Junjie_Chu_${resume.en.replaceAll(' ','_')}_EN.${extension}`
  : `褚俊杰_${resume.zh}.${extension}`;
function renderDownloads(){
  $('downloads-list').innerHTML=DATA.resumes.map(p=>`<article class="resume-option">
    <h4>${tx(p)}</h4>
    <a class="resume-preview" href="${resumePdf(p,lang)}" data-resume="${p.file}" target="_blank" rel="noopener" aria-label="${ui('resumePreview')} · ${tx(p)}">${ui('resumePreview')} <span aria-hidden="true">↗</span></a>
    <div class="resume-fallback">
      <a href="${resumePdf(p,'zh')}" download="${escapeHTML(resumeFilename(p,'zh'))}">中文 PDF</a>
      <a href="${resumePdf(p,'en')}" download="${escapeHTML(resumeFilename(p,'en'))}">English PDF</a>
      <a href="assets/resumes/${p.file}.docx" download="${escapeHTML(resumeFilename(p,'zh','docx'))}">Word</a>
    </div>
  </article>`).join('');
  const software=DATA.resumes.find(p=>p.file==='software-development');
  document.querySelectorAll('[data-ui="primaryDownload"]').forEach(link=>{
    link.setAttribute('href',resumePdf(software,lang));
    link.download=resumeFilename(software,lang);
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
    document.querySelector('.contact-email').textContent=t(mail);
  }
  const phone=DATA.contact.find(p=>p.key==='phone');
  if(phone){
    $('contact-phone').href=phone.href;
    $('contact-phone').textContent='+86 '+t(phone);
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
  document.dispatchEvent(new Event('portfolio:render'));
}
function setLang(next){
  if(dialog.open)dialog.close();
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
const dialog=$('detail-dialog');
const dialogContent=dialog.querySelector('.dialog-content');
const dialogActions=dialog.querySelector('.dialog-actions');
const dialogClose=dialog.querySelector('.dialog-close');
const supportsDialog=typeof dialog.showModal==='function';
let dialogTrigger=null;
document.documentElement.classList.toggle('dialog-ready',supportsDialog);
function openDialog(title,label,content,trigger){
  if(!supportsDialog)return false;
  $('dialog-title').textContent=title;
  $('dialog-label').textContent=label;
  dialogClose.setAttribute('aria-label',ui('closeDialog'));
  dialogActions.replaceChildren();
  dialogActions.hidden=true;
  dialogContent.replaceChildren(content);
  dialogTrigger=trigger;
  if(!dialog.open)dialog.showModal();
  document.documentElement.classList.add('has-dialog');
  dialogClose.focus({preventScroll:true});
  dialogContent.scrollTo(0,0);
  return true;
}
function showProject(project,trigger,target){
  const body=project.querySelector('.project-body').cloneNode(true);
  body.querySelectorAll('[id]').forEach(el=>el.id='dialog-'+el.id);
  body.querySelectorAll('img[loading="lazy"]').forEach(image=>image.loading='eager');
  const title=project.querySelector('h3').textContent;
  const label=[project.querySelector('.project-team').textContent,project.querySelector('.project-date').textContent].join(' · ');
  if(!openDialog(title,label,body,trigger))return false;
  if(target?.id&&target!==project){
    const heading=$('dialog-'+target.id);
    if(heading)dialogContent.scrollTop=heading.getBoundingClientRect().top-dialogContent.getBoundingClientRect().top-16;
  }
  return true;
}
function showWork(summary){
  const item=summary.closest('.timeline-item');
  const body=document.createElement('div');
  body.className='timeline-item dialog-work';
  const contributions=item.querySelector('div > ul').cloneNode(true);
  contributions.append(...[...summary.parentElement.querySelectorAll('li')].map(el=>el.cloneNode(true)));
  body.append(contributions);
  return openDialog(item.querySelector('h3').textContent,item.querySelector('.timeline-org').textContent,body,summary);
}
function showResume(resume,trigger){
  const preview=document.createElement('div');
  preview.className='pdf-preview';
  const image=document.createElement('img');
  image.decoding='async';
  const unavailable=document.createElement('p');
  unavailable.hidden=true;
  unavailable.textContent=ui('previewUnavailable');
  image.addEventListener('error',()=>{image.hidden=true;unavailable.hidden=false});
  preview.append(image,unavailable);
  if(!openDialog(t(resume),ui('roleResumes'),preview,trigger))return false;
  const language=document.createElement('select');
  language.setAttribute('aria-label',ui('resumeLanguage'));
  language.append(new Option('中文','zh'),new Option('English','en'));
  language.value=lang;
  const pdf=document.createElement('a');
  pdf.className='button';
  pdf.textContent=ui('downloadPdf');
  const word=document.createElement('a');
  word.className='text-link';
  word.textContent=ui('downloadWord');
  word.href=`assets/resumes/${resume.file}.docx`;
  word.download=resumeFilename(resume,'zh','docx');
  const zoom=document.createElement('button');
  zoom.type='button';
  zoom.className='text-link preview-zoom';
  zoom.textContent=ui('zoomIn');
  zoom.addEventListener('click',()=>{
    const enlarged=preview.classList.toggle('is-enlarged');
    zoom.textContent=ui(enlarged?'fitWidth':'zoomIn');
    if(!enlarged)dialogContent.scrollLeft=0;
  });
  image.addEventListener('error',()=>{zoom.disabled=true});
  function updatePreview(){
    const selected=language.value;
    image.hidden=false;
    unavailable.hidden=true;
    zoom.disabled=false;
    image.alt=`${ui('resumePreview')} · ${t(resume)} · ${language.selectedOptions[0].textContent}`;
    image.src=`assets/resume-previews/${resumeStem(resume,selected)}.jpg`;
    pdf.href=resumePdf(resume,selected);
    pdf.download=resumeFilename(resume,selected);
    word.hidden=selected!=='zh';
    dialogContent.scrollTo(0,0);
  }
  language.addEventListener('change',updatePreview);
  dialogActions.append(language,pdf,word,zoom);
  dialogActions.hidden=false;
  updatePreview();
  return true;
}
dialogClose.addEventListener('click',()=>dialog.close());
let backdropPointer=false;
dialog.addEventListener('pointerdown',event=>{backdropPointer=event.target===dialog});
dialog.addEventListener('click',event=>{
  if(backdropPointer&&event.target===dialog)dialog.close();
  backdropPointer=false;
});
dialog.addEventListener('close',()=>{
  if(dialog.open)return;
  document.documentElement.classList.remove('has-dialog');
  dialogContent.replaceChildren();
  dialogActions.replaceChildren();
  dialogActions.hidden=true;
  dialogTrigger?.focus({preventScroll:true});
  dialogTrigger=null;
});
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
  const project=target.closest('.project');
  if(project&&supportsDialog){
    project.scrollIntoView({block:'start',behavior:'instant'});
    showProject(project,project.querySelector('summary'),target);
    updateNavigation();
    return;
  }
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
  if(!supportsDialog||!destination.target.closest('.project'))openFragmentDetails(destination.target);
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
window.addEventListener('hashchange',()=>{
  if(dialog.open)dialog.close();
  revealHash();
});
const projectMenu=$('mobile-project-menu');
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&projectMenu.open){event.preventDefault();projectMenu.open=false;projectMenu.querySelector('summary').focus()}
});
document.addEventListener('pointerdown',event=>{if(projectMenu.open&&!projectMenu.contains(event.target))projectMenu.open=false});
document.addEventListener('focusin',event=>{if(projectMenu.open&&!projectMenu.contains(event.target))projectMenu.open=false});
document.addEventListener('click',event=>{
  if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  if(supportsDialog){
    const preview=event.target.closest?.('[data-resume]');
    const resume=preview&&DATA.resumes.find(item=>item.file===preview.dataset.resume);
    if(resume&&showResume(resume,preview)){event.preventDefault();return}
    const projectSummary=event.target.closest?.('.project-summary');
    if(projectSummary&&showProject(projectSummary.closest('.project'),projectSummary)){event.preventDefault();return}
    const workSummary=event.target.closest?.('.work-details > summary');
    if(workSummary&&showWork(workSummary)){event.preventDefault();return}
  }
  const link=event.target.closest?.('a[href^="#"]');
  if(!link||link.hasAttribute('download')||(link.target&&link.target!=='_self'))return;
  const hash=link.hash;
  const destination=fragmentDestination(hash);if(!destination)return;
  const project=destination.target.closest('.project');
  if(supportsDialog&&project){
    event.preventDefault();
    cancelAnimationFrame(fragmentFrame);
    const fromMenu=projectMenu.contains(link);
    projectMenu.open=false;
    showProject(project,fromMenu?projectMenu.querySelector('summary'):link,destination.target);
    return;
  }
  // Changing the address with History avoids a second native fragment jump.
  try{if(hash!==location.hash)history.pushState(null,'',hash)}catch{return}
  event.preventDefault();
  cancelAnimationFrame(fragmentFrame);
  projectMenu.open=false;
  moveToFragment(destination,{smooth:!link.classList.contains('skip-link'),focus:true});
});
$('lang-toggle').addEventListener('click',()=>setLang(lang==='zh'?'en':'zh'));
let printStates=[];
window.addEventListener('beforeprint',()=>{printStates=[...document.querySelectorAll(disclosureSelector)].map(el=>[el,el.open]);printStates.forEach(([el])=>el.open=true)});
window.addEventListener('afterprint',()=>printStates.forEach(([el,open])=>el.open=open));
let saved;try{saved=localStorage.getItem('site-lang')}catch{}
const query=new URLSearchParams(location.search).get('lang');
lang=(query==='zh'||query==='en')?query:(saved==='en'?'en':'zh');
render(); revealHash(); updateNavigation();
