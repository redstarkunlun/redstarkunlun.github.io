import { projects } from "@/config/site-config"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card rounded-2xl p-8 md:p-12 space-y-12 border border-white/10">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white relative inline-block">
              Projects
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2" />
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">これまでに手がけたプロジェクトの一部をご紹介します</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-blue-500/70 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 group backdrop-blur-sm hover:-translate-y-3 hover:scale-[1.03] relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-xl pointer-events-none" />

                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <Image
                    src={project.image || "/placeholder.svg?height=400&width=600&query=modern web project"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                </div>

                <div className="p-6 space-y-3 relative z-10">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs text-gray-400 font-mono shrink-0 px-2 py-1 bg-slate-700/50 rounded group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs font-mono bg-blue-500/20 text-blue-300 hover:bg-blue-500/40 border border-blue-500/30 hover:border-blue-400/50 hover:scale-110 transition-all duration-300"
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
                      className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 hover:gap-3 transition-all duration-300 font-medium pt-2 group/link"
                    >
                      プロジェクトを見る
                      <svg
                        className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
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
