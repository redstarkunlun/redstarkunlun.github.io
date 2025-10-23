import { siteConfig } from "@/config/site-config"

// 🦶 フッター
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* コピーライト */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.nameEn}. All rights reserved.
          </p>

          {/* 追加リンク（必要に応じて追加） */}
          <div className="flex gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              私について
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              プロジェクト
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              お問い合わせ
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
