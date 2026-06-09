# ロゴ画像

ブランドロゴ一式を配置済みです。差し替える場合も同じファイル名で上書きすれば反映されます。
`src/consts.ts` の `LOGO` で各 variant のパスを管理しています（`null` にするとテキストロゴにフォールバック）。

## 設置済みファイル

```
aster-works-logo-horizontal.png … 横組み・フルカラー（Header で使用）
aster-works-logo-stacked.png    … 縦組み・フルカラー（将来用）
aster-works-logo-icon.png       … エンブレム（512px・Hero / apple-touch-icon）
aster-works-logo-white.png      … 白抜き（ネイビー＝クリーム／ゴールド維持。Footer で使用）
favicon.png                     … ファビコン（256px・エンブレム）
```

すべて背景透過 PNG です（ChatGPT 生成のブランドアートから、白背景の透過・余白トリム・
ネイビー背景用の白抜き版生成を行って書き出したもの）。

## 使われている場所

| 箇所 | variant | サイズ |
| :-- | :-- | :-- |
| Header | `horizontal` | h-9（36px） |
| Footer | `white` | h-10（40px） |
| Hero エンブレム | `icon` | h-10（40px） |
| favicon | `favicon.png` を `BaseLayout` の `<link rel="icon">` で参照 | 256px |
| apple-touch-icon | `aster-works-logo-icon.png` | 512px |

## 差し替え方法

1. このフォルダに同名の PNG（背景透過推奨）を上書き配置。
2. ファイル名を変える場合は `src/consts.ts` の `LOGO` のパスを更新。
3. favicon を変える場合は `favicon.png` を上書き（参照は `src/layouts/BaseLayout.astro`）。

## OGP 画像

SNS シェア用の `/public/og-image.png`（1200×630・ブランドロゴ入り）を使用しています。
差し替える場合は同パスに上書きするか、`src/consts.ts` の `SITE.ogImage` を変更してください。
