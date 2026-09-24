/* ============================================================
   Content data — bilingual (zh / en)
   ============================================================ */
const DATA = {
  role: {
    zh: "软件开发 · 数据与 AI · 项目协作",
    en: "Software · Data & AI · Project Delivery"
  },
  degree: {
    zh: "2027 届海外本科应届生｜GPA 5.85/7.00（专业前 5%）",
    en: "Class of 2027 · Overseas Undergraduate · GPA 5.85/7.00 (Top 5%)"
  },
  contact: [
    { key: "phone", zh: "187 5215 8616", en: "187 5215 8616", href: "tel:+8618752158616" },
    { key: "wechat", zh: "微信 cjj0908ya", en: "WeChat cjj0908ya" },
    { key: "location", zh: "现居新加坡", en: "Based in Singapore" },
    { key: "mail", zh: "chujunjie0908@gmail.com", en: "chujunjie0908@gmail.com", href: "mailto:chujunjie0908@gmail.com" },
    { key: "github", zh: "github.com/Chu-Junjie", en: "github.com/Chu-Junjie", href: "https://github.com/Chu-Junjie" }
  ],
  nav: {
    education:  { zh: "教育背景", en: "Education" },
    skills:     { zh: "专业技能", en: "Skills" },
    experience: { zh: "实习经历", en: "Experience" },
    projects:   { zh: "精选项目", en: "Projects" },
    leadership: { zh: "校园领导力与荣誉", en: "Leadership & Honors" }
  },

  education: [
    {
      date: { zh: "2025.01 – 2027.03", en: "Jan 2025 – Mar 2027" },
      title: { zh: "詹姆斯库克大学新加坡校区", en: "James Cook University, Singapore" },
      org: { zh: "信息技术学士 Bachelor of Information Technology", en: "Bachelor of Information Technology" },
      meta: { zh: "新加坡", en: "Singapore" },
      current: true,
      bullets: [
        { zh: "GPA 5.85/7.00｜专业前 5%", en: "GPA 5.85/7.00 · Top 5% of cohort" },
        { zh: "高级软件工程、移动计算、数据库建模、机器学习与数据科学、网络安全应用", en: "Advanced Software Engineering, Mobile Computing, Database Modelling, Machine Learning & Data Science, Cybersecurity Applications" }
      ]
    },
    {
      date: { zh: "2021.10 – 2024.11", en: "Oct 2021 – Nov 2024" },
      title: { zh: "新加坡建设局学院（BCA Academy）", en: "BCA Academy, Singapore" },
      org: { zh: "建筑工程文凭 Diploma in Construction Engineering", en: "Diploma in Construction Engineering" },
      meta: { zh: "新加坡", en: "Singapore" },
      bullets: []
    }
  ],

  skills: [
    {
      label: { zh: "编程与客户端", en: "Programming & Client" },
      items: ["Kotlin", "Python", "JavaScript", "C++", "SQL", "Jetpack Compose", "MVVM", "Room", "Retrofit"]
    },
    {
      label: { zh: "Web 与数据", en: "Web & Data" },
      items: ["Flask", "HTML/CSS/JavaScript", "REST API", "PostgreSQL", "MySQL", "SQLite"]
    },
    {
      label: { zh: "工程与协作", en: "Engineering & Collaboration" },
      items: ["Git/GitHub", "GitHub Actions", "CI/CD", "JUnit", "Mockito", "Espresso", "Scrum", "Figma", "Lean UX"]
    }
  ],

  experience: [
    {
      date: { zh: "2026.07 – 至今", en: "Jul 2026 – Present" },
      title: { zh: "AI 工程师实习生", en: "AI Engineer Intern" },
      org: { zh: "上海意言科技有限公司（TYRION.AI）+ 新加坡 Basilos Pte. Ltd.", en: "TYRION.AI (Shanghai Yiyan Tech) + Basilos Pte. Ltd., Singapore" },
      current: true,
      bullets: [
        { zh: "完成 InsightFace、CompreFace、DeepFace 等方案选型与开放集测试，推动 Workbench Connector 集成；在小规模验证集中实现 13/13 已知样本匹配、10/10 陌生样本拒识，并稳定处理 6 类异常输入。",
          en: "Evaluated InsightFace, CompreFace and DeepFace through open-set testing to drive Workbench Connector integration — 13/13 known-sample matches and 10/10 unknown-sample rejections in a small validation set, and stable handling of 6 exception input types." },
        { zh: "完成 PNG-to-SVG 与 Traced Paths 工程验证，测试 36 张黑白技术图、60 张彩色插画及 3 组混合方案，为产品选型形成可复现实验依据。",
          en: "Ran PNG-to-SVG and Traced Paths engineering validation across 36 black-and-white technical drawings, 60 colour illustrations and 3 hybrid schemes, forming a reproducible basis for product selection." },
        { zh: "调研 20 个主流海外 AI 模型，并评估 Lark CLI 9 个模块的自动化能力，解决 Scope 授权与身份切换问题，沉淀团队复用操作规范。",
          en: "Researched 20 mainstream overseas AI models and assessed automation coverage of 9 Lark CLI modules; resolved Scope authorization and identity-switching issues and documented reusable team playbooks." }
      ]
    },
    {
      date: { zh: "2024.04 – 2024.09", en: "Apr 2024 – Sep 2024" },
      title: { zh: "运营与项目协调实习生", en: "Operations & Project Coordination Intern" },
      org: { zh: "新加坡 Specialists Trade Alliance of Singapore（STAS）", en: "Specialists Trade Alliance of Singapore (STAS)" },
      bullets: [
        { zh: "支持认证材料、供应商调研及空间参数测试，并维护 3 场行业展会的付款、参展商与市场研究数据。",
          en: "Supported certification materials, vendor research and spatial parameter testing; maintained payment, exhibitor and market-research data across 3 industry trade shows." }
      ]
    }
  ],

  projects: [
    {
      title: { zh: "ScamWise Campus", en: "ScamWise Campus" },
      role: { zh: "反诈骗教育与链接安全检测 Android 应用｜独立开发", en: "Anti-scam education & link-safety Android app · Solo developer" },
      meta: { zh: "2026.05 – 2026.08", en: "May 2026 – Aug 2026" },
      links: [
        { label: { zh: "GitHub", en: "GitHub" }, url: "https://github.com/Chu-Junjie/CP3406_ScamwiseCampus_JunjieChu" }
      ],
      stack: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "Retrofit", "Google Safe Browsing API", "JUnit", "Espresso"],
      bullets: [
        { zh: "基于 MVVM + Use Case + Repository 构建 5 页面应用，实现 18 个诈骗训练场景、URL 威胁检测和学习统计。",
          en: "Built a 5-screen app on an MVVM + Use Case + Repository architecture, delivering 18 scam-training scenarios, URL threat detection and learning statistics." },
        { zh: "编写 102 个自动化测试（79 单元、23 UI），将密钥配置迁出源码，并清理 Git 历史、重置曾暴露的 API Key。",
          en: "Wrote 102 automated tests (79 unit, 23 UI) moved key configuration out of source code, cleaned Git history and rotated exposed API keys." }
      ]
    },
    {
      title: { zh: "智能数码产品推荐平台", en: "Smart Digital Product Recommendation Platform" },
      role: { zh: "项目经理兼全栈开发｜4 人团队", en: "Project Manager & Full-stack Developer · Team of 4" },
      meta: { zh: "2026.05 – 2026.08", en: "May 2026 – Aug 2026" },
      links: [
        { label: { zh: "在线预览", en: "Live site" }, url: "https://chu-junjie.github.io/CP3407-PROJECT/" },
        { label: { zh: "GitHub", en: "GitHub" }, url: "https://github.com/Chu-Junjie/CP3407-PROJECT" }
      ],
      stack: ["Python", "Flask", "PostgreSQL", "HTML/CSS/JavaScript", "GitHub Actions", "Render", "GitHub Pages"],
      bullets: [
        { zh: "带领 4 人团队完成 3 次敏捷迭代，交付覆盖 5 类产品的推荐平台，10 个用户故事全部按期完成。",
          en: "Led a 4-person team through 3 agile sprints to deliver a recommendation platform covering 5 product categories, completing all 10 user stories on schedule." },
        { zh: "参与前端、API 联调与部署，独立实现分享结果功能；统筹需求追踪、PR 合并与发布验收，候选版本 12/12 项测试通过。",
          en: "Contributed to frontend/API integration and deployment, independently built the share-results feature, and managed requirement tracking, PR merges and release acceptance — the release candidate passed 12/12 tests." }
      ]
    },
    {
      title: { zh: "SmartSeat", en: "SmartSeat" },
      role: { zh: "AI 驱动课堂座位管理系统｜UI/前端负责人", en: "AI-driven classroom seating management system · UI/Frontend Lead" },
      meta: { zh: "2025.09 – 2025.12", en: "Sep 2025 – Dec 2025" },
      links: [
        { label: { zh: "GitHub", en: "GitHub" }, url: "https://github.com/WuJiawei25/CP3405-TR3-2025-P1T5" }
      ],
      stack: ["Scrum", "Figma", "FigJam", "GitHub Issues", "CI/CD", "Lean UX", "Design Thinking"],
      bullets: [
        { zh: "主导 16 屏高保真原型，执行 3 轮 Lean UX 测试、累计 60 人次参与；与后端协商接口，将座位检测、占用率预测与分配结果接入前端，完成模拟数据流的端到端原型演示。",
          en: "Led 16 high-fidelity prototype screens, ran 3 rounds of Lean UX testing with 60 participant sessions, agreed data interfaces with the backend team, and delivered an end-to-end prototype with simulated seat detection, occupancy prediction and allocation data." }
      ]
    }
  ],

  leadership: [
    {
      title: { zh: "JCU Learning Centre｜EMAS IT 同伴导师（2026.05 – 至今）", en: "JCU Learning Centre — EMAS IT Peer Mentor (May 2026 – Present)" },
      body: { zh: "为 50 余名学生提供编程及核心 IT 课程辅导，并与项目顾问跟踪学习进展。", en: "Tutored 50+ students in programming and core IT coursework, tracking learning progress together with program advisors." }
    },
    {
      title: { zh: "荣誉", en: "Honor" },
      body: { zh: "BIMAGE Virtual Design & Construction Boot Camp Competition 季军（四人团队，2023）", en: "BIMAGE Virtual Design & Construction Boot Camp Competition — 2nd Runner-up (4-person team, 2023)" }
    }
  ],

  footer: { zh: "更新于 2026 年 9 月", en: "Updated September 2026" }
};

