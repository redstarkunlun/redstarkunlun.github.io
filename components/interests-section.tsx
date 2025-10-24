import { siteConfig } from "@/config/site-config"

export function InterestsSection() {
  const iconMap = {
    code: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    football: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M12 2 L14.5 8 L21 8.5 L16 13 L17.5 19.5 L12 16 L6.5 19.5 L8 13 L3 8.5 L9.5 8 Z"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M12 2v6M14.5 8l5.5 0.5M16 13l1.5 6.5M12 16l-5.5 3.5M8 13L3 8.5M9.5 8L12 2" strokeWidth={1.5} />
      </svg>
    ),
    music: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
        />
      </svg>
    ),
    book: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  }

  return (
    <section id="interests" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card rounded-2xl p-8 md:p-12 space-y-12 border border-white/10 fade-in">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white inline-block">
              Interests
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2" />
            </h2>
            <p className="text-lg text-gray-400">私が情熱を注いでいること</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {siteConfig.interests.map((interest, index) => {
              const icon = iconMap[interest.icon as keyof typeof iconMap] || iconMap.code
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-blue-500/70 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2 hover:scale-105 transition-all duration-500 backdrop-blur-sm group relative overflow-hidden"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 rounded-xl" />
                  <div className="space-y-3 relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30 group-hover:bg-gradient-to-br group-hover:from-blue-500/40 group-hover:to-purple-500/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-blue-500/20">
                      {icon}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {interest.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {interest.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
