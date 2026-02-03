"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Handshake, Eye, Megaphone, Award } from "lucide-react"
import { BentoCard } from "@/components/ui/bento-card"

const benefits = [
  {
    icon: Eye,
    title: "Visibilidad",
    description: "Tu marca en nuestra moto, equipación y materiales promocionales.",
  },
  {
    icon: Megaphone,
    title: "Eventos",
    description: "Presencia en competiciones internacionales de MotoStudent.",
  },
  {
    icon: Handshake,
    title: "Networking",
    description: "Acceso directo a talento joven en ingeniería y tecnología.",
  },
  {
    icon: Award,
    title: "Innovación",
    description: "Asocia tu marca con sostenibilidad y tecnología de vanguardia.",
  },
]

export function SponsorsSection() {
  return (
    <section id="patrocinadores" className="relative py-24 md:py-32 bg-[#0d0d0d]/0"> {/* transparent bg to show global bg */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-bold tracking-widest text-[#00cc88] bg-[#00cc88]/10 border border-[#00cc88]/20 rounded-full mb-4 uppercase">
              PATROCINADORES
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-4">
              Impulsa el{" "}
              <span className="text-[#00cc88]">futuro</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Colabora con nosotros y forma parte de la revolución del motorsport eléctrico.
              Tu apoyo hace posible nuestros sueños.
            </p>
          </div>
        </ScrollReveal>

        {/* Benefits Grid */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {benefits.map((benefit) => (
              <BentoCard
                key={benefit.title}
                className="group p-6 text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#00cc88]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00cc88]/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-[#00cc88]" />
                </div>
                <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-white/50">{benefit.description}</p>
              </BentoCard>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={200}>
          <div className="text-center">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00cc88] text-[#0a0a0a] font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,204,136,0.5)] transition-all"
            >
              Quiero ser patrocinador
              <span className="text-lg">→</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
