/* Rendering is progressive enhancement: index.html also contains the Chinese content. */
const UI = {
  skip:['跳至正文','Skip to content'], moreContact:['更多联系方式','More contact details'],
  profileKicker:['软件开发 · 数据分析 · 项目协作','Software Development · Data Analysis · Project Collaboration'], highlights:['精选项目','Featured projects'],
  heroEyebrow:['个人简介 / 2027 届','PROFESSIONAL PROFILE / CLASS OF 2027'], viewCapstone:['查看毕业项目','View capstone'], primaryDownload:['下载个人简历','Download résumé'],
  graduatePreview:['毕业后预览 · 模拟 2027 年 2 月','Graduation preview · February 2027 scenario'], exitPreview:['返回公开页','Return to public view'],
  personal:['About me','About me'], guardian:['守护者','Defender'],
  projects:['作品集','Portfolio'],
  experience:['工作经历','Work experience'], viewDetails:['查看详情','View details'], hideDetails:['收起详情','Hide details'],
  education:['教育与能力','Education & capabilities'], skills:['技术与方法','Tools & methods'], leadership:['证书','Certificates'],
  contactTitle:['联系方式','Contact details'], roleResumes:['简历下载','Résumé downloads'], resumePreview:['预览','Preview'],
  resumeLanguage:['简历语言','Résumé language'], downloadPdf:['下载 PDF','Download PDF'], downloadWord:['下载 Word','Download Word'], closeDialog:['关闭弹窗','Close dialog'],
  zoomIn:['放大','Zoom in'], zoomOut:['缩小','Zoom out'],
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
        <span class="project-role">${tx(p.role)}</span>
        <span class="project-result">${tx(p.result)}</span>
        <span class="project-toggle" aria-hidden="true"><span class="project-toggle-show">${ui('viewDetails')}</span><span class="project-toggle-hide">${ui('hideDetails')}</span></span>
      </summary>
      <div class="project-body" data-project="${p.id}">
    ${projectLinks(p.links?.filter(link=>link.kind==='demo'),'project-demos','button')}
    <dl class="case-summary"><div><dt>${ui('problem')}</dt><dd>${tx(p.problem)}</dd></div><div><dt>${ui('contribution')}</dt><dd>${tx(p.contribution)}</dd></div></dl>
    ${p.bullets?.length?`<div class="project-delivery"><h4>${ui('delivery')}</h4><ul>${p.bullets.map(b=>`<li>${tx(b)}</li>`).join('')}</ul></div>`:''}
    <p class="project-stack">${p.stack.map(escapeHTML).join(' · ')}</p>
    ${p.screenshots?`<div class="project-gallery">${p.screenshots.map(shot=>`<figure><a href="assets/scamwise/${shot.file}.jpg" target="_blank" rel="noopener" aria-label="${tx(shot)} — ${ui('original')}"><img src="assets/scamwise/${shot.file}.jpg" alt="ScamWise Campus — ${tx(shot)}" loading="lazy" decoding="async" width="474" height="1001"></a><figcaption>${tx(shot)}</figcaption></figure>`).join('')}</div>`:''}
    ${p.evidence?`<div class="evidence-gallery${p.evidence.length===3?' evidence-gallery-three':''}">${p.evidence.map(shot=>`<figure class="${shot.width<shot.height?'evidence-portrait':'evidence-landscape'}"><a href="${escapeHTML(shot.src)}" target="_blank" rel="noopener" aria-label="${tx(shot.caption)} — ${ui('original')}"><img src="${escapeHTML(shot.src)}" alt="${tx(shot.caption)}" loading="lazy" decoding="async" width="${shot.width}" height="${shot.height}"></a><figcaption>${tx(shot.caption)}<span>${tx(shot.source)}</span></figcaption></figure>`).join('')}</div>`:''}
    ${p.boundary?`<p class="project-boundary">${tx(p.boundary)}</p>`:''}
    ${projectLinks(p.links?.filter(link=>link.kind!=='demo'),'project-links','text-link')}
    <div class="detail-body"><h4>${ui('decision')}</h4><p>${tx(p.decision)}</p><h4 id="${p.id}-quality">${ui('validation')}</h4><p>${tx(p.validation)}</p>${p.reflection?`<h4>${ui('lesson')}</h4><p>${tx(p.reflection)}</p>`:''}</div>
      </div>
    </details>
  </article>`).join('');
}
function projectLinks(links,groupClass,linkClass){
  if(!links?.length)return '';
  return `<div class="${groupClass}">${links.map(link=>`<a class="${linkClass}" href="${escapeHTML(link.url)}" target="_blank" rel="noopener">${t(link.label)==='GitHub'?ui('code'):tx(link.label)+' ↗'}</a>`).join('')}</div>`;
}
function timelineBullets(bullets){
  return bullets.length?`<ul>${bullets.map(b=>`<li>${tx(b)}</li>`).join('')}</ul>`:'';
}
function renderExperience(){
  $('experience-list').innerHTML=DATA.experience.map((p,i)=>`<article class="work-card">
    <details class="work-details" id="experience-list-${i+1}-details">
      <summary class="work-summary" aria-labelledby="work-${i}-title">
        <span class="work-date">${tx(p.date)}</span>
        <h3 id="work-${i}-title">${tx(p.title)}</h3>
        <span class="work-org">${tx(p.org)}</span>
        <span class="work-result">${tx(p.summary)}</span>
        <span class="card-action" aria-hidden="true"><span class="work-show">${ui('viewDetails')} ›</span><span class="work-hide">${ui('hideDetails')}</span></span>
      </summary>
      <div class="work-body">${timelineBullets(p.bullets)}</div>
    </details>
  </article>`).join('');
}
const certificatePdf=certificate=>`assets/certificates/${certificate.file}.pdf`;
function renderCertificates(){
  $('leadership-list').innerHTML=DATA.leadership.map(p=>`<article class="lead-item">
    <a class="certificate-link" href="${certificatePdf(p)}" data-certificate="${p.file}" target="_blank" rel="noopener">
      <h4>${tx(p.title)}</h4>
      <span class="certificate-issuer">${tx(p.issuer)}</span>
      <span class="card-action">${ui('resumePreview')} <span aria-hidden="true">›</span></span>
    </a>
  </article>`).join('');
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
  $('personal-projects').innerHTML=DATA.personal.projects.map(p=>`<article class="personal-project">
    <h3>${tx(p.title)}</h3><p>${tx(p.body)}</p>
    <a class="text-link" href="${escapeHTML(p.url)}" target="_blank" rel="noopener" aria-label="${tx(p.label)} · ${tx(p.title)}">${tx(p.label)} <span aria-hidden="true">↗</span></a>
  </article>`).join('');
  $('lang-toggle').setAttribute('aria-label',lang==='zh'?'Switch to English':'切换为中文');
  $('lang-toggle').setAttribute('aria-pressed',String(lang==='en'));
  $('side-nav').setAttribute('aria-label',lang==='zh'?'页面导航':'Page navigation');
  $('mobile-chapters').setAttribute('aria-label',lang==='zh'?'章节导航':'Section navigation');
  $('featured-list').setAttribute('aria-label',ui('highlights'));
  document.title=lang==='zh'?'褚俊杰 Junjie Chu — 项目与经历':'Junjie Chu — Projects & Experience';
  document.querySelector('meta[name="description"]').content=t(DATA.summary);
  renderProjects(); renderExperience();
  $('education-list').innerHTML=DATA.education.map(p=>{
    const complete=graduated&&p.current;
    const date=complete?DATA.graduation.completedDate:p.date;
    const programme=complete?DATA.graduation.completedProgramme:p.org;
    return `<article class="timeline-item"><p class="timeline-date">${tx(date)}</p><div><h3>${tx(p.title)}</h3><p class="timeline-org">${tx(programme)}</p>${timelineBullets(p.bullets)}</div></article>`;
  }).join('');
  $('skills-list').innerHTML=DATA.skills.map(p=>`<div class="skill-group"><h4>${tx(p.label)}</h4><p>${p.items.map(escapeHTML).join(' · ')}</p></div>`).join('');
  renderCertificates(); renderDownloads(); renderContacts();
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
function openDialog(title,label,content,trigger,{pdf=false}={}){
  if(!supportsDialog)return false;
  dialog.classList.toggle('pdf-dialog',pdf);
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
  const body=summary.nextElementSibling.cloneNode(true);
  const date=document.createElement('p');
  date.className='work-date';
  date.textContent=summary.querySelector('.work-date').textContent;
  body.prepend(date);
  return openDialog(summary.querySelector('h3').textContent,summary.querySelector('.work-org').textContent,body,summary);
}
function openPdfPreview(title,label,trigger,description){
  const preview=document.createElement('div');
  preview.className='pdf-preview';
  preview.tabIndex=0;
  preview.setAttribute('role','region');
  preview.setAttribute('aria-label',`${ui('resumePreview')} · ${title}`);
  const page=document.createElement('div');
  page.className='pdf-page';
  const image=document.createElement('img');
  image.decoding='async';
  image.hidden=true;
  const unavailable=document.createElement('p');
  unavailable.hidden=true;
  unavailable.textContent=ui('previewUnavailable');
  page.append(image,unavailable);
  preview.append(page);
  const content=document.createDocumentFragment();
  if(description){
    const detail=document.createElement('p');
    detail.className='certificate-description';
    detail.textContent=description;
    content.append(detail);
  }
  content.append(preview);
  if(!openDialog(title,label,content,trigger,{pdf:true}))return null;
  const zoom=document.createElement('div');
  zoom.className='preview-zoom';
  const scales=[1,1.25,1.5,2,2.5,3,4,5,6];
  let level=0;
  function zoomButton(direction,key){
    const button=document.createElement('button');
    button.type='button';
    button.title=ui(key);
    button.setAttribute('aria-label',ui(key));
    button.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.2 15.2 4.8 4.8M7.5 10.5h6${direction===1?'m-3-3v6':''}"/></svg>`;
    button.addEventListener('click',()=>{
      if(!button.disabled)changeZoom(level+direction);
    });
    return button;
  }
  const zoomOut=zoomButton(-1,'zoomOut');
  const zoomIn=zoomButton(1,'zoomIn');
  zoom.append(zoomOut,zoomIn);
  function updateZoomButtons(){
    zoomOut.disabled=image.hidden||level===0;
    zoomIn.disabled=image.hidden||level===scales.length-1;
  }
  function changeZoom(next){
    const viewport=preview.getBoundingClientRect();
    const before=image.getBoundingClientRect();
    const x=(viewport.left+preview.clientWidth/2-before.left)/before.width;
    const y=(viewport.top+preview.clientHeight/2-before.top)/before.height;
    level=next;
    preview.style.setProperty('--page-scale',scales[level]);
    const after=image.getBoundingClientRect();
    preview.scrollBy(after.left+after.width*x-viewport.left-preview.clientWidth/2,after.top+after.height*y-viewport.top-preview.clientHeight/2);
    updateZoomButtons();
  }
  image.addEventListener('load',()=>{
    preview.style.setProperty('--page-ratio',image.naturalWidth/image.naturalHeight);
    image.hidden=false;
    updateZoomButtons();
  });
  image.addEventListener('error',()=>{
    image.hidden=true;
    unavailable.hidden=false;
    updateZoomButtons();
  });
  const pdf=document.createElement('a');
  pdf.className='button';
  pdf.textContent=ui('downloadPdf');
  dialogActions.append(pdf,zoom);
  dialogActions.hidden=false;
  function update(imageUrl,imageLabel,pdfUrl,filename){
    image.hidden=true;
    unavailable.hidden=true;
    level=0;
    preview.style.removeProperty('--page-scale');
    preview.scrollTo(0,0);
    updateZoomButtons();
    image.alt=imageLabel;
    image.src=imageUrl;
    pdf.href=pdfUrl;
    pdf.download=filename;
  }
  return {update,pdf,zoom};
}
function showCertificate(certificate,trigger){
  const title=t(certificate.title);
  const preview=openPdfPreview(title,ui('leadership'),trigger,t(certificate.body));
  if(!preview)return false;
  preview.update(`assets/certificate-previews/${certificate.file}.jpg`,title,certificatePdf(certificate),`${certificate.file}.pdf`);
  return true;
}
function showResume(resume,trigger){
  const preview=openPdfPreview(t(resume),ui('roleResumes'),trigger);
  if(!preview)return false;
  const language=document.createElement('select');
  language.setAttribute('aria-label',ui('resumeLanguage'));
  language.append(new Option('中文','zh'),new Option('English','en'));
  language.value=lang;
  const word=document.createElement('a');
  word.className='text-link';
  word.textContent=ui('downloadWord');
  word.href=`assets/resumes/${resume.file}.docx`;
  word.download=resumeFilename(resume,'zh','docx');
  function updatePreview(){
    const selected=language.value;
    preview.update(`assets/resume-previews/${resumeStem(resume,selected)}.jpg`,`${ui('resumePreview')} · ${t(resume)} · ${language.selectedOptions[0].textContent}`,resumePdf(resume,selected),resumeFilename(resume,selected));
    word.hidden=selected!=='zh';
  }
  language.addEventListener('change',updatePreview);
  preview.pdf.before(language);
  preview.zoom.before(word);
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
  dialog.classList.remove('pdf-dialog');
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
    const certificateLink=event.target.closest?.('[data-certificate]');
    const certificate=certificateLink&&DATA.leadership.find(item=>item.file===certificateLink.dataset.certificate);
    if(certificate&&showCertificate(certificate,certificateLink)){event.preventDefault();return}
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
