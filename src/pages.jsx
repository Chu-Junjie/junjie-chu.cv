import { useState } from 'react';
import { asset, data, sortedProjects, initialResume, useLanguage } from './lib';
import { Evidence, Filter, Heading, Icon, Link, Modal, Tabs } from './components';

export function Home({openResume}) {
  const {t}=useLanguage();
  return <section className="hero">
    <div className="hero-copy">
      <p className="hero-label">{t('褚俊杰 · 软件开发与应用 AI','Junjie Chu · Software development & applied AI')}</p>
      <h1>Hi, I’m<br/>Junjie Chu.</h1>
      <p className="hero-degree">{t('2027 届 · 新加坡詹姆斯库克大学信息技术学士，预计 2027 年 2 月毕业。','Class of 2027 · Bachelor of Information Technology, James Cook University Singapore. Expected February 2027.')}</p>
      <p>{t('2026 年 7 月加入 Basilos，参与 Tyrion.ai 的 AI 开发实习。我对产品设计、软件开发、测试验证和新型交互感兴趣。','I joined Basilos in July 2026 as an AI engineering intern working on Tyrion.ai. I’m interested in product design, software development, testing and new ways for people to interact with technology.')}</p>
      <div className="actions hero-actions"><a className="button primary" href="#/projects">{t('查看项目','Explore projects')}<Icon name="arrow"/></a><a className="button" href="#/ai-match">{t('AI 岗位匹配','AI Job Match')}</a><button className="plain" onClick={()=>openResume(initialResume)}><Icon name="file"/>{t('简历','Résumé')}</button></div>
    </div>
    <figure className="hero-portrait"><div className="portrait-lines"/><img src={asset('assets/portrait-336.webp')} width="336" height="448" alt={t('褚俊杰的商务证件照','Business portrait of Junjie Chu')} fetchPriority="high"/></figure>
  </section>;
}

export function Experience({id,params,navigate}) {
  const {t}=useLanguage();
  if(!id)return <><Heading title={t('职业经历','Experience')}>{t('AI 开发、行业运营与质量管理。','AI development, industry operations and quality management.')}</Heading><div className="work-grid">
    {data.experience.map(work=><a key={work.id} className="card work-tile" href={work.url}>
      <div className={`employer-logo ${work.id}`}><img src={asset(work.logo)} alt={t(work.website.name)}/></div>
      <p className="muted">{t(work.industry)}</p><h2>{t(work.title)}</h2><p className="work-company">{t(work.org)}</p>
      <p>{t(work.date)}</p><p>{t(work.summary)}</p><span className="card-link">{t('查看经历','View experience')}<Icon name="arrow"/></span>
    </a>)}
  </div></>;
  const work=data.experience.find(item=>item.id===id);
  if(!work)return <Missing/>;
  const items=[['overview',t('概览','Overview')],['contributions',t('我的贡献','My contributions')],['results',t('成果与证据','Results & evidence')]];
  const tab=items.some(([key])=>key===params.get('tab'))?params.get('tab'):'overview';
  return <><a className="back" href="#/experience"><Icon name="left" size={16}/>{t('返回职业经历','Back to experience')}</a>
    <Heading title={t(work.title)}>{t(work.org)} · {t(work.date)}</Heading>
    <Tabs items={items} selected={tab} onSelect={value=>navigate(work.url+'?tab='+value,false)} label={t('经历详情','Experience details')}>
      <div className="prose panel">
        {tab==='overview'&&<><p>{t(work.summary)}</p><p>{t(work.industry)}</p><Link href={work.website.url}>{t('机构网站','Organisation website')}</Link></>}
        {tab==='contributions'&&<Bullet items={work.bullets}/>}
        {tab==='results'&&<><p>{t(work.summary)}</p><Bullet items={work.bullets.slice(0,work.id==='basilos'?3:2)}/><Link href={work.website.url}>{t('机构网站','Organisation website')}</Link></>}
      </div>
    </Tabs>
  </>;
}

