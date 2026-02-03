"use client"

import { motion } from "framer-motion"
import { BentoCard } from "@/components/ui/bento-card"
import { MotoViewer } from "./moto-viewer"
import { Zap, Timer, Gauge, Battery, Weight, Cpu } from "lucide-react"

export function TechSpecs() {
    return (
        <section id="specs" className="relative min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center py-20 px-4 md:px-8">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/carbon-fiber.svg')] opacity-5 pointer-events-none" />

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 text-center mb-16"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00cc88]/10 border border-[#00cc88]/20 rounded-full mb-4">
                    <span className="w-1.5 h-1.5 bg-[#00cc88] rounded-full animate-pulse" />
                    <span className="text-[#00cc88] text-xs font-mono tracking-widest uppercase">
                        Live Telemetry
                    </span>
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                    Especificaciones <span className="text-[#00cc88]">Técnicas</span>
                </h2>
            </motion.div>

            {/* Bento Grid */}
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 h-full md:h-[600px]">

                {/* LEFT COLUMN */}
                <div className="md:col-span-3 flex flex-col gap-6 h-full">
                    <BentoCard className="flex-1 flex flex-col justify-center p-6 bg-zinc-900/40 backdrop-blur-md border-zinc-800">
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

                    <BentoCard className="flex-1 flex flex-col justify-center p-6 bg-zinc-900/40 backdrop-blur-md border-zinc-800">
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

                {/* CENTER COLUMN - MOTO VIEWER */}
                <div className="md:col-span-6 h-[400px] md:h-full relative z-20">
                    <MotoViewer className="h-full w-full bg-zinc-900/40 backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] border-zinc-800" />
                </div>

                {/* RIGHT COLUMN */}
                <div className="md:col-span-3 flex flex-col gap-6 h-full">
                    <BentoCard className="flex-1 flex flex-col justify-center p-6 bg-zinc-900/40 backdrop-blur-md border-zinc-800">
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
                        <BentoCard className="p-4 bg-zinc-900/40 backdrop-blur-md border-zinc-800 flex items-center justify-between group">
                            <div>
                                <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider mb-1">Batería</div>
                                <div className="text-white font-bold text-lg">HV 400V</div>
                            </div>
                            <Battery className="w-6 h-6 text-[#00cc88] opacity-50 group-hover:opacity-100 transition-opacity" />
                        </BentoCard>
                        <BentoCard className="p-4 bg-zinc-900/40 backdrop-blur-md border-zinc-800 flex items-center justify-between group">
                            <div>
                                <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider mb-1">Peso</div>
                                <div className="text-white font-bold text-lg">220 KG</div>
                            </div>
                            <Weight className="w-6 h-6 text-[#00cc88] opacity-50 group-hover:opacity-100 transition-opacity" />
                        </BentoCard>
                        <BentoCard className="p-4 bg-zinc-900/40 backdrop-blur-md border-zinc-800 flex items-center justify-between group">
                            <div>
                                <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider mb-1">ECU</div>
                                <div className="text-white font-bold text-lg">RaceMap V2</div>
                            </div>
                            <Cpu className="w-6 h-6 text-[#00cc88] opacity-50 group-hover:opacity-100 transition-opacity" />
                        </BentoCard>
                    </div>
                </div>
            </div>
        </section>
    )
}
