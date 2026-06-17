// =============================================================
// サイト全体の定数（言語非依存の設定・SEO・ロゴ）
// 言語ごとのコピー / ナビ / フッターリンクは src/i18n/ に移管しました。
// =============================================================

export const SITE = {
  name: 'Aster Works',
  /** 本番ドメイン。astro.config.mjs の `site` と揃えてください。 */
  url: 'https://www.asterworks.org',
  /** OGP 画像（1200×630 PNG・ブランドロゴ入り） */
  ogImage: '/og-image.png',
  /** 問い合わせ先メール */
  email: 'asterworks3322@gmail.com',
  /** 著作権表記の年 */
  copyrightYear: 2026,
  /**
   * Google Analytics 4 の測定ID（例: 'G-XXXXXXXXXX'）。
   * 本番ビルド（PROD）かつ値がある時だけ gtag を読み込む（ローカル開発では無効）。
   */
  gaId: 'G-S16B1BPTTD',
  /**
   * Google Search Console「HTMLタグ」認証の content 値だけを入れる。
   * 空なら何も出力しない。
   */
  googleSiteVerification: '',
} as const;

// =============================================================
// ロゴ設定
// 画像ロゴを /public/logo/ に置いたら、対応する値にパスを設定するだけで
// テキストロゴ → 画像ロゴへ自動的に差し替わります（Logo.astro が参照）。
// null のままならブランドのテキストロゴ（星マーク + Aster Works）を表示します。
// =============================================================
export const LOGO: {
  horizontal: string | null;
  stacked: string | null;
  icon: string | null;
  white: string | null;
} = {
  horizontal: '/logo/aster-works-logo-horizontal.png',
  stacked: '/logo/aster-works-logo-stacked.png',
  icon: '/logo/aster-works-logo-icon.png',
  white: '/logo/aster-works-logo-white.png',
};
