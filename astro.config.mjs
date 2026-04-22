// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
    base: '/python-blog/',
    output: 'static',

    image: {
        domImage: true,
    },

    build: {
        inlineStylesheets: 'auto',
    },

    sitemap: {
        hostname: 'https://zaxys916.github.io/python-blog/',
    },

    devServer: {},
});
