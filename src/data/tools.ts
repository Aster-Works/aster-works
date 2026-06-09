// =============================================================
// ツールデータ
// 将来 /tools/[slug] の個別ページを追加する場合も、この配列を起点にできます。
// status: 'available' になったら href に実URL（または個別ページ）を設定してください。
// =============================================================

export type ToolStatus = 'available' | 'coming-soon';
export type ToolCategory = 'Work' | 'Learning' | 'Life';

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
}

export const tools: Tool[] = [
  {
    title: 'Google口コミ返信メーカー',
    slug: 'google-review-reply-maker',
    category: 'Work',
    status: 'coming-soon',
    description:
      '店舗やサービスへの口コミに、自然で丁寧な返信文を作るためのツールです。',
  },
  {
    title: '介護費シミュレーター',
    slug: 'care-cost-simulator',
    category: 'Life',
    status: 'coming-soon',
    description:
      '親の介護にかかる費用の目安を整理し、家族で考えるためのシミュレーターです。',
  },
  {
    title: 'サブスク費用チェッカー',
    slug: 'subscription-cost-checker',
    category: 'Life',
    status: 'coming-soon',
    description:
      '毎月のサブスクリプション費用を見える化し、年間コストを確認するツールです。',
  },
];

/** トップページの「Featured Tools」に出す3件 */
export const featuredTools: Tool[] = tools.slice(0, 3);

/** カテゴリの並び順（フィルタUIで使用） */
export const categoryOrder: ToolCategory[] = ['Work', 'Learning', 'Life'];

/** カテゴリの日本語ラベル */
export const categoryLabel: Record<ToolCategory, string> = {
  Work: '仕事',
  Learning: '学び',
  Life: '暮らし',
};
