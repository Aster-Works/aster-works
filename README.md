# Aster Works

仕事・学び・暮らしを照らす、実用的なデジタルツールをつくるプロジェクト「Aster Works」の公式サイトです。

> 小さな道具で、明るい成果を。

## 技術スタック

- [Astro](https://astro.build/) 5（静的サイト生成）
- TypeScript（strict）
- [Tailwind CSS](https://tailwindcss.com/) 4（`@tailwindcss/vite`）
- Markdown / MDX（`@astrojs/mdx`）
- サイトマップ（`@astrojs/sitemap`）
- Vercel デプロイ前提（静的出力）

## セットアップ

```sh
npm install
```

## コマンド

| コマンド            | 内容                                          |
| :------------------ | :-------------------------------------------- |
| `npm run dev`       | 開発サーバを起動（http://localhost:4321）     |
| `npm run build`     | 本番ビルド（`./dist/` に静的出力）            |
| `npm run preview`   | ビルド結果をローカルでプレビュー              |
| `npm run check`     | Astro / TypeScript の型チェック               |

## ディレクトリ構成

```
src/
  components/   … Header, Footer, Hero, ToolCard, CategoryCard, SectionHeading, PageHeader, Logo
  layouts/      … BaseLayout（SEO・フォント・共通シェル）
  pages/        … index, tools, about, contact, privacy, terms, 404
  data/         … tools.ts（ツール定義）
  styles/       … global.css（Tailwind テーマ・ブランドカラー）
  consts.ts     … サイト共通設定（コピー・ナビ・SEO・ロゴ設定）
public/
  logo/         … ロゴ画像の置き場所（README 参照）
  favicon.svg   … 暫定ファビコン
  og-image.svg  … 暫定 OGP 画像
  robots.txt
```

## カスタマイズの要点

- **ブランドカラー / フォント**：`src/styles/global.css` の `@theme`
- **サイト名・コピー・連絡先・SEO**：`src/consts.ts` の `SITE`
- **ナビゲーション**：`src/consts.ts` の `NAV` / `FOOTER_LINKS`
- **ツール一覧**：`src/data/tools.ts`
- **ロゴ差し替え**：`/public/logo/` に画像を置き、`src/consts.ts` の `LOGO` にパスを設定

## 本番前に置き換える項目

- `astro.config.mjs` の `site` を本番ドメインに変更
- `public/robots.txt` の Sitemap URL を本番ドメインに変更
- `src/consts.ts` の `SITE.url` / `SITE.email` を実際の値に変更
- ロゴ画像・favicon.png・OGP 画像（1200×630 PNG）の配置

## デプロイ（Vercel）

静的サイトのため、Vercel はゼロコンフィグで検出・ビルドできます
（Framework: Astro / Build: `astro build` / Output: `dist`）。リポジトリを
Vercel に接続するだけでデプロイされます。
