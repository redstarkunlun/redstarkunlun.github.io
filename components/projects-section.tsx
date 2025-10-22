import { projects } from "@/config/site-config"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

// 📂 プロジェクトセクション
export function ProjectsSection() {
  return (
    <section id="projects" className="section-spacing px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12 fade-in">
          {/* セクションタイトル */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          {/* プロジェクトグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden group hover:border-primary/50 transition-all duration-300"
              >
                {/* プロジェクト画像 */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.titleEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* プロジェクト情報 */}
                <div className="p-6 space-y-4">
                  {/* タイトルと年 */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-semibold">{project.titleEn}</h3>
                    <span className="text-xs text-muted-foreground font-mono">{project.year}</span>
                  </div>

                  {/* 説明 */}
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.descriptionEn}</p>

                  {/* タグ */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* リンク */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      View Project
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