// General profile: factual highlights shared across the supplied role-specific CVs.
DATA.nav.about = { zh: "个人概览", en: "Overview" };
DATA.nav.downloads = { zh: "简历下载", en: "Download CVs" };
DATA.summary = {
  zh: "2027 届信息技术本科生，具备软件开发、机器学习与数据分析实践，能够从需求梳理、方案实现推进到测试验证和团队交付。独立开发反诈骗 Android 应用，带领团队完成推荐平台与图像分类项目；英语可作为工作语言。",
  en: "Information Technology undergraduate graduating in 2027, with hands-on experience in software development, machine learning and data analysis. I work across requirements, implementation, testing and team delivery, from an independently built Android app to team-led recommendation and image-classification projects. Comfortable working in English."
};
DATA.availability = { zh: "2026 年 12 月下旬可到岗 · 2027 年 3 月毕业后可全职", en: "Available from late December 2026 · Full-time after graduation in March 2027" };
DATA.highlights = [
  { value: "102", zh: "Android 自动化测试", en: "Automated Android tests" },
  { value: "Top 5%", zh: "DrivenData 公开榜", en: "DrivenData public leaderboard" },
  { value: "3", zh: "带领团队完成敏捷迭代", en: "Team-led agile sprints" }
];
DATA.resumes = [
  { file: "software-development", zh: "软件开发工程师", en: "Software Development" },
  { file: "technical-project-management", zh: "技术项目管理", en: "Technical Project Management" },
  { file: "data-analysis", zh: "数据分析师", en: "Data Analysis" },
  { file: "test-development", zh: "测试开发工程师", en: "Test Development" },
  { file: "machine-learning", zh: "算法工程师", en: "Machine Learning" }
];
DATA.skills = [
  { label: {zh:"软件开发",en:"Software development"}, items:["Kotlin", "Python", "JavaScript", "SQL", "C++", "Jetpack Compose", "MVVM", "Room", "Retrofit", "Flask", "PostgreSQL"] },
  { label: {zh:"数据分析与机器学习",en:"Data & machine learning"}, items:["pandas", "NumPy", "scikit-learn", "PyTorch", "FastAI", "Weka", "EDA", "OpenCV", "Optuna"] },
  { label: {zh:"测试与工程实践",en:"Testing & engineering"}, items:["JUnit", "Mockito", "Espresso", "Git/GitHub", "GitHub Actions", "CI/CD", "OOF", "Group K-Fold"] },
  { label: {zh:"项目协作与用户研究",en:"Delivery & user research"}, items:["Scrum", "User Story", "Requirements Traceability", "Release Management", "Figma", "Lean UX"] }
];
DATA.projects[0].screenshots = [
  {file:"home", zh:"首页与学习进度", en:"Home & learning progress"},
  {file:"practice", zh:"诈骗场景练习", en:"Scenario practice"},
  {file:"statistics", zh:"学习统计", en:"Learning statistics"},
  {file:"verification", zh:"链接威胁检测", en:"Link verification"}
];
DATA.projects.splice(2, 0, {
  title: {zh:"野生动物保护图像分类",en:"Wildlife Conservation Image Classification"},
  role: {zh:"五人团队组长｜DrivenData 国际竞赛 · 公开榜前 5%",en:"Team lead · 5 members · DrivenData public leaderboard top 5%"},
  meta: {zh:"2026.05 – 2026.08",en:"May 2026 – Aug 2026"},
  stack: ["Python", "PyTorch", "FastAI", "ConvNeXt", "Optuna", "Stratified Group K-Fold"],
  bullets: [
    {zh:"针对 8 类、16,488 张图像搭建训练与验证流程；定位地理站点数据泄漏，采用按站点分组的交叉验证，实现训练与验证站点零重叠。",en:"Built a training and validation pipeline for 16,488 images across 8 classes. Identified site leakage and adopted grouped cross-validation with no site overlap between training and validation."},
    {zh:"主导 19 组控制变量实验，结合 TTA、五折集成与 logit 融合，将公开榜 Log Loss 从 2.5453 降至 1.0136，降低约 60%。",en:"Led 19 controlled experiments; combined TTA, five-fold ensembles and logit blending to reduce public leaderboard log loss from 2.5453 to 1.0136, a reduction of about 60%."}
  ]
}, {
  title: {zh:"学生辍学预测与模型比较",en:"Student Dropout Prediction & Model Comparison"},
  role: {zh:"个人项目｜数据分析与机器学习",en:"Individual project · Data analysis & machine learning"},
  meta: {zh:"",en:""},
  stack:["Weka", "EDA", "K-means", "J48", "Naive Bayes", "DL4J MLP"],
  bullets:[
    {zh:"分析 3,630 条学生记录与 36 项特征，完成探索性分析、特征处理、聚类与多模型比较，识别第二学期通过课程数为关键预测特征。",en:"Analysed 3,630 student records and 36 features through EDA, feature processing, clustering and model comparison; identified second-semester course completions as a key predictor."},
    {zh:"通过 10 折交叉验证调优 MLP，取得加权 F1 0.893、MCC 0.776、ROC-AUC 0.933、辍学召回率 0.825。",en:"Tuned an MLP using 10-fold cross-validation, achieving weighted F1 0.893, MCC 0.776, ROC-AUC 0.933 and dropout recall 0.825."}
  ]
});