const projectGroups=[['all','全部','All'],['ai','AI 与机器学习','AI & Machine Learning'],['software','软件开发','Software Development'],['data','数据与分析','Data & Analytics']];
const skillGroups=[...projectGroups.slice(0,3),['data','数据与云','Data & Cloud'],['tools','测试与工具','Testing & Tools']];
const Tech=({items})=><ul className="chips">{items.map(value=><li key={value}>{value}</li>)}</ul>;
function Bullet({items=[]}) {
  const {t}=useLanguage();
  return items.length>0&&<ul className="bullets">{items.map((item,i)=><li key={i}>{t(item)}</li>)}</ul>;
}
export function Projects({id,params,navigate}) {
  const {t}=useLanguage();
  const [filter,setFilter]=useState('all');
  if(!id)return <><Heading title={t('项目作品集','Projects')}>{t('从 Android 应用、跨学科产品原型，到机器学习和数据库分析。','Android development, cross-disciplinary product prototypes, machine learning and database analysis.')}</Heading>
    <Filter options={projectGroups.map(([key,zh,en])=>[key,t(zh,en)])} value={filter} setValue={setFilter} label={t('项目分类','Project categories')}/>
    <div className="project-grid">{sortedProjects.filter(p=>filter==='all'||filter===p.group).map(p=><a key={p.id} href={p.url} className="card project-tile">
      <div className={`project-cover ${p.cover===p.gallery[0].src&&p.gallery[0].height>p.gallery[0].width?'tall':''}`}><img src={asset(p.cover)} alt={p.cover===p.gallery[0].src?t(p.gallery[0].caption):t('SG-Navi 首页截图','SG-Navi homepage screenshot')} loading="lazy"/></div>
      <div className="project-tile-body"><p className="muted">{t(p.category)}</p><h2><img className="project-mark" src={asset(p.logo)} alt=""/>{t(p.title)}</h2><Tech items={p.stack.slice(0,4)}/><p>{t(p.result)}</p><span className="card-link">{t('查看项目','View project')}<Icon name="arrow"/></span></div>
    </a>)}</div>
  </>;
  const project=sortedProjects.find(item=>item.id===id);
  if(!project)return <Missing/>;
  return <ProjectDetail key={id} project={project} params={params} navigate={navigate}/>;
}
function ProjectDetail({project:p,params,navigate}) {
  const {t}=useLanguage();
  const [index,setIndex]=useState(0);
  const [lightbox,setLightbox]=useState(false);
  const [scale,setScale]=useState(1);
  const gallery=p.gallery;
  const shot=gallery[index];
  function change(offset){setIndex((index+offset+gallery.length)%gallery.length);setScale(1)}
  const items=[['overview',t('概览','Overview')],['my-work',t('我的工作','My work')],['evidence',t('证据','Evidence')]];
  const tab=items.some(([key])=>key===params.get('tab'))?params.get('tab'):'overview';
  const pos=sortedProjects.indexOf(p);
  const controls=<div className="gallery-controls"><button className="icon-button" onClick={()=>change(-1)} disabled={gallery.length<2} aria-label={t('上一张','Previous image')}><Icon name="left"/></button><span aria-live="polite">{index+1} / {gallery.length}</span><button className="icon-button" onClick={()=>change(1)} disabled={gallery.length<2} aria-label={t('下一张','Next image')}><Icon name="right"/></button></div>;
  return <><a className="back" href="#/projects"><Icon name="left" size={16}/>{t('返回项目','Back to projects')}</a>
    <div className="project-title"><Heading title={<><img className="project-mark" src={asset(p.logo)} alt=""/>{t(p.title)}</>}>{t(p.problem)}</Heading><div className="actions">{p.links?.filter(item=>item.kind==='demo').map(item=><Link className="button primary" href={item.url} key={item.url}>{t(item.label)}</Link>)}</div></div>
    <p className="muted">{p.period.join(' – ')} · {p.teamSize===1?t('个人项目','Solo project'):t(`${p.teamSize} 人团队`,`Team of ${p.teamSize}`)}</p><Tech items={p.stack}/>
    <figure className="gallery"><button className="gallery-image" onClick={()=>{setLightbox(true);setScale(1)}} aria-label={t('放大查看截图','Enlarge screenshot')}><img src={asset(shot.src)} alt={t(shot.caption)}/></button><figcaption><div>{t(shot.caption)}{shot.source&&<small>{t(shot.source)}</small>}</div><div className="actions">{controls}<button className="icon-button" onClick={()=>setLightbox(true)} aria-label={t('全屏查看','View full size')}><Icon name="expand"/></button><Link href={shot.src}>{t('原图','Original')}</Link></div></figcaption></figure>
    <Tabs items={items} selected={tab} onSelect={value=>navigate(p.url+'?tab='+value,false)} label={t('项目详情','Project details')}>
      <div className="panel prose">
        {tab==='overview'&&<><h2>{t('项目目标','Project goal')}</h2><p>{t(p.problem)}</p><h2>{t('成果','Outcome')}</h2><p>{t(p.result)}</p><p>{t(p.validation)}</p></>}
        {tab==='my-work'&&<><h2>{t('个人贡献','Individual contribution')}</h2><p>{t(p.role)}</p><p>{t(p.contribution)}</p><Bullet items={p.bullets}/><h2>{t('技术决策','Technical decisions')}</h2><p>{t(p.decision)}</p>{p.boundary&&<p>{t(p.boundary)}</p>}{p.reflection&&<p>{t(p.reflection)}</p>}</>}
        {tab==='evidence'&&<><p>{t(p.validation)}</p><Evidence ids={data.evidence.filter(item=>item.owner===p.id&&item.kind!=='project').map(item=>item.id)}/></>}
      </div>
    </Tabs>
    <div className="actions detail-links">{p.links?.map(link=><Link key={link.url} className="button" href={link.url}>{t(link.label)}</Link>)}<a className="button" href={p.url+'?tab=evidence'}>{t('查看证据','View evidence')}</a></div>
    <nav className="project-pager" aria-label={t('相邻项目','Adjacent projects')}>{sortedProjects[pos-1]&&<a href={sortedProjects[pos-1].url}><Icon name="left"/>{t('上一个项目','Previous project')}</a>}{sortedProjects[pos+1]&&<a href={sortedProjects[pos+1].url}>{t('下一个项目','Next project')}<Icon name="right"/></a>}</nav>
    {lightbox&&<Modal title={t(shot.caption)} close={()=>setLightbox(false)} className="wide image-modal"><div className="viewer image-viewer"><img src={asset(shot.src)} alt={t(shot.caption)} style={{width:scale*100+'%'}}/></div><div className="toolbar">{controls}<button className="icon-button" disabled={scale<=1} onClick={()=>setScale(scale-.5)} aria-label={t('缩小','Zoom out')}><Icon name="minus"/></button><button className="icon-button" disabled={scale>=3} onClick={()=>setScale(scale+.5)} aria-label={t('放大','Zoom in')}><Icon name="plus"/></button><Link href={shot.src}>{t('原图','Original')}</Link></div></Modal>}
  </>;
}

