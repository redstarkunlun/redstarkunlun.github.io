import { siteConfig } from "@/config/site-config"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

// 📧 コンタクトセクション
export function ContactSection() {
  // SNSアイコンの設定
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: siteConfig.social.github,
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: siteConfig.social.twitter,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: siteConfig.social.linkedin,
    },
  ].filter((link) => link.url) // URLが設定されているものだけ表示

  return (
    <section id="contact" className="section-spacing px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12 fade-in text-center">
          {/* セクションタイトル */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
          </div>

          {/* メッセージ */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            新しいプロジェクトやコラボレーションの機会について、 お気軽にご連絡ください。
          </p>

          {/* メールボタン */}
          <div className="flex justify-center">
            <Button size="lg" asChild>
              <a href={`mailto:${siteConfig.email}`} className="gap-2">
                <Mail className="h-5 w-5" />
                Send Email
              </a>
            </Button>
          </div>

          {/* SNSリンク */}
          {socialLinks.length > 0 && (
            <div className="flex justify-center gap-4 pt-8">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