const ICONS = {
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.9c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.2 2.3z"/></svg>',
  wechat: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 12.8c-3.6 0-6.5-2.4-6.5-5.4S4.9 2 8.5 2c3.3 0 6 2 6.4 4.6M15.8 21.9c-3.1 0-5.7-2.1-5.7-4.7s2.6-4.7 5.7-4.7 5.7 2.1 5.7 4.7c0 1.4-.8 2.6-2 3.5l.4 1.8-2-1.1c-.6.2-1.3.3-2.1.3z"/><circle cx="6.2" cy="6.6" r="0.9" fill="currentColor" stroke="none"/><circle cx="10.6" cy="6.6" r="0.9" fill="currentColor" stroke="none"/></svg>',
  location: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.3"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3.5 6.5 12 13l8.5-6.5"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.4-3.4-1.4-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.6 2.3 1.1 2.9.9.1-.7.3-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5.1 0-1.1.4-2 1-2.8-.1-.3-.5-1.4.1-2.9 0 0 .8-.3 2.8 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .6 1.5.2 2.6.1 2.9.6.8 1 1.7 1 2.8 0 4-2.4 4.8-4.6 5.1.3.3.6.9.6 1.9v2.8c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.6C22 6.6 17.5 2 12 2z"/></svg>'
};

