# 🎨 モダンポートフォリオサイト

alt.aiのデザインにインスパイアされた、ミニマルでプロフェッショナルなポートフォリオサイトです。

## ✨ 特徴

- 🎯 **初心者フレンドリー**: 設定ファイルで簡単にカスタマイズ可能
- 📱 **完全レスポンシブ**: モバイル、タブレット、デスクトップに対応
- 🌙 **ダークテーマ**: 目に優しいダークモード
- ⚡ **高速**: Next.js 16で最適化
- 🎨 **カスタマイズ可能**: 色、フォント、コンテンツを簡単に変更

## 🚀 カスタマイズ方法

### 1️⃣ 基本情報の変更

`config/site-config.ts` ファイルを開いて、以下を編集してください：

\`\`\`typescript
export const siteConfig = {
  // 👤 個人情報
  name: "あなたの名前",
  title: "あなたの肩書き",
  
  // 📝 自己紹介
  bio: "短い自己紹介文",
  bioExtended: "詳しい自己紹介文",
  
  // 📧 連絡先
  email: "your@email.com",
  location: "あなたの場所",
  
  // 🔗 SNSリンク
  social: {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    // 使わないものは空文字""にする
  },
  
  // 💼 スキル
  skills: [
    { name: "HTML/CSS", level: 90, category: "プログラミング" },
    // 自由に追加・削除できます
  ],
  
  // 👁️ セクションの表示・非表示
  sections: {
    showAbout: true,      // 自己紹介を表示
    showInterests: true,  // 趣味を表示
    showSkills: true,     // スキルを表示
    showExperience: false, // 職歴を非表示
    showProjects: false,   // プロジェクトを非表示
    showContact: true,     // コンタクトを表示
  },
}
\`\`\`

### 2️⃣ プロジェクトの追加

`config/site-config.ts` の `projects` 配列に追加：

\`\`\`typescript
export const projects = [
  {
    id: 1,
    title: "プロジェクト名",
    description: "プロジェクトの説明",
    image: "/your-image.png",
    tags: ["Next.js", "TypeScript"],
    link: "https://example.com",
    github: "https://github.com/yourusername/project",
    year: "2024",
  },
  // 新しいプロジェクトを追加...
]
\`\`\`

### 3️⃣ 職歴の追加

`config/site-config.ts` の `experience` 配列に追加：

\`\`\`typescript
export const experience = [
  {
    id: 1,
    company: "会社名",
    position: "役職",
    period: "2022 - 現在",
    description: "業務内容の説明",
  },
  // 新しい職歴を追加...
]
\`\`\`

### 4️⃣ 色の変更

`app/globals.css` ファイルの `@theme inline` セクションで色を変更：

\`\`\`css
@theme inline {
  --color-primary: 212 100% 48%;     /* メインカラー（青） */
  --color-background: 222 47% 11%;   /* 背景色（ダークブルー） */
  --color-foreground: 210 40% 98%;   /* テキスト色（白） */
}
\`\`\`

## 📝 よくある質問

**Q: セクションを非表示にするには？**
A: `config/site-config.ts` の `sections` で `false` に設定してください。

**Q: プロジェクトを追加するには？**
A: `config/site-config.ts` の `projects` 配列に新しいオブジェクトを追加してください。

**Q: スキルを追加するには？**
A: `config/site-config.ts` の `skills` 配列に `{ name: "スキル名", level: 80, category: "カテゴリ" }` を追加してください。

**Q: SNSリンクを追加するには？**
A: `config/site-config.ts` の `social` オブジェクトにURLを追加してください。使わないものは空文字 `""` にしてください。

**Q: 色を変更するには？**
A: `app/globals.css` の `--color-*` 変数を変更してください。OKLCH色空間を使用しています。

## 🛠️ 技術スタック

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui

## 📦 デプロイ

### Vercel（推奨）
1. v0の画面右上の「Publish」ボタンをクリック
2. 数秒でデプロイ完了

### Cloudflare Pages
1. GitHubにコードをプッシュ
2. Cloudflare Pagesで「Create a project」
3. フレームワークプリセットで「Next.js」を選択

## 📄 ライセンス

MIT License - 自由に使用・カスタマイズしてください
