import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Language, data, initialResume, useLanguage } from './lib';
import { Icon, Search } from './components';
import { About, Contact, Experience, Home, Missing, Projects, Skills } from './pages';
import './styles.css';

const DocumentCenter=lazy(()=>import('./documents').then(module=>({default:module.DocumentCenter})));
const JobMatch=lazy(()=>import('./ai').then(module=>({default:module.JobMatch})));
const Copilot=lazy(()=>import('./ai').then(module=>({default:module.Copilot})));
const sections=[
  ['','首页','Home'],['experience','经历','Experience'],['projects','项目','Projects'],['skills','技能','Skills'],
  ['ai-match','岗位匹配','AI Match'],['about','关于我','About'],['contact','联系','Contact'],
];
const legacy={
  'top':'#/','main':'#/','about':'#/','experience':'#/experience','projects':'#/projects',
  'skills':'#/skills','skills-list':'#/skills','education':'#/about?tab=education','personal':'#/about?tab=beyond',
  'leadership':'#/about?tab=achievements','leadership-list':'#/about?tab=achievements','resources':'#/contact',
};
function getRoute(hash){
  if(!hash)return {section:'',id:'',params:new URLSearchParams()};
  if(!hash.startsWith('#/')){
    if(hash==='#downloads'||hash==='#downloads-list')return {...getRoute('#/contact'),resume:true,redirect:'#/contact'};
    const key=hash.slice(1);
    const base=key.replace(/-(details|quality)$/,'');
    const target=legacy[key]??(data.projects.some(p=>p.id===base)?'#/projects/'+base+(key.endsWith('-quality')?'?tab=evidence':''):null);
    return target?{...getRoute(target),redirect:target}:{section:'404',id:'',params:new URLSearchParams()};
  }
  const [pathname,query]=hash.slice(2).split('?');
  const [section='',id='',extra]=pathname.replace(/\/$/,'').split('/');
  return {section:extra?'404':section,id,params:new URLSearchParams(query)};
}
function initialLanguage(){
  const query=new URLSearchParams(location.search).get('lang');
  if(['zh','en'].includes(query))return query;
  try{const saved=localStorage.getItem('resume-v2-lang');if(['zh','en'].includes(saved))return saved;}catch{}
  return navigator.language?.startsWith('zh')?'zh':'en';
}
function Header({section,setLang,openResume,openSearch}) {
  const {lang,t}=useLanguage();
  const [menu,setMenu]=useState(false);
  useEffect(()=>setMenu(false),[section]);
  return <header className="header"><div className="header-inner">
    <a className="identity" href="#/" aria-label={t('褚俊杰的简历网站','Junjie Chu résumé home')}><span className="monogram" aria-hidden="true">JC</span><span>Junjie Chu</span></a>
    <nav id="main-nav" className={menu?'open':''} aria-label={t('主导航','Main navigation')} onKeyDown={event=>{if(event.key==='Escape'){setMenu(false);document.getElementById('menu-toggle').focus()}}}>{sections.map(([key,zh,en])=><a key={key} aria-current={section===key?'page':undefined} href={`#/${key}`} onClick={()=>setMenu(false)}>{t(zh,en)}</a>)}</nav>
    <div className="header-actions"><button className="icon-button" onClick={openSearch} title={t('搜索','Search')} aria-label={t('搜索','Search')}><Icon name="search" size={19}/></button>
      <button className="language-button" onClick={()=>setLang(lang==='zh'?'en':'zh')} aria-label={lang==='zh'?'Switch to English':'切换到中文'}>{lang==='zh'?'EN':'中文'}</button>
      <button className="button primary header-resume" onClick={()=>openResume(initialResume)}><Icon name="file" size={17}/>{t('简历','Résumé')}</button>
      <button id="menu-toggle" className="icon-button menu-toggle" aria-label={t('导航菜单','Navigation menu')} aria-expanded={menu} aria-controls="main-nav" onClick={()=>setMenu(!menu)}><Icon name={menu?'close':'menu'}/></button>
    </div>
  </div></header>;
}
function Welcome(){
  const {t}=useLanguage();
  const [visible,setVisible]=useState(()=>{
    if(location.hash&&location.hash!=='#/')return false;
    if(matchMedia('(prefers-reduced-motion: reduce)').matches)return false;
    try{return !sessionStorage.getItem('resume-v2-welcome')}catch{return false}
  });
  useEffect(()=>{
    if(!visible)return;
    sessionStorage.setItem('resume-v2-welcome','1');
    const timer=setTimeout(()=>setVisible(false),1350);
    return ()=>clearTimeout(timer);
  },[visible]);
  return visible&&<aside className="welcome"><h2>{t('欢迎访问褚俊杰的简历网站','Welcome to Junjie Chu’s résumé website')}</h2><p>{t('感谢您的来访，期待未来有机会与您交流、合作。','Thank you for visiting. I look forward to connecting and collaborating with you.')}</p><button className="plain" onClick={()=>setVisible(false)}>{t('跳过','Skip')}</button></aside>;
}
function App(){
  const [lang,setLang]=useState(initialLanguage);
  const [hash,setHash]=useState(location.hash);
  const [document,setDocument]=useState(()=>getRoute(location.hash).resume?{role:initialResume}:null);
  const [search,setSearch]=useState(false);
  const [chat,setChat]=useState(false);
  const [aboutMatch,setAboutMatch]=useState(false);
  const [match,setMatch]=useState(null);
  const main=useRef(null);
  const route=getRoute(hash);
  const openResume=(role,language)=>setDocument({role,language});
  useEffect(()=>{
    function update(){setHash(location.hash)}
    window.addEventListener('hashchange',update);
    return ()=>window.removeEventListener('hashchange',update);
  },[]);
  useEffect(()=>{
    if(route.redirect){
      history.replaceState(null,'',route.redirect);
      setHash(route.redirect);
      if(route.resume)openResume(initialResume);
    }
  },[route.redirect]);
  useEffect(()=>{
    window.scrollTo(0,0);
    if(hash)main.current?.focus({preventScroll:true});
  },[route.section,route.id]);
  useEffect(()=>{
    window.document.documentElement.lang=lang==='zh'?'zh-CN':'en';
    const title=sections.find(([key])=>key===route.section)?.[lang==='zh'?1:2];
    window.document.title=(route.section&&title?title+' | ':'')+(lang==='zh'?'褚俊杰的简历网站 | Junjie Chu':'Junjie Chu | Resume & Portfolio');
  },[lang,route.section]);
  function changeLanguage(value){
    setLang(value);
    try{localStorage.setItem('resume-v2-lang',value)}catch{}
    const next=new URL(location.href);
    next.searchParams.set('lang',value);
    history.replaceState(null,'',next);
  }
  function navigate(target,push=true){
    if(push)location.hash=target.slice(1);
    else{history.replaceState(null,'',target);setHash(target);}
  }
  const {section,id,params}=route;
  const props={id,params,navigate};
  const routes={
    '':<Home openResume={openResume}/>,experience:<Experience {...props}/>,projects:<Projects {...props}/>,
    skills:<Skills {...props}/>,about:<About {...props} openDocument={value=>setDocument({document:value})}/>,contact:<Contact/>,
    'ai-match':<JobMatch result={match} setResult={setMatch} openResume={openResume} askMatch={()=>{setAboutMatch(true);setChat(true)}}/>,
  };
  const label=(zh,en)=>lang==='zh'?zh:en;
  return <Language.Provider value={lang}>
    <a className="skip" href="#main" onClick={event=>{event.preventDefault();main.current.focus()}}>{label('跳至正文','Skip to content')}</a>
    <Header section={section} setLang={changeLanguage} openResume={openResume} openSearch={()=>setSearch(true)}/>
    <main ref={main} tabIndex={-1} id="main" className={`main ${section==='contact'?'main-contact':''}`}>
      <div className="page-enter" key={section+'/'+id}><Suspense fallback={<p role="status">{label('正在载入…','Loading…')}</p>}>
        {id&&!['experience','projects'].includes(section)?<Missing/>:Object.hasOwn(routes,section)?routes[section]:<Missing/>}
      </Suspense></div>
    </main>
    <footer><span>© Junjie Chu</span><a href="#/contact">{label('联系方式','Contact')}</a></footer>
    <Welcome/>
    <Suspense fallback={null}><Copilot open={chat} setOpen={setChat} match={match} aboutMatch={aboutMatch} onNavigate={navigate}/></Suspense>
    {search&&<Search close={()=>setSearch(false)}/>}
    {document&&<Suspense fallback={<div className="load-overlay" role="status">{label('正在加载简历…','Loading résumé…')}</div>}><DocumentCenter selection={document} close={()=>setDocument(null)}/></Suspense>}
  </Language.Provider>;
}
createRoot(document.getElementById('root')).render(<App/>);
