# Junjie Chu — 通用个人作品与经历

纯静态中英文网站，支持从六份一页简历进入。网页保留完整经历、项目实现、方法、验证、复盘与截图，不受一页简历篇幅限制。
首页保持通用定位，提供三个代表项目入口；六项目目录可跳转到各案例，方法与复盘默认展开，也可自行收起。

## 文件与维护

- `data.js`：中英文个人背景、经历、六个项目与六份下载版本。
- `script.js`：页面渲染、语言切换、导航、项目深链与打印。
- `index.html`：同步的中文静态内容，禁用 JavaScript 仍可阅读和下载。
- `style.css`：桌面、手机与详细网页打印样式。
- `motion.js`：可选动效，支持减少动态效果设置。
- `photo.png`：用户指定证件照。
- `assets/resumes/`：新版六份一页 Word 原件及相应 PDF，主入口为通用岗位版 PDF。
- `assets/scamwise/`、`assets/evidence/`：用户材料中提取的真实界面及实验截图。
- `scripts/sync-static.cjs`：修改数据后同步静态正文的开发工具。

在安装 Playwright 的环境运行 `node scripts/sync-static.cjs`。默认使用 Edge，可通过 `RESUME_BROWSER` 指定 Chromium 路径。
网站无需构建或运行时依赖。可直接打开 `index.html`，或使用任意静态文件服务器。

## 下载与打印

2026-10-15 更新的输入为用户提供的 `六份一页简历_细节增强版.zip`，内含六份 DOCX。
Word 原件保持内容和字节不变；由 Microsoft Word 导出六份独立 PDF，经逐页视觉检查。
六版本：通用岗位、软件开发、技术项目管理、数据分析、测试开发、算法工程。
PDF 适合直接投递，Word 为可编辑副本。打印网页是单独操作，保留展开的详细方法与项目成果，不冒充一页下载简历。

## 稳定链接

| 方向 | 项目入口 |
| --- | --- |
| 通用首页 | https://chu-junjie.github.io/junjie-chu.cv/ |
| 软件开发 | https://chu-junjie.github.io/junjie-chu.cv/#scamwise |
| 技术项目管理 | https://chu-junjie.github.io/junjie-chu.cv/#recommendation |
| 数据分析 | https://chu-junjie.github.io/junjie-chu.cv/#flyhigh |
| 数据建模 | https://chu-junjie.github.io/junjie-chu.cv/#dropout |
| 测试开发 | https://chu-junjie.github.io/junjie-chu.cv/#scamwise-quality |
| 算法工程 | https://chu-junjie.github.io/junjie-chu.cv/#wildlife |
| 下载区 | https://chu-junjie.github.io/junjie-chu.cv/#downloads |

英文链接在锚点前加 `?lang=en`。语言切换保留锚点与展开／收起状态；旧的 `#skills` 和 `#leadership` 仍可定位。

## 内容与证据

- 最新简历补充 Basilos 工程化、54 项内部测试、23 组身份比对、30 次同输入运行、P50/P95，以及 FlyHigh 22 实体数据库设计；不同验证阶段与指标不混用。
- 野生动物项目按最新材料写为数据处理与训练协作，团队公开榜准确排名为 42/797；不将团队结果归为个人独立成果。
- SmartSeat 的前端、结对编程、曾任 SM，以及独立 16 屏原型／3 轮累计 60 人次测试，均已由用户明确确认；保留课程演示与模拟数据边界。
- 推荐平台截图来自用户指南第 1 页图 1、第 10 页图 8，价格与库存为公开／教学数据场景。
- ScamWise 复盘来自 `A3 reflection.pdf`，明确区分已完成工作与后续改进计划。
- CP1407 实验截图来自 `A1-Junjie-Chu.docx` Q9 Run C，核实 F1 0.893、MCC 0.776、ROC-AUC 0.933。普通 MLP 的 66% 划分实验单独说明。
- 学生辍学预测日期仍无统一依据，暂不展示。按用户要求不加入 FarmLink、Bega。

发布应包含 `data.js`、`motion.js`、所有 `assets` 和照片。
