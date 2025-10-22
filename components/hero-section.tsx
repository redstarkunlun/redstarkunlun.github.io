import { siteConfig } from "@/config/site-config"
import { ArrowDown } from "lucide-react"

// 🎯 ヒーローセクション - サイトの第一印象を決める重要な部分
export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      {/* 背景の装飾的な要素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
          {/* 小さな見出し */}
          <p className="text-sm text-primary font-mono">Portfolio 2024</p>

          {/* メインの名前 */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            {siteConfig.nameEn}
          </h1>

          {/* 肩書き */}
          <p className="text-xl md:text-2xl text-muted-foreground">{siteConfig.titleEn}</p>

          {/* 自己紹介 */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {siteConfig.bioEn}
          </p>

          {/* スクロールダウンアイコン */}
          <div className="pt-12">
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Scroll to explore</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
