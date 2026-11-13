import { useEffect, useRef, useState } from 'react';
import { asset, data, initialResume, useLanguage } from './lib';
import { Icon, Link, Modal } from './components';

let pdfModule;
export async function pdfEngine() {
  pdfModule ??= Promise.all([import('pdfjs-dist'),import('pdfjs-dist/build/pdf.worker.min.mjs?url')]).then(([pdf,worker])=>{
    pdf.GlobalWorkerOptions.workerSrc=worker.default;
    return pdf;
  });
  return pdfModule;
}
export async function parseJobFile(file) {
  if(!file.size||file.size>5*1024*1024)throw new Error('size');
  const extension=file.name.toLowerCase().split('.').at(-1);
  const bytes=new Uint8Array(await file.arrayBuffer());
  const isPdf=String.fromCharCode(...bytes.slice(0,5))==='%PDF-';
  const isZip=bytes[0]===80&&bytes[1]===75;
  let text;
  if(extension==='txt'&&!isPdf&&!isZip){
    const encoding=bytes[0]===255&&bytes[1]===254?'utf-16le':bytes[0]===254&&bytes[1]===255?'utf-16be':'utf-8';
    text=new TextDecoder(encoding,{fatal:true}).decode(bytes);
    if(text.includes('\0'))throw new Error('format');
  }else if(extension==='docx'&&isZip){
    // Bound expanded ZIP size before Mammoth opens the XML.
    const view=new DataView(bytes.buffer);
    let end=-1;
    for(let i=bytes.length-22;i>=Math.max(0,bytes.length-65557);i--)if(view.getUint32(i,true)===0x06054b50){end=i;break}
    if(end<0)throw new Error('format');
    let cursor=view.getUint32(end+16,true),size=0,document=false;
    const count=view.getUint16(end+10,true);
    if(count>1000)throw new Error('size');
    for(let i=0;i<count;i++){
      if(cursor+46>bytes.length||view.getUint32(cursor,true)!==0x02014b50)throw new Error('format');
      const length=view.getUint16(cursor+28,true);
      size+=view.getUint32(cursor+24,true);
      if(size>24*1024*1024)throw new Error('size');
      document ||= new TextDecoder().decode(bytes.slice(cursor+46,cursor+46+length))==='word/document.xml';
      cursor+=46+length+view.getUint16(cursor+30,true)+view.getUint16(cursor+32,true);
    }
    if(!document)throw new Error('format');
    const mammoth=await import('mammoth/mammoth.browser');
    text=(await (mammoth.default??mammoth).extractRawText({arrayBuffer:bytes.buffer})).value;
  }else if(extension==='pdf'&&isPdf){
    const pdf=await pdfEngine();
    const job=pdf.getDocument({data:bytes,isEvalSupported:false});
    try{
      const doc=await job.promise;
      if(doc.numPages>40)throw new Error('size');
      const parts=[];
      for(let i=1;i<=doc.numPages;i++){
        const content=await (await doc.getPage(i)).getTextContent();
        parts.push(content.items.map(item=>item.str??'').join(' '));
        if(parts.join('\n').length>16000)break;
      }
      text=parts.join('\n');
    }finally{await job.destroy()}
  }else throw new Error('format');
  text=text.trim();
  if(text.length<12)throw new Error('empty');
  return {text:text.slice(0,16000),truncated:text.length>16000};
}

