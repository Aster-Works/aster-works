// =============================================================
// ツールデータ（多言語）
// 将来 /tools/[slug] の個別ページを追加する場合も、この配列を起点にできます。
// status: 'available' になったら href に実URL（または個別ページ）を設定してください。
//
// title（ブランド名）は言語非依存。description / tagline / highlights は
// 言語別に保持し、カード側で tool.description[lang] のように参照します。
// カテゴリは消費者向け（Work / Learning / Life）と開発者向け（Developer）に
// 分かれます。Developer は専用セクション（DeveloperToolCard）で表示します。
// =============================================================
import type { Lang } from '../i18n/ui';

export type ToolStatus = 'available' | 'coming-soon';
export type ToolCategory = 'Work' | 'Learning' | 'Life' | 'Developer';

/** 言語別の文字列 / 文字列配列 */
type L10n = Record<Lang, string>;
type L10nList = Record<Lang, string[]>;

export interface Tool {
  /** 表示名（ブランド名・言語非依存） */
  title: string;
  /** URL用スラッグ（将来の /tools/[slug] 用） */
  slug: string;
  /** カテゴリ */
  category: ToolCategory;
  /** 公開状況 */
  status: ToolStatus;
  /** 一覧・カードに出す短い説明（言語別） */
  description: L10n;
  /** 公開済みの場合のリンク先（外部URL or /tools/[slug]）。未設定なら準備中表示。 */
  href?: string;

  // --- 以下は開発ツール（category: 'Developer'）向けの任意フィールド ---
  /** カードに出す短いキャッチコピー（言語別） */
  tagline?: L10n;
  /** すぐ試せるインストール / 実行コマンド（言語非依存） */
  install?: string;
  /** npm パッケージページ */
  npmUrl?: string;
  /** ソースコード（GitHub） */
  repoUrl?: string;
  /** カードに出す要点（3〜4点・言語別） */
  highlights?: L10nList;
  /** 実行結果などのデモ画像（public 配下のパス） */
  demoImage?: {
    src: string;
    alt: L10n;
    caption: L10n;
  };
}

