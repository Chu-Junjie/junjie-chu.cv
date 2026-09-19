# Junjie Chu — Personal Résumé Site

纯静态网站（HTML + CSS + JS，无需构建工具），可直接部署到 GitHub Pages。

## 文件结构

```
index.html      页面结构
style.css       样式
script.js       内容数据（中英双语）与渲染逻辑
assets/photo.jpg 照片
```

修改简历内容时，只需编辑 `script.js` 顶部的 `DATA` 对象——每一项都有 `zh` / `en` 两个字段。

## 部署到 GitHub Pages

1. 在 GitHub 上新建一个仓库，例如 `junjie-chu.github.io`（用这个名字可以直接用
   `https://<你的用户名>.github.io` 访问）或任意仓库名（如 `resume-site`）。
2. 把这个文件夹里的全部文件推送到仓库根目录：

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/Chu-Junjie/<仓库名>.git
   git push -u origin main
   ```

3. 打开仓库的 **Settings → Pages**，Source 选择 `Deploy from a branch`，
   Branch 选择 `main` / `root`，保存。
4. 一两分钟后，页面会发布在：
   - 若仓库名是 `<用户名>.github.io` → `https://<用户名>.github.io`
   - 否则 → `https://<用户名>.github.io/<仓库名>/`

## 本地预览

```bash
python3 -m http.server 8000
```

然后打开 `http://localhost:8000`。
