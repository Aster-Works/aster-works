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

  // --- 多言語（両言語ともプレフィックス： /ja/ と /en/） ---
  // 既定言語は ja。ルート（/）は下の redirects で /ja/ に 308。
  // ブラウザ言語による自動振り分けは行わない（各URLを canonical に保つ）。
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  // 旧URL（言語プレフィックスなし）→ /ja/ の同一ページへ恒久リダイレクト。
  // 既存のSEO評価・被リンクを日本語版へ引き継ぐ。
  redirects: {
    '/': '/ja/',
    '/tools': '/ja/tools/',
    '/about': '/ja/about/',
    '/contact': '/ja/contact/',
    '/privacy': '/ja/privacy/',
    '/terms': '/ja/terms/',
    '/tokushoho': '/ja/tokushoho/',
  },

  integrations: [
    mdx(),
    // sitemap も i18n を認識させ、各ページに hreflang 代替を出力する。
    sitemap({
      i18n: {
        defaultLocale: 'ja',
        locales: { ja: 'ja', en: 'en' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
