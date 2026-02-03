"use client"

import { TypewriterText } from "./typewriter-text"
import { AnimatedGrid } from "./animated-grid"
import { ChevronDown, Zap, Timer, Gauge } from "lucide-react"
import { BentoCard } from "@/components/ui/bento-card"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <AnimatedGrid />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00cc88]/10 border border-[#00cc88]/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-[#00cc88] rounded-full animate-pulse" />
            <span className="text-[#00cc88] text-sm font-medium tracking-wide">
              MotoStudent Electric 2026
            </span>
          </div>

          {/* Main Title with Typewriter */}
          <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
            <span className="text-white">UPV </span>
            <TypewriterText
              text="MOTOE"
              delay={150}
              className="text-[#00cc88] drop-shadow-[0_0_30px_rgba(0,204,136,0.5)]"
            />
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-8 leading-relaxed">
            Ingeniería, velocidad y sostenibilidad. Diseñamos y construimos{" "}
            <span className="text-white font-semibold">motos eléctricas de competición</span>{" "}
            desde la Universitat Politècnica de València.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#moto"
              className="group px-8 py-4 bg-[#00cc88] text-[#0a0a0a] font-bold text-lg rounded-full hover:shadow-[0_0_40px_rgba(0,204,136,0.6)] transition-all hover:scale-105 flex items-center gap-2"
            >
              Descubre la moto
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#patrocinadores"
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold text-lg rounded-full hover:border-[#00cc88] hover:text-[#00cc88] transition-all"
            >
              Ser patrocinador
            </a>
          </div>
        </div>
      </div>

      {/* 3D Motorcycle Render Slot */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <BentoCard className="aspect-[21/9] w-full shadow-[0_0_60px_rgba(0,204,136,0.15)]">
          {/* Rotating Motorcycle Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                animation: "spin360 20s linear infinite",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop&q=80"
                alt="Electric Racing Motorcycle - 3D Render Placeholder"
                className="max-w-[80%] max-h-[80%] object-contain drop-shadow-[0_0_40px_rgba(0,204,136,0.3)]"
              />
            </div>
          </div>

          {/* Overlay Grid Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,204,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,204,136,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          {/* Corner Accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#00cc88]/50" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#00cc88]/50" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#00cc88]/50" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#00cc88]/50" />

          {/* Label */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#0a0a0a]/80 backdrop-blur-sm rounded-full border border-[#00cc88]/30">
            <span className="text-[#00cc88] text-xs font-mono tracking-wider">3D RENDER SLOT</span>
          </div>
        </BentoCard>
      </div>

      {/* Stats */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
          <BentoCard className="text-center p-4">
            <div className="flex justify-center mb-2">
              <Zap className="w-6 h-6 text-[#00cc88]" />
            </div>
            <div className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-black text-white">
              30kW
            </div>
            <div className="text-xs md:text-sm text-white/50 mt-1">Potencia máxima</div>
          </BentoCard>
          <BentoCard className="text-center p-4">
            <div className="flex justify-center mb-2">
              <Timer className="w-6 h-6 text-[#00cc88]" />
            </div>
            <div className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-black text-white">
              3.2s
            </div>
            <div className="text-xs md:text-sm text-white/50 mt-1">0-100 km/h</div>
          </BentoCard>
          <BentoCard className="text-center p-4">
            <div className="flex justify-center mb-2">
              <Gauge className="w-6 h-6 text-[#00cc88]" />
            </div>
            <div className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-black text-white">
              160km/h
            </div>
            <div className="text-xs md:text-sm text-white/50 mt-1">Velocidad punta</div>
          </BentoCard>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-[#00cc88]/50" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes spin360 {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </section>
  )
}
