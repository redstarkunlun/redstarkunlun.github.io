import { siteConfig } from "@/config/site-config"

export function SkillsSection() {
  const skillsByCategory = siteConfig.skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, typeof siteConfig.skills>,
  )

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card rounded-2xl p-8 md:p-12 space-y-12 border border-white/10 fade-in">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white inline-block">
              Skills
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2" />
            </h2>
            <p className="text-lg text-gray-400">技術スタックと習熟度</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div key={category} className="space-y-6">
                <h3 className="text-xl font-bold text-white border-b-2 border-blue-500/50 pb-3">{category}</h3>
                <div className="space-y-5">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2 group">
                      <div className="flex justify-between items-center">
                        <span className="text-base font-medium text-white group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-400 font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700 group-hover:border-blue-500/50 transition-colors">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-blue-500/50"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
