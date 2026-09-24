// Bilingual portfolio content. Keep claims aligned with source materials.
const DATA = {
  "role": {
    "zh": "信息技术 · 2027 届",
    "en": "Information Technology · Class of 2027"
  },
  "degree": {
    "zh": "JCU 新加坡 · 本科在读",
    "en": "JCU Singapore · Undergraduate"
  },
  "contact": [
    {
      "key": "phone",
      "zh": "187 5215 8616",
      "en": "187 5215 8616",
      "href": "tel:+8618752158616"
    },
    {
      "key": "wechat",
      "zh": "微信 cjj0908ya",
      "en": "WeChat cjj0908ya"
    },
    {
      "key": "location",
      "zh": "现居新加坡",
      "en": "Based in Singapore"
    },
    {
      "key": "mail",
      "zh": "chujunjie0908@gmail.com",
      "en": "chujunjie0908@gmail.com",
      "href": "mailto:chujunjie0908@gmail.com"
    },
    {
      "key": "github",
      "zh": "github.com/Chu-Junjie",
      "en": "github.com/Chu-Junjie",
      "href": "https://github.com/Chu-Junjie"
    }
  ],
  "nav": {
    "about": {
      "zh": "概览",
      "en": "Overview"
    },
    "projects": {
      "zh": "项目",
      "en": "Projects"
    },
    "experience": {
      "zh": "经历",
      "en": "Experience"
    },
    "education": {
      "zh": "背景",
      "en": "Background"
    },
    "resources": {
      "zh": "联系",
      "en": "Contact"
    }
  },
  "education": [
    {
      "date": {
        "zh": "2025.01 – 2027.03",
        "en": "Jan 2025 – Mar 2027"
      },
      "title": {
        "zh": "詹姆斯库克大学新加坡校区",
        "en": "James Cook University, Singapore"
      },
      "org": {
        "zh": "信息技术学士 Bachelor of Information Technology",
        "en": "Bachelor of Information Technology"
      },
      "meta": {
        "zh": "新加坡",
        "en": "Singapore"
      },
      "current": true,
      "bullets": [
        {
          "zh": "GPA 5.85/7.00｜专业前 5%",
          "en": "GPA 5.85/7.00 · Top 5% of cohort"
        },
        {
          "zh": "高级软件工程、移动计算、数据库建模、机器学习与数据科学、网络安全应用",
          "en": "Advanced Software Engineering, Mobile Computing, Database Modelling, Machine Learning & Data Science, Cybersecurity Applications"
        }
      ]
    },
    {
      "date": {
        "zh": "2021.10 – 2024.11",
        "en": "Oct 2021 – Nov 2024"
      },
      "title": {
        "zh": "新加坡建设局学院（BCA Academy）",
        "en": "BCA Academy, Singapore"
      },
      "org": {
        "zh": "建筑工程文凭 Diploma in Construction Engineering",
        "en": "Diploma in Construction Engineering"
      },
      "meta": {
        "zh": "新加坡",
        "en": "Singapore"
      },
      "bullets": []
    }
  ],
  "skills": [
    {
      "label": {
        "zh": "软件开发",
        "en": "Software development"
      },
      "items": [
        "Kotlin",
        "Python",
        "JavaScript",
        "SQL",
        "C++",
        "Jetpack Compose",
        "MVVM",
        "Room",
        "Retrofit",
        "Flask",
        "PostgreSQL"
      ]
    },
    {
      "label": {
        "zh": "数据分析与机器学习",
        "en": "Data & machine learning"
      },
      "items": [
        "pandas",
        "NumPy",
        "scikit-learn",
        "PyTorch",
        "FastAI",
        "Weka",
        "EDA",
        "OpenCV",
        "Optuna"
      ]
    },
    {
      "label": {
        "zh": "测试与工程实践",
        "en": "Testing & engineering"
      },
      "items": [
        "JUnit",
        "Mockito",
        "Espresso",
        "Git/GitHub",
        "GitHub Actions",
        "CI/CD",
        "OOF",
        "Group K-Fold"
      ]
    },
    {
      "label": {
        "zh": "项目协作与用户研究",
        "en": "Delivery & user research"
      },
      "items": [
        "Scrum",
        "User Story",
        "Requirements Traceability",
        "Release Management",
        "Figma",
        "Lean UX"
      ]
    }
  ],
  "experience": [
    {
      "date": {
        "zh": "2026.07 – 至今",
        "en": "Jul 2026 – Present"
      },
      "title": {
        "zh": "AI 工程师实习生",
        "en": "AI Engineer Intern"
      },
      "org": {
        "zh": "上海意言科技有限公司（TYRION.AI）+ 新加坡 Basilos Pte. Ltd.",
        "en": "TYRION.AI (Shanghai Yiyan Tech) + Basilos Pte. Ltd., Singapore"
      },
      "current": true,
      "bullets": [
        {
          "zh": "完成 InsightFace、CompreFace、DeepFace 等方案选型与开放集测试，推动 Workbench Connector 集成；在小规模验证集中实现 13/13 已知样本匹配、10/10 陌生样本拒识，并稳定处理 6 类异常输入。",
          "en": "Evaluated InsightFace, CompreFace and DeepFace through open-set testing to drive Workbench Connector integration — 13/13 known-sample matches and 10/10 unknown-sample rejections in a small validation set, and stable handling of 6 exception input types."
        },
        {
          "zh": "完成 PNG-to-SVG 与 Traced Paths 工程验证，测试 36 张黑白技术图、60 张彩色插画及 3 组混合方案，为产品选型形成可复现实验依据。",
          "en": "Ran PNG-to-SVG and Traced Paths engineering validation across 36 black-and-white technical drawings, 60 colour illustrations and 3 hybrid schemes, forming a reproducible basis for product selection."
        },
        {
          "zh": "调研 20 个主流海外 AI 模型，并评估 Lark CLI 9 个模块的自动化能力，解决 Scope 授权与身份切换问题，沉淀团队复用操作规范。",
          "en": "Researched 20 mainstream overseas AI models and assessed automation coverage of 9 Lark CLI modules; resolved Scope authorization and identity-switching issues and documented reusable team playbooks."
        }
      ]
    },
    {
      "date": {
        "zh": "2024.04 – 2024.09",
        "en": "Apr 2024 – Sep 2024"
      },
      "title": {
        "zh": "运营与项目协调实习生",
        "en": "Operations & Project Coordination Intern"
      },
      "org": {
        "zh": "新加坡 Specialists Trade Alliance of Singapore（STAS）",
        "en": "Specialists Trade Alliance of Singapore (STAS)"
      },
      "bullets": [
        {
          "zh": "支持认证材料、供应商调研及空间参数测试，并维护 3 场行业展会的付款、参展商与市场研究数据。",
          "en": "Supported certification materials, vendor research and spatial parameter testing; maintained payment, exhibitor and market-research data across 3 industry trade shows."
        }
      ]
    }
  ],
  "projects": [
    {
      "title": {
        "zh": "ScamWise Campus",
        "en": "ScamWise Campus"
      },
      "role": {
        "zh": "反诈骗教育与链接安全检测 Android 应用｜独立开发",
        "en": "Anti-scam education & link-safety Android app · Solo developer"
      },
      "meta": {
        "zh": "2026.05 – 2026.08",
        "en": "May 2026 – Aug 2026"
      },
      "links": [
        {
          "label": {
            "zh": "GitHub",
            "en": "GitHub"
          },
          "url": "https://github.com/Chu-Junjie/CP3406_ScamwiseCampus_JunjieChu"
        }
      ],
      "stack": [
        "Kotlin",
        "Jetpack Compose",
        "MVVM",
        "Room",
        "Retrofit",
        "Google Safe Browsing API",
        "JUnit",
        "Espresso"
      ],
      "bullets": [
        {
          "zh": "基于 MVVM + Use Case + Repository 构建 5 页面应用，实现 18 个诈骗训练场景、URL 威胁检测和学习统计。",
          "en": "Built a 5-screen app on an MVVM + Use Case + Repository architecture, delivering 18 scam-training scenarios, URL threat detection and learning statistics."
        },
        {
          "zh": "编写 102 个自动化测试（79 单元、23 UI），将密钥配置迁出源码，并清理 Git 历史、重置曾暴露的 API Key。",
          "en": "Wrote 102 automated tests (79 unit, 23 UI), moved key configuration out of source code, cleaned Git history and rotated exposed API keys."
        }
      ],
      "screenshots": [
        {
          "file": "home",
          "zh": "首页与学习进度",
          "en": "Home & learning progress"
        },
        {
          "file": "practice",
          "zh": "诈骗场景练习",
          "en": "Scenario practice"
        },
        {
          "file": "statistics",
          "zh": "学习统计",
          "en": "Learning statistics"
        },
        {
          "file": "verification",
          "zh": "链接威胁检测",
          "en": "Link verification"
        }
      ],
      "id": "scamwise",
      "category": {
        "zh": "应用开发 / 自动化测试",
        "en": "APP DEVELOPMENT / TESTING"
      },
      "tagline": {
        "zh": "让诈骗识别成为可以练习的技能。",
        "en": "Practising safer decisions, one scenario at a time."
      },
      "problem": {
        "zh": "为学生提供诈骗场景训练、学习反馈与链接威胁检测。",
        "en": "Help students practise scam recognition, review their decisions and check links for known threats."
      },
      "contribution": {
        "zh": "独立完成 5 个核心页面、分层架构、本地数据存储和外部 API 集成。",
        "en": "Independently built five core screens, a layered architecture, local persistence and external API integration."
      },
      "result": {
        "zh": "18 个训练场景 · 102 个自动化测试",
        "en": "18 scenarios · 102 automated tests"
      },
      "decision": {
        "zh": "采用 MVVM + Use Case + Repository 分离界面与业务逻辑，以 Room 保存学习记录，不要求用户创建账号或填写个人资料。外部 URL 检测前征得同意，将结果表述为“未发现已知威胁”；提供清除历史、语义标签和反馈提示，避免恐吓式文案与惩罚性打卡机制。",
        "en": "Separated UI and business logic using MVVM, use cases and repositories. Stored learning attempts in Room without requiring accounts or personal profiles. Required consent before external URL checks, used “no known threat” wording, and provided history deletion, semantic labels and feedback announcements without fear-based messaging or punitive streaks."
      },
      "validation": {
        "zh": "79 个单元测试与 23 个 UI 测试覆盖业务层和页面流程。将密钥配置迁出源码，清理 Git 历史并重置曾暴露的 API Key。",
        "en": "79 unit tests and 23 UI tests cover business logic and screen flows. Moved key configuration out of source code, cleaned Git history and rotated exposed API keys."
      },
      "reflection": {
        "zh": "反思中识别出自动化测试无法替代发布审查：测试没有发现密钥暴露、备份配置假设和大屏适配问题。下一步计划提前梳理数据流与威胁模型，并把备份规则、导航一致性、无障碍和最终打包文件检查纳入发布清单。",
        "en": "The reflection identified gaps beyond automated tests: credential exposure, assumptions about backup configuration and large-screen layouts. Planned improvements include earlier data-flow and threat modelling, and release checks for backup rules, navigation consistency, accessibility and packaged files."
      }
    },
    {
      "title": {
        "zh": "智能数码产品推荐平台",
        "en": "Smart Digital Product Recommendation Platform"
      },
      "role": {
        "zh": "项目经理兼全栈开发｜4 人团队",
        "en": "Project Manager & Full-stack Developer · Team of 4"
      },
      "meta": {
        "zh": "2026.05 – 2026.08",
        "en": "May 2026 – Aug 2026"
      },
      "links": [
        {
          "label": {
            "zh": "在线预览",
            "en": "Live site"
          },
          "url": "https://chu-junjie.github.io/CP3407-PROJECT/"
        },
        {
          "label": {
            "zh": "GitHub",
            "en": "GitHub"
          },
          "url": "https://github.com/Chu-Junjie/CP3407-PROJECT"
        }
      ],
      "stack": [
        "Python",
        "Flask",
        "PostgreSQL",
        "HTML/CSS/JavaScript",
        "GitHub Actions",
        "Render",
        "GitHub Pages"
      ],
      "bullets": [
        {
          "zh": "带领 4 人团队完成 3 次敏捷迭代，交付覆盖 5 类产品的推荐平台，10 个用户故事全部按期完成。",
          "en": "Led a 4-person team through 3 agile sprints to deliver a recommendation platform covering 5 product categories, completing all 10 user stories on schedule."
        },
        {
          "zh": "参与前端、API 联调与部署，独立实现分享结果功能；统筹需求追踪、PR 合并与发布验收，候选版本 12/12 项测试通过。",
          "en": "Contributed to frontend/API integration and deployment, independently built the share-results feature, and managed requirement tracking, PR merges and release acceptance — the release candidate passed 12/12 tests."
        }
      ],
      "id": "recommendation",
      "category": {
        "zh": "全栈开发 / 项目协作",
        "en": "FULL-STACK / PROJECT DELIVERY"
      },
      "tagline": {
        "zh": "将用户需求推进为可交付的推荐平台。",
        "en": "Turning requirements into a working recommendation platform."
      },
      "problem": {
        "zh": "构建覆盖 5 类数码产品的推荐平台，支持结果展示与分享。",
        "en": "Build a recommendation platform spanning five digital-product categories, with result display and sharing."
      },
      "contribution": {
        "zh": "担任四人团队项目经理兼全栈开发，参与前端、API 联调与部署，独立实现结果分享功能。",
        "en": "Project manager and full-stack contributor in a four-person team; contributed to frontend/API integration and deployment, and independently implemented result sharing."
      },
      "result": {
        "zh": "3 次迭代 · 10 个用户故事按期交付",
        "en": "3 sprints · 10 user stories delivered on time"
      },
      "decision": {
        "zh": "制定用户故事验收标准，追踪需求与测试对应关系，协调 PR 合并和版本冻结。用户指南记录了匿名搜索、登录后的收藏与历史记录，以及通过 /api/compare 返回最多三款产品对比的团队交付流程；缺失参数明确显示 N/A 或 Not specified。",
        "en": "Defined acceptance criteria, traced requirements to tests and coordinated PR merges and release freezes. The team’s user guide documents anonymous search, account-based favorites and history, and comparison of up to three products through /api/compare. Missing specifications are shown as N/A or Not specified."
      },
      "validation": {
        "zh": "候选版本通过 12/12 项测试；统筹发布检查清单与验收。交付结果为团队成果，个人实现重点为分享功能和前后端集成。",
        "en": "The release candidate passed 12/12 tests. Managed release checklists and acceptance. Delivery was a team outcome; my implementation focused on sharing and frontend/backend integration."
      },
      "boundary": {
        "zh": "课程教学原型 · 产品与价格来自后端及公开／教学数据，非实时零售库存。截图展示团队交付界面。",
        "en": "Educational prototype · Product and price data comes from the backend and public/educational datasets, not live retail inventory. Screenshots show the team’s delivered interface."
      },
      "evidence": [
        {
          "src": "assets/evidence/recommendation-home.png",
          "width": 893,
          "height": 545,
          "caption": {
            "zh": "结构化需求输入与匿名搜索",
            "en": "Structured preferences & anonymous search"
          },
          "source": {
            "zh": "用户指南 · 第 1 页，图 1",
            "en": "User guide · Page 1, Figure 1"
          }
        },
        {
          "src": "assets/evidence/recommendation-compare.jpg",
          "width": 893,
          "height": 578,
          "caption": {
            "zh": "三产品对比与缺失参数展示",
            "en": "Three-product comparison & missing specifications"
          },
          "source": {
            "zh": "用户指南 · 第 10 页，图 8",
            "en": "User guide · Page 10, Figure 8"
          }
        }
      ]
    },
    {
      "title": {
        "zh": "野生动物保护图像分类",
        "en": "Wildlife Conservation Image Classification"
      },
      "role": {
        "zh": "五人团队组长｜DrivenData 国际竞赛 · 公开榜前 5%",
        "en": "Team lead · 5 members · DrivenData public leaderboard top 5%"
      },
      "meta": {
        "zh": "2026.05 – 2026.08",
        "en": "May 2026 – Aug 2026"
      },
      "stack": [
        "Python",
        "PyTorch",
        "FastAI",
        "ConvNeXt",
        "Optuna",
        "Stratified Group K-Fold"
      ],
      "bullets": [
        {
          "zh": "针对 8 类、16,488 张图像搭建训练与验证流程；定位地理站点数据泄漏，采用按站点分组的交叉验证，实现训练与验证站点零重叠。",
          "en": "Built a training and validation pipeline for 16,488 images across 8 classes. Identified site leakage and adopted grouped cross-validation with no site overlap between training and validation."
        },
        {
          "zh": "主导 19 组控制变量实验，结合 TTA、五折集成与 logit 融合，将公开榜 Log Loss 从 2.5453 降至 1.0136，降低约 60%。",
          "en": "Led 19 controlled experiments; combined TTA, five-fold ensembles and logit blending to reduce public leaderboard log loss from 2.5453 to 1.0136, a reduction of about 60%."
        }
      ],
      "id": "wildlife",
      "category": {
        "zh": "机器学习 / 验证策略",
        "en": "MACHINE LEARNING / VALIDATION"
      },
      "tagline": {
        "zh": "先修正验证方式，再优化模型表现。",
        "en": "Fixing validation before optimising the model."
      },
      "problem": {
        "zh": "对 8 类、16,488 张野生动物图像进行分类，并评估跨站点表现。",
        "en": "Classify 16,488 wildlife images across eight classes and evaluate performance across sites."
      },
      "contribution": {
        "zh": "担任五人团队组长，搭建训练与验证流程，主导 19 组控制变量实验及模型调优。",
        "en": "Led a five-person team, built the training and validation pipeline and led 19 controlled experiments and model tuning."
      },
      "result": {
        "zh": "公开榜 Log Loss：2.5453 → 1.0136",
        "en": "Public leaderboard log loss: 2.5453 → 1.0136"
      },
      "decision": {
        "zh": "定位随机划分造成的地理站点数据泄漏，改用 Stratified Group K-Fold 按站点分组，实现训练与验证站点零重叠。",
        "en": "Identified geographic site leakage in random splits and adopted Stratified Group K-Fold, with no site overlap between training and validation."
      },
      "validation": {
        "zh": "结合 TTA、五折集成与 logit 融合，公开榜 Log Loss 降低约 60%。该指标来自公开榜，不等同于独立生产环境表现。",
        "en": "Combined TTA, five-fold ensembles and logit blending to reduce public leaderboard log loss by about 60%. This is a public leaderboard result, not a measurement of production performance."
      }
    },
    {
      "title": {
        "zh": "学生辍学预测与模型比较",
        "en": "Student Dropout Prediction & Model Comparison"
      },
      "role": {
        "zh": "个人课程项目｜数据分析与机器学习",
        "en": "Individual course project · Data analysis & machine learning"
      },
      "meta": {
        "zh": "",
        "en": ""
      },
      "stack": [
        "Weka",
        "EDA",
        "K-means",
        "J48",
        "Naive Bayes",
        "DL4J MLP"
      ],
      "bullets": [
        {
          "zh": "分析 3,630 条学生记录与 36 项特征，完成探索性分析、特征处理、聚类与多模型比较，识别第二学期通过课程数为关键预测特征。",
          "en": "Analysed 3,630 student records and 36 features through EDA, feature processing, clustering and model comparison; identified second-semester course completions as a key predictor."
        },
        {
          "zh": "通过 10 折交叉验证调优 MLP，取得加权 F1 0.893、MCC 0.776、ROC-AUC 0.933、辍学召回率 0.825。",
          "en": "Tuned an MLP using 10-fold cross-validation, achieving weighted F1 0.893, MCC 0.776, ROC-AUC 0.933 and dropout recall 0.825."
        }
      ],
      "id": "dropout",
      "category": {
        "zh": "数据分析 / 模型比较",
        "en": "DATA ANALYSIS / MODEL COMPARISON"
      },
      "tagline": {
        "zh": "从学生记录中识别辍学预测信号。",
        "en": "Finding predictive signals in student records."
      },
      "problem": {
        "zh": "分析 3,630 条学生记录及 36 项特征，比较辍学预测模型。",
        "en": "Analyse 3,630 student records and 36 features to compare dropout-prediction models."
      },
      "contribution": {
        "zh": "个人完成探索性分析、特征处理、K-means 聚类和多模型比较。",
        "en": "Individually performed EDA, feature processing, K-means clustering and model comparison."
      },
      "result": {
        "zh": "10 折交叉验证 · 加权 F1 0.893",
        "en": "10-fold cross-validation · Weighted F1 0.893"
      },
      "decision": {
        "zh": "以 ZeroR 为基线，比较 J48、Naive Bayes、IBk 与 DL4J MLP 的 10 折交叉验证结果，权衡可解释性与分类指标。普通 MLP 因计算成本改用 66% 训练集划分，报告单独注明该结果不能与交叉验证指标直接比较。",
        "en": "Compared J48, Naive Bayes, IBk and DL4J MLP using 10-fold cross-validation against a ZeroR baseline, weighing interpretability against classification metrics. Standard MLP used a 66% training split due to computational cost; the report explicitly separates that result from cross-validation comparisons."
      },
      "validation": {
        "zh": "Q9 的 Run C 原始截图确认：3,630 条记录、10 折分层交叉验证，准确率 89.4215%、加权 F1 0.893、MCC 0.776、ROC-AUC 0.933、辍学召回率 0.825。配置为 100 epochs、batch size 64、learning rate 0.005、早停验证比例 8%。",
        "en": "The original Q9 Run C screenshot records 3,630 instances and stratified 10-fold cross-validation: accuracy 89.4215%, weighted F1 0.893, MCC 0.776, ROC-AUC 0.933 and dropout recall 0.825. Configuration: 100 epochs, batch size 64, learning rate 0.005 and an 8% early-stopping validation split."
      },
      "boundary": {
        "zh": "课程实验结果 · 指标来自报告中的 Weka 交叉验证输出，不代表独立外部测试集或实际学生干预效果。",
        "en": "Course experiment · Metrics come from the report’s Weka cross-validation output, not an independent external test set or a measured student intervention."
      },
      "evidence": [
        {
          "src": "assets/evidence/dropout-run-c-results.png",
          "width": 1766,
          "height": 1337,
          "caption": {
            "zh": "Run C：10 折交叉验证与混淆矩阵",
            "en": "Run C: 10-fold cross-validation & confusion matrix"
          },
          "source": {
            "zh": "A1-Junjie-Chu.docx · Q9，Run C 结果截图",
            "en": "A1-Junjie-Chu.docx · Q9, Run C results"
          }
        },
        {
          "src": "assets/evidence/dropout-run-c-settings.png",
          "width": 1869,
          "height": 1351,
          "caption": {
            "zh": "Run C：模型与早停参数",
            "en": "Run C: model & early-stopping settings"
          },
          "source": {
            "zh": "A1-Junjie-Chu.docx · Q9，Run C 参数截图",
            "en": "A1-Junjie-Chu.docx · Q9, Run C configuration"
          }
        }
      ]
    },
    {
      "title": {
        "zh": "SmartSeat",
        "en": "SmartSeat"
      },
      "role": {
        "zh": "课堂座位管理课程项目｜前端开发 · 曾任 Scrum Master",
        "en": "Classroom seating course project · Frontend developer; also served as Scrum Master"
      },
      "meta": {
        "zh": "2025.09 – 2025.12",
        "en": "Sep 2025 – Dec 2025"
      },
      "links": [
        {
          "label": {
            "zh": "GitHub",
            "en": "GitHub"
          },
          "url": "https://github.com/WuJiawei25/CP3405-TR3-2025-P1T5"
        }
      ],
      "stack": [
        "Scrum",
        "Pair Programming",
        "Figma",
        "GitHub Issues",
        "CI/CD"
      ],
      "bullets": [
        {
          "zh": "负责前端开发，参与登录与选座页面实现；与后端开展结对编程和接口联调，并曾担任 Scrum Master。",
          "en": "Owned frontend development, including login and seat-selection screens; paired with the backend developer on implementation and integration, and also served as Scrum Master."
        },
        {
          "zh": "选座页面出现座位位置偏移后，与后端联合排查，定位双方对坐标原点的约定不一致。登录模块进度受阻时，与后端结对编程，交替进行编码和检查，推进界面交付。",
          "en": "When seats rendered outside the intended area, investigated with the backend developer and identified inconsistent assumptions about the coordinate origin. Paired on coding and review when login-page development fell behind, helping the team complete the interface."
        }
      ],
      "id": "smartseat",
      "category": {
        "zh": "前端开发 / 敏捷协作",
        "en": "FRONTEND / AGILE COLLABORATION"
      },
      "tagline": {
        "zh": "通过前后端协作推进座位管理界面交付。",
        "en": "Delivering seating interfaces through frontend/backend collaboration."
      },
      "problem": {
        "zh": "构建学生预约、讲师管理和管理员视图，支持课堂座位管理流程演示。",
        "en": "Build student reservation, lecturer and administrator interfaces for a classroom seating management demonstration."
      },
      "contribution": {
        "zh": "负责前端开发，参与登录与选座页面实现；与后端开展结对编程和接口联调，并曾担任 Scrum Master。",
        "en": "Owned frontend development, including login and seat-selection screens; paired with the backend developer on implementation and integration, and also served as Scrum Master."
      },
      "result": {
        "zh": "七人团队 · 6 次 Scrum 迭代",
        "en": "7-person team · 6 Scrum sprints"
      },
      "decision": {
        "zh": "选座页面出现座位位置偏移后，与后端联合排查，定位双方对坐标原点的约定不一致。登录模块进度受阻时，与后端结对编程，交替进行编码和检查，推进界面交付。",
        "en": "When seats rendered outside the intended area, investigated with the backend developer and identified inconsistent assumptions about the coordinate origin. Paired on coding and review when login-page development fell behind, helping the team complete the interface."
      },
      "validation": {
        "zh": "项目反思记录了六次迭代中的前后端集成过程，并附学生预约、讲师与管理员界面截图。展示的是课程演示系统，不代表已经在校园生产环境部署。",
        "en": "The reflection documents frontend/backend integration across six sprints and includes student reservation, lecturer and administrator screenshots. This is a course demonstration system, not a claim of production deployment on campus."
      },
      "reflection": {
        "zh": "联调问题暴露了口头接口约定的不足。后续改进计划是在迭代规划时明确坐标原点、参数范围和示例数据，并提前验证跨角色依赖；对设计歧义和进度风险更早提出阻碍。",
        "en": "Integration problems exposed the limits of verbal interface agreements. Planned improvements include documenting coordinate origins, parameter ranges and sample data during sprint planning, validating cross-role dependencies early, and raising design ambiguity and delivery risks sooner."
      },
      "boundary": {
        "zh": "课程演示界面 · 展示学生预约与讲师管理流程。",
        "en": "Course demonstration interface · Student reservation and lecturer management workflows."
      },
      "evidence": [
        {
          "src": "assets/evidence/smartseat-lecturer.png",
          "width": 2559,
          "height": 1285,
          "caption": {
            "zh": "讲师与管理员面板",
            "en": "Lecturer & administrator dashboard"
          },
          "source": {
            "zh": "CP3405 个人反思 · 附录讲师页面",
            "en": "CP3405 reflection · Lecturer-page appendix"
          }
        },
        {
          "src": "assets/evidence/smartseat-reservations.png",
          "width": 2559,
          "height": 1285,
          "caption": {
            "zh": "学生预约管理界面",
            "en": "Student reservation management"
          },
          "source": {
            "zh": "CP3405 个人反思 · 附录学生页面",
            "en": "CP3405 reflection · Student-page appendix"
          }
        }
      ]
    }
  ],
  "leadership": [
    {
      "title": {
        "zh": "JCU Learning Centre｜EMAS IT 同伴导师（2026.05 – 至今）",
        "en": "JCU Learning Centre — EMAS IT Peer Mentor (May 2026 – Present)"
      },
      "body": {
        "zh": "为 50 余名学生提供编程及核心 IT 课程辅导，并与项目顾问跟踪学习进展。",
        "en": "Tutored 50+ students in programming and core IT coursework, tracking learning progress together with program advisors."
      }
    },
    {
      "title": {
        "zh": "荣誉",
        "en": "Honor"
      },
      "body": {
        "zh": "BIMAGE Virtual Design & Construction Boot Camp Competition 季军（四人团队，2023）",
        "en": "BIMAGE Virtual Design & Construction Boot Camp Competition — 2nd Runner-up (4-person team, 2023)"
      }
    }
  ],
  "footer": {
    "zh": "更新于 2026 年 9 月",
    "en": "Updated September 2026"
  },
  "summary": {
    "zh": "信息技术本科生，具备软件开发、机器学习与数据分析实践。从独立开发 Android 应用，到组织团队交付推荐平台，我关注需求、实现与验证之间的衔接。现居新加坡，英语可作为工作语言。",
    "en": "Information Technology undergraduate with experience in software development, machine learning and data analysis. From building an Android app independently to leading a recommendation-platform team, I connect requirements with implementation and validation. Based in Singapore; comfortable working in English."
  },
  "availability": {
    "zh": "2026 年 12 月下旬可到岗 · 2027 年 3 月毕业后可全职",
    "en": "Available from late December 2026 · Full-time after graduation in March 2027"
  },
  "resumes": [
    {
      "file": "software-development",
      "zh": "软件开发工程师",
      "en": "Software Development"
    },
    {
      "file": "technical-project-management",
      "zh": "技术项目管理",
      "en": "Technical Project Management"
    },
    {
      "file": "data-analysis",
      "zh": "数据分析师",
      "en": "Data Analysis"
    },
    {
      "file": "test-development",
      "zh": "测试开发工程师",
      "en": "Test Development"
    },
    {
      "file": "machine-learning",
      "zh": "算法工程师",
      "en": "Machine Learning"
    }
  ],
  "hero": {
    "zh": "软件开发、数据分析\n与团队交付。",
    "en": "Software, data\nand team delivery."
  },
  "featured": [
    "scamwise",
    "wildlife",
    "recommendation"
  ]
};