/* ============================================================
   Render
   ============================================================ */
let lang = "zh";

function t(field){
  return field?.[lang] ?? field?.zh ?? "";
}

function el(tag, className, html){
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function renderContact(){
  const list = document.getElementById("contact-list");
  list.innerHTML = "";
  DATA.contact.forEach(c => {
    const li = document.createElement("li");
    const icon = ICONS[c.key] || "";
    const textVal = t(c);
    if (c.href){
      li.innerHTML = `${icon}<a href="${c.href}"${c.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${textVal}</a>`;
    } else {
      li.innerHTML = `${icon}<span>${textVal}</span>`;
    }
    li.className = "contact-" + c.key;
    list.appendChild(li);
  });
}

function renderNav(){
  document.querySelectorAll("#side-nav a[data-key]").forEach(a => {
    const key = a.getAttribute("data-key");
    a.textContent = t(DATA.nav[key]);
  });
  document.querySelectorAll("h2[data-key]").forEach(h => {
    const key = h.getAttribute("data-key");
    h.textContent = t(DATA.nav[key]);
  });
}

function renderEducation(){
  const wrap = document.getElementById("education-list");
  wrap.innerHTML = "";
  DATA.education.forEach(item => {
    const div = el("div", "t-item" + (item.current ? " is-current" : ""));
    let html = `<span class="t-line"></span><span class="t-dot"></span>`;
    html += `<div class="t-date">${t(item.date)}</div>`;
    html += `<div class="t-title">${t(item.title)}</div>`;
    html += `<div class="t-org">${t(item.org)}</div>`;
    if (item.meta) html += `<div class="t-meta">${t(item.meta)}</div>`;
    if (item.bullets && item.bullets.length){
      html += `<ul class="t-bullets">` + item.bullets.map(b => `<li>${t(b)}</li>`).join("") + `</ul>`;
    }
    div.innerHTML = html;
    wrap.appendChild(div);
  });
}

function renderSkills(){
  const wrap = document.getElementById("skills-list");
  wrap.innerHTML = "";
  DATA.skills.forEach(group => {
    const div = el("div", "skill-group");
    let html = `<p class="skill-group-label">${t(group.label)}</p>`;
    html += `<div class="skill-chips">` + group.items.map(s => `<span class="chip">${s}</span>`).join("") + `</div>`;
    div.innerHTML = html;
    wrap.appendChild(div);
  });
}

function renderExperience(){
  const wrap = document.getElementById("experience-list");
  wrap.innerHTML = "";
  DATA.experience.forEach(item => {
    const div = el("div", "t-item" + (item.current ? " is-current" : ""));
    let html = `<span class="t-line"></span><span class="t-dot"></span>`;
    html += `<div class="t-date">${t(item.date)}</div>`;
    html += `<div class="t-title">${t(item.title)}</div>`;
    html += `<div class="t-org">${t(item.org)}</div>`;
    if (item.bullets && item.bullets.length){
      html += `<ul class="t-bullets">` + item.bullets.map(b => `<li>${t(b)}</li>`).join("") + `</ul>`;
    }
    div.innerHTML = html;
    wrap.appendChild(div);
  });
}

function renderProjects(){
  const wrap = document.getElementById("projects-list");
  wrap.innerHTML = "";
  DATA.projects.forEach(p => {
    const div = el("div", "proj");
    let html = `<div class="proj-head"><span class="proj-title">${t(p.title)}</span><span class="proj-meta">${t(p.meta)}</span></div>`;
    html += `<div class="proj-role">${t(p.role)}</div>`;
    if (p.links && p.links.length){
      html += `<div class="proj-links">` + p.links.map(l =>
        `<a href="${l.url}" target="_blank" rel="noopener">${t(l.label)}</a>`
      ).join("") + `</div>`;
    }
    if (p.stack && p.stack.length){
      html += `<div class="proj-stack">${p.stack.join("  ·  ")}</div>`;
    }
    if (p.screenshots) {
      html += `<div class="project-gallery">` + p.screenshots.map(shot =>
        `<figure><a href="assets/scamwise/${shot.file}.jpg" target="_blank" rel="noopener" aria-label="${t(shot)} — ${lang === "zh" ? "查看原图" : "View full image"}"><img src="assets/scamwise/${shot.file}.jpg" alt="ScamWise Campus — ${t(shot)}" loading="lazy" width="474" height="1001"></a><figcaption>${t(shot)}</figcaption></figure>`
      ).join("") + `</div>`;
    }
    html += `<ul class="proj-bullets">` + p.bullets.map(b => `<li>${t(b)}</li>`).join("") + `</ul>`;
    div.innerHTML = html;
    wrap.appendChild(div);
  });
}

function renderLeadership(){
  const wrap = document.getElementById("leadership-list");
  wrap.innerHTML = "";
  DATA.leadership.forEach(item => {
    const div = el("div", "lead-item");
    div.innerHTML = `<p class="lead-item-title">${t(item.title)}</p><p class="lead-item-body">${t(item.body)}</p>`;
    wrap.appendChild(div);
  });
}

function renderStatic(){
  document.getElementById("role-text").textContent = t(DATA.role);
  document.getElementById("degree-text").textContent = t(DATA.degree);
  document.getElementById("footer-text").textContent = t(DATA.footer);
  document.title = lang === "zh"
    ? "褚俊杰 Junjie Chu — 个人简历"
    : "Junjie Chu — Résumé";
  document.querySelector('meta[name="description"]').content = t(DATA.summary);
  document.getElementById("summary-text").textContent = t(DATA.summary);
  document.getElementById("availability-text").textContent = t(DATA.availability);
  document.getElementById("highlights-list").innerHTML = DATA.highlights.map(h => `<div><strong>${h.value}</strong><span>${t(h)}</span></div>`).join("");
  document.getElementById("download-intro").textContent = lang === "zh" ? "按岗位方向下载中文 Word 简历。" : "Download a role-specific CV (Chinese · Word).";
  document.getElementById("downloads-list").innerHTML = DATA.resumes.map(r => `<a href="assets/resumes/${r.file}.docx" download="褚俊杰_${r.zh}.docx"><span>${t(r)}</span><small>DOCX ↓</small></a>`).join("");
  document.getElementById("print-button").textContent = lang === "zh" ? "打印 / 保存 PDF" : "Print / Save PDF";
  document.getElementById("cv-link").textContent = lang === "zh" ? "下载简历 ↓" : "Download CV ↓";
  document.querySelector(".skip-link").textContent = lang === "zh" ? "跳至正文" : "Skip to content";
  document.getElementById("side-nav").setAttribute("aria-label", lang === "zh" ? "简历章节" : "Résumé sections");
  document.getElementById("lang-toggle").setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换为中文");
  document.getElementById("lang-toggle").setAttribute("aria-pressed", String(lang === "en"));
}

function renderAll(){
  renderStatic();
  renderContact();
  renderNav();
  renderEducation();
  renderSkills();
  renderExperience();
  renderProjects();
  renderLeadership();
  initTimelineReveal();
}

/* ============================================================
   Language toggle
   ============================================================ */
function setLang(next){
  lang = next;
  document.documentElement.lang = lang === "zh" ? "zh" : "en";
  document.body.classList.toggle("lang-en", lang === "en");
  try { localStorage.setItem("site-lang", lang); } catch {}
  renderAll();
  window.dispatchEvent(new Event("resize"));
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  setLang(lang === "zh" ? "en" : "zh");
});

