"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Trophy, Zap, Weight, Flag, Calendar, BarChart3, Activity, Cpu, CircuitBoard, Heart, Users } from "lucide-react"
import { TrackSVG } from "@/components/track-svg"
import { useLanguage } from "@/context/LanguageContext"

export default function HistoriaPage() {
    const { t } = useLanguage()

    // --- DATOS: LA EVOLUCIÓN (2016 - 2026) ---
    const HISTORY_DATA = [
        {
            year: 2017,
            title: t("history.events.2017.title"),
            description: t("history.events.2017.desc"),
            image: "/equipo2017.jpg",
            stats: [
                { icon: Flag, label: t("history.events.2017.stat1") },
                { icon: Calendar, label: t("history.events.2017.stat2") }
            ]
        },
        {
            year: 2018,
            title: t("history.events.2018.title"),
            description: t("history.events.2018.desc"),
            image: "/motorland2018.jpg",
            stats: [
                { icon: Weight, label: t("history.events.2018.stat1") },
                { icon: Zap, label: t("history.events.2018.stat2") }
            ]
        },
        {
            year: 2021,
            title: t("history.events.2021.title"),
            description: t("history.events.2021.desc"),
            image: "/Competicion2021Motoe.webp",
            stats: [
                { icon: Users, label: t("history.events.2021.stat1") },
                { icon: Heart, label: t("history.events.2021.stat2") }
            ]
        },
        {
            year: 2023,
            title: t("history.events.2023.title"),
            description: t("history.events.2023.desc"),
            image: "/Competicion2023.webp",
            stats: [
                { icon: Trophy, label: t("history.events.2023.stat1") },
                { icon: Zap, label: t("history.events.2023.stat2") },
                { icon: Weight, label: t("history.events.2023.stat3") }
            ]
        },
        {
            year: 2024,
            title: t("history.events.2024.title"),
            description: t("history.events.2024.desc"),
            image: "/diseño2024.webp",
            stats: [
                { icon: CircuitBoard, label: t("history.events.2024.stat1") },
                { icon: Activity, label: t("history.events.2024.stat2") }
            ]
        },
        {
            year: 2025,
            title: t("history.events.2025.title"),
            description: t("history.events.2025.desc"),
            image: "/Moto2025.jgp.webp",
            objectPosition: "object-bottom",
            compactImage: true,
            stats: [
                { icon: Activity, label: t("history.events.2025.stat1") },
                { icon: CircuitBoard, label: t("history.events.2025.stat2") }
            ]
        },
        {
            year: 2026,
            title: t("history.events.2026.title"),
            description: t("history.events.2026.desc"),
            image: "/placeholder-moto.jpg",
            isComingSoon: true,
            stats: [
                { icon: Zap, label: t("history.events.2026.stat1") },
                { icon: Cpu, label: t("history.events.2026.stat2") }
            ]
        }
    ]

    const containerRef = useRef<HTMLDivElement>(null)
    const [totalHeight, setTotalHeight] = useState(0)

    // Calculate approx height: Header + (N items * 600px step) + Footer
    useEffect(() => {
        // We set a minimum height based on items to ensure SVG covers everything
        const calculatedHeight = 500 + (HISTORY_DATA.length * 600) + 500
        setTotalHeight(calculatedHeight)
    }, [HISTORY_DATA.length])

    return (
        <main className="min-h-screen bg-neutral-950 text-white selection:bg-[#00cc88] selection:text-black relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-white/[0.02] z-0 pointer-events-none" />

            {/* Header */}
            <div className="pt-32 pb-16 text-center px-4 relative z-10">
                <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-[#00cc88] transition-colors mb-6">
                    <ArrowLeft className="w-4 h-4 mr-2" /> {t("history.back_home")}
                </Link>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
                    {t("history.title_data")} <span className="text-[#00cc88]">{t("history.title_data2")}</span> {t("history.title_track")}
                </h1>

            </div>

            {/* TRACK CONTAINER */}
            <div
                ref={containerRef}
                className="relative w-full mx-auto max-w-[1920px]"
                style={{ height: totalHeight > 0 ? totalHeight : 'auto' }}
            >
                {/* SVG Circuit - Background Layer */}
                {totalHeight > 0 && <TrackSVG totalHeight={totalHeight} />}

                {/* Content Layer */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    {HISTORY_DATA.map((event, index) => {
                        const isRightSide = index % 2 === 0 // 0=Right(600px curve is Left), 1=Left(1200px curve is Right)
                        const topPos = (index + 1) * 600

                        return (
                            <motion.div
                                key={event.year}
                                initial={{ opacity: 0, x: isRightSide ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-20%" }}
                                transition={{ duration: 0.8 }}
                                className={`absolute w-full flex px-4 md:px-20 pointer-events-auto ${isRightSide ? "justify-center md:justify-end" : "justify-center md:justify-start"
                                    }`}
                                style={{
                                    top: `${topPos - 150}px` // Offset to center card vertically on the curve apex (600, 1200, etc)
                                }}
                            >
                                {/* CONNECTION LINE (Desktop only) */}
                                <div className={`hidden md:block absolute top-1/2 w-32 h-[1px] bg-[#00cc88]/50 ${isRightSide ? "left-1/2 -ml-16 origin-left" : "right-1/2 -mr-16 origin-right"
                                    }`} />

                                {/* CARD */}
                                <div className={`bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-sm w-full md:w-[450px] relative group hover:border-[#00cc88]/50 transition-all duration-300 ${event.isComingSoon ? "border-[#00cc88]/30 bg-[#00cc88]/5 pb-12" : ""}`}>
                                    {/* Decorator Corners */}
                                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00cc88]" />
                                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00cc88]" />
                                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00cc88]" />
                                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00cc88]" />

                                    {/* Header: Year Badge */}
                                    <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                                        <div className="text-3xl font-black text-white font-mono tracking-widest">
                                            {event.year}
                                        </div>
                                    </div>

                                    {!event.isComingSoon && (
                                        <>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-mono text-xs md:text-sm">
                                                {event.description}
                                            </p>

                                            {/* Main Content */}
                                            <div className={`relative ${event.compactImage ? 'aspect-square max-w-[300px] mx-auto' : 'aspect-video'} bg-neutral-900 rounded-sm overflow-hidden group-hover:shadow-[0_0_20px_rgba(0,204,136,0.1)] transition-shadow`}>
                                                <Image
                                                    src={event.image || "/placeholder-moto.jpg"}
                                                    alt={event.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className={`object-cover ${(event as any).objectPosition || "object-center"} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                                                <div className="absolute bottom-3 left-4 z-20">
                                                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{event.title}</h3>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {event.isComingSoon && (
                                        <div className="py-12 flex flex-col items-center justify-center text-center">
                                            <motion.div
                                                animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
                                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                className="text-[#00cc88] text-5xl md:text-6xl font-black italic tracking-tighter"
                                            >
                                                COMING SOON!
                                            </motion.div>

                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* FINAL */}
            <div className="text-center py-32 relative z-10">
                <div className="inline-block p-4 border border-[#00cc88] text-[#00cc88] font-mono text-sm tracking-widest animate-pulse">
                    {t("history.end_transmission")}
                </div>
            </div>

            <Footer />
        </main >
    )
}
