import { cp, mkdir, mkdtemp, readFile, rename, rm, writeFile } from 'node:fs/promises';
import vm from 'node:vm';
import * as icons from 'simple-icons';

const legacy = vm.runInNewContext((await readFile('data.js', 'utf8')) + '\nDATA');
const skills = JSON.parse(await readFile('src/data/skills.json', 'utf8'));
const assets = new Set([
  'assets/favicon.svg', 'assets/social-card.png', 'assets/portrait-224.webp',
  'assets/portrait-336.webp', 'assets/copilot-avatar.webp',
  'assets/evidence/leaderboard-record.json', 'assets/evidence/sg-navi-home.png',
]);
const covers = { 'sg-navi': 'assets/evidence/sg-navi-home.png' };
const evidence = [];
const pair = (value) => [value.zh, value.en];
function record(id, owner, kind, description, url, facts, verifiedAt) {
  evidence.push({ id, owner, kind, description, url, facts, public: true, languages: ['zh', 'en'], ...(verifiedAt && { verifiedAt }) });
  if (url.startsWith('assets/')) assets.add(url);
}
const workIds = ['basilos', 'stas', 'huaxia'];
const experience = legacy.experience.map((work, index) => {
  const id = workIds[index];
  const logo = `assets/work-logos/${work.website.logo}.png`;
  assets.add(logo);
  const url = `#/experience/${id}`;
  record(`work-${id}`, id, 'experience', pair(work.org), url, work.bullets.map(pair));
  return { ...work, id, logo, url };
});
const groups = {
  'sg-navi': 'software', scamwise: 'software', recommendation: 'software', wildlife: 'ai',
  dropout: 'ai', smartseat: 'software', flyhigh: 'data', 'library-sql': 'data',
};
const projects = legacy.projects.map((project) => {
  const { id } = project;
  const logo = `assets/project-logos/${project.logo ?? id + '.svg'}`;
  assets.add(logo);
  const url = `#/projects/${id}`;
  const gallery = (project.evidence ?? []).map((entry) => ({
    ...entry, caption: pair(entry.caption), source: entry.source ? pair(entry.source) : null,
  }));
  for (const shot of project.screenshots ?? []) {
    gallery.push({ src: `assets/scamwise/${shot.file}.jpg`, width: 474, height: 1001, caption: pair(shot) });
  }
  record(id, id, 'project', pair(project.title), url, [
    pair(project.contribution), ...(project.bullets ?? []).map(pair), pair(project.validation),
    ['技术：' + project.stack.join(', '), 'Technology: ' + project.stack.join(', ')],
  ]);
  gallery.forEach((entry, index) => record(`${id}-image-${index + 1}`, id, 'image', entry.caption, entry.src, []));
  (project.links ?? []).forEach((entry, index) => record(`${id}-link-${index + 1}`, id, entry.kind ?? 'link', pair(entry.label), entry.url, []));
  return { ...project, group: groups[id], logo, url, gallery, cover: covers[id] ?? gallery[0].src };
});
const leaderboard=JSON.parse(await readFile('assets/evidence/leaderboard-record.json','utf8'));
record('wildlife-leaderboard', 'wildlife', 'record', ['DrivenData 公开榜记录','DrivenData public leaderboard record'], 'assets/evidence/leaderboard-record.json', [[
  `截图记录排名 ${leaderboard.rank}/${leaderboard.lastRankedEntry}，Log Loss ${leaderboard.publicLogLoss}。`,
  `Screenshot record: ${leaderboard.rank}/${leaderboard.lastRankedEntry}, log loss ${leaderboard.publicLogLoss}.`,
]]);
const education = legacy.education.map((school, index) => {
  const id = index === 0 ? 'jcu' : 'bcaa';
  assets.add(`assets/school-logos/${school.logo}`);
  const status = index === 0 ? ['预计 2027 年 2 月毕业', 'Expected to graduate in February 2027'] : pair(school.date);
  record(`education-${id}`, id, 'education', pair(school.title), '#/about?tab=education', [
    pair(school.org), status, ...school.bullets.map(pair),
  ]);
  return { ...school, id, status };
});
const achievements = legacy.leadership.filter(({ file }) => file !== 'jcu-academic-reference').map((item) => {
  const pdf = `assets/certificates/${item.file}.pdf`;
  const preview = `assets/certificate-previews/${item.file}.jpg`;
  assets.add(preview);
  record(`achievement-${item.file}`, item.file, 'achievement', pair(item.title), pdf, [pair(item.body)]);
  return { ...item, pdf, preview };
});
const roleEvidence = {
  'software-development': ['scamwise', 'sg-navi', 'recommendation'],
  'machine-learning': ['work-basilos', 'wildlife', 'dropout'],
  'data-analysis': ['library-sql', 'wildlife', 'dropout'],
  'test-development': ['scamwise', 'work-basilos', 'recommendation'],
  'technical-project-management': ['sg-navi', 'recommendation', 'smartseat', 'work-stas'],
  general: ['work-basilos', 'scamwise', 'work-stas', 'education-jcu'],
};
const resumes = [];
for (const resume of legacy.resumes) {
  const variants = {};
  for (const lang of ['zh', 'en']) {
    const stem = resume.file + (lang === 'en' ? '-en' : '');
    const pdf = `assets/resumes/${stem}.pdf`;
    const preview = `assets/resume-previews/${stem}.jpg`;
    const word = lang === 'zh' || resume.file === 'general' ? `assets/resumes/${stem}.docx` : null;
    [pdf, preview, word].filter(Boolean).forEach((file) => assets.add(file));
    variants[lang] = { pdf, preview, word };
  }
  resumes.push({ ...resume, variants, sources: roleEvidence[resume.file] });
}
const publicDir = await mkdtemp('.v2-stage-');
try {
await mkdir(`${publicDir}/skills`, { recursive: true });
for (const skill of skills) {
  const icon = icons[skill.icon];
  if (!icon) throw new Error(`Unknown brand icon: ${skill.icon}`);
  const svg = icon.svg.replace('<svg ', `<svg fill="#${icon.hex}" `);
  const destination = `${publicDir}/skills/${skill.id}.svg`;
  if (['python','onnx'].includes(skill.id)) await cp(`assets/brand/${skill.id}.svg`, destination);
  else await writeFile(destination, svg);
  record(`skill-${skill.id}`, skill.id, 'skill', [skill.name, skill.name], `#/skills?skill=${skill.id}`, [skill.use]);
}
for (const asset of assets) {
  await mkdir(`${publicDir}/${asset.slice(0, asset.lastIndexOf('/'))}`, { recursive: true });
  await cp(asset, `${publicDir}/${asset}`);
}
await rm('.v2-public', { recursive: true, force: true });
await rename(publicDir, '.v2-public');
} finally {
  await rm(publicDir, { recursive: true, force: true });
}
const data = {
  profile: { summary: legacy.summary, internship: legacy.basilosSummary, work: legacy.profileDetails },
  education, experience, projects, skills, practices: legacy.skills,
  achievements, resumes, evidence,
  contact: legacy.contact.filter(({ key }) => key !== 'instagram'),
  personal: { paragraphs: legacy.personal.paragraphs.slice(0, 2) },
};
await writeFile('src/data/public.json', JSON.stringify(data, null, 2) + '\n');
console.log(`Prepared ${assets.size} public assets and ${evidence.length} evidence records.`);
