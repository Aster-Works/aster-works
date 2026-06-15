// =============================================================
// ツールデータ
// 将来 /tools/[slug] の個別ページを追加する場合も、この配列を起点にできます。
// status: 'available' になったら href に実URL（または個別ページ）を設定してください。
//
// カテゴリは消費者向け（Work / Learning / Life）と開発者向け（Developer）に
// 分かれます。Developer は専用セクション（DeveloperToolCard）で表示し、
// 消費者向けツール一覧のフィルタには混ぜません。
// =============================================================

export type ToolStatus = 'available' | 'coming-soon';
export type ToolCategory = 'Work' | 'Learning' | 'Life' | 'Developer';

export interface Tool {
  /** 表示名 */
  title: string;
  /** URL用スラッグ（将来の /tools/[slug] 用） */
  slug: string;
  /** カテゴリ */
  category: ToolCategory;
  /** 公開状況 */
  status: ToolStatus;
  /** 一覧・カードに出す短い説明 */
  description: string;
  /** 公開済みの場合のリンク先（外部URL or /tools/[slug]）。未設定なら準備中表示。 */
  href?: string;

  // --- 以下は開発ツール（category: 'Developer'）向けの任意フィールド ---
  /** カードに出す短いキャッチコピー */
  tagline?: string;
  /** すぐ試せるインストール / 実行コマンド */
  install?: string;
  /** npm パッケージページ */
  npmUrl?: string;
  /** ソースコード（GitHub） */
  repoUrl?: string;
  /** カードに出す要点（3〜4点） */
  highlights?: string[];
}

export const tools: Tool[] = [
  {
    title: 'Aster Guard',
    slug: 'aster-guard',
    category: 'Developer',
    status: 'available',
    description:
      'MCPサーバーや .mcp.json を「つなぐ前に」点検する、軽量なセキュリティ診断ツールです。Claude Code ユーザーと個人AI開発者のために。',
    tagline: 'つなぐ前に、ひと目で安全確認。',
    install: 'npx @asterworks/aster-guard scan',
    npmUrl: 'https://www.npmjs.com/package/@asterworks/aster-guard',
    repoUrl: 'https://github.com/jimiaki7/aster-guard',
    highlights: [
      '11種類のリスクを静的解析で検出（プロンプトインジェクション・秘密情報・危険なインストール等）',
      'リスクスコア（0–100）と評価（A–F）を、日本語／英語のレポートで提示',
      'ローカル完結・外部送信なし。既定は読み取り専用で安全',
      'Claude Code から呼べる MCP サーバー／GitHub Actions にも対応',
    ],
  },
  {
    title: 'Synaxis',
    slug: 'synaxis',
    category: 'Work',
    status: 'coming-soon',
    description:
      '礼拝出席と昼食申し込みをシンプルに管理する、教会向けマルチテナントSaaSです。',
  },
  {
    title: 'Keryx',
    slug: 'keryx',
    category: 'Work',
    status: 'coming-soon',
    description:
      '説教の計画から礼拝準備、振り返りまでをひとつにまとめる、日本語ファーストの牧師向けワークスペースです。',
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

/** カテゴリの並び順（消費者向けフィルタUIで使用） */
export const categoryOrder: ToolCategory[] = ['Work', 'Learning', 'Life'];

/** カテゴリの日本語ラベル */
export const categoryLabel: Record<ToolCategory, string> = {
  Work: '仕事',
  Learning: '学び',
  Life: '暮らし',
  Developer: '開発ツール',
};
