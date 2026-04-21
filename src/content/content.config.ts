// src/content.config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content', // ✅ 必须是 content 类型才能递归子目录
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(), // 或 pubDate，取决于你的 md 文件
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog, // ✅ 暴露 blog 集合
};
