# Python 学习笔记博客

一个使用 **Astro** 构建的轻量级技术博客，部署在 GitHub Pages 上。

## ✨ 功能特性

- 🚀 **超快加载速度** - Astro 零 JavaScript 默认，图片自动压缩
- 📝 **文章发布** - Web 界面直接发布 Markdown 文章
- 🖼️ **图片支持** - 本地仓库存储或图床链接（Imgur/Cloudflare）
- 💬 **评论功能** - Giscus 集成 GitHub Discussions
- 📱 **响应式设计** - 自动适配手机和平板

## 🚀 快速开始

### 开发模式

```bash
npm run dev
```

打开 http://localhost:4321 预览博客。

### 构建生产版本

```bash
npm run build
```

构建后的静态文件在 `dist/` 目录。

### 本地预览构建结果

```bash
npm run preview
```

## 📂 项目结构

```
blog/
├── src/
│   ├── content/blog/      # 文章内容放在这里（Markdown 格式）
│   ├── layouts/           # 布局文件
│   ├── components/        # 可复用组件
│   └── pages/             # Astro Pages 路由
├── public/                # 静态资源（favicon, images）
├── astro.config.mjs       # 配置文件
└── package.json
```

## 📝 发布文章

1. 访问 `/posts/create` 填写文章信息
2. 或者直接创建文件：`src/content/blog/{slug}/index.md`

**示例文章结构：**

```
src/content/blog/python-basics/
├── index.md              # 文章内容
└── _data.json            # 元数据（自动生成）
```

**Markdown 内容示例：**

```markdown
---
title: Python 基础教程
slug: python-basics
date: 2026-04-21
tags: [Python, 教程]
---

# Python 基础教程

这是文章内容...

![[images/python-logo.png]]

## 列表示例

- 项目 1
- 项目 2
```

## 🖼️ 图片上传方案

### 方案 1：GitHub 仓库存放（推荐）

将图片放入 `public/images/` 目录，然后在 Markdown 中使用：

```markdown
![[images/python-logo.png]]
```

### 方案 2：免费图床

- **Imgur** - https://imgur.com/upload
- **Cloudflare Images** - https://developers.cloudflare.com/images/

在 Markdown 中直接使用图床链接：

```markdown
![Python Logo](https://i.imgur.com/example.png)
```

## 💬 启用 Giscus 评论

1. 在 GitHub 仓库创建 Discussions
2. 访问 https://giscus.app 获取配置参数
3. 将 `public/giscus/config.json` 更新为你的配置：

```json
{
    "repo": "your-username/your-repo",
    "repoId": "REPO_ID",
    "category": "Announcements",
    "categoryId": "DISCUSSION_CATEGORY_ID",
    "mapping": "pathname"
}
```

## 🚀 部署到 GitHub Pages

### 方式 1：GitHub Pages（推荐）

构建后上传 `dist/` 目录到 `gh-pages` 分支：

```bash
npm run build
git add dist/
git commit -m "Deploy blog"
git push origin gh-pages:gh-pages
```

### 方式 2：Vercel / Netlify

直接将 `dist/` 目录拖拽到 Vercel/Netlify 即可部署。

## 📦 依赖

已安装的核心依赖：
- `@astrojs/sitemap` - 自动生成站点地图
- `astro-compress` - 图片和代码压缩

## 🛠️ 开发工具推荐

**VS Code Extensions:**
- Markdown All in One
- Live Server
- Prettier - Code formatter

## 📄 License

MIT
