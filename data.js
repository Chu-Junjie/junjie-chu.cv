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
      "zh": "2903442978@qq.com",
      "en": "2903442978@qq.com",
      "href": "mailto:2903442978@qq.com"
    },
    {
      "key": "github",
      "zh": "github.com/Chu-Junjie",
      "en": "github.com/Chu-Junjie",
      "href": "https://github.com/Chu-Junjie"
    },
    {
      "key": "mail-alt",
      "zh": "备用邮箱 chujunjie0908@gmail.com",
      "en": "Alternative email: chujunjie0908@gmail.com",
      "href": "mailto:chujunjie0908@gmail.com"
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
          "zh": "GPA 5.85/7.00",
          "en": "GPA 5.85/7.00"
        },
        {
          "zh": "相关课程：高级软件工程、移动计算、数据库建模、机器学习与数据科学、深度学习、网络安全应用。",
          "en": "Relevant coursework: Advanced Software Engineering, Mobile Computing, Database Modelling, Machine Learning & Data Science, Deep Learning and Cybersecurity Applications."
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
        "Jetpack Compose",
        "MVVM",
        "Room",
        "Retrofit",
        "Python",
        "FastAPI",
        "Flask",
        "JavaScript",
        "HTML/CSS",
        "REST API"
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
        "zh": "数据库与业务分析",
        "en": "Databases & business analysis"
      },
      "items": [
        "SQL",
        "MySQL Workbench",
        "PostgreSQL",
        "ER/EER",
        "3NF Review",
        "JOIN / GROUP BY",
        "HAVING / COUNT DISTINCT",
        "AVG / DATEDIFF",
        "Excel"
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
        "Group K-Fold",
        "ONNX Runtime",
        "Linux offline deployment",
        "JSON validation",
        "P50 / P95"
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
        "zh": "2026.07–2026.10",
        "en": "July–October 2026"
      },
      "title": {
        "zh": "AI 工程师实习生",
        "en": "AI Engineer Intern"
      },
      "org": {
        "zh": "Basilos Pte. Ltd.｜新加坡",
        "en": "Basilos Pte. Ltd. · Singapore"
      },
      "bullets": [
        {
          "zh": "人脸方案选型：针对 AIGC 模特生成图的身份漂移，对比 InsightFace、DeepFace 等 5 种方案；在 3 身份参考库中开展 1:N 开放集验证，13 张已知样本正确识别、10 张陌生样本正确拒识。",
          "en": "Face-recognition evaluation: compared five approaches including InsightFace and DeepFace for identity drift in generated model images. In a three-identity reference library, 1:N open-set checks correctly identified 13 known samples and rejected 10 unknown samples."
        },
        {
          "zh": "连接器工程化：将选型结果落实为 1:1 一致性连接器，基于 buffalo_l 完成人脸检测、对齐、特征提取和余弦比对；封装 Python / ONNX Runtime 离线推理，打包 Linux 依赖、校验模型哈希并部署至 Workbench。",
          "en": "Connector engineering: implemented a 1:1 consistency connector with buffalo_l for detection, alignment, embeddings and cosine comparison. Packaged offline Python / ONNX Runtime inference, Linux dependencies and model-hash checks for Workbench deployment."
        },
        {
          "zh": "内部测试与可靠性：整理 54 项记录（23 项身份比对、31 项场景），23 组身份比对均判定正确；同一输入连续运行 30 次均成功。端到端 P50 / P95 为 2.691 / 2.996 秒，记录首次运行异常、质量提示问题和未验证项。",
          "en": "Internal testing: maintained 54 records comprising 23 identity comparisons and 31 scenario checks. All 23 identity comparisons were correct, and 30 consecutive runs of the same input succeeded. End-to-end P50/P95 were 2.691/2.996 seconds; logged first-run errors, quality-warning issues and unverified cases."
        },
        {
          "zh": "异常与结果契约：检查无人脸、多脸、坏图、低清、遮挡及阈值边界，输出含分数、阈值、原因码及人工复核状态的 JSON；区分上传层拦截与连接器处理，避免把拦截结果计作功能通过。",
          "en": "Exception handling and result contracts: checked no-face, multiple-face, damaged-image, low-resolution, occlusion and threshold-edge scenarios. Returned JSON scores, thresholds, reason codes and review states, distinguishing upload rejection from connector-level processing."
        },
        {
          "zh": "图像矢量化：为 Potrace / VTracer 封装 FastAPI 本地接口，完成 99 组实验（36 组黑白、60 组彩色、3 组混合）；结合嵌入位图、路径数量、颜色误差及人工视觉复核评估可编辑性，建议简单黑白线稿优先，记录复杂彩图的路径碎片问题。",
          "en": "Image vectorisation: wrapped Potrace/VTracer in a local FastAPI service and ran 99 experiments: 36 monochrome, 60 colour and three hybrid. Evaluated embedded bitmaps, path counts, colour error and visual quality; recommended simple monochrome line art and documented fragmentation in complex colour images."
        },
        {
          "zh": "工具调研与工作流：按官方资料更新 20 款海外大模型对比表；评估飞书 CLI 9 个模块，验证 Markdown 导入、多维表格与日历／任务流程，排查 Scope 授权和 User/Bot 身份问题，形成可复用操作指南。",
          "en": "Research and workflows: updated an official-source comparison of 20 AI models. Evaluated nine Lark CLI modules, tested Markdown import, Bitable and calendar/task flows, resolved scope and user/bot identity issues and wrote reusable operating guides."
        },
        {
          "zh": "客户需求分析：参与 Golden Travel 实地调研，梳理护照／GeBIZ 标书信息提取、项目截止提醒及行程规划；将信息提取与截止提醒列为优先方向，记录敏感资料处理限制并输出实施建议。",
          "en": "Customer discovery: joined field research with Golden Travel, covering passport/GeBIZ tender extraction, deadline reminders and itinerary planning. Prioritised extraction and deadline reminders, recorded sensitive-data constraints and prepared implementation recommendations."
        }
      ]
    },
    {
      "date": {
        "zh": "2024.04–2024.09",
        "en": "April–September 2024"
      },
      "title": {
        "zh": "运营与行政实习生（录用职称：Associate）",
        "en": "Operations & Administration Intern (offer designation: Associate)"
      },
      "org": {
        "zh": "新加坡建筑专业联盟（STAS）｜新加坡",
        "en": "Specialists Trade Alliance of Singapore (STAS) · Singapore"
      },
      "bullets": [
        {
          "zh": "认证材料审核：参与预制机电（MEP）厂商认证计划，查阅公司文件夹中申请企业提交的人员配置、工作流程与厂区布局材料，对照官方评审标准检查是否符合要求；梳理在办／已结申请并整理审核要点笔记，为后续材料复核提供参考。",
          "en": "Accreditation review support: reviewed applicant documents on staffing, workflows and factory layouts in company folders against the official criteria of the Prefabricated MEP Manufacturer Accreditation Scheme. Organised open and closed applications and compiled review notes for subsequent document checks."
        },
        {
          "zh": "展会运营与市场调研：参与行业展会全流程运营支持，维护 3 场展会的双阶段付款记录，为卡塔尔预制主题展馆定向筛选参展企业；通过公开资料检索，独立完成中国建材展会市场调研并输出结构化成果，供业务筛选与筹备参考。",
          "en": "Exhibition operations and market research: supported end-to-end trade show operations, maintained two-stage payment records for three exhibitions and screened prospective exhibitors for a Qatar prefab pavilion. Independently researched construction materials exhibitions in China using public sources and produced structured findings for business screening and planning."
        },
        {
          "zh": "供应商研究与配置测试：参与 Prefab MEP Configurator 数字化配置工具项目，通过 Google、SGBC 等渠道搜集管道供应商并建立分类资源清单；调整空间参数，完成基础模块配置测试，支持供应商资源准备与工具功能验证。",
          "en": "Supplier research and configuration testing: contributed to the Prefab MEP Configurator project by sourcing piping suppliers through Google, SGBC and other channels and building a categorised resource list. Adjusted spatial parameters to test basic module configurations, supporting supplier research and functional checks."
        },
        {
          "zh": "业务数据与共享资料：使用 Excel 整理业务数据、维护格式一致的信息清单，并通过 Google Drive 整理共享工作资料；完成相关行政记录，便于团队查阅、更新和交接审核、展会及供应商资料。",
          "en": "Business data and shared documentation: used Excel to organise business data and maintain consistently formatted information lists, and Google Drive to organise shared working documents. Maintained administrative records to support access, updates and handovers of accreditation, exhibition and supplier information."
        }
      ]
    },
    {
      "date": {
        "zh": "2021.03–2021.10",
        "en": "March–October 2021"
      },
      "title": {
        "zh": "质量部文员",
        "en": "Quality Department Clerk"
      },
      "org": {
        "zh": "徐州华夏电子有限公司｜中国·徐州",
        "en": "Xuzhou Huaxia Electronics Co., Ltd. · Xuzhou, China"
      },
      "bullets": [
        {
          "zh": "出货质量单证：每日编制十余份车用线束、汽车连接配件及五金冲压件的出货检验报告，按规范随货装箱并归档，维护出货单证完整性，便于后续查阅。",
          "en": "Shipment quality documentation: prepared more than 10 outgoing inspection reports daily for automotive wiring harnesses, connectors and metal stamping parts. Included the required documents with shipments and archived records for completeness and later retrieval."
        },
        {
          "zh": "日常数据维护：使用 Excel 每日录入并维护约 200 名员工的工作数据；同时整理质量检测数据与测试结果，及时更新相关记录，支持日常信息查询。",
          "en": "Daily data maintenance: used Excel to enter and maintain daily work data for approximately 200 employees. Also updated quality inspection data and test results for routine information retrieval."
        },
        {
          "zh": "审核与车间沟通：协助内部质量审核各环节工作；日常工作中发现问题时，直接与车间沟通核实情况。",
          "en": "Audit support and workshop coordination: assisted across the internal quality audit process. Communicated directly with the workshop to clarify issues arising in day-to-day work."
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
            "zh": "在线演示",
            "en": "Interactive demo"
          },
          "url": "https://appetize.io/app/b_zaghpmz5tqtsqoha5lhosmofcm"
        },
        {
          "label": {
            "zh": "GitHub",
            "en": "GitHub"
          },
          "url": "https://github.com/Chu-Junjie/CP3406_ScamwiseCampus_JunjieChu"
        },
        {
          "label": {
            "zh": "单元测试源码",
            "en": "Unit test source"
          },
          "url": "https://github.com/Chu-Junjie/CP3406_ScamwiseCampus_JunjieChu/tree/master/app/src/test"
        },
        {
          "label": {
            "zh": "UI 测试源码",
            "en": "UI test source"
          },
          "url": "https://github.com/Chu-Junjie/CP3406_ScamwiseCampus_JunjieChu/tree/master/app/src/androidTest"
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
          "zh": "独立完成 5 个核心页面与 18 个情境训练案例，串联风险判断、警示信号识别、安全行动选择和信心评分，再提供反馈、统计与后续练习建议。",
          "en": "Independently delivered five core screens and 18 scenarios covering risk assessment, warning signs, safe actions and confidence ratings, followed by feedback, statistics and practice recommendations."
        },
        {
          "zh": "采用 MVVM + Use Case + Repository 分层，将 Compose 页面、ViewModel / StateFlow、业务规则和数据访问解耦；以 Room 保存训练记录，通过 Retrofit 接入 Google Safe Browsing。",
          "en": "Separated Compose UI, ViewModel/StateFlow, business rules and data access with MVVM, use cases and repositories. Persisted training records in Room and integrated Google Safe Browsing through Retrofit."
        },
        {
          "zh": "围绕输入校验、训练判分、统计计算、持久化和网络异常编写 102 项测试：79 项单元测试使用 JUnit、Mockito 和内存 Room，23 项 UI 测试使用 Espresso 检查页面流程。",
          "en": "Wrote 102 tests for input validation, scoring, statistics, persistence and network failures: 79 unit tests with JUnit, Mockito and in-memory Room, plus 23 Espresso UI tests for screen flows."
        },
        {
          "zh": "在链接发送至外部服务前取得用户同意；提供清除历史与可理解的状态提示。发现密钥暴露后移除源码配置、清理 Git 历史并轮换密钥，同时在反思中提出备份规则和发布包检查的后续改进。",
          "en": "Requested consent before sending links to an external service and provided history deletion and clear status messages. After finding exposed credentials, moved configuration out of source, cleaned Git history and rotated keys; documented backup and release-package checks as further improvements."
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
        "zh": "反思中识别出自动化测试无法替代发布审查：测试没有发现密钥暴露、备份配置假设和大屏适配问题。发现原 API Key 暴露后，撤销旧密钥、创建替代密钥并重建应用；下一步计划提前梳理数据流与威胁模型，并把备份规则、导航一致性、无障碍和最终打包文件检查纳入发布清单。",
        "en": "The reflection identified gaps beyond automated tests: credential exposure, assumptions about backup configuration and large-screen layouts. Revoked the exposed API key, created a replacement and rebuilt the application. Planned improvements include earlier data-flow and threat modelling, and release checks for backup rules, navigation consistency, accessibility and packaged files."
      }
    },
    {
      "title": {
        "zh": "智能数码产品推荐平台",
        "en": "Smart Digital Product Recommendation Platform"
      },
      "role": {
        "zh": "产品负责人（PO）／前端开发协作｜4 人团队",
        "en": "Product Owner / frontend contributor · Four-person team"
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
          "zh": "将需求整理为 10 个用户故事，明确验收标准与需求—实现—测试映射，推进 3 轮 Scrum 迭代；团队交付覆盖 5 类数码产品的推荐平台。",
          "en": "Defined ten user stories, acceptance criteria and requirements-to-implementation/test traceability across three Scrum sprints. The team delivered recommendations for five product categories."
        },
        {
          "zh": "负责需求冻结和变更控制，在估算偏差出现时组织范围调整；协调前端、数据与接口协作，维护 PR 审核顺序和发布检查清单。",
          "en": "Managed requirement freezes and change control, coordinated scope adjustments when estimates diverged, aligned frontend/data/API work and maintained PR review order and release checklists."
        },
        {
          "zh": "协调整合约 11,000 条产品目录记录，其中约 2,000 条可用于推荐；参与前端调试、Flask API 联调和部署，独立实现推荐结果分享。",
          "en": "Coordinated integration of approximately 11,000 catalogue records, around 2,000 usable for recommendations. Contributed to frontend debugging, Flask API integration and deployment, and independently built result sharing."
        },
        {
          "zh": "核对 GitHub Actions 执行结果与需求一致性，确认团队 12 项自动化验收测试通过后冻结版本。用户端支持匿名搜索、收藏／历史、最多三产品对比及 Helpful / Not Helpful 反馈。",
          "en": "Checked GitHub Actions results against requirements and froze releases after all 12 team acceptance tests passed. The delivered UI supports anonymous search, favorites/history, up to three-product comparison and helpfulness feedback."
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
        "zh": "担任四人团队 PO，负责用户故事、验收标准、范围与发布协调；修改、调试 HTML/CSS/JavaScript，参与 Flask API 联调和部署，独立实现结果分享功能。",
        "en": "Served as PO in a four-person team, owning user stories, acceptance criteria, scope and release coordination. Modified and debugged HTML/CSS/JavaScript, contributed to Flask API integration and deployment, and independently implemented result sharing."
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
        "zh": "数据处理与训练协作｜5 人团队｜DrivenData 练习榜记录 48/810",
        "en": "Data processing & training contributor · Five-person team · DrivenData practice leaderboard record 48/810"
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
          "zh": "面向 8 类、16,488 张图像完成加载、类别／站点／尺寸分析和预处理；按拍摄站点实施 Stratified Group K-Fold，避免训练与验证站点重叠，并检查 OOF 覆盖。",
          "en": "Loaded and preprocessed 16,488 images across eight classes, analysing labels, sites and dimensions. Implemented site-grouped stratified folds to avoid train/validation site overlap and checked OOF coverage."
        },
        {
          "zh": "参与团队 19 组实验，开发、调试 ResNet 与 ConvNeXt 训练及 Optuna 搜索代码，对比分辨率、数据增强和训练配置；团队选用 ConvNeXt-Small 320×320。",
          "en": "Contributed to 19 team experiments, developed/debugged ResNet and ConvNeXt training and Optuna search code, and compared resolution, augmentation and training settings. The team selected ConvNeXt-Small at 320×320."
        },
        {
          "zh": "参与 4× TTA、五折集成与 logit 融合；团队公开榜排名 48/810，Log Loss 从 2.5453 降至 1.0136，降低约 60%。",
          "en": "Participated in 4× TTA, five-fold ensembles and logit blending. The team placed 48/810 on the public leaderboard and reduced log loss from 2.5453 to 1.0136, approximately 60%."
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
        "zh": "承担数据加载、EDA、预处理与基础训练，参与团队 19 组实验，开发与调试 ResNet / ConvNeXt 训练及 Optuna 搜索代码，并参与 TTA、集成与融合。",
        "en": "Handled data loading, EDA, preprocessing and baseline training. Contributed to 19 team experiments, developed/debugged ResNet/ConvNeXt training and Optuna search code, and participated in TTA, ensembles and blending."
      },
      "result": {
        "zh": "公开练习榜记录 48/810 · Log Loss 1.0136",
        "en": "Public practice leaderboard record 48/810 · Log loss 1.0136"
      },
      "decision": {
        "zh": "定位随机划分造成的地理站点数据泄漏，改用 Stratified Group K-Fold 按站点分组，实现训练与验证站点零重叠。",
        "en": "Identified geographic site leakage in random splits and adopted Stratified Group K-Fold, with no site overlap between training and validation."
      },
      "validation": {
        "zh": "公开榜单截图显示 ChuJunjie 位列第 48 名，Log Loss 为 1.0136；末页截图显示第 810 名。相对初始 Log Loss 2.5453 降低约 60%。可通过原始截图、官方赛事页面、公开榜单与实验 Notebook 复核。",
        "en": "The public-leaderboard screenshots show ChuJunjie ranked 48 with log loss 1.0136 and a last ranked entry of 810, approximately 60% below the initial loss of 2.5453. Original screenshots, the official challenge, public leaderboard and experiment notebook support review."
      },
      "links": [
        {
          "label": {
            "zh": "实验 Notebook",
            "en": "Experiment notebook"
          },
          "url": "https://www.kaggle.com/code/chujunjie/cp3501-master-notebook-group-07"
        },
        {
          "label": {
            "zh": "赛事与数据说明",
            "en": "Challenge & dataset"
          },
          "url": "https://www.drivendata.org/competitions/87/competition-image-classification-wildlife-conservation/"
        },
        {
          "label": {
            "zh": "公开榜单",
            "en": "Public leaderboard"
          },
          "url": "https://www.drivendata.org/competitions/87/competition-image-classification-wildlife-conservation/leaderboard/"
        }
      ],
      "evidence": [
        {
          "src": "assets/evidence/leaderboard-rank.png",
          "width": 2559,
          "height": 1285,
          "caption": {
            "zh": "ChuJunjie：第 48 名，Log Loss 1.0136",
            "en": "ChuJunjie: rank 48, log loss 1.0136"
          },
          "source": {
            "zh": "公开榜单截图 · 2026-10-15 收录",
            "en": "Public leaderboard screenshot · Added 15 Oct 2026"
          }
        },
        {
          "src": "assets/evidence/leaderboard-total.png",
          "width": 2559,
          "height": 1285,
          "caption": {
            "zh": "榜单末页：第 810 名",
            "en": "Last leaderboard page: rank 810"
          },
          "source": {
            "zh": "公开榜单截图 · 排名分母依据",
            "en": "Public leaderboard screenshot · Evidence for ranked-entry count"
          }
        },
        {
          "src": "assets/evidence/leaderboard-overview.png",
          "width": 2559,
          "height": 1285,
          "caption": {
            "zh": "Conser-vision Practice Area: Image Classification",
            "en": "Conser-vision Practice Area: Image Classification"
          },
          "source": {
            "zh": "DrivenData 练习赛 · 赛事页面截图",
            "en": "DrivenData practice challenge · Challenge page screenshot"
          }
        }
      ],
      "boundary": {
        "zh": "成绩为公开练习榜截图记录，2026-10-15 收录，提交账户为 ChuJunjie；48/810 指截图中的上榜名次／末位名次，榜单仍会变化。模型与融合结果来自五人团队项目，个人职责为数据处理与训练协作。",
        "en": "This is a public practice-leaderboard record from leaderboard screenshots added on 15 October 2026, under the ChuJunjie submission account. 48/810 refers to the visible rank and last ranked entry; the leaderboard can change. Models and ensembles were team outcomes; my role covered data processing and training collaboration."
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
          "zh": "对 3,630 条学生记录、36 项特征完成 EDA、编码字段处理与 K-means 聚类，分析在校阶段的学业表现和辍学结果之间的关联。",
          "en": "Performed EDA, coded-feature processing and K-means clustering on 3,630 records and 36 features, analysing associations between in-course academic performance and dropout outcomes."
        },
        {
          "zh": "以 ZeroR 准确率 60.854% 为基线，比较 J48、Naive Bayes、IBk 与 DL4J MLP 的 10 折交叉验证结果；普通 MLP 的 66% 划分实验单独说明。",
          "en": "Used ZeroR accuracy of 60.854% as the baseline and compared J48, Naive Bayes, IBk and DL4J MLP with ten-fold cross-validation. Documented the standard MLP 66% split experiment separately."
        },
        {
          "zh": "比较 DL4J MLP 的四组配置，Run C 使用 100 epochs、batch size 64、learning rate 0.005 和 8% 早停验证比例，得到加权 F1 0.893、MCC 0.776、ROC-AUC 0.933。",
          "en": "Compared four DL4J MLP configurations. Run C used 100 epochs, batch size 64, learning rate 0.005 and an 8% early-stopping validation split, achieving weighted F1 0.893, MCC 0.776 and ROC-AUC 0.933."
        },
        {
          "zh": "结合辍学类别召回率 0.825 和混淆矩阵分析模型取舍；第二学期通过课程数属于在校阶段信息，结论限定为该数据场景，避免将其表述为入学前风险预测。",
          "en": "Analysed tradeoffs with dropout recall 0.825 and the confusion matrix. Second-semester completions are in-course information, so conclusions apply to this setting rather than pre-enrolment risk prediction."
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
      ],
      "reflection": {
        "zh": "J48 的根节点和特征分布共同显示，“第二学期通过课程数”是区分辍学与毕业学生的重要信号。Run C 混淆矩阵中，1,421 名辍学学生有 1,172 名被识别、249 名漏识别；这说明评价时应同时关注辍学召回率与漏识别数量，不能只看总体准确率。该发现属于在校阶段关联，不作因果或入学前预测解释。",
        "en": "The J48 root split and feature distributions identify second-semester course completions as an important signal separating dropout and graduate records. Run C identified 1,172 of 1,421 dropout records and missed 249. Evaluation should therefore consider dropout recall and missed cases as well as overall accuracy. This is an in-course association, not a causal or pre-enrolment prediction claim."
      }
    },
    {
      "title": {
        "zh": "SmartSeat",
        "en": "SmartSeat"
      },
      "role": {
        "zh": "前端与 UI 交互开发｜曾任 Scrum Master｜7 人团队",
        "en": "Frontend & UI/interaction development · Also served as Scrum Master · Seven-person team"
      },
      "meta": {
        "zh": "2025.09 – 2025.12",
        "en": "Sep 2025 – Dec 2025"
      },
      "links": [
        {
          "label": {
            "zh": "在线演示",
            "en": "Interactive demo"
          },
          "url": "https://chu-junjie.github.io/CP3405-TR3-2025-P1T5/"
        },
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
          "zh": "面向课堂选座、预约及座位状态展示参与用户研究与需求分析，独立设计 16 屏高保真原型和交互规范，参与 3 轮可用性测试，累计 60 人次。",
          "en": "Contributed to user research and requirements for seat selection, reservations and seat-status displays; independently designed 16 high-fidelity screens and interaction specifications and participated in three usability rounds totaling 60 sessions."
        },
        {
          "zh": "负责登录、选座等前端页面，与后端约定数据格式和展示逻辑，通过模拟数据演示座位状态、使用率和推荐座位；使用 GitHub Issues 记录反馈并支持迭代。",
          "en": "Implemented frontend screens including login and seat selection, agreed data/display contracts with the backend and demonstrated seat status, utilisation and recommendations with simulated data. Logged feedback in GitHub Issues for iteration."
        },
        {
          "zh": "选座集成出现位置偏移时，与后端共同排查坐标原点约定；登录模块进度受阻时开展结对编程，交替编码和检查，推动交付。曾在七人、六次迭代的团队中担任 Scrum Master。",
          "en": "Investigated coordinate-origin mismatches with the backend when seat placement failed. Used pair programming with alternating coding/review to recover delayed login work, and served as Scrum Master within the seven-person, six-sprint team."
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
        "zh": "负责前端实现与 UI 交互工作，独立设计 16 屏高保真原型，参与三轮可用性测试；与后端结对编程和接口联调，并在项目中担任过 Scrum Master。",
        "en": "Owned frontend implementation and UI/interaction work, independently designed 16 high-fidelity screens and participated in three usability-test rounds. Paired with the backend developer on implementation/integration and served as Scrum Master during the project."
      },
      "result": {
        "zh": "16 屏高保真原型 · 3 轮测试（累计 60 人次）· 6 次 Scrum 迭代",
        "en": "16 prototype screens · Three test rounds (60 participant sessions) · Six Scrum sprints"
      },
      "decision": {
        "zh": "选座页面出现座位位置偏移后，与后端联合排查，定位双方对坐标原点的约定不一致。登录模块进度受阻时，与后端结对编程，交替进行编码和检查，推进界面交付。",
        "en": "When seats rendered outside the intended area, investigated with the backend developer and identified inconsistent assumptions about the coordinate origin. Paired on coding and review when login-page development fell behind, helping the team complete the interface."
      },
      "validation": {
        "zh": "独立设计 16 屏原型并参与三轮可用性测试，累计 60 人次；反思附录保留学生预约、讲师及管理员界面。项目完成课程演示与模拟数据流集成。",
        "en": "Independently designed 16 prototype screens and participated in three usability-test rounds totaling 60 sessions. The reflection appendix includes reservation, lecturer and administrator interfaces. The course project delivered a demonstration with simulated-data integration."
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
    },
    {
      "id": "flyhigh",
      "title": {
        "zh": "FlyHigh 航空数据库设计",
        "en": "FlyHigh Airline Database Design"
      },
      "role": {
        "zh": "个人课程项目｜ER/EER 建模与关系约束",
        "en": "Individual course project · ER/EER modelling & relationship constraints"
      },
      "meta": {
        "zh": "2025.06–2025.09",
        "en": "June–September 2025"
      },
      "category": {
        "zh": "数据库设计 / SQL 分析",
        "en": "DATABASE DESIGN / SQL ANALYSIS"
      },
      "problem": {
        "zh": "为机队、行程／订票、员工、财务和资源五个航空业务域建立关系模型，表达业务实体、关系基数和约束。",
        "en": "Model fleet, trips/bookings, staff, finance and resources through business entities, relationship cardinalities and constraints."
      },
      "contribution": {
        "zh": "独立设计 MySQL Workbench ER/EER 模型，原始 .mwb 包含 22 张表；定义主外键和关系基数，并记录模型假设及后续需校验的规则。",
        "en": "Independently designed a MySQL Workbench ER/EER model; the original .mwb contains 22 tables. Defined keys and cardinalities and documented modelling assumptions and rules requiring further validation."
      },
      "result": {
        "zh": "22 个实体／表 · 5 个业务域 · 原始 ER 图",
        "en": "22 entities/tables · Five business domains · Original ER diagram"
      },
      "stack": [
        "MySQL Workbench",
        "ER/EER",
        "Primary / Foreign Keys",
        "Cardinality",
        "Schema Review"
      ],
      "bullets": [
        {
          "zh": "将 Aircraft、CharterTrip、Customer、Employee、Bill、Payment 和 Resource 等业务对象映射到 22 张表，定义主键、外键和关系基数，覆盖五个业务域。",
          "en": "Mapped business objects including Aircraft, CharterTrip, Customer, Employee, Bill, Payment and Resource to 22 tables, with keys and cardinalities across five business domains."
        },
        {
          "zh": "拆分 Aircraft 与 AircraftType，采用员工／资源子类层次表达不同角色与属性；以 Bill 的最终金额快照和账单—行程关系表达财务记录。",
          "en": "Separated Aircraft from AircraftType and used employee/resource subtype hierarchies for role-specific attributes. Represented financial records with Bill final-amount snapshots and bill-to-trip relationships."
        },
        {
          "zh": "在模型说明中记录排班重叠、会员历史和实时库存等限制，将概念模型与后续需要执行验证的跨记录业务规则区分。实际 SQL 查询证据另列于图书馆课程实践。",
          "en": "Documented limitations around overlapping schedules, membership history and real-time inventory, distinguishing the conceptual model from cross-record rules needing executable validation. Actual SQL query evidence is shown separately in the library practical."
        }
      ],
      "decision": {
        "zh": "通过类型表与子类层次表达不同对象的共同属性和差异，利用主外键、关系基数与唯一约束表达基础业务关系。涉及人数、时间重叠等跨记录规则时，在报告中提出进一步校验需求。",
        "en": "Used type tables and subtype hierarchies to represent shared and specialised attributes, and keys, cardinalities and uniqueness for basic business relationships. The report identifies further validation needs for cross-record constraints such as staffing counts and overlapping schedules."
      },
      "validation": {
        "zh": "原始 ER 图与 MySQL Workbench .mwb 文件支持 22 表建模成果，模型说明记录了设计假设及排班、会员历史和库存方面的限制。交付范围为课程数据库设计；复杂业务约束仍需在后续实现中验证。",
        "en": "The original ER diagram and MySQL Workbench .mwb support the 22-table design. The modelling report documents assumptions and limitations involving scheduling, membership history and inventory. The deliverable is course database design; complex business constraints require further implementation and validation."
      },
      "evidence": [
        {
          "src": "assets/evidence/flyhigh-original-erd.png",
          "width": 1760,
          "height": 1160,
          "caption": {
            "zh": "FlyHigh 原始 ER/EER 模型",
            "en": "Original FlyHigh ER/EER model"
          },
          "source": {
            "zh": "CP2404 Assignment 1 · JunjieChu - A1.png",
            "en": "CP2404 Assignment 1 · JunjieChu - A1.png"
          }
        }
      ],
      "links": [
        {
          "label": {
            "zh": "查看原始 ER 图",
            "en": "View original ER diagram"
          },
          "url": "assets/evidence/flyhigh-original-erd.png"
        }
      ]
    },
    {
      "id": "library-sql",
      "title": {
        "zh": "图书馆 SQL 查询与借阅行为分析",
        "en": "Library SQL Queries & Borrowing Analysis"
      },
      "category": {
        "zh": "SQL 分析 / 数据口径",
        "en": "SQL ANALYSIS / METRIC DEFINITIONS"
      },
      "role": {
        "zh": "个人课程实践｜MySQL 查询与结果解释",
        "en": "Individual course practical · MySQL queries & interpretation"
      },
      "meta": {
        "zh": "",
        "en": ""
      },
      "stack": [
        "MySQL",
        "JOIN",
        "GROUP BY",
        "HAVING",
        "COUNT DISTINCT",
        "AVG / DATEDIFF"
      ],
      "result": {
        "zh": "3 条原始查询与结果截图 · 频次、重复借阅与周期",
        "en": "Three original queries & result grids · Frequency, repeat borrowing & duration"
      },
      "problem": {
        "zh": "用课程图书馆数据识别高频书目，区分重复借阅与阅读范围，并比较多次借阅者的归还周期。",
        "en": "Use library course data to identify high-frequency titles, distinguish repeat borrowing from title breadth and compare return durations among repeat borrowers."
      },
      "contribution": {
        "zh": "编写多表关联、分组聚合和 HAVING 筛选，保留原始 SQL 与 MySQL 结果截图，并从结果中解释业务指标的含义。",
        "en": "Wrote joins, grouped aggregations and HAVING filters, retained the original SQL and MySQL result screenshots and interpreted the meaning of the business metrics."
      },
      "bullets": [
        {
          "zh": "SQL-10 按 Book_Num 聚合并排序借阅次数，发现书目 5236 借出 12 次，5235 为 9 次、5240 为 7 次；结果可作为热门书目资源配置的观察线索。",
          "en": "SQL-10 groups and ranks checkout frequency by Book_Num: title 5236 has 12 checkouts, 5235 has nine and 5240 has seven. The output can inform observation of demand for title-level resource planning."
        },
        {
          "zh": "SQL-21 关联 PATRON 与 CHECKOUT，筛选至少 3 次借阅者，同时计算借阅次数和不同书目数；例如读者 1183 为 3 次借阅、1 种书，说明高频不等同于覆盖更多书目。",
          "en": "SQL-21 joins PATRON and CHECKOUT and filters borrowers with at least three checkouts, counting both loans and distinct titles. Patron 1183 has three checkouts of one title, showing that frequency does not imply broader title coverage."
        },
        {
          "zh": "SQL-23 对至少 3 条借阅记录的读者计算已归还记录的平均借阅天数，所示结果为 2.00–7.00 天；利用 DATEDIFF、AVG 和 HAVING 明确筛选与统计口径。",
          "en": "SQL-23 calculates average duration for returned loans among patrons with at least three checkout records, with displayed results from 2.00 to 7.00 days. Uses DATEDIFF, AVG and HAVING to define selection and aggregation precisely."
        }
      ],
      "decision": {
        "zh": "分别展示 COUNT(Check_Num) 和 COUNT(DISTINCT Book_Num)，避免把重复借阅误解为阅读广度。周期查询的 HAVING 按总借阅次数筛选，AVG(DATEDIFF(...)) 忽略未归还日期形成的 NULL；解释结果时保留这一区别。",
        "en": "Shows COUNT(Check_Num) and COUNT(DISTINCT Book_Num) separately to avoid treating repeat loans as breadth. The duration query filters on total checkouts while AVG(DATEDIFF(...)) ignores NULL durations for unreturned loans; this distinction is retained in the interpretation."
      },
      "validation": {
        "zh": "三条查询及结果网格均提取自本人 CP2404 Practical 8 原始提交，保留 SQL-10、SQL-21、SQL-23 题号。本次未重新执行数据库；结论仅对应课程数据与原始截图，不宣称实际图书馆运营改善。",
        "en": "The three queries and result grids come from the original CP2404 Practical 8 submission, preserving SQL-10, SQL-21 and SQL-23 labels. The database was not rerun here; findings describe the course data and original screenshots, not measured operational improvements."
      },
      "links": [
        {
          "label": {
            "zh": "原始 SQL 查询",
            "en": "Original SQL queries"
          },
          "url": "assets/evidence/sql-library-practical8-queries.sql"
        }
      ],
      "evidence": [
        {
          "src": "assets/evidence/sql-library-checkout-frequency.png",
          "width": 420,
          "height": 502,
          "caption": {
            "zh": "书目借阅频次：5236 借出 12 次",
            "en": "Title frequency: 12 checkouts for 5236"
          },
          "source": {
            "zh": "CP2404 Practical 8 · SQL-10",
            "en": "CP2404 Practical 8 · SQL-10"
          }
        },
        {
          "src": "assets/evidence/sql-library-repeat-vs-distinct.png",
          "width": 712,
          "height": 483,
          "caption": {
            "zh": "借阅次数与不同书目数",
            "en": "Checkout count versus distinct titles"
          },
          "source": {
            "zh": "CP2404 Practical 8 · SQL-21",
            "en": "CP2404 Practical 8 · SQL-21"
          }
        },
        {
          "src": "assets/evidence/sql-library-average-loan-days.png",
          "width": 408,
          "height": 478,
          "caption": {
            "zh": "平均已归还借阅周期：2.00–7.00 天",
            "en": "Average returned-loan duration: 2.00–7.00 days"
          },
          "source": {
            "zh": "CP2404 Practical 8 · SQL-23",
            "en": "CP2404 Practical 8 · SQL-23"
          }
        }
      ]
    }
  ],
  "leadership": [
    {
      "title": {
        "zh": "EMAS Peer Tutor 感谢证书",
        "en": "EMAS Peer Tutor — Certificate of Appreciation"
      },
      "body": {
        "zh": "校园辅导认可｜James Cook University Singapore，2026 年第 2 学期。2026.05–2026.08 辅导服务期间，为 50 余名学生提供编程及核心 IT 课程辅导，并与项目顾问跟踪学习进展。",
        "en": "Peer tutoring recognition · James Cook University Singapore, Trimester 2, 2026. During May–August 2026, tutored 50+ students in programming and core IT coursework and tracked their learning progress with programme advisors."
      },
      "link": {
        "url": "assets/certificates/emas-peer-tutor.pdf",
        "label": { "zh": "查看证书 PDF", "en": "View certificate PDF" }
      }
    },
    {
      "title": {
        "zh": "建筑工程文凭",
        "en": "Diploma in Construction Engineering"
      },
      "body": {
        "zh": "学历文凭｜新加坡建设局学院（BCA Academy），2024.11.19。",
        "en": "Academic qualification · BCA Academy, 19 November 2024."
      },
      "link": {
        "url": "assets/certificates/bca-construction-engineering-diploma.pdf",
        "label": { "zh": "查看证书 PDF", "en": "View certificate PDF" }
      }
    },
    {
      "title": {
        "zh": "WSQ 建筑行业工作场所安全与健康管理证书",
        "en": "Certificate of WSQ WSH Management in Construction Industry"
      },
      "body": {
        "zh": "课程结业证书｜LearnCollab Pte Ltd。课程时间：2023.11.18–2023.11.26。",
        "en": "Certificate of Successful Completion · LearnCollab Pte Ltd. Course dates: 18–26 November 2023."
      },
      "link": {
        "url": "assets/certificates/wsq-wsh-management.pdf",
        "label": { "zh": "查看证书 PDF", "en": "View certificate PDF" }
      }
    },
    {
      "title": {
        "zh": "ISO 9001 / 14001 / 45001 内部质量审核课程结业证书",
        "en": "Internal Quality Audit: ISO 9001, ISO 14001 & ISO 45001"
      },
      "body": {
        "zh": "课程结业证书｜BCA Academy，2023.08.18。通过基于质量、环境及职业健康安全标准的内部质量审核课程考核。",
        "en": "Certificate of Successful Completion · BCA Academy, 18 August 2023. Passed the coursework assessments for internal quality auditing based on quality, environmental and health and safety standards."
      },
      "link": {
        "url": "assets/certificates/bca-iso-internal-audit.pdf",
        "label": {
          "zh": "查看证书 PDF",
          "en": "View certificate PDF"
        }
      }
    },
    {
      "title": {
        "zh": "新加坡—剑桥 GCE O-Level 强化预备课程结业证书",
        "en": "Singapore-Cambridge GCE O-Level Preparatory Course (Intensive)"
      },
      "body": {
        "zh": "课程结业证书｜Furen International School，2020.10.02。",
        "en": "Certificate of Completion · Furen International School, 2 October 2020."
      },
      "link": {
        "url": "assets/certificates/gce-o-level-preparatory-course.pdf",
        "label": { "zh": "查看证书 PDF", "en": "View certificate PDF" }
      }
    },
    {
      "title": {
        "zh": "Virtual Design & Construction Boot Camp Competition 季军",
        "en": "Virtual Design & Construction Boot Camp Competition — 2nd Runner-up"
      },
      "body": {
        "zh": "竞赛奖项｜BIMAGE Virtual Design & Construction Boot Camp Competition，四人团队，2023。",
        "en": "Competition award · BIMAGE Virtual Design & Construction Boot Camp Competition, four-person team, 2023."
      },
      "link": {
        "url": "assets/certificates/vdc-boot-camp-award.pdf",
        "label": { "zh": "查看奖项 PDF", "en": "View award PDF" }
      }
    }
  ],
  "footer": {
    "zh": "更新于 2026 年 10 月 15 日",
    "en": "Updated 15 October 2026"
  },
  "summary": {
    "zh": "詹姆斯库克大学新加坡校区信息技术专业 2027 届本科生，GPA 5.85/7.00。在 Basilos 参与 AI 人脸一致性连接器开发、内部部署与测试；独立开发反诈骗 Android 应用，编写 102 项自动化测试。曾任四人团队产品负责人，将需求整理为用户故事与验收标准，推进 3 轮迭代，团队按期交付 10 个用户故事。此前的质量与运营工作积累了数据维护、材料审核和跨团队沟通经验。现居新加坡，英语可作为工作语言。",
    "en": "Information Technology undergraduate at James Cook University Singapore, graduating in 2027 with a GPA of 5.85/7.00. At Basilos, I contributed to an AI face-consistency connector from development through internal deployment and testing. I independently built an anti-scam Android app with 102 automated tests. As product owner in a four-person team, I translated requirements into user stories and acceptance criteria across three iterations; the team delivered 10 user stories on time. Earlier quality and operations roles developed my experience in data maintenance, document review and cross-team coordination. Based in Singapore and comfortable working in English."
  },
  "availability": {
    "zh": "2026 年 12 月下旬可全职到岗 · 预计 2027 年 3 月毕业",
    "en": "Available full-time from late December 2026 · Expected graduation March 2027"
  },
  "resumes": [
    {
      "file": "general",
      "zh": "标准个人简历",
      "en": "Standard résumé"
    },
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
    "zh": "个人简介",
    "en": "Professional profile"
  },
  "featured": [
    "scamwise",
    "wildlife",
    "recommendation"
  ]
};