export const tools: Tool[] = [
  {
    title: 'Aster Guard',
    slug: 'aster-guard',
    category: 'Developer',
    status: 'available',
    description: {
      ja: 'MCPサーバーや .mcp.json を「つなぐ前に」点検する、軽量なセキュリティ診断ツールです。Claude Code ユーザーと個人AI開発者のために。',
      en: 'A lightweight security scanner that checks MCP servers and .mcp.json before you connect them — built for Claude Code users and indie AI developers.',
    },
    tagline: {
      ja: 'つなぐ前に、ひと目で安全確認。',
      en: 'Check safety at a glance, before you connect.',
    },
    install: 'npx -y @asterworks/aster-guard scan',
    npmUrl: 'https://www.npmjs.com/package/@asterworks/aster-guard',
    repoUrl: 'https://github.com/Aster-Works/aster-guard',
    demoImage: {
      src: '/images/aster-guard-scan-demo.png',
      alt: {
        ja: 'Aster Guardがデモ用の危険なMCP設定をスキャンし、重大・高・中の検出結果を表示しているターミナル画面',
        en: 'Terminal screenshot of Aster Guard scanning a sample risky MCP config and showing critical, high, and medium findings',
      },
      caption: {
        ja: 'デモ用の危険な .mcp.json をスキャンした結果。秘密情報は架空・マスク済みです。',
        en: 'Demo output from a sample risky .mcp.json. Secrets are fake and redacted.',
      },
    },
    highlights: {
      ja: [
        '12種類のリスクを静的解析で検出（プロンプトインジェクション・秘密情報・危険なインストール等）',
        'リスクスコア（0–100）と評価（A–F）を、日本語／英語のレポートで提示',
        'ローカル完結・外部送信なし。既定は読み取り専用で安全',
        'Claude Code から呼べる MCP サーバー／GitHub Actions にも対応',
      ],
      en: [
        'Detects 12 risk types via static analysis (prompt injection, secrets, dangerous installs, and more)',
        'Reports a risk score (0–100) and grade (A–F) in a Japanese or English report',
        'Runs fully local with no external transmission; read-only by default for safety',
        'Works as an MCP server callable from Claude Code, and in GitHub Actions',
      ],
    },
  },
  {
    title: 'Aster Support Navi',
    slug: 'aster-support-navi',
    category: 'Life',
    status: 'available',
    description: {
      ja: '住所と生活状況から、確認すべき支援制度と次にやることを整理する生活支援ナビです。東京23区の出産・子育て支援から公開中。',
      en: 'A support-program navigator that helps you find public assistance programs to check by address and life situation, then organize the next steps. Starting with childbirth and childcare support in Tokyo’s 23 wards.',
    },
    href: 'https://astersupport.com/',
  },
  {
    title: 'Aster Tools',
    slug: 'aster-tools',
    category: 'Life',
    status: 'available',
    description: {
      ja: '年齢・ローン・税金の計算から単位変換、文章づくりまで——暮らしと仕事の小さな手間を解く無料ツール集です。登録不要・多言語対応。',
      en: 'From age, loan, and tax calculators to unit conversion and writing helpers — a free toolkit for the small chores of work and daily life. No sign-up, multilingual.',
    },
    href: 'https://astertools.app/',
  },
  {
    title: 'Aster Business Navi',
    slug: 'aster-business-navi',
    category: 'Work',
    status: 'coming-soon',
    description: {
      ja: '会社サイトのURLから、Web・採用・信頼性の見落としと次に確認すべき改善点を整理する、中小企業向けの事業診断ナビです。',
      en: 'A business diagnostic navigator for small teams that reviews a company URL and organizes overlooked web, hiring, and trust signals into next checks.',
    },
  },
  {
    title: 'Aster Signal',
    slug: 'aster-signal',
    category: 'Work',
    status: 'coming-soon',
    description: {
      ja: '店舗の開業・移転・閉業の兆しを公開情報から検知し、営業すべき相手・タイミング・提案メモを根拠URL付きで整理するB2B営業シグナルサービスです。',
      en: 'A B2B sales-signal service that detects signs of restaurant openings, relocations, and closures from public sources, then organizes who to approach, when, and what to propose with evidence URLs.',
    },
  },
  {
    title: 'Aster Compass',
    slug: 'aster-compass',
    category: 'Learning',
    status: 'coming-soon',
    description: {
      ja: '関心・得意・価値観を5分で整理し、本人・保護者・先生が同じ一枚を見ながら進路の話を始めるための進路探索ツールです。',
      en: 'A career-exploration tool that helps students organize interests, strengths, and values in five minutes, then share one page to start a conversation with parents or teachers.',
    },
  },
  {
    title: 'Synaxis',
    slug: 'synaxis',
    category: 'Work',
    status: 'coming-soon',
    description: {
      ja: '礼拝出席と昼食申し込みをシンプルに管理する、教会向けマルチテナントSaaSです。',
      en: 'A multi-tenant SaaS for churches that simply manages worship attendance and lunch sign-ups.',
    },
  },
  {
    title: 'Keryx',
    slug: 'keryx',
    category: 'Work',
    status: 'coming-soon',
    description: {
      ja: '説教の計画から礼拝準備、振り返りまでをひとつにまとめる、日本語ファーストの牧師向けワークスペースです。',
      en: 'A Japanese-first workspace for pastors that brings sermon planning, service preparation, and reflection together in one place.',
    },
  },
];

/** 消費者向けツール（仕事 / 学び / 暮らし）。/tools のフィルタ対象。 */
export const consumerTools: Tool[] = tools.filter(
  (t) => t.category !== 'Developer'
);

/** 開発者向けツール（npm 公開プロダクト等）。専用セクションで表示。 */
export const developerTools: Tool[] = tools.filter(
  (t) => t.category === 'Developer'
);

/** トップページの「Featured Tools」に出す消費者向け3件 */
export const featuredTools: Tool[] = consumerTools.slice(0, 3);
