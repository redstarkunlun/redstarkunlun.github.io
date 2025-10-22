import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/config/site-config"

// 🏠 メインページ - すべてのセクションを組み合わせています
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ナビゲーション */}
      <Navigation />

      {/* ヒーローセクション */}
      <HeroSection />

      {/* 自己紹介セクション */}
      {siteConfig.sections.showAbout && <AboutSection />}

      {/* 職歴セクション */}
      {siteConfig.sections.showExperience && <ExperienceSection />}

      {/* プロジェクトセクション */}
      {siteConfig.sections.showProjects && <ProjectsSection />}

      {/* コンタクトセクション */}
      {siteConfig.sections.showContact && <ContactSection />}

      {/* フッター */}
      <Footer />
    </main>
  )
}
