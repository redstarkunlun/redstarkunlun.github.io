import { projects } from "@/config/site-config"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card rounded-2xl p-8 md:p-12 space-y-12 border border-white/10">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Projects</h2>
            <p className="text-lg text-gray-400 max-w-2xl">これまでに手がけたプロジェクトの一部をご紹介します</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <Image
                    src={project.image || "/placeholder.svg?height=400&width=600&query=modern web project"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="text-xs text-gray-400 font-mono shrink-0">{project.year}</span>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs font-mono bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border border-blue-500/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium pt-2"
                    >
                      プロジェクトを見る
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
