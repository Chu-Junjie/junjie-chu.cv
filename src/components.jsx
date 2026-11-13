import { useEffect, useRef, useState } from 'react';
import { asset, data, evidenceById, url, useLanguage } from './lib';

export function Icon({name,size=20}) {
  const paths = {
    search:'M21 21l-4.2-4.2M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z',
    file:'M6 3h8l4 4v14H6zM14 3v5h5M9 12h6m-6 4h6',
    arrow:'M4 12h15m-6-6 6 6-6 6', external:'M7 17 17 7M7 7h10v10',
    close:'m6 6 12 12M18 6 6 18', menu:'M4 6h16M4 12h16M4 18h16',
    left:'m15 5-7 7 7 7', right:'m9 5 7 7-7 7', copy:'M9 8h11v13H9zM5 16H4V3h12v1',
    mail:'M3 5h18v14H3zM3 6l9 7 9-7', phone:'M7 3H4c-1 0-1 2-1 3 0 8 7 15 15 15 1 0 3 0 3-1v-3l-5-2-2 2c-3-1-6-4-7-7l2-2z',
    message:'M3 4h18v13H8l-5 4zM7 9h10m-10 4h6', expand:'M3 9V3h6m6 0h6v6M3 15v6h6m12-6v6h-6',
    plus:'M21 21l-4.2-4.2M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0zM8 11h6m-3-3v6',
    minus:'M21 21l-4.2-4.2M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0zM8 11h6',
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]}/></svg>;
}

export function Modal({ title, close, children, className='', id='overlay-title' }) {
  const ref = useRef(null);
  const {t}=useLanguage();
  useEffect(() => {
    const element = ref.current;
    const focus = document.activeElement;
    element.showModal();
    return () => { element.close(); focus?.focus({preventScroll:true}); };
  }, []);
  return <dialog ref={ref} className={`modal ${className}`} aria-labelledby={id} onCancel={e=>{e.preventDefault();close()}} onKeyDown={e=>{if(e.key==='Escape'){e.preventDefault();close()}}} onClick={e=>{if(e.target===e.currentTarget)close()}}>
    <div className="modal-inner">
      <header className="modal-heading"><h2 id={id}>{title}</h2><button type="button" className="icon-button" onClick={close} aria-label={t('关闭','Close')}><Icon name="close"/></button></header>
      {children}
    </div>
  </dialog>;
}

export function Tabs({ items, selected, onSelect, label, children }) {
  const bar=useRef(null);
  function key(e,i){
    const target = e.key==='ArrowRight' ? (i+1)%items.length : e.key==='ArrowLeft' ? (i+items.length-1)%items.length : e.key==='Home' ? 0 : e.key==='End' ? items.length-1 : -1;
    if(target<0)return;
    e.preventDefault();
    onSelect(items[target][0]);
    bar.current.querySelectorAll('button')[target].focus();
  }
  return <><div className="tabs" role="tablist" aria-label={label} ref={bar}>
    {items.map(([id,text],i)=><button key={id} id={`tab-${id}`} role="tab" aria-controls="tab-content" tabIndex={selected===id?0:-1} aria-selected={selected===id} onKeyDown={e=>key(e,i)} onClick={()=>onSelect(id)}>{text}</button>)}
  </div><div id="tab-content" role="tabpanel" aria-labelledby={`tab-${selected}`} tabIndex={0}>{children}</div></>;
}

export function Heading({ title, children }) {
  return <header className="page-heading"><h1>{title}</h1>{children&&<p>{children}</p>}</header>;
}

export function Link({ href, children, className='' }) {
  const outside=!href.startsWith('#');
  return <a className={className} href={url(href)} target={outside?'_blank':undefined} rel={outside?'noopener noreferrer':undefined}>{children}{outside&&<Icon name="external" size={15}/>}</a>;
}

export function Evidence({ ids, onNavigate }) {
  const {t}=useLanguage();
  if(!ids?.length)return null;
  return <ul className="evidence-list" onClick={onNavigate?event=>{if(event.target.closest('a[href^="#"]'))onNavigate()}:undefined}>{ids.map(id=>{
    const item=evidenceById.get(id);
    return item&&<li key={id}><Link href={item.url}>{t(item.description)}</Link></li>;
  })}</ul>;
}

export function Filter({ options, value, setValue, label }) {
  return <div className="filters" role="group" aria-label={label}>{options.map(([id,text])=><button key={id} aria-pressed={id===value} onClick={()=>setValue(id)}>{text}</button>)}</div>;
}

export function Search({close}) {
  const {t}=useLanguage();
  const [term,setTerm]=useState('');
  const [active,setActive]=useState(0);
  const normalize=(value)=>String(value??'').normalize('NFKC').toLowerCase();
  const words=normalize(term).trim().split(/\s+/).filter(Boolean);
  const results=words.length?data.evidence.filter(item=>{
    const text=normalize([item.description.flat(),item.facts.flat()].flat().join(' '));
    return words.every(word=>text.includes(word));
  }).slice(0,12):data.evidence.filter(item=>['sg-navi','work-basilos','skill-python'].includes(item.id));
  function highlight(text){
    const at=normalize(text).indexOf(normalize(term.trim()));
    return at>=0&&term.trim()?<>{text.slice(0,at)}<mark>{text.slice(at,at+term.trim().length)}</mark>{text.slice(at+term.trim().length)}</>:text;
  }
  return <Modal title={t('搜索','Search')} close={close} className="search-modal"><div className="search-content">
    <div className="search-input"><Icon name="search"/><input type="search" autoFocus aria-label={t('搜索公开资料','Search public information')} placeholder={t('搜索 Python、项目或经历','Search Python, projects or experience')} value={term} onChange={e=>{setTerm(e.target.value);setActive(0)}} onKeyDown={e=>{
      if(!results.length)return;
      if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();setActive((active+results.length+(e.key==='ArrowDown'?1:-1))%results.length);}
      if(e.key==='Enter'){e.preventDefault();document.getElementById('search-result-'+active)?.click();}
    }}/>{term&&<button onClick={()=>{setTerm('');setActive(0)}} className="plain">{t('清除','Clear')}</button>}</div>
    {!results.length&&<p role="status">{t('没有找到对应资料。','No matching public information.')}</p>}
    <ul className="search-results">{results.map((item,i)=><li key={item.id}><a id={`search-result-${i}`} className={i===active?'selected':''} href={url(item.url)} target={item.url.startsWith('#')?undefined:'_blank'} rel="noopener" onClick={close}>{highlight(t(item.description))}<Icon name="arrow" size={17}/></a></li>)}</ul>
  </div></Modal>;
}
