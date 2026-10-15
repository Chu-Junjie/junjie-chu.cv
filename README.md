# Junjie Chu — 通用个人作品与经历

纯静态中英文网站。网页完整保留项目目标、个人贡献、实现、方法、验证、复盘和原始证据；下载为六份一页中文版及一份英文通用版。

## 维护

- `data.js`：中英文个人背景、经历、七个项目及简历版本。
- `script.js`：渲染、语言、章节导航、深链、下载和打印。
- `index.html`：中文静态正文；无 JavaScript 时仍能完整阅读和下载。
- `style.css`：桌面、手机、详细网页打印。
- `motion.js`：可选克制动效，支持减少动态效果设置。
- `assets/portrait-224.webp`、`portrait-336.webp`：原比例网页副本，约6.7/12.9KB；`photo.png` 原图保留。
- `assets/resumes/`：六份中文、一份英文，各有 PDF 与 Word；均为一页。
- `assets/evidence/`：原始项目截图、ERD、SQL 查询与榜单证据。

修改内容后，在具备 Playwright 的开发环境运行 `node scripts/sync-static.cjs`。默认 Edge，`RESUME_BROWSER` 可指定 Chromium 路径。
网站无需构建，可直接打开 `index.html` 或通过静态服务器访问。

## 阅读与下载

手机常驻章节导航与项目目录支持键盘、Escape、焦点和锚点偏移；首页提供项目、实习和通用简历入口。
版式采用白色与深蓝灰、系统无衬线字体；桌面总宽度最多1360px，侧栏252px，正文15–16px。实习经历位于项目详情之前，项目保留完整贡献、方法和证据。手机使用单列布局，截图按类型限制显示尺寸，原图仍可打开。
中文页面主下载为 `general.pdf`，英文为 `general-en.pdf`；底部可选择全部七个版本及 Word。
“打印详细网页”保留完整方法与复盘；一页投递简历通过 PDF 下载入口获取。

## 稳定项目链接

| 内容 | 锚点 |
| --- | --- |
| 反诈骗 Android 应用 | `#scamwise` |
| 产品负责人／推荐平台 | `#recommendation` |
| 计算机视觉 | `#wildlife` |
| 辍学模型 | `#dropout` |
| UI、前端与 Scrum | `#smartseat` |
| 航空数据库模型 | `#flyhigh` |
| 实际 SQL 与结果分析 | `#library-sql` |
| 测试细节 | `#scamwise-quality` |
| 下载 | `#downloads` |

基址为 `https://chu-junjie.github.io/junjie-chu.cv/`。英文在锚点前加 `?lang=en`。
旧的 `#skills`、`#leadership` 仍可定位；语言切换保留项目展开状态。

## 本轮证据及内容核验

- DrivenData 官方练习赛为 Conser-vision Practice Area: Image Classification。用户提供截图显示账号 ChuJunjie 排名48、Log Loss1.0136，末页名次810；用户明确要求统一采用48/810，旧排名已替换。
- 截图于2026-10-15收录，真实截图拍摄日期未知；网页作为静态成绩记录，不宣称实时名次。`leaderboard-record.json` 保存来源和口径。
- 野生动物项目为五人团队；个人职责为数据处理与训练协作，团队结果不写成个人独立成果。
- FlyHigh 原始 ERD、.mwb 支持22表建模。这里只展示课程概念设计和约束，不把触发器方案、SQL执行或其他课程输出混写为已经实现的航空系统。
- SQL分析证据来自本人 CP2404 Practical8 原始提交：SQL-10、SQL-21、SQL-23及原始结果截图；本轮未重跑数据库。
- 书目5236有12次借阅；读者1183为3次借阅／1种书。周期查询先筛选至少3条借阅记录，再对已归还记录求平均，截图结果2–7天；未写为运营改善。
- CP1407 使用 DL4J MLP RunC 的10折结果；普通MLP的66%划分另行说明。混淆矩阵1172/1421识别、249漏识别来自原始结果。
- SmartSeat 的前端、结对编程、曾任SM，以及独立16屏原型／3轮60人次均获用户确认。
- GPA仅保留5.85/7.00；到岗为2026年12月下旬，预计2027年3月毕业。未加入FarmLink或Bega。
- 中文联系增加QQ，英文以Gmail为主。七份DOCX/PDF已逐页检查，原外部ZIP和源材料未覆盖。

发布须包含 `data.js`、`motion.js`、全部 `assets`。原始材料、临时脚本及QA截图保存在任务临时目录，不随网站发布。
