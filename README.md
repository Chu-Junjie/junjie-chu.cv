# Junjie Chu — 通用个人作品与经历

纯静态中英文网站，可从软件开发、技术项目管理、数据分析、测试开发、算法工程五个方向的简历链接进入。
首页突出代表项目；案例区区分目标、个人贡献、关键决策与验证结果。

## 文件与维护

- `data.js`：中英文经历与项目数据。修改内容后同步静态正文。
- `script.js`：渲染、语言切换、导航和项目深链。
- `index.html`：中文预渲染内容；禁用 JavaScript 时仍能阅读、展开案例和下载文件。
- `style.css`：桌面、移动端及 A4 打印样式。
- `photo.png`：用户指定证件照，原始比例。
- `assets/scamwise/`：从 PDF 提取的四张实际截图，可打开原图。
- `assets/resumes/`：五份原始中文 Word 简历；入口收纳在底部联系区。
- `assets/favicon.svg`、`assets/social-card.png`：网站图标与分享预览。

在已安装 Playwright 的开发环境运行 `node scripts/sync-static.cjs`，同步中文静态正文。
工具默认使用 Edge，可通过 `RESUME_BROWSER` 指定 Chromium 路径。网站运行无需 Node 或 Playwright。
直接打开 `index.html`，或从本目录启动任意静态文件服务器。

## 五份简历的链接

网站发布后可使用以下地址；这些锚点也是稳定的项目标识，不应随文案改名。

| 方向 | 建议链接 |
| --- | --- |
| 通用首页 | https://chu-junjie.github.io/junjie-chu.cv/ |
| 软件开发 | https://chu-junjie.github.io/junjie-chu.cv/#scamwise |
| 技术项目管理 | https://chu-junjie.github.io/junjie-chu.cv/#recommendation |
| 数据分析 | https://chu-junjie.github.io/junjie-chu.cv/#dropout |
| 测试开发 | https://chu-junjie.github.io/junjie-chu.cv/#scamwise-quality |
| 算法工程 | https://chu-junjie.github.io/junjie-chu.cv/#wildlife |

测试开发链接会自动展开方法与验证区域。英文链接在锚点前加 `?lang=en`，例如 `?lang=en#wildlife`。
语言切换保留项目锚点与案例展开状态。旧的 `#downloads`、`#skills`、`#leadership` 链接仍可定位。

## 内容边界

全部经历与数字来自用户提供的简历和截图材料，没有新编造比赛链接或认证。
学生辍学预测项目日期在材料中存在冲突，暂不展示。实习结束时间保留“至今”，未推断两家单位关系。
SmartSeat 明确为模拟数据流原型；人脸识别明确为小规模验证集；模型指标说明公开榜或交叉验证口径。

## 打印与部署

底部联系区可打印或保存通用简历；选择 A4，关闭浏览器页眉页脚。打印保留项目摘要，隐藏截图、案例展开细节、导航及下载控件。
Word 下载文件为原件，没有改写内容。发布需包含 `data.js`、`assets` 和照片等全部站点资源。

## 动效

`motion.js` 为可选的渐进增强：首屏分层淡入、章节进入视口时轻微上移、顶部阅读进度线。
卡片、按钮、截图和链接的悬停反馈由 CSS 提供，仅在支持鼠标悬停时使用位移。
动画不循环，不预先隐藏正文；支持 `prefers-reduced-motion`，设置变更后立即取消正在播放的动画。
键盘焦点、锚点定位及打印不会等待动画。发布时请包含 `motion.js`。
