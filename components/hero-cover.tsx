"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"

export function HeroCover() {
    const { t } = useLanguage()

    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/MotoHome.jpg"
                    alt="UPV MotoE Racing Prototype"
                    fill
                    priority
                    className="object-cover object-center md:object-top opacity-90"
                    sizes="100vw"
                />
                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
                {/* Darken overlay for text readability */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">

                {/* Main Title - Massive Red Bull Style */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                >
                    <h1 className="font-sans text-[15vw] md:text-[12vw] font-black uppercase tracking-tighter text-white leading-[0.8] drop-shadow-2xl">
                        UPV <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">MOTOE</span>
                    </h1>
                </motion.div>

                {/* Action Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-16"
                >
                    <Link
                        href="/machine"
                        className="group flex flex-col items-center gap-2 text-white/80 hover:text-[#00cc88] transition-colors"
                    >
                        <span className="text-sm font-bold uppercase tracking-[0.3em]">{t("home.hero_explore")}</span>
                        <div className="p-2 rounded-full border border-white/20 group-hover:border-[#00cc88] transition-colors">
                            <ChevronDown className="w-6 h-6 animate-bounce" />
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