/* ============================================================
   Active-section highlighting
   ============================================================ */
function initScrollSpy(){
  const links = Array.from(document.querySelectorAll("#side-nav a"));
  const sections = links
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = "#" + entry.target.id;
      const link = links.find(a => a.getAttribute("href") === id);
      if (!link) return;
      if (entry.isIntersecting){
        links.forEach(a => { a.classList.remove("is-active"); a.removeAttribute("aria-current"); });
        link.classList.add("is-active");
        link.setAttribute("aria-current", "location");
      }
    });
  }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });

  sections.forEach(s => observer.observe(s));
}

/* ============================================================
   Timeline draw-on-scroll
   Each entry reveals its connecting line + dot once, the first
   time it enters the viewport (also fires immediately for items
   already visible when this runs, e.g. right after a re-render).
   ============================================================ */
let timelineObserver = null;

function initTimelineReveal(){
  if (timelineObserver) timelineObserver.disconnect();

  timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        timelineObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });

  document.querySelectorAll(".t-item").forEach(item => timelineObserver.observe(item));
}

/* ============================================================
   Sidebar scroll-progress rail
   ============================================================ */
function initScrollProgress(){
  let ticking = false;

  function update(){
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    doc.style.setProperty("--scroll-progress", progress.toFixed(4));
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking){
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener("resize", update);
  update();
}

/* ============================================================
   Init
   ============================================================ */
document.getElementById("print-button").addEventListener("click", () => window.print());

(function init(){
  let saved;
  try { saved = localStorage.getItem("site-lang"); } catch {}
  lang = saved === "en" ? "en" : "zh";
  document.documentElement.lang = lang === "zh" ? "zh" : "en";
  document.body.classList.toggle("lang-en", lang === "en");
  renderAll();
  initScrollSpy();
  initScrollProgress();
})();

