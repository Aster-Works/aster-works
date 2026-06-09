// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// NOTE: `site` は本番ドメインに置き換えてください（canonical / sitemap / OG URL に使用）。
// 例: 'https://aster.works' などの実ドメイン。
// https://astro.build/config
export default defineConfig({
  site: 'https://aster-works.vercel.app',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
