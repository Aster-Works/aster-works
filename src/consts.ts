// =============================================================
// サイト全体の定数（コピー・SEO・ナビ・ロゴ設定）
// ここを編集すれば各ページに反映されます。
// =============================================================

export const SITE = {
  name: 'Aster Works',
  /** 本番ドメイン。astro.config.mjs の `site` と揃えてください。 */
  url: 'https://www.asterworks.org',
  /** トップページ <title> */
  title: 'Aster Works | 小さな道具で、明るい未来を。',
  /** 既定の meta description / OG description */
  description:
    'Aster Works は、仕事・学び・暮らしを照らす、実用的なデジタルツールをつくっています。',
  /** メインコピー（キャッチ） */
  tagline: '小さな道具で、明るい未来を。',
  /** フッターなどで使う短縮コピー */
  shortCopy: '仕事・学び・暮らしを照らす、実用的なデジタルツール。',
  /** OGP 画像（1200×630 PNG・ブランドロゴ入り） */
  ogImage: '/og-image.png',
  /** 問い合わせ先メール */
  email: 'jimiaki7@gmail.com',
  /** 著作権表記の年 */
  copyrightYear: 2026,
  lang: 'ja',
  locale: 'ja_JP',
  /**
   * Google Analytics 4 の測定ID（例: 'G-XXXXXXXXXX'）。
   * 本番ビルド（PROD）かつ値がある時だけ gtag を読み込む（ローカル開発では無効）。
   * GA4 プロパティを作成したら、ここに測定IDを設定して再デプロイすれば計測開始。
   */
  gaId: 'G-S16B1BPTTD',
  /**
   * Google Search Console「HTMLタグ」認証の content 値だけを入れる。
   * 例: 認証タグが <meta name="google-site-verification" content="abc123"> なら 'abc123'。
   * 空なら何も出力しない。
   */
  googleSiteVerification: '',
} as const;

/** ヘッダー／フッターのナビゲーション */
export const NAV: { label: string; href: string }[] = [
  { label: 'Tools', href: '/tools' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/** フッターの補助リンク（規約系） */
export const FOOTER_LINKS: { label: string; href: string }[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: '特定商取引法に基づく表記', href: '/tokushoho' },
  { label: 'Contact', href: '/contact' },
];

// =============================================================
// ロゴ設定
// 画像ロゴを /public/logo/ に置いたら、対応する値にパスを設定するだけで
// テキストロゴ → 画像ロゴへ自動的に差し替わります（Logo.astro が参照）。
// 例: horizontal: '/logo/aster-works-logo-horizontal.png'
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