export function Skills({params,navigate}) {
  const {t}=useLanguage();
  const [filter,setFilter]=useState('all');
  const selected=data.skills.find(item=>item.id===params.get('skill'));
  return <><Heading title={t('技术能力','Skills')}>{t('点击技术卡片，查看我实际使用它的场景和相关证据。','Select a technology to see how I used it and the supporting evidence.')}</Heading>
    <Filter options={skillGroups.map(([key,zh,en])=>[key,t(zh,en)])} value={filter} setValue={setFilter} label={t('技能分类','Skill categories')}/>
    <div className="skill-grid">{data.skills.filter(item=>filter==='all'||filter===item.group).map(skill=><button className="card skill-card" key={skill.id} onClick={()=>navigate('#/skills?skill='+skill.id,false)}>
      <img src={asset(`skills/${skill.id}.svg`)} alt="" width="42" height="42" loading="lazy"/><div><h2>{skill.name}</h2><p>{t(skill.use)}</p></div><Icon name="arrow"/>
    </button>)}</div>
    <section className="practices"><h2>{t('工程实践','Engineering practices')}</h2>{data.practices.map(group=><div key={group.label.en}><h3>{t(group.label)}</h3><Tech items={group.items.filter(item=>!data.skills.some(skill=>skill.name===item))}/></div>)}</section>
    {selected&&<Modal title={selected.name} close={()=>navigate('#/skills',false)} className="drawer"><div className="drawer-content">
      <img className="drawer-logo" src={asset(`skills/${selected.id}.svg`)} alt=""/><p>{t(selected.use)}</p><h3>{t('相关经历与项目','Related experience and projects')}</h3><Evidence ids={selected.sources} onNavigate={()=>navigate('#/skills',false)}/>
      <label>{t('查看其他技能','Explore another skill')}<select value={selected.id} onChange={event=>navigate('#/skills?skill='+event.target.value,false)}>{data.skills.map(skill=><option key={skill.id} value={skill.id}>{skill.name}</option>)}</select></label>
    </div></Modal>}
  </>;
}

