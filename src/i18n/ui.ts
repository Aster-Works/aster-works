// =============================================================
// i18n ヘルパー — 言語判定・パス変換・翻訳辞書アクセス
//
// 当サイトは「両言語ともプレフィックス」方式（/ja/ と /en/）。
// ルート（/）は astro.config.mjs の redirects で /ja/ に 308。
// 各コンポーネントは Astro.url からその場で言語を判定するため、
// プロップで lang を引き回す必要はありません。
// =============================================================
import { ja } from './ja';
import { en } from './en';

/** 対応言語と、言語切替UIに出す表示名 */
export const languages = {
  ja: '日本語',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

/** 既定言語（ルートのリダイレクト先・フォールバック） */
export const defaultLang: Lang = 'ja';

/** 言語別の翻訳辞書（ja を正典の型として en の欠落キーを検出） */
const dictionaries = { ja, en } as const;

/** URL の先頭セグメントから言語を判定（未知なら既定言語） */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  return seg && seg in languages ? (seg as Lang) : defaultLang;
}

/** その言語の翻訳辞書を返す */
export function useTranslations(lang: Lang) {
  return dictionaries[lang];
}

/**
 * 言語プレフィックスなしの内部パス（'/tools' や '/'）を、
 * 指定言語の実パス（'/ja/tools/' '/ja/'）に変換する。
 * trailingSlash:'always' に合わせて末尾スラッシュを必ず付ける。
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

/**
 * 現在のパスを別言語の同一ページへ差し替える（言語切替リンク用）。
 * 例: swapLang('/en/tools/', 'ja') => '/ja/tools/'
 */
export function swapLang(pathname: string, to: Lang): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && parts[0] in languages) parts[0] = to;
  else parts.unshift(to);
  return `/${parts.join('/')}/`;
}

/**
 * [lang] 動的ルートの getStaticPaths 用。全言語ぶんのパラメータを返す。
 * 各ページで `export const getStaticPaths = getStaticLangPaths;` と書ける。
 */
export function getStaticLangPaths() {
  return (Object.keys(languages) as Lang[]).map((lang) => ({ params: { lang } }));
}

/**
 * hreflang alternate 用に、全言語＋ x-default のパスを返す。
 * x-default は既定言語（ja）を指す。
 */
export function getAlternateLinks(pathname: string) {
  const langs = Object.keys(languages) as Lang[];
  const alternates = langs.map((l) => ({ hreflang: l, path: swapLang(pathname, l) }));
  return [
    ...alternates,
    { hreflang: 'x-default', path: swapLang(pathname, defaultLang) },
  ];
}
