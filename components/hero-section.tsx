import { siteConfig } from "@/config/site-config"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-20">
      {/* 背景に動的なグラデーションオーバーレイを追加 */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
          <div className="paper-card paper-texture rounded-2xl p-12 md:p-16 space-y-8">
            {/* バッジにパルスグローエフェクトを追加 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 pulse-glow">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium tracking-wide text-blue-300">{siteConfig.name}</span>
            </div>

            {/* タイトルにテキストグラデーションを追加 */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                {siteConfig.title}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
              {siteConfig.bio}
            </p>

            {/* ボタンのホバーエフェクトを強化 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 text-base font-medium transition-all duration-300"
                asChild
              >
                <a href="#about">詳しく見る</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-blue-400 hover:bg-blue-500/10 hover:scale-105 text-blue-300 text-base font-medium transition-all duration-300"
                asChild
              >
                <a href="#contact">お問い合わせ</a>
              </Button>
            </div>
          </div>

          <div className="pt-8">
            <a
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
            >
              <span className="font-medium text-xs tracking-widest">SCROLL</span>
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
