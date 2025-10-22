import { experience } from "@/config/site-config"
import { Card } from "@/components/ui/card"

// 💼 職歴セクション
export function ExperienceSection() {
  return (
    <section id="experience" className="section-spacing px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12 fade-in">
          {/* セクションタイトル */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          {/* 職歴リスト */}
          <div className="space-y-6">
            {experience.map((exp) => (
              <Card key={exp.id} className="p-6 hover:border-primary/50 transition-colors">
                <div className="space-y-4">
                  {/* 期間 */}
                  <p className="text-sm text-primary font-mono">{exp.periodEn}</p>

                  {/* 役職と会社名 */}
                  <div>
                    <h3 className="text-xl font-semibold">{exp.positionEn}</h3>
                    <p className="text-muted-foreground">{exp.companyEn}</p>
                  </div>

                  {/* 説明 */}
                  <p className="text-muted-foreground leading-relaxed">{exp.descriptionEn}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
