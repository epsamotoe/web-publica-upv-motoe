"use client"

import { ScrollReveal } from "./scroll-reveal"
import { BentoCard } from "@/components/ui/bento-card"
import { useLanguage } from "@/context/LanguageContext"

export function BentoGrid() {
  const { t } = useLanguage()

  const leaders = [
    {
      id: "team-leader",
      role: t("team.role_coordinator"),
      name: "Hugo Ruiz",
      image: "/HugoPuto.jpeg",
    },
    {
      id: "technical-director",
      role: t("team.role_director"),
      name: "Vicente Colomer",
      image: "/VicentePuto.jpeg",
    },
    {
      id: "ex-coordinador",
      role: t("team.role_ex_coordinator"),
      name: "Ricardo Sanchis",
      image: "/RicardoPuto.jpeg",
    },
  ]

  return (
    <section id="moto" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-[#00cc88] bg-[#00cc88]/10 border border-[#00cc88]/20 rounded-full mb-4">
              {t("team.leadership_badge")}
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-black text-white mb-4">
              {t("team.our")} <span className="text-[#00cc88]">{t("team.coordinators")}</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              {t("team.direction_desc")}
            </p>
          </div>
        </ScrollReveal>

        {/* Leadership - 3 Vertical Portraits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {leaders.map((leader, index) => (
            <ScrollReveal key={leader.id} delay={index * 100}>
              <BentoCard className="aspect-[2/3] group shadow-[0_0_40px_rgba(0,204,136,0.1)]">
                <img
                  src={leader.image || "/placeholder.svg"}
                  alt={`${leader.name} - ${leader.role}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />

                {/* Corner Accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-[#00cc88]/50" />
                <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-[#00cc88]/50" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-mono tracking-wider text-[#00cc88] bg-[#00cc88]/10 px-3 py-1 rounded-full border border-[#00cc88]/30">
                    {leader.role.toUpperCase()}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-white mt-3 transition-colors">
                    {leader.name}
                  </h3>
                </div>
              </BentoCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
