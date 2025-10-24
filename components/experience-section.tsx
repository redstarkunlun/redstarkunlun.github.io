import { experience } from "@/config/site-config"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card rounded-2xl p-8 md:p-12 space-y-12 border border-white/10">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white relative inline-block">
              Experience
              <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            </h2>
            <p className="text-lg text-gray-400">これまでの職務経験とキャリアの歩み</p>
          </div>

          <div className="relative space-y-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-cyan-500 before:to-blue-500 before:rounded-full pl-8">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className="relative p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 backdrop-blur-sm hover:-translate-x-2 group"
              >
                <div className="absolute -left-[33px] top-8 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-slate-950 group-hover:scale-150 group-hover:ring-blue-500/20 transition-all duration-300" />

                <div className="space-y-3">
                  <p className="text-xs text-blue-400 font-mono tracking-wider uppercase font-semibold">{exp.period}</p>

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
