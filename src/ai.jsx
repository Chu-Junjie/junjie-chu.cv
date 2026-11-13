import { useEffect, useRef, useState } from 'react';
import { api, apiBase, asset, data, useLanguage } from './lib';
import { Evidence, Filter, Heading, Icon, Modal, Tabs } from './components';
import { parseJobFile } from './documents';

const categories={
  technical:['技术技能','Technical skills'],experience:['相关项目与经历','Relevant projects & experience'],
  responsibilities:['岗位职责','Role responsibilities'],education:['学历与其他要求','Education & other requirements'],
};
const statuses={
  matched:['匹配','Matched'],partial:['部分匹配','Partially matched'],
  'not-verified':['尚未核实','Not verified'],'not-met':['未满足','Not met'],
};
const presets=[
  ['AI Engineer','Required: build and test Python inference connectors using ONNX Runtime. Evaluate model outputs and document failures. Preferred: computer vision model training with PyTorch and experience with retrieval-augmented generation.'],
  ['Software Developer','Required: build Android user interfaces using Kotlin and Jetpack Compose, integrate REST APIs, and write automated UI tests. Preferred: relational databases and Scrum.'],
  ['Data Analyst','Required: use SQL to join and aggregate data, analyse trends and communicate results. Preferred: Python data processing and experience with model evaluation.'],
  ['QA Engineer','Required: design test cases, verify edge cases, and document defects. Preferred: JUnit, Espresso, and GitHub Actions.'],
];
function useAvailability() {
  const [state,setState]=useState(apiBase?'':'unconfigured');
  useEffect(()=>{
    if(!apiBase)return;
    let active=true;
    api('health').then(({status})=>{if(active)setState(status==='ready'?'':'unconfigured')},()=>{if(active)setState('unavailable')});
    return ()=>{active=false};
  },[]);
  return state;
}

function ErrorText({error}) {
  const {t}=useLanguage();
  const errors={
    unconfigured:['AI 服务尚未配置。其他页面和简历下载可以正常使用。','The AI service is not configured yet. The portfolio and résumé downloads are available.'],
    invalid_requirements:['未能从文本中提取有效岗位要求，请补充具体职责或条件。','No usable requirements were extracted. Add concrete duties or requirements and try again.'],
    rate_limit:['请求过于频繁，请稍后重试。','Too many requests. Try again shortly.'],
    provider_rate_limit:['模型服务限流，请稍后重试。','The model provider is rate limiting requests. Try again shortly.'],
    model_format:['模型返回了无法验证的结果，请重试。','The model returned a result that could not be verified. Please retry.'],
    TimeoutError:['请求超时，请稍后重试。','The request timed out. Please retry.'],
    invalid_input:['请检查输入内容及长度。','Check the input and its length.'],
  };
  return error&&<p className="notice error" role="alert">{t(errors[error]??['AI 服务暂不可用，请稍后重试。','The AI service is temporarily unavailable. Please retry.'])}</p>;
}

