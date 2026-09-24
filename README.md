# Junjie Chu — 通用个人简历

中英文静态简历网站，呈现软件开发、数据与 AI、测试和项目协作经历。
使用 HTML、CSS 和 JavaScript，无需构建即可访问或部署到 GitHub Pages。

## 文件

- `index.html`：页面结构及中文静态正文，JavaScript 不可用时仍可阅读。
- `script.js`：中英文内容、语言切换与页面交互。
- `style.css`：桌面、移动端和 A4 打印样式。
- `photo.png`：用户提供的证件照，按原始 3:4 比例展示。
- `assets/scamwise/`：从截图证据 PDF 提取的四张原始 JPG，点击可查看原图。
- `assets/resumes/`：五份原样保留的中文 Word 简历，按岗位方向下载。
- `scripts/sync-static.cjs`：内容变更后同步中文静态正文的可选开发工具。

## 维护内容

中英文内容在 `script.js` 的 `DATA` 及其后面的通用简历配置中维护。
专业方向包括软件开发、技术项目管理、数据分析、测试开发和算法工程。
修改内容后需同步 `index.html` 的静态正文，避免无 JavaScript 访问者看到旧内容。
可在已安装 Playwright 的开发环境运行 `node scripts/sync-static.cjs`；默认使用 Edge，
也可用 `RESUME_BROWSER` 指定 Chromium 浏览器路径。网站运行本身不依赖 Playwright。

材料中的学生辍学预测项目日期存在冲突（2025.06–2025.09 / 2026.05–2026.08），
网页暂不展示该项目日期。实习结束时间也存在“至今”和“2026.10”两种写法，
截至本次更新（2026 年 9 月）保留“至今”。未推断两家实习单位的雇佣或合作关系。

## 预览与打印

直接打开 `index.html`，或在此目录运行 `python -m http.server 8000`，
访问 `http://localhost:8000`。语言偏好在可用时保存到本地存储。

页面底部的“打印 / 保存 PDF”调用浏览器打印功能；选择 A4、关闭浏览器页眉页脚。
打印隐藏导航、下载控件、重复的成果摘要及项目截图，保留完整简历文字。
五份 Word 文件为用户提供的原件，不是由网页生成的版本。

## 发布

将网页文件及 `assets` 目录一起部署。GitHub Pages 可选择仓库分支根目录。
本次修改仅更新本地文件，不自动发布。
