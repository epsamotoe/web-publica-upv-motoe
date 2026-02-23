"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { HeroCover } from "@/components/hero-cover"
import { TechSpecs } from "@/components/tech-specs"
import { SocialHub } from "@/components/social-hub"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"

export default function HomePage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-[#0a0a0a]">


      {/* Hero Section */}
      <HeroCover />

      <TechSpecs />

      {/* OBJECTIVE: MOTOSTUDENT SECTION - CINEMATIC REDESIGN */}
      <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-neutral-950">

        {/* Layer 1: Parallax Background */}
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[20%]">
          <Image
            src="/circuitoMotorland.webp"
            alt="Circuito MotorLand Aragón"
            fill
            sizes="100vw"
            className="object-cover opacity-60 brightness-[0.7]"
          />
        </motion.div>

        {/* Layer 2: Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0a0a0a_100%)] opacity-70" />

        {/* Layer 3: Cinematic Content */}
        <div className="absolute bottom-0 left-0 w-full p-5 md:p-16 pb-10 md:pb-24 z-10 overflow-x-hidden">
          <div className="max-w-7xl mx-auto flex items-end gap-4 md:gap-10">

            {/* Racing Line - hidden on smallest screens to save space */}
            <div className="hidden sm:block w-1 md:w-2 h-20 md:h-64 bg-[#00cc88] flex-shrink-0" />

            <div className="mb-2 min-w-0 flex-1">
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-white uppercase leading-[0.9] mb-3 md:mb-4 break-words">
                {t("home.ms_objective")} <br /> {t("home.ms_motostudent")}
              </h2>
              <h3 className="text-[#00cc88] text-base sm:text-xl md:text-3xl font-bold uppercase tracking-wider mb-4 md:mb-6 leading-snug">
                {t("home.ms_stage")}
              </h3>
              <p className="text-zinc-200 max-w-2xl text-sm sm:text-base md:text-xl font-medium leading-relaxed drop-shadow-md">
                {t("home.ms_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <SocialHub />

      {/* Intro Section */}
      <section className="py-24 px-4 md:px-8 max-w-4xl mx-auto text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#00cc88] to-transparent opacity-50" />

        <h2 className="text-3xl md:text-5xl font-black font-[family-name:var(--font-display)] uppercase mb-6">
          {t("home.intro_eng")} <span className="text-[#00cc88]">{t("home.intro_exc")}</span>
        </h2>
        <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          {t("home.intro_desc")}
        </p>
        <Link href="/historia/" className="group inline-flex items-center gap-2 px-8 py-3 border border-white/20 hover:border-[#00cc88] hover:text-[#00cc88] rounded-full transition-all uppercase tracking-widest text-sm font-bold">
          {t("home.intro_hist")}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[#00cc88]/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-black font-[family-name:var(--font-display)] uppercase mb-8">
            {t("home.cta_ready")} <span className="text-[#00cc88]">{t("home.cta_collab")}</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full">
            <Link href="/partners/" className="w-full sm:w-auto text-center px-8 py-4 bg-[#00cc88] text-black font-bold text-lg rounded-full hover:bg-[#00bb77] hover:shadow-[0_0_30px_rgba(0,204,136,0.4)] transition-all min-w-[200px]">
              {t("home.cta_partners")}
            </Link>
            <Link href="/contact/" className="w-full sm:w-auto text-center px-8 py-4 bg-transparent border-2 border-white/20 hover:border-[#00cc88] text-white hover:text-[#00cc88] font-bold text-lg rounded-full transition-all min-w-[200px]">
              {t("home.cta_contact")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
