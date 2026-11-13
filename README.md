# Junjie Chu — 通用个人作品与经历

## V2 开发与部署

新版源码位于 `src/`、`site/` 和 `server/`，使用 React、Vite 与 Node.js 24。根目录的静态页面及 `data.js` 保存为迁移来源。新版由 Vite 构建，仅部署 `dist/`。

```sh
npm ci
npm run dev
npm run build
npm test
npx playwright install chromium
npm run test:e2e
```

开发及构建预览路径均为 `/junjie-chu.cv/`。本机 Edge 可通过环境变量 `PLAYWRIGHT_CHANNEL=msedge` 运行测试。构建以静态首页提供 SEO 文本和默认 Open Graph 信息，详情采用 Hash 路由，可以刷新和分享。社交平台通常只抓取默认分享卡片。

### Pages 发布与回滚

1. 在独立分支创建 PR，查看 `Résumé V2` 的测试结果。Actions 产物 `resume-v2-preview` 可下载，解压到本地静态服务器的 `/junjie-chu.cv/` 子目录预览。
2. 由仓库维护者批准合并后，将 **Settings → Pages → Build and deployment → Source** 设置为 **GitHub Actions**。可在 Actions 手动运行主分支的 `Résumé V2` 工作流。只将 `dist/` 上传到 Pages，原站地址继续使用 `https://chu-junjie.github.io/junjie-chu.cv/`。
3. 回滚时由维护者恢复上一版 V2 提交并重新运行发布。回到 V1 时先确认旧版公开资料范围，原有分支构建会重新暴露旧站所包含的资料。

### AI API 配置

复制 `.env.example` 为本机 `.env`，设置服务端变量后运行 `npm run api`，再启动前端。兼容提供 `POST /chat/completions` 和 JSON object mode 的模型服务。把 `AI_API_BASE_URL` 配为供应商 API 根路径，`AI_MODEL` 配为真实模型名，`AI_API_KEY` 仅保存在服务端。浏览器只使用 `VITE_AI_API_URL`。

生产可使用独立的 Node Web Service。构建命令为 `npm ci && npm run prepare:site`，启动命令为 `node server/index.mjs`。设置 `AI_API_BASE_URL`、`AI_MODEL`、`AI_API_KEY` 和 `ALLOWED_ORIGIN=https://chu-junjie.github.io`，端口由托管方注入。启用 HTTPS，并用 `GET /api/health` 检查是否已配置。将 HTTPS 服务地址填入 GitHub 仓库 Actions 变量 `VITE_AI_API_URL` 后重新构建前端。若服务在反向代理后，只有代理会覆盖外部转发头时才设置 `TRUST_PROXY=1`。

- `POST /api/copilot/chat` 接收 `{lang,messages,match?}`，返回纯文本回答和公开证据 ID。
- `POST /api/job-match/analyze` 接收 `{lang,jd,requirements?}`，返回分类、要求、证据、确定性评分和简历建议。岗位文本经访客同意后才发给模型。
- `GET /api/health` 返回 `ready` 或 `unconfigured`。缺少模型配置时，网站如实显示状态。单元测试中的模型响应仅用于测试传输、验证和评分。

详见 [V2 迁移与验收记录](docs/V2-migration.md)。下方保留 V1 维护与事实核验记录。

纯静态中英文网站。网页完整保留项目目标、个人贡献、实现、方法、验证、复盘和原始证据；六个简历版本各提供一页中英文 PDF，中文版另附可编辑 Word。

## 维护

- `data.js`：中英文个人背景、经历、八个项目及简历版本。
- `script.js`：渲染、语言、章节导航、深链、下载和打印。
- `index.html`：中文静态正文；无 JavaScript 时仍能完整阅读和下载。
- `style.css`：桌面、手机、详细网页打印。
- `motion.js`：可选克制动效，支持减少动态效果设置。
- `assets/portrait-224.webp`、`portrait-336.webp`：原比例网页副本，约6.7/12.9KB；`photo.png` 原图保留。
- `assets/resumes/`：六个版本的中英文 PDF，以及中文 Word。英文 PDF 使用对应文件名的 `-en.pdf` 后缀。
- `assets/resume-previews/`、`assets/certificate-previews/`：由网站现有 PDF 生成的一页预览图。替换 PDF 后，在已安装 Poppler 的环境运行 `./scripts/render-pdf-previews.ps1` 更新预览。
- `assets/certificates/`：证书、奖项和 JCU 导师推荐信 PDF。推荐信按原件标明研究生申请用途。
- `assets/project-logos/`：SG-Navi 与 ScamWise Campus 使用原项目标志，其余六枚图标为作品集设计。
- `assets/evidence/`：原始项目截图、ERD、SQL 查询与榜单证据。

修改内容后，在具备 Playwright 的开发环境运行 `node scripts/sync-static.cjs`。默认 Edge，`RESUME_BROWSER` 可指定 Chromium 路径。
网站无需构建，可直接打开 `index.html` 或通过静态服务器访问。

## 阅读与下载

