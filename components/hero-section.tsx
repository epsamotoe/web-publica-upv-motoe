"use client"

import { TypewriterText } from "./typewriter-text"
import { AnimatedGrid } from "./animated-grid"
import { ChevronDown, Zap, Timer, Gauge, Weight, Battery, Cpu } from "lucide-react"
import { BentoCard } from "@/components/ui/bento-card"
import { MotoViewer } from "./moto-viewer"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 px-4 md:px-8">
      <AnimatedGrid />

      {/* Main Title - Clean & Technical */}
      <div className="relative z-10 text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00cc88]/10 border border-[#00cc88]/20 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-[#00cc88] rounded-full animate-pulse" />
          <span className="text-[#00cc88] text-xs font-mono tracking-widest uppercase">
            System Status: Online
          </span>
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
          UPV <span className="text-[#00cc88]">MOTOE</span>
        </h1>
        <p className="text-zinc-400 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Prototipo de competición eléctrica - Generación 2026
        </p>
      </div>

      {/* TECHNICAL DASHBOARD - BENTO GRID */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 h-full md:h-[600px]">

        {/* LEFT COLUMN - PERFORMANCE STATS */}
        <div className="md:col-span-3 flex flex-col gap-6 h-full">
          <BentoCard className="flex-1 flex flex-col justify-center p-6 bg-zinc-900/60 backdrop-blur-md border-zinc-800">
            <div className="flex items-center gap-2 text-[#00cc88] mb-2">
              <Zap className="w-5 h-5" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase">Potencia</span>
            </div>
            <div className="font-[family-name:var(--font-display)] text-5xl font-black text-white">
              30<span className="text-xl text-zinc-500">kW</span>
            </div>
            <div className="w-full bg-zinc-800 h-1 mt-4 rounded-full overflow-hidden">
              <div className="bg-[#00cc88] h-full w-[85%]" />
            </div>
          </BentoCard>

          <BentoCard className="flex-1 flex flex-col justify-center p-6 bg-zinc-900/60 backdrop-blur-md border-zinc-800">
            <div className="flex items-center gap-2 text-[#00cc88] mb-2">
              <Timer className="w-5 h-5" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase">0-100 km/h</span>
            </div>
            <div className="font-[family-name:var(--font-display)] text-5xl font-black text-white">
              3.2<span className="text-xl text-zinc-500">s</span>
            </div>
            <div className="w-full bg-zinc-800 h-1 mt-4 rounded-full overflow-hidden">
              <div className="bg-[#00cc88] h-full w-[92%]" />
            </div>
          </BentoCard>
        </div>

        {/* CENTER COLUMN - SCANNED MOTO VIEWER */}
        <div className="md:col-span-6 h-[400px] md:h-full relative">
          <MotoViewer className="h-full w-full bg-zinc-900/40 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.3)]" />
        </div>

        {/* RIGHT COLUMN - TECHNICAL SPECS */}
        <div className="md:col-span-3 flex flex-col gap-6 h-full">
          <BentoCard className="flex-1 flex flex-col justify-center p-6 bg-zinc-900/60 backdrop-blur-md border-zinc-800">
            <div className="flex items-center justify-end gap-2 text-[#00cc88] mb-2">
              <span className="text-xs font-mono font-bold tracking-wider uppercase">Vel. Punta</span>
              <Gauge className="w-5 h-5" />
            </div>
            <div className="font-[family-name:var(--font-display)] text-5xl font-black text-white text-right">
              160<span className="text-xl text-zinc-500">km/h</span>
            </div>
            <div className="w-full bg-zinc-800 h-1 mt-4 rounded-full overflow-hidden">
              <div className="bg-[#00cc88] h-full w-[75%] ml-auto" />
            </div>
          </BentoCard>

          <div className="flex-1 grid grid-cols-1 gap-4">
            <BentoCard className="p-4 bg-zinc-900/60 backdrop-blur-md border-zinc-800 flex items-center justify-between group">
              <div>
                <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider mb-1">Batería</div>
                <div className="text-white font-bold text-lg">HV 400V</div>
              </div>
              <Battery className="w-6 h-6 text-[#00cc88] opacity-50 group-hover:opacity-100 transition-opacity" />
            </BentoCard>
            <BentoCard className="p-4 bg-zinc-900/60 backdrop-blur-md border-zinc-800 flex items-center justify-between group">
              <div>
                <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider mb-1">Peso</div>
                <div className="text-white font-bold text-lg">220 KG</div>
              </div>
              <Weight className="w-6 h-6 text-[#00cc88] opacity-50 group-hover:opacity-100 transition-opacity" />
            </BentoCard>
            <BentoCard className="p-4 bg-zinc-900/60 backdrop-blur-md border-zinc-800 flex items-center justify-between group">
              <div>
                <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider mb-1">ECU</div>
                <div className="text-white font-bold text-lg">RaceMap V2</div>
              </div>
              <Cpu className="w-6 h-6 text-[#00cc88] opacity-50 group-hover:opacity-100 transition-opacity" />
            </BentoCard>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-30 mt-12">
        <a
          href="#moto"
          className="group inline-flex items-center gap-3 px-8 py-3 bg-[#0a0a0a] border border-[#00cc88]/50 text-white font-bold text-sm uppercase tracking-widest hover:bg-[#00cc88] hover:text-black transition-all duration-300 rounded-sm"
        >
          <span>Especificaciones Completas</span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>

      {/* Scanner Animation Style */}
      <style jsx global>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </section>
  )
}
