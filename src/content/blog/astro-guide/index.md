---
title: Astro 框架指南
slug: astro-guide
date: 2026-04-21
tags: [Astro, Web 开发，框架]
---

# Astro 框架指南

## 为什么选择 Astro？

Astro 是一个现代化的静态网站生成器：

| 特性 | 优势 |
|------|------|
| 🚀 **零 JavaScript** | 默认不输出 JS，页面加载最快 |
| 📝 **多格式支持** | Markdown, MDX, JSX, Svelte, React |
| 🖼️ **图片压缩** | 自动优化 WebP/AVIF |
| 🔗 **组件导出** | 完美复用前端组件 |
| 💎 **类型安全** | TypeScript 开箱即用 |

## 快速上手

### 安装

```bash
npm create astro@latest my-astro-site
```

### 项目结构

```
my-astro-site/
├── src/
│   ├── pages/          # 路由页面
│   ├── components/     # 组件
│   └── layouts/        # 布局
├── public/             # 静态资源
├── astro.config.mjs    # 配置
└── package.json
```

### 开发模式

```bash
npm run dev
# http://localhost:4321
```

### 构建生产

```bash
npm run build
# 输出到 dist/
```

## Astro Components

Astro 支持两种组件类型：

### Astro Component (.astro)

```astro
---
// 代码逻辑
const message = 'Hello, World!';
---

<h1>{message}</h1>
```

### Markdown (.md / .mdx)

```markdown
---
title: "Markdown 文章"
description: "这是一篇 MDX 文章"
---

# 标题

这是正文内容。
```

## 路由系统

Astro 使用文件系统路由：

| 文件路径 | URL |
|---------|------|
| `src/pages/index.astro` | `/` |
| `src/pages/about/index.astro` | `/about` |
| `src/pages/contact/[name].astro` | `/contact/张三` |

## 图片优化

```astro
---
import Image from '@/components/Image.astro';
const src = '/images/example.jpg';
---

<!-- Astro 自动响应式图片 -->
<Image src={src} alt="示例图片" />
```

## 组件导出

在 `src/components/Footer.astro`：

```astro
---
export const title = '页脚内容';
---

<footer>© 2026</footer>
```

在其他页面导入：

```astro
import Footer from '@/components/Footer.astro';

<!-- ... -->

<Footer />
```

## 超链接与锚点

```astro
<a href="/about" title="关于页面">关于</a>

<a href="#features">跳转到功能列表</a>

<!-- 外部链接加 noreferrer -->
<a href="https://astro.build" target="_blank" rel="noreferrer noopener">
  Astro 官网
</a>
```

## 下一步

- [Python 入门教程](../python-intro/)
- [GitHub Pages 部署](../github-pages/)
