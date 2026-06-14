// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// NOTE: `site` は本番ドメイン（canonical / sitemap / OG URL に使用）。
// public/robots.txt の Sitemap URL と consts.ts の SITE.url を必ず揃える。
// https://astro.build/config
export default defineConfig({
  site: 'https://www.asterworks.org',
  // 末尾スラッシュを正規形に統一（canonical/sitemap と一致させ、重複URLを防ぐ）。
  // Vercel 側も vercel.json の "trailingSlash": true で /path → /path/ に 308。
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
