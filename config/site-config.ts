// 🎨 ここでサイトの基本情報を簡単にカスタマイズできます！
// ✏️ 自分の情報に書き換えてください

export const siteConfig = {
  // 👤 個人情報
  name: "かふぇいん",
  title: "",

  // 📝 自己紹介
  bio: "鹿児島ユナイテッドFCサポ\n両国民",
  bioExtended: "サッカーでは鹿児島ユナイテッドFCを応援しています。" + "スタジアムで観戦するのが楽しみの一つです。",
  //"このサイトでは、私の趣味や活動、プロジェクトなどを紹介しています。",

  // 📧 連絡先
  email: "1@example.com",
  location: "東京, 日本",

  // 🔗 SNSリンク（使わないものは空文字""にしてください）
  social: {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername", // XのURLを入力してください
    linkedin: "",
    instagram: "https://instagram.com/yourusername", // Instagramを追加
    discord: "https://discord.com/yourusername", // DiscordのユーザーネームまたはサーバーURLを入力してください
  },

  // 💼 スキル（自由に追加・削除できます）
  // パーセンテージは習熟度を表します（0-100）
  skills: [
    { name: "HTML/CSS", level: 90, category: "プログラミング" },
    { name: "JavaScript", level: 85, category: "プログラミング" },
    { name: "TypeScript", level: 80, category: "プログラミング" },
    { name: "React", level: 85, category: "フレームワーク" },
    { name: "Next.js", level: 80, category: "フレームワーク" },
    { name: "Tailwind CSS", level: 90, category: "フレームワーク" },
    { name: "Git", level: 85, category: "ツール" },
    { name: "Figma", level: 75, category: "ツール" },
    { name: "UI/UXデザイン", level: 70, category: "その他" },
    { name: "レスポンシブデザイン", level: 90, category: "その他" },
  ],

  // 🎨 趣味・興味（自由に追加・削除できます）
  interests: [
    {
      title: "Web開発",
      description: "HTML、CSS、JavaScriptを使用したフロントエンド開発を行っています。",
      icon: "code",
    },
    {
      title: "サッカーファン",
      description: "鹿児島ユナイテッドFCの熱心なサポーターです。",
      icon: "football",
    },
    {
      title: "音楽鑑賞",
      description: "ヒメヒナを中心に様々な音楽を楽しんでいます。",
      icon: "music",
    },
    {
      title: "読書家",
      description: "SF小説やファンタジー小説を中心に読書を楽しんでいます。",
      icon: "book",
    },
  ],

  // 👁️ セクションの表示・非表示設定（true = 表示, false = 非表示）
  sections: {
    showAbout: true, // 自己紹介セクション
    showInterests: true, // 趣味・興味セクション
    showSkills: true, // スキルセクション
    showExperience: false, // 職歴セクション
    showProjects: false, // プロジェクトセクション
    showContact: true, // コンタクトセクション
  },
}

// 📂 プロジェクト情報（自由に追加・編集できます）
export const projects = [
  {
    id: 1,
    title: "Eコマースプラットフォーム",
    description: "モダンなオンラインショッピング体験を提供するフルスタックアプリケーション",
    image: "/modern-ecommerce-website.png",
    tags: ["Next.js", "TypeScript", "Stripe"],
    link: "https://example.com",
    github: "https://github.com/yourusername/project",
    year: "2024",
  },
  {
    id: 2,
    title: "タスク管理アプリ",
    description: "チームのコラボレーションを促進する直感的なタスク管理ツール",
    image: "/task-management-dashboard.png",
    tags: ["React", "Firebase", "Material-UI"],
    link: "https://example.com",
    github: "https://github.com/yourusername/project",
    year: "2024",
  },
  {
    id: 3,
    title: "ポートフォリオジェネレーター",
    description: "開発者向けの美しいポートフォリオサイトを自動生成するツール",
    image: "/portfolio-website-builder.png",
    tags: ["Next.js", "Tailwind", "MDX"],
    link: "https://example.com",
    github: "https://github.com/yourusername/project",
    year: "2023",
  },
]

// 💼 職歴（自由に追加・編集できます）
export const experience = [
  {
    id: 1,
    company: "テック株式会社",
    position: "シニアフロントエンドエンジニア",
    period: "2022 - 現在",
    description: "大規模なWebアプリケーションの設計と開発をリード",
  },
  {
    id: 2,
    company: "スタートアップ合同会社",
    position: "フロントエンドエンジニア",
    period: "2020 - 2022",
    description: "React/Next.jsを使用したSaaSプロダクトの開発",
  },
]
