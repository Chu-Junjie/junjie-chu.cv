export const weights = { technical:.4, experience:.3, responsibilities:.2, education:.1 };
export const states = ['matched','partial','not-verified','not-met'];
const points = { matched:1, partial:.5, 'not-verified':0, 'not-met':0 };
const norm = (s) => s.normalize('NFKC').toLowerCase().replace(/\s+/g,' ').trim();

export function normalizeRequirements(value) {
  if (!Array.isArray(value) || value.length < 1 || value.length > 24) throw new Error('requirements');
  const seen = new Set();
  return value.map((item) => {
    if(!item||typeof item!=='object')throw new Error('requirements');
    const {text,category,priority}=item;
    if (typeof text !== 'string' || !text.trim() || text.length > 320 || !Object.hasOwn(weights, category) || !['mandatory','preferred'].includes(priority)) throw new Error('requirements');
    const key=norm(text);
    if(seen.has(key))return null;
    seen.add(key);
    return { text:text.trim(), category, priority };
  }).filter(Boolean).map((requirement,index)=>({...requirement,id:`r${index+1}`}));
}

export function verifyMatch(requirements, analyses, evidence) {
  if(!Array.isArray(analyses)||analyses.length!==requirements.length)throw new Error('model_format');
  const ids=new Set(evidence.map(item=>item.id));
  return requirements.map(requirement=>{
    const matches=analyses.filter(item=>item?.id===requirement.id);
    const result=matches[0];
    if(matches.length!==1||!states.includes(result.status)||typeof result.reason!=='string'||!result.reason.trim()||result.reason.length>1000||!Array.isArray(result.evidenceIds))throw new Error('model_format');
    const evidenceIds=[...new Set(result.evidenceIds.filter(id=>ids.has(id)))].slice(0,5);
    const status=evidenceIds.length?result.status:'not-verified';
    return {...requirement,status,reason:status===result.status?result.reason:'',evidenceIds};
  });
}

export function score(rows) {
  const dimensions={};
  for(const [category,weight] of Object.entries(weights)){
    const items=rows.filter(row=>row.category===category);
    if(!items.length)continue;
    const importance=row=>row.priority==='mandatory'?3:1;
    dimensions[category]={
      weight,
      score:items.reduce((sum,row)=>sum+importance(row)*points[row.status],0)/items.reduce((sum,row)=>sum+importance(row),0),
    };
  }
  const total=Object.values(dimensions).reduce((sum,item)=>sum+item.weight,0);
  for(const item of Object.values(dimensions))item.weight/=total;
  const overall=Math.round(100*Object.values(dimensions).reduce((sum,item)=>sum+item.weight*item.score,0));
  return {overall,dimensions,mandatory:rows.filter(row=>row.priority==='mandatory').map(row=>row.id),gaps:rows.filter(row=>row.status!=='matched').map(row=>row.id)};
}

export function recommend(rows,resumes,evidence) {
  const ownerById=new Map(evidence.map(item=>[item.id,item.owner]));
  const profiles=resumes.map(resume=>({
    id:resume.file,
    evidenceIds:[...new Set(rows.filter(row=>points[row.status]>0).flatMap(row=>row.evidenceIds.filter(id=>resume.sources.includes(id)||resume.sources.includes(ownerById.get(id)))))],
  }));
  const fallback=profile=>profile.id==='general'?1:0;
  return profiles.sort((a,b)=>b.evidenceIds.length-a.evidenceIds.length||fallback(b)-fallback(a)).slice(0,2);
}