桌面与手机的页内链接平滑定位，保留可分享锚点、前进后退和键盘焦点。系统启用减少动态效果时直接定位。手机项目目录支持 Escape，选中后自动关闭。
版式采用白色与深蓝灰、系统无衬线字体。首页简介旁有五个精选项目。宽屏时，工作经历和证书每行三张卡片，作品集每行两张，作品集按项目结束月份倒序排列。有在线演示的项目在详情顶部显示演示入口。点击详情可在弹窗中滚动查看完整贡献、截图和验证结果。“About me” 包含个人自述、原创 ISFJ 守护者插画及两个家庭项目。
公开页教育栏列出学校、专业及学习时间；`?preview=graduate` 是有明显标识的毕业后页面预览，`?preview=graduate&lang=en` 为英文。实际取得学位后，核对授予年月、将 `DATA.graduation.confirmed` 设为 `true`，再运行静态同步并发布。
首屏的“预览个人简历”和联系方式旁的“下载个人简历”按当前语言使用软件开发版（`software-development.pdf` 或 `software-development-en.pdf`）。证书和简历预览默认显示完整一页，可使用两个放大镜逐级缩放并下载原始 PDF。简历预览还支持切换语言，中文另可下载 Word。无 JavaScript 时，项目和经历可在页面内展开，证书和简历可直接打开。
首页使用通用个人简介；主邮箱为 QQ，Gmail 为备用。证书区保留学历、职业培训、竞赛及校园服务认可的具体类别，未知颁发日期不补写。

## 稳定项目链接

| 内容 | 锚点 |
| --- | --- |
| SG-Navi 毕业项目 | `#sg-navi` |
| 反诈骗 Android 应用 | `#scamwise` |
| 产品负责人／推荐平台 | `#recommendation` |
| 计算机视觉 | `#wildlife` |
| 辍学模型 | `#dropout` |
| UI、前端与 Scrum | `#smartseat` |
| 航空数据库模型 | `#flyhigh` |
| 实际 SQL 与结果分析 | `#library-sql` |
| 测试细节 | `#scamwise-quality` |
| 生活 | `#personal` |
| 下载 | `#downloads` |

基址为 `https://chu-junjie.github.io/junjie-chu.cv/`。英文在锚点前加 `?lang=en`。
旧的 `#skills`、`#leadership` 仍可定位；语言切换保留项目展开状态。

## 本轮证据及内容核验

- 工作经历按时间倒序展示 Basilos、STAS 和徐州华夏电子。STAS 显示为运营与行政实习生，保留认证材料审核、3场展会付款、市场调研、供应商及配置测试。华夏电子的每日十余份报告、约200名员工工作数据、Excel及车间沟通由用户确认；未加入未确认的异常案例、处理成果或效率百分比。
- BCA PDF 原件的准确名称为 Internal Quality Audit based on ISO 9001 / ISO 14001 / ISO 45001 Standards，属于课程结业证书，日期2023-08-18；与此前 ISO 条目合并，未写成企业 ISO 认证或审核员执业资质。
- 六项证书／奖项均有可打开的PDF。按原件核正：O-Level 为 Furen International School 强化预备课程结业证书（2020-10-02），WSQ 为 LearnCollab 课程（2023-11-18至26）；EMAS 为2026年第2学期感谢证书，BCA文凭日期2024-11-19。EMAS与WSQ的网页展示副本安全移除学号／FIN号码，原文件未修改。
- DrivenData 官方练习赛为 Conser-vision Practice Area: Image Classification。用户提供截图显示账号 ChuJunjie 排名48、Log Loss1.0136，末页名次810；用户明确要求统一采用48/810，旧排名已替换。
- 截图于2026-10-15收录，真实截图拍摄日期未知；网页作为静态成绩记录，不宣称实时名次。`leaderboard-record.json` 保存来源和口径。
- 野生动物项目为五人团队；个人职责为数据处理与训练协作，团队结果不写成个人独立成果。
- FlyHigh 原始 ERD、.mwb 支持22表建模。这里只展示课程概念设计和约束，不把触发器方案、SQL执行或其他课程输出混写为已经实现的航空系统。
- SQL分析证据来自本人 CP2404 Practical8 原始提交：SQL-10、SQL-21、SQL-23及原始结果截图；本轮未重跑数据库。
- 书目5236有12次借阅；读者1183为3次借阅／1种书。周期查询先筛选至少3条借阅记录，再对已归还记录求平均，截图结果2–7天；未写为运营改善。
- CP1407 使用 DL4J MLP RunC 的10折结果；普通MLP的66%划分另行说明。混淆矩阵1172/1421识别、249漏识别来自原始结果。
- SmartSeat 的前端、结对编程、曾任SM，以及独立16屏原型／3轮60人次均获用户确认。
- GPA 5.85/7.00、系内前 5%、JCU 算法辅导和 BCA 相关课程按用户提供的信息更新。JCU 学习时间为 2025.01–2027.02；公开页未标注已取得学位。既有下载版简历未随本轮网页修改。未加入 FarmLink 或 Bega。
- SG-Navi 是 6 人跨学科团队毕业项目（3 名开发、3 名商科）。个人职责以用户确认及项目 README 为准：开发团队产品负责人、RAG、来源、共享契约与技术验收。商科组员负责金融报价等分析；团队验证数据标明仓库记录和日期。
- SG-Navi 的四张手机流程截图由用户提供，顺序为问题输入、事实确认、材料准备及后续选项。Basilos 实习期间为 2026.07–2026.12，AI 平台名为 Tyrion.ai，调研与测试工具来自用户确认。
- 网页中英文均以QQ为主邮箱、Gmail为备用。六份对应英文PDF由当前中文简历翻译并逐页检查；中文原件、外部ZIP和源材料未覆盖。

发布须包含 `data.js`、`motion.js`、全部 `assets`。原始材料、临时脚本及QA截图保存在任务临时目录，不随网站发布。
