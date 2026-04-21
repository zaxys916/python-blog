---
title: GitHub Pages 部署指南
slug: github-pages
date: 2026-04-21
tags: [GitHub Pages, 部署，教程]
---

# GitHub Pages 部署指南

本教程教你如何免费将博客部署到 GitHub Pages。

## 什么是 GitHub Pages？

**GitHub Pages** 是 GitHub 提供的免费静态网站托管服务。你只需要：

1. 有一个 GitHub 仓库
2. 一个 `gh-pages` 分支（或配置在主分支）
3. 静态网页文件（HTML/CSS/JS）

## 创建 GitHub 仓库

```bash
# 在项目根目录初始化 git
git init

# 添加所有文件到暂存区
git add .

# 首次提交
git commit -m "Initial commit: Python 学习笔记博客"

# 连接到你的 GitHub 仓库
git remote add origin https://github.com/your-username/python-blog.git

# 推送到 GitHub（主分支）
git push -u origin main
```

## 启用 GitHub Pages

1. 进入你的 GitHub 仓库页面
2. **Settings** → **Pages**
3. Source 选择：
   - `gh-pages` 分支 → `/root` 目录
   - 或 `main` 分支 → `/root` 目录（推荐）
4. 点击 Save

访问地址：https://your-username.github.io/python-blog/

## 上传构建文件

### 方式 1：直接上传 dist/ 目录

```bash
# 构建生产版本
npm run build

# 查看构建输出
ls dist/

# 添加构建文件到仓库
git add dist/

# 提交
git commit -m "Build: 更新博客内容"

# 推送到 gh-pages 分支
git push origin gh-pages:gh-pages
```

### 方式 2：自动部署（推荐）

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build Astro site
        run: npm run build

      - name: Deploy to gh-pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

启用自动部署后，每次提交代码会自动更新 GitHub Pages！

## 配置 CNAME（可选）

如果你想要自定义域名：

1. 购买域名并解析到 GitHub Pages IP
2. 仓库 Settings → Pages → CNAME
3. 填入你的域名

## 常见问题

### ❓ 图片无法显示？

确保图片放在 `public/images/` 目录，或上传到仓库根目录。

### ❓ Giscus 评论不显示？

需要在 GitHub 仓库创建 Discussions，并配置 `public/giscus/config.json`。

### ❓ 中文乱码？

GitHub Pages 自动使用 UTF-8，确保在 package.json 中设置：

```json
"engines": {
  "node": ">=18.0.0"
}
```

## 下一步

- [添加更多文章](../python-intro/)
- [Python 进阶教程]()
