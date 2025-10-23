import { siteConfig } from "@/config/site-config"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12 fade-in">
          <div className="glass-card rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl font-bold text-white inline-block">
                  About
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2" />
                </h2>
                <p className="text-lg text-gray-400">自己紹介</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                  <p className="text-base text-gray-300 leading-relaxed whitespace-pre-line">{siteConfig.bio}</p>
                  <p className="text-base text-gray-300 leading-relaxed whitespace-pre-line">
                    {siteConfig.bioExtended}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 shadow-sm backdrop-blur-sm hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">メール</p>
                          <a
                            href={`mailto:${siteConfig.email}`}
                            className="text-base text-white hover:text-blue-400 transition-colors font-medium"
                          >
                            {siteConfig.email}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">場所</p>
                          <p className="text-base text-white font-medium">{siteConfig.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
