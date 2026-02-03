"use client"

import { ScrollReveal } from "./scroll-reveal"
import { BentoCard } from "@/components/ui/bento-card"

const leaders = [
  {
    id: "team-leader",
    role: "Team Leader",
    name: "Carlos García",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&q=80",
  },
  {
    id: "technical-director",
    role: "Technical Director",
    name: "María López",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop&q=80",
  },
  {
    id: "head-mechanic",
    role: "Head Mechanic",
    name: "Pablo Martín",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&q=80",
  },
]

export function BentoGrid() {
  return (
    <section id="moto" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-[#00cc88] bg-[#00cc88]/10 border border-[#00cc88]/20 rounded-full mb-4">
              EL EQUIPO
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-black text-white mb-4">
              Las personas detrás de{" "}
              <span className="text-[#00cc88]">la máquina</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Estudiantes de ingeniería con pasión por la competición y
              la innovación en movilidad eléctrica.
            </p>
          </div>
        </ScrollReveal>

        {/* Team Photo - Full Width Horizontal */}
        <ScrollReveal className="mb-6">
          <BentoCard className="w-full aspect-[21/9] group shadow-[0_0_40px_rgba(0,204,136,0.1)]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=600&fit=crop&q=80"
              alt="Equipo completo UPV MotoE 2026"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#00cc88]/50" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#00cc88]/50" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#00cc88]/50" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#00cc88]/50" />

            {/* Label */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <span className="text-xs font-mono tracking-wider text-[#00cc88]/80 bg-[#0a0a0a]/60 backdrop-blur-sm px-3 py-1 rounded-full border border-[#00cc88]/30">
                EQUIPO COMPLETO 2026
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-black text-white mt-3">
                +40 Ingenieros
              </h3>
              <p className="text-white/60 text-sm md:text-base mt-1">
                Trabajando juntos hacia la victoria
              </p>
            </div>
          </BentoCard>
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
                  <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-white mt-3 group-hover:text-[#00cc88] transition-colors">
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