export function JobMatch({result,setResult,openResume,askMatch}){
  const {lang,t}=useLanguage();
  const availability=useAvailability();
  const [jd,setJd]=useState('');
  const [consent,setConsent]=useState(false);
  const [fileStatus,setFileStatus]=useState('');
  const [busy,setBusy]=useState(false);
  const [parsing,setParsing]=useState(false);
  const [error,setError]=useState('');
  const [edited,setEdited]=useState(null);
  const [selected,setSelected]=useState(null);
  const [filter,setFilter]=useState('all');
  const [mobileTab,setMobileTab]=useState('analysis');
  const [language,setLanguage]=useState(lang);
  function changeJd(value){
    setJd(value);
    setResult(null);
    setEdited(null);
    setError('');
  }
  async function file(event){
    const chosen=event.target.files[0];
    event.target.value='';
    if(!chosen)return;
    setParsing(true);setFileStatus('');
    try{
      const parsed=await parseJobFile(chosen);
      changeJd(parsed.text);
      if(parsed.truncated)setFileStatus(t('已保留前 16,000 个字符，请核对岗位条件。','The first 16,000 characters were kept. Review the requirements.'));
      else setFileStatus(t('文本已在本地提取。','Text was extracted locally.'));
    }catch(error){
      setFileStatus(error.message==='size'?t('文件超出大小或页数限制。','The file exceeds the size or page limit.'):t('未能提取文本。请粘贴 JD，或使用包含可选中文本的文件。','Text could not be extracted. Paste the JD or use a file with selectable text.'));
    }finally{setParsing(false)}
  }
  async function analyze(requirements){
    if(busy||!consent||jd.trim().length<12)return;
    setBusy(true);setError('');
    try{
      const value=await api('job-match/analyze',{lang,jd,...(requirements&&{requirements})});
      setResult(value);setEdited(null);setSelected(value.rows[0]?.id);setFilter('all');setMobileTab('analysis');
    }catch(error){setError(error.message)}
    finally{setBusy(false)}
  }
  const rows=result?.rows??[];
  const visibleRows=rows.filter(row=>filter==='all'||filter===row.category);
  const active=visibleRows.find(row=>row.id===selected)??visibleRows[0];
  const mandatory=rows.filter(row=>row.priority==='mandatory');
  const gaps=rows.filter(row=>row.status!=='matched');
  function resume(recommendation,index){
    const choice=data.resumes.find(item=>item.file===recommendation.id);
    if(!choice)return null;
    return <article className="resume-recommendation" key={choice.file}>
      <strong>{index===0?t('首选','Primary'):t('备选','Alternative')} · {t(choice)}</strong>
      <p>{recommendation.evidenceIds.length?t('该版本包含与匹配要求相关的经历或项目。','This version includes projects or experience related to matched requirements.'):t('当前相关证据有限，可从此版本开始查看。','Relevant evidence is limited. This version is a starting point.')}</p>
      <Evidence ids={recommendation.evidenceIds.slice(0,3)}/>
      <div className="actions"><button className="button" onClick={()=>openResume(choice.file,language)}>{t('预览','Preview')}</button><a className="plain" href={asset(choice.variants[language].pdf)} download>{t('下载 PDF','Download PDF')}</a></div>
    </article>;
  }
  const analysis=<div className="panel analysis-list">
    <h2>{t('岗位要求分析','Requirement analysis')}</h2>
    <Filter options={[[ 'all',t('全部','All')],...Object.entries(categories).map(([key,labels])=>[key,t(labels)])]} value={filter} setValue={setFilter} label={t('要求分类','Requirement categories')}/>
    {visibleRows.map(row=><button key={row.id} className="requirement" aria-pressed={active?.id===row.id} onClick={()=>{setSelected(row.id);setMobileTab('evidence')}}><span>{row.text}</span><small className={'status '+row.status}>{t(statuses[row.status])}</small></button>)}
    <button className="plain" onClick={()=>setEdited(rows.map(({text,category,priority})=>({text,category,priority})))}>{t('修正提取的要求','Edit extracted requirements')}</button>
  </div>;
  const proof=<div className="panel analysis-proof">
    <h2>{t('支持证据','Supporting evidence')}</h2>
    {active&&<><h3>{active.text}</h3><p className={'status '+active.status}>{t(statuses[active.status])}</p><p>{active.reason||t('目前没有足够的公开证据。','There is not enough public evidence.')}</p><Evidence ids={active.evidenceIds}/></>}
  </div>;
  return <><Heading title={t('AI 岗位匹配','AI Job Match')}>{t('对照岗位要求，查看公开经历中能支持哪些条件。','Compare job requirements with evidence from my public portfolio.')}</Heading>
    <form className="panel jd-form" onSubmit={event=>{event.preventDefault();analyze()}}>
      <div className="jd-options"><label>{t('使用样例','Use a sample')}<select defaultValue="" disabled={busy||parsing} onChange={e=>{if(e.target.value!==''){changeJd(presets[Number(e.target.value)][1]);setFileStatus('')}}}><option value="">{t('选择岗位','Choose a role')}</option>{presets.map(([name],i)=><option key={name} value={i}>{name}</option>)}</select></label>
        <label>{t('上传 JD（PDF、DOCX 或 TXT）','Upload a JD (PDF, DOCX or TXT)')}<input type="file" accept=".pdf,.docx,.txt" disabled={busy||parsing} onChange={file}/></label></div>
      <label>{t('岗位描述','Job description')}<textarea rows="7" value={jd} maxLength={16000} readOnly={busy} onChange={e=>changeJd(e.target.value)} placeholder={t('粘贴岗位描述和要求','Paste the job description and requirements')}/></label>
      <p className="muted" role="status">{parsing?t('正在本地提取…','Extracting locally…'):fileStatus||jd.length+' / 16000'}</p>
      <label className="checkbox"><input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)}/>{t('同意将岗位文本发送至配置的 AI 模型进行分析。文件在浏览器内处理，网站不会保存岗位文本。','I agree to send the job text to the configured AI model for analysis. Files are processed in the browser. The site does not store the job text.')}</label>
      <button className="button primary" disabled={busy||parsing||jd.trim().length<12||!consent||!apiBase}>{busy?t('正在分析…','Analysing…'):t('分析岗位','Analyse role')}<Icon name="arrow"/></button>
    </form>
    <ErrorText error={error||availability}/>
    {result&&<section className="match-result">
      <div className="panel match-overview"><strong className="match-score">{result.overall}%</strong><div><h2>{t('基于证据的匹配估算','Evidence-based Match Estimate')}</h2><p>{t('基于当前公开资料的参考评估，不代表招聘公司的判断或录用概率。','An estimate based on public evidence. It is not an employer evaluation or probability of being hired.')}</p></div></div>
      <div className="panel"><h2>{t('硬性条件检查','Mandatory requirements check')}</h2>{mandatory.length?<ul className="bullets">{mandatory.map(row=><li key={row.id}><strong className={'status '+row.status}>{t(statuses[row.status])}</strong> {row.text}</li>)}</ul>:<p>{t('没有提取到硬性条件。','No mandatory requirements were identified.')}</p>}</div>
      <div className="analysis-desktop">{analysis}{proof}</div>
      <div className="analysis-mobile"><Tabs items={[[ 'analysis',t('要求','Requirements')],['evidence',t('证据','Evidence')]]} selected={mobileTab} onSelect={setMobileTab} label={t('匹配详情','Match details')}>{mobileTab==='analysis'?analysis:proof}</Tabs></div>
      <div className="panel"><h2>{t('潜在差距','Potential gaps')}</h2>{gaps.length?<ul className="bullets">{gaps.map(row=><li key={row.id}>{row.text} · {t(statuses[row.status])}</li>)}</ul>:<p>{t('已提取的要求均有证据支持。','The extracted requirements have supporting evidence.')}</p>}<h2>{t('为什么考虑褚俊杰','Why Junjie?')}</h2><Evidence ids={[...new Set(rows.filter(row=>row.status==='matched').flatMap(row=>row.evidenceIds))].slice(0,6)}/><button className="button" onClick={askMatch}>{t('让 Copilot 解释这次匹配','Ask Copilot about this match')}</button></div>
      <div className="panel"><div className="section-actions"><h2>{t('推荐简历','Recommended résumé')}</h2><select aria-label={t('文件语言','Document language')} value={language} onChange={e=>setLanguage(e.target.value)}><option value="zh">中文</option><option value="en">English</option></select></div><div className="recommendations">{result.resumes.map(resume)}</div></div>
    </section>}
    {edited&&<Modal title={t('修正岗位要求','Edit requirements')} close={()=>setEdited(null)} className="wide"><form className="edit-requirements" onSubmit={event=>{event.preventDefault();analyze(edited)}}>
      {edited.map((row,i)=><fieldset key={i}><legend>{t('要求','Requirement')} {i+1}</legend><input value={row.text} maxLength={320} required onChange={e=>setEdited(edited.map((item,index)=>index===i?{...item,text:e.target.value}:item))}/><select aria-label={t('要求分类','Category')} value={row.category} onChange={e=>setEdited(edited.map((item,index)=>index===i?{...item,category:e.target.value}:item))}>{Object.entries(categories).map(([key,labels])=><option key={key} value={key}>{t(labels)}</option>)}</select><select aria-label={t('优先级','Priority')} value={row.priority} onChange={e=>setEdited(edited.map((item,index)=>index===i?{...item,priority:e.target.value}:item))}><option value="mandatory">{t('硬性要求','Mandatory')}</option><option value="preferred">{t('优先考虑','Preferred')}</option></select></fieldset>)}
      <ErrorText error={error}/><button className="button primary" disabled={busy}>{busy?t('正在分析…','Analysing…'):t('重新分析','Reanalyse')}</button>
    </form></Modal>}
  </>;
}

