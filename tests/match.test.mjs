import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import test from 'node:test';
import { normalizeRequirements, recommend, score, verifyMatch } from '../server/match.mjs';

const data=JSON.parse(await readFile('src/data/public.json','utf8'));
const row=(category,status,priority='mandatory')=>({category,status,priority});
test('weights are renormalised for only the dimensions in a JD',()=>{
  const result=score([row('technical','matched'),row('experience','partial')]);
  assert.equal(result.overall,79);
  assert.deepEqual(Object.keys(result.dimensions),['technical','experience']);
  assert.equal(score([row('education','not-met')]).overall,0);
});
test('mandatory requirements weigh three times as much as preferred requirements',()=>{
  assert.equal(score([row('technical','partial'),row('technical','matched','preferred')]).overall,63);
});
test('requirements are validated, deduplicated, and mapped to one scoring category',()=>{
  assert.deepEqual(normalizeRequirements([
    {text:' Python ',category:'technical',priority:'mandatory'},
    {text:'python',category:'experience',priority:'preferred'},
  ]),[{id:'r1',text:'Python',category:'technical',priority:'mandatory'}]);
  assert.throws(()=>normalizeRequirements([]));
  assert.throws(()=>normalizeRequirements([{text:'x',category:'__proto__',priority:'preferred'}]));
});
test('unverified and nonexistent evidence cannot contribute points',()=>{
  const requirements=normalizeRequirements([{text:'Kotlin',category:'technical',priority:'mandatory'}]);
  const matched=verifyMatch(requirements,[{id:'r1',status:'matched',reason:'Evidence',evidenceIds:['scamwise','invented']}],data.evidence);
  assert.deepEqual(matched[0].evidenceIds,['scamwise']);
  assert.equal(score(matched).overall,100);
  const unverified=verifyMatch(requirements,[{id:'r1',status:'not-met',reason:'unsupported',evidenceIds:['invented']}],data.evidence);
  assert.equal(unverified[0].status,'not-verified');
  assert.equal(score(unverified).overall,0);
  assert.throws(()=>verifyMatch(requirements,[],data.evidence));
});
test('hard gaps remain visible even when other categories score highly',()=>{
  const result=score([{...row('technical','matched'),id:'technical'}, {...row('education','not-met'),id:'degree'}]);
  assert.equal(result.overall,80);
  assert.deepEqual(result.mandatory,['technical','degree']);
  assert.deepEqual(result.gaps,['degree']);
});
test('role recommendations depend on confirmed evidence and always include two real files',()=>{
  const choices=recommend([{status:'matched',evidenceIds:['wildlife','library-sql','dropout']}],data.resumes,data.evidence);
  assert.equal(choices[0].id,'data-analysis');
  assert.equal(choices.length,2);
  assert.equal(recommend([],data.resumes,data.evidence)[0].id,'general');
});
test('Python, Android, data and QA evidence rank the corresponding résumé versions',()=>{
  for(const [ids,expected] of [
    [['work-basilos','wildlife','dropout'],'machine-learning'],
    [['scamwise','sg-navi','recommendation'],'software-development'],
    [['library-sql','wildlife','dropout'],'data-analysis'],
    [['scamwise','work-basilos','recommendation'],'test-development'],
  ]){
    const result=recommend([{status:'matched',evidenceIds:ids}],data.resumes,data.evidence);
    assert.equal(result[0].id,expected);
  }
});
test('the publication boundary excludes the reference letter, legacy source and family links',async()=>{
  const files=await readdir('dist',{recursive:true});
  assert(!files.some(path=>/academic-reference|data\.js|photo\.png|photo\.jpg/.test(path)));
  const client=JSON.stringify(data);
  assert(!/jcu-academic-reference|JJTrip|gaokao_quest|instagram/i.test(client));
  assert.equal(data.projects.length,8);
  assert.equal(data.experience.length,3);
  assert.equal(data.resumes.length,6);
  assert.equal(new Set(data.evidence.map(item=>item.id)).size,data.evidence.length);
  for(const source of data.evidence){
    assert(source.public);
    if(source.url.startsWith('assets/'))await readFile('dist/'+source.url);
  }
});