export function About({params,navigate,openDocument}) {
  const {t}=useLanguage();
  const items=[['story',t('我的故事','My story')],['education',t('教育背景','Education')],['achievements',t('成果与证书','Achievements')],['beyond',t('工作之外','Beyond work')]];
  const tab=items.some(([key])=>key===params.get('tab'))?params.get('tab'):'story';
  return <><Heading title={t('关于我','About me')}>{t('学习背景、个人经历，以及我如何与人合作。','My education, background and approach to working with others.')}</Heading>
    <Tabs items={items} selected={tab} onSelect={value=>navigate('#/about?tab='+value,false)} label={t('关于我','About me')}>
      {tab==='story'&&<div className="panel prose"><p>{t(data.profile.summary)}</p><p>{t(data.profile.internship)}</p><p>{t(data.profile.work)}</p></div>}
      {tab==='education'&&<div className="education-grid">{data.education.map(school=><article className="card education-card" key={school.id}><header><div><h2>{t(school.title)}</h2><p>{t(school.org)}</p></div><img src={asset('assets/school-logos/'+school.logo)} alt=""/></header><p className="muted">{t(school.date)}{school.id==='jcu'&&' · '+t(school.status)}</p><Bullet items={school.bullets}/></article>)}</div>}
      {tab==='achievements'&&<><div className="achievement-grid">{data.achievements.map(item=><button className="card achievement" key={item.file} onClick={()=>openDocument(item)}><img src={asset(item.preview)} alt="" loading="lazy"/><span><strong>{t(item.title)}</strong><small>{t(item.issuer)}</small></span><Icon name="expand" size={17}/></button>)}</div><div className="panel prose"><h2>{t('DrivenData 练习赛','DrivenData practice competition')}</h2><p>{t('野生动物图像分类公开榜记录 48/810，Log Loss 1.0136。','The wildlife classification public leaderboard record was 48/810, with a log loss of 1.0136.')}</p><a href="#/projects/wildlife?tab=evidence">{t('查看记录','View record')}</a></div></>}
      {tab==='beyond'&&<div className="panel prose">{data.personal.paragraphs.map((item,i)=><p key={i}>{t(item)}</p>)}</div>}
    </Tabs>
  </>;
}

export function Contact() {
  const {t}=useLanguage();
  const [message,setMessage]=useState('');
  const labels={mail:['主邮箱','Primary email','mail'],'mail-alt':['备用邮箱','Alternative email','mail'],github:['GitHub','GitHub','github'],'phone-sg':['新加坡电话','Singapore phone','phone'],phone:['中国电话','China phone','phone'],wechat:['微信','WeChat','message']};
  async function copy(value){
    try{await navigator.clipboard.writeText(value);setMessage(t('已复制','Copied'));}
    catch{setMessage(t('可以选中文本手动复制。','Select the text to copy it manually.'));}
  }
  return <section className="contact-page"><div className="contact-intro"><h1>Let’s Create <span>VALUE!</span></h1><p>{t('每一个好机会，都始于一次交流。','Every great opportunity begins with a conversation.')}</p><p>{t('关注毕业生岗位、AI 开发及有意义的合作机会。','Open to graduate opportunities, AI development and meaningful collaborations.')}</p></div><div className="contact-grid">
    {Object.keys(labels).map(key=>{
      const contact=data.contact.find(item=>item.key===key);
      const [zh,en,icon]=labels[key];
      const value=key==='wechat'?'cjj0908ya':t(contact);
      return <div key={key} className="contact-item">
        {icon==='github'?<img src={asset('skills/github.svg')} alt="" width="21" height="21"/>:<Icon name={icon}/>}
        <div><strong>{t(zh,en)}</strong>{contact.href?<a href={contact.href} target={key==='github'?'_blank':undefined} rel="noopener">{value}</a>:<span>{value}</span>}</div>
        {key!=='github'&&<button className="icon-button" onClick={()=>copy(value)} aria-label={t('复制 '+zh,'Copy '+en)}><Icon name="copy" size={17}/></button>}
      </div>;
    })}
  </div><p className="copy-status" role="status">{message}</p></section>;
}
export function Missing(){
  const {t}=useLanguage();
  return <><Heading title="404">{t('找不到这个页面。','This page could not be found.')}</Heading><a className="button primary" href="#/">{t('返回首页','Back to home')}</a></>;
}
