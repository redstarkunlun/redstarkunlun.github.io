// 🎨 ここでサイトの基本情報を簡単にカスタマイズできます！
// ✏️ 自分の情報に書き換えてください

export const siteConfig = {
  // 👤 個人情報
  name: "かふぇいん",
  nameEn: "caffeine",
  title: "鹿児島ユナイテッドサポ",
  titleEn: "kagosima United FC supporter",

  // 📝 自己紹介
  bio: "VTuber見たりスポーツ観戦が趣味",
  bioEn: "Watching VTubers and watching sports are my hobbies.",

  // 📧 連絡先
  email: "hello@example.com",
  location: "鹿児島, 日本",

  // 🔗 SNSリンク（使わないものは空文字""にしてください）
  social: {
    github: "https://github.com/redsterkunlun",
    twitter: "https://twitter.com/kaff_081",
    linkedin: "",
    instagram: "",
  },

  // 💼 スキル（自由に追加・削除できます）
  skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Figma"],

  // 👁️ セクションの表示・非表示設定（true = 表示, false = 非表示）
  sections: {
    showAbout: true, // 自己紹介セクション
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
    titleEn: "E-commerce Platform",
    description: "モダンなオンラインショッピング体験を提供するフルスタックアプリケーション",
    descriptionEn: "A full-stack application providing modern online shopping experience",
    image: "/modern-ecommerce-website.png",
    tags: ["Next.js", "TypeScript", "Stripe"],
    link: "https://example.com",
    year: "2024",
  },
  {
    id: 2,
    title: "タスク管理アプリ",
    titleEn: "Task Management App",
    description: "チームのコラボレーションを促進する直感的なタスク管理ツール",
    descriptionEn: "Intuitive task management tool promoting team collaboration",
    image: "/task-management-dashboard.png",
    tags: ["React", "Firebase", "Material-UI"],
    link: "https://example.com",
    year: "2024",
  },
  {
    id: 3,
    title: "ポートフォリオジェネレーター",
    titleEn: "Portfolio Generator",
    description: "開発者向けの美しいポートフォリオサイトを自動生成するツール",
    descriptionEn: "Tool to automatically generate beautiful portfolio sites for developers",
    image: "/portfolio-website-builder.png",
    tags: ["Next.js", "Tailwind", "MDX"],
    link: "https://example.com",
    year: "2023",
  },
]

// 💼 職歴（自由に追加・編集できます）
export const experience = [
  {
    id: 1,
    company: "テック株式会社",
    companyEn: "Tech Inc.",
    position: "シニアフロントエンドエンジニア",
    positionEn: "Senior Frontend Engineer",
    period: "2022 - 現在",
    periodEn: "2022 - Present",
    description: "大規模なWebアプリケーションの設計と開発をリード",
    descriptionEn: "Leading design and development of large-scale web applications",
  },
  {
    id: 2,
    company: "スタートアップ合同会社",
    companyEn: "Startup LLC",
    position: "フロントエンドエンジニア",
    positionEn: "Frontend Engineer",
    period: "2020 - 2022",
    periodEn: "2020 - 2022",
    description: "React/Next.jsを使用したSaaSプロダクトの開発",
    descriptionEn: "Developed SaaS products using React/Next.js",
  },
]
