import { siteConfig } from "@/config/site-config"
import { Badge } from "@/components/ui/badge"

// 👤 自己紹介セクション
export function AboutSection() {
  return (
    <section id="about" className="section-spacing px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12 fade-in">
          {/* セクションタイトル */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">About</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          {/* 自己紹介文 */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">{siteConfig.bio}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              現在は<span className="text-foreground font-medium">最新のWeb技術</span>を使用して、
              パフォーマンスとアクセシビリティを重視したアプリケーション開発に取り組んでいます。
            </p>
          </div>

          {/* スキル一覧 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {siteConfig.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* 連絡先情報 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="text-foreground hover:text-primary transition-colors">
                {siteConfig.email}
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="text-foreground">{siteConfig.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
