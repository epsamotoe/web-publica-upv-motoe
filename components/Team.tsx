"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function Team() {
    const containerRef = useRef<HTMLElement>(null)

    return (
        <section
            ref={containerRef}
            className="w-full h-[85vh] min-h-[600px] overflow-hidden relative bg-black"
        >
            {/* Background Image with Zoom Effect */}
            <motion.div
                className="relative w-full h-full"
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "-10%" }}
            >
                <Image
                    src="/EquipoMoto.png"
                    alt="The Faces Behind The Machine"
                    fill
                    className="object-cover saturate-[0.8]"
                    priority={false}
                    loading="lazy"
                />

                {/* Green Overlay */}
                <div className="absolute inset-0 bg-[#00cc88]/10 mix-blend-multiply pointer-events-none" />

                {/* Subtle Gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
            </motion.div>

            {/* Header Text */}
            <div className="absolute top-12 left-6 md:top-16 md:left-16 z-20 max-w-xl">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-zinc-500 font-bold text-4xl md:text-6xl tracking-tight uppercase leading-[0.9]"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    The Faces <br />
                    <span className="text-zinc-400">Behind The Machine</span>
                </motion.h2>
            </div>

            {/* Footer Text */}
            <div className="absolute bottom-12 right-6 md:bottom-16 md:right-16 z-20 text-right">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-[#00cc88] text-xs md:text-sm font-light tracking-[0.3em] uppercase"
                >
                    Valencia Motorsport Engineering <span className="mx-2">•</span> Season 2026
                </motion.p>
            </div>
        </section>
    )
}