const questions=[
  ['他有哪些 AI 开发经验？','What AI development experience does he have?'],
  ['他做过哪些软件项目？','What software projects has he built?'],
  ['他主要使用哪些技术？','What technologies does he use?'],
  ['他的工作经历有哪些？','What is his work experience?'],
  ['他是否适合我们的岗位？','Could he be a fit for our role?'],
];
export function Copilot({open,setOpen,match,aboutMatch,onNavigate}){
  const {lang,t}=useLanguage();
  const availability=useAvailability();
  const [text,setText]=useState('');
  const [messages,setMessages]=useState(()=>{
    try{const value=JSON.parse(sessionStorage.getItem('resume-v2-chat'));return Array.isArray(value)?value:[]}catch{return []}
  });
  const [pending,setPending]=useState(false);
  const [error,setError]=useState('');
  const [greet,setGreet]=useState(false);
  const history=useRef(null);
  useEffect(()=>{
    try{
      if(sessionStorage.getItem('resume-v2-greeting'))return;
      sessionStorage.setItem('resume-v2-greeting','1');
    }catch{return}
    if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const start=setTimeout(()=>setGreet(true),1900);
    const stop=setTimeout(()=>setGreet(false),7300);
    return ()=>{clearTimeout(start);clearTimeout(stop)};
  },[]);
  useEffect(()=>{
    try{sessionStorage.setItem('resume-v2-chat',JSON.stringify(messages.slice(-12)))}catch{}
    history.current?.scrollTo(0,history.current.scrollHeight);
  },[messages,pending]);
  async function send(question,retry=false){
    if(!question.trim()||pending)return;
    const next=retry?messages:[...messages,{role:'user',text:question.trim()}];
    setMessages(next);setText('');setPending(true);setError('');
    try{
      const result=await api('copilot/chat',{lang,messages:next.slice(-12).map(({role,text})=>({role,text})),...(match&&{match:{rows:match.rows}})});
      setMessages([...next,{role:'assistant',text:result.answer,evidenceIds:result.evidenceIds}].slice(-12));
    }catch(error){setError(error.message)}
    finally{setPending(false)}
  }
  const greeting=t('您好！我是 Copilot，可以帮您了解褚俊杰的项目、技术能力和职业背景。','Hello, I’m Copilot. Ask me about Junjie Chu’s projects, skills or work experience.');
  return <>
    {greet&&!open&&<div className="copilot-greeting" role="status">{greeting}</div>}
    <button type="button" className={`copilot-launch ${pending?'thinking':greet?'greeting':messages.at(-1)?.role==='assistant'?'answered':''}`} aria-label={t('打开 Copilot','Open Copilot')} onClick={()=>{setOpen(true);setGreet(false)}}><img src={asset('assets/copilot-avatar.webp')} alt="" width="48" height="48"/><span>Copilot</span></button>
    {open&&<Modal title="Copilot" close={()=>setOpen(false)} className="drawer copilot-drawer"><p className="assistant-label">AI Resume Assistant</p>
      <div className="chat-history" ref={history} role="log" aria-live="polite">
        {!messages.length&&<p>{greeting}</p>}
        {messages.map((message,i)=><article className={'chat-message '+message.role} key={i}><p>{message.text}</p><div onClick={event=>{if(event.target.closest('a[href^="#"]'))setOpen(false)}}><Evidence ids={message.evidenceIds}/></div></article>)}
        {pending&&<p role="status">{t('正在整理回答…','Preparing a response…')}</p>}
        <ErrorText error={error||availability}/>
        {error&&messages.at(-1)?.role==='user'&&<button className="plain" onClick={()=>send(messages.at(-1).text,true)}>{t('重新发送','Retry')}</button>}
      </div>
      <div className="chat-suggestions">
        {aboutMatch&&match&&<button className="button" disabled={pending||!apiBase} onClick={()=>send(t('请解释本次匹配、主要证据和不足。','Explain this match, the strongest evidence and the gaps.'))}>{t('解释本次匹配','Explain this match')}</button>}
        {!messages.length&&questions.map(question=><button key={question[1]} className="button" disabled={pending||!apiBase} onClick={()=>send(t(question))}>{t(question)}</button>)}
        <button className="plain" onClick={()=>{setOpen(false);onNavigate('#/ai-match')}}>{t('打开岗位匹配','Open AI Job Match')}</button>
      </div>
      <form className="chat-form" onSubmit={e=>{e.preventDefault();send(text)}}><input aria-label={t('输入问题','Enter a question')} value={text} maxLength={3000} onChange={e=>setText(e.target.value)} placeholder={t('输入问题','Ask a question')}/><button className="button primary" disabled={pending||!text.trim()||!apiBase}>{t('发送','Send')}</button></form>
    </Modal>}
  </>;
}
