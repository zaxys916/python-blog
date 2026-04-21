// src/pages/api/create.ts
import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();
    const slug = data.get('slug') as string;

    const targetDir = path.join(process.cwd(), 'src/content/blog', slug);
    fs.mkdirSync(targetDir, { recursive: true });

    // 写入 index.md
    fs.writeFileSync(
        path.join(targetDir, 'index.md'),
        `---\ntitle: ${data.get('title')}\ndate: ${data.get('date')}\n---\n\n${data.get('content')}`
    );

    return new Response(null, { status: 302, headers: { Location: '/blog' } });
};