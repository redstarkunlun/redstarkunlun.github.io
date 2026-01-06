"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { InterestsSection } from "@/components/interests-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { siteConfig } from "@/config/site-config"

// 🏠 メインページ - すべてのセクションを組み合わせています
export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll(".reveal")
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <main className="min-h-screen particles-bg">
      {/* ナビゲーション */}
      <Navigation />

      {/* ヒーローセクション */}
      <HeroSection />

      {/* 自己紹介セクション */}
      {siteConfig.sections.showAbout && (
        <div className="reveal">
          <AboutSection />
        </div>
      )}

      {/* スキルセクション */}
      {siteConfig.sections.showSkills && (
        <div className="reveal">
          <SkillsSection />
        </div>
      )}

      {/* 趣味・興味セクション */}
      {siteConfig.sections.showInterests && (
        <div className="reveal">
          <InterestsSection />
        </div>
      )}

      {/* 職歴セクション */}
      {siteConfig.sections.showExperience && (
        <div className="reveal">
          <ExperienceSection />
        </div>
      )}

      {/* プロジェクトセクション */}
      {siteConfig.sections.showProjects && (
        <div className="reveal">
          <ProjectsSection />
        </div>
      )}

      {/* コンタクトセクション */}
      {siteConfig.sections.showContact && (
        <div className="reveal">
          <ContactSection />
        </div>
      )}

      {/* フッター */}
      <Footer />

      {/* ページトップへ戻るボタン */}
      <ScrollToTop />
    </main>
  )
}