function PdfPage({file,zoom}) {
  const {t}=useLanguage();
  const canvas=useRef(null);
  const viewer=useRef(null);
  const [size,setSize]=useState({width:0,height:0});
  const [state,setState]=useState('loading');
  useEffect(()=>{
    const element=viewer.current;
    const observer=new ResizeObserver(([entry])=>setSize({width:entry.contentRect.width,height:entry.contentRect.height}));
    observer.observe(element);
    return ()=>observer.disconnect();
  },[]);
  useEffect(()=>{
    if(!size.width||!size.height)return;
    let disposed=false,job,render;
    async function draw(){
      setState('loading');
      try{
        const pdf=await pdfEngine();
        if(disposed)return;
        job=pdf.getDocument({url:asset(file.pdf),isEvalSupported:false});
        const doc=await job.promise;
        const page=await doc.getPage(1);
        if(disposed)return;
        const base=page.getViewport({scale:1});
        const cssWidth=Math.max(1,Math.min(size.width-20,(size.height-20)*base.width/base.height,570))*zoom;
        const density=Math.min(devicePixelRatio||1,2);
        const viewport=page.getViewport({scale:cssWidth/base.width*density});
        const el=canvas.current;
        el.width=Math.ceil(viewport.width);el.height=Math.ceil(viewport.height);
        el.style.width=cssWidth+'px';
        render=page.render({canvas:el,viewport});
        await render.promise;
        if(!disposed)setState('ready');
      }catch{if(!disposed)setState('fallback')}
    }
    draw();
    return ()=>{disposed=true;render?.cancel();void job?.destroy().catch(()=>{});};
  },[file.pdf,size.width,size.height,zoom]);
  return <div className="viewer pdf-viewer" ref={viewer} tabIndex={0} aria-label={t('PDF 预览','PDF preview')}>
    {state==='loading'&&<p role="status">{t('正在渲染 PDF…','Rendering PDF…')}</p>}
    <canvas ref={canvas} hidden={state!=='ready'} aria-label={t('原始 PDF 第一页','Page one of the original PDF')}/>
    {state==='fallback'&&<><p>{t('浏览器渲染失败。以下为由原件生成的预览，可直接打开 PDF。','The browser could not render the PDF. A preview generated from the source is shown below.')}</p><img src={asset(file.preview)} alt={t('从原件生成的预览','Preview generated from the original')} style={{width:Math.max(1,Math.min(size.width-20,(size.height-20)*.707,570))*zoom}}/></>}
  </div>;
}
export function DocumentCenter({selection,close}) {
  const {lang,t}=useLanguage();
  const [role,setRole]=useState(selection.role??initialResume);
  const [language,setLanguage]=useState(selection.language??lang);
  const [zoom,setZoom]=useState(1);
  const resume=data.resumes.find(item=>item.file===role)??data.resumes[0];
  const document=selection.document;
  const file=document??resume.variants[language];
  return <Modal title={document?t(document.title):t('简历中心','Résumé center')} close={close} className="wide document-modal">
    <div className={`document-layout ${document?'single':''}`}>
      {!document&&<div className="resume-choices" role="group" aria-label={t('简历版本','Résumé variants')}>{data.resumes.map(item=><button key={item.file} aria-pressed={role===item.file} onClick={()=>{setRole(item.file);setZoom(1)}}>{t(item)}</button>)}</div>}
      <div className="document-preview">
        {document&&<p className="document-caption">{t(document.body)}</p>}
        <div className="toolbar">
          {!document&&<select aria-label={t('文件语言','Document language')} value={language} onChange={e=>{setLanguage(e.target.value);setZoom(1)}}><option value="zh">中文</option><option value="en">English</option></select>}
          <a className="button primary" href={asset(file.pdf)} download>{t('下载 PDF','Download PDF')}</a>
          {file.word&&<a className="plain" href={asset(file.word)} download>{t('下载 Word','Download Word')}</a>}
          <Link href={file.pdf}>{t('打开 PDF','Open PDF')}</Link>
          <div className="zoom"><button className="icon-button" disabled={zoom<=1} onClick={()=>setZoom(zoom-.25)} aria-label={t('缩小','Zoom out')}><Icon name="minus"/></button><button className="icon-button" disabled={zoom>=2.5} onClick={()=>setZoom(zoom+.25)} aria-label={t('放大','Zoom in')}><Icon name="plus"/></button></div>
        </div>
        <PdfPage key={file.pdf} file={file} zoom={zoom}/>
      </div>
    </div>
  </Modal>;
}
