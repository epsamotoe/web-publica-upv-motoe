"use client"

import { ScrollReveal } from "./scroll-reveal"
import { AnimatedGrid } from "./animated-grid"
import { BentoCard } from "@/components/ui/bento-card"
import { useLanguage } from "@/context/LanguageContext"

export function TeamSection() {
  const { t } = useLanguage()

  const departments = [
    { name: t("team.dept_mechanics"), count: 14, color: "#00cc88" },
    { name: t("team.dept_electrical"), count: 14, color: "#00cc88" },
    { name: t("team.dept_admin"), count: 11, color: "#00cc88" },
    { name: t("team.dept_social"), count: 4, color: "#00cc88" },
  ]

  const stats = [
    { value: "40", suffix: "+", label: t("team.stat_members") },
    { value: "5", suffix: "", label: t("team.stat_competitions") },
    { value: "9", suffix: "", label: t("team.stat_seasons") },
  ]

  return (
    <section id="equipo" className="relative py-24 md:py-32 overflow-hidden">
      <AnimatedGrid />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-[#00cc88] bg-[#00cc88]/10 border border-[#00cc88]/20 rounded-full mb-4">
              {t("team.team_badge")}
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-4">
              {t("team.students_with")}{" "}
              <span className="text-[#00cc88]">{t("team.ambition")}</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              {t("team.team_desc")}
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {stats.map((stat) => (
              <BentoCard
                key={stat.label}
                className="group text-center p-6 md:p-8 hover:shadow-[0_0_40px_rgba(0,204,136,0.15)]"
              >
                <div className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-black text-[#00cc88] mb-2 drop-shadow-[0_0_20px_rgba(0,204,136,0.6)] group-hover:drop-shadow-[0_0_30px_rgba(0,204,136,0.8)] transition-all">
                  {stat.value}
                  <span className="text-3xl md:text-5xl">{stat.suffix}</span>
                </div>
                <div className="text-sm md:text-base text-white/60 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </BentoCard>
            ))}
          </div>
        </ScrollReveal>

        {/* Departments */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {departments.map((dept, index) => (
              <BentoCard
                key={dept.name}
                className="group p-6 text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-mono px-2 py-1 rounded bg-[#00cc88]/10 text-[#00cc88]"
                  >
                    0{index + 1}
                  </span>
                  <span className="text-2xl font-bold text-white/20 group-hover:text-[#00cc88]/30 transition-colors">
                    {dept.count}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white group-hover:text-[#00cc88] transition-colors">
                  {dept.name}
                </h3>
                <p className="text-sm text-white/40 mt-1">{t("team.members_lowercase")}</p>
              </BentoCard>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={300}>
          <div className="text-center mt-16">
            <a
              href="/contact/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#00cc88] text-[#00cc88] font-bold rounded-full hover:bg-[#00cc88] hover:text-[#0a0a0a] transition-all"
            >
              {t("team.join_team")}
              <span className="text-lg">→</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
