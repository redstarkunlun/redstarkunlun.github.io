import { experience } from "@/config/site-config"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card rounded-2xl p-8 md:p-12 space-y-12 border border-white/10">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Experience</h2>
            <p className="text-lg text-gray-400">これまでの職務経験とキャリアの歩み</p>
          </div>

          <div className="space-y-6">
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="space-y-3">
                  <p className="text-xs text-gray-400 font-mono tracking-wider uppercase">{exp.period}</p>

                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                    <p className="text-base text-gray-300 mt-1">{exp.company}</p>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
