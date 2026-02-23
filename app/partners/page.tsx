"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Globe, Instagram, Linkedin, X, LockOpen, ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

// --- TYPES & DATA ---
interface Sponsor {
    id: string
    name: string
    type: 'institutional' | 'technical'
    logo: string
    description: string
    website: string
    socials?: {
        instagram?: string
        linkedin?: string
    }
}

const SPONSORS: Sponsor[] = [
    // Institucionales
    {
        id: "upv",
        name: "UPV - Campus Alcoy",
        type: "institutional",
        logo: "/UNIVERSIDAD-POLITECNICA-VALENCIA.jpg", // Replace with real logo
        description: "El campus de Alcoy de la Universitat Politècnica de València es nuestro hogar y principal motor. Su apoyo constante nos permite innovar y crecer cada temporada.",
        website: "https://www.epsa.upv.es/",
        socials: {
            instagram: "https://instagram.com/upvalcoi",
            linkedin: "https://linkedin.com/school/upv-campus-alcoy"
        }
    },
    {
        id: "generacion-espontanea",
        name: "Generación Espontánea",
        type: "institutional",
        logo: "/logoGeneracionEspontanea.png",
        description: "El programa que impulsa el talento universitario. Gracias a Generación Espontánea, contamos con los recursos para llevar la ingeniería más allá de las aulas.",
        website: "https://generacionespontanea.upv.es/",
        socials: { instagram: "https://instagram.com/generacionespontanea" }
    },
    // Partners Técnicos
    {
        id: "division-creative-lab",
        name: "Division Creative Lab",
        type: "technical",
        logo: "/DIVISION_CREATIVE_LAB.jpg",
        description: "Estudio de diseño creativo y branding. Transforman nuestra visión en una identidad visual potente y profesional.",
        website: "https://www.divisioncreativelab.com/", // Placeholder or real if known
        socials: { instagram: "https://instagram.com/divisioncreativelab" }
    },
    {
        id: "3dexperience",
        name: "3D Experience (Dassault Systèmes)",
        type: "technical",
        logo: "/3DEXPERIENCE.jpg",
        description: "La plataforma líder en diseño e ingeniería 3D. Nos permite modelar, simular y perfecciónar cada pieza de la motocicleta.",
        website: "https://www.3ds.com/",
        socials: { linkedin: "https://linkedin.com/company/dassaultsystemes" }
    },
    {
        id: "cadenas-moblat",
        name: "Cadenas Moblat",
        type: "technical",
        logo: "/Cadenas_MOBLAT.webp",
        description: "Especialistas en sistemas de transmisión y cadenas industriales. Vitales para la transferencia de potencia en nuestro prototipo.",
        website: "https://cadenasmoblat.com/",
        socials: { linkedin: "https://linkedin.com/company/cadenas-moblat" }
    },
    {
        id: "gurit",
        name: "Gurit",
        type: "technical",
        logo: "/GURIT.jpg",
        description: "Líderes mundiales en materiales compuestos avanzados. Nos proveen de fibra de carbono y resinas de última generación para un chasis ultraligero.",
        website: "https://www.gurit.com/",
        socials: { linkedin: "https://linkedin.com/company/gurit" }
    },
    {
        id: "power-electronics",
        name: "Power Electronics",
        type: "technical",
        logo: "/POWER-ELECTRONCIS.jpg",
        description: "Innovación en electrónica de potencia. Su apoyo es fundamental para la gestión eficiente de la energía en nuestra moto eléctrica.",
        website: "https://power-electronics.com/",
        socials: { linkedin: "https://linkedin.com/company/power-electronics" }
    },
    {
        id: "solidcam",
        name: "SolidCAM",
        type: "technical",
        logo: "/SOLIDCAM.jpg",
        description: "El software CAM líder integrado en SolidWorks. Permite mecanizar nuestras piezas complejas con máxima precisión y eficiencia.",
        website: "https://www.solidcam.com/",
        socials: { linkedin: "https://linkedin.com/company/solidcam" }
    },
    {
        id: "primaflor",
        name: "Primaflor",
        type: "technical",
        logo: "/PRIMAFLOR.jpg",
        description: "Compromiso con la calidad y la sostenibilidad. Un partner que nos ayuda a mantener al equipo alimentado y con energía.",
        website: "https://primaflor.com/",
        socials: { instagram: "https://instagram.com/primaflor_es" }
    },
    {
        id: "cafeteria",
        name: "Cafeteria UPV Alcoy",
        type: "technical",
        logo: "/CAFETERIA.jpg",
        description: "El punto de encuentro y recarga de energía para nuestros ingenieros en el campus.",
        website: "#",
        socials: { instagram: "https://www.instagram.com/lacafe.upvalcoy/?hl=es" }
    }
]

// --- COMPONENTS ---

const SponsorCard = ({ sponsor, onClick }: { sponsor: Sponsor, onClick: () => void }) => {
    return (
        <motion.div
            layoutId={`card-${sponsor.id}`}
            onClick={onClick}
            className={`
                group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-900 border border-white/5 
                hover:border-[#00cc88] transition-colors duration-300
                ${sponsor.type === 'institutional' ? 'aspect-[16/9] md:aspect-[2/1]' : 'aspect-square'}
            `}
            whileHover={{ y: -5 }}
        >
            <div className="absolute inset-0 flex items-center justify-center p-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {/* Logo Container */}
                <div className={`relative w-full h-full mx-auto flex items-center justify-center ${sponsor.type === 'institutional' ? 'max-w-[75%]' : 'max-w-[80%]'}`}>
                    <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                </div>
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Name Label */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white font-bold text-sm uppercase tracking-wider">{sponsor.name}</p>
            </div>
        </motion.div>
    )
}

const SponsorModal = ({ sponsor, onClose }: { sponsor: Sponsor, onClose: () => void }) => {
    const { t } = useLanguage()
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
                layoutId={`card-${sponsor.id}`}
                className="relative w-full max-w-lg bg-neutral-900 border border-[#00cc88]/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,204,136,0.1)] z-10"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors z-20"
                >
                    <X size={20} />
                </button>

                <div className="p-8 md:p-12 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                        <Image
                            src={sponsor.logo}
                            alt={sponsor.name}
                            fill
                            sizes="128px"
                            className="object-contain"
                        />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black font-[family-name:var(--font-display)] uppercase text-white mb-2">
                        {sponsor.name}
                    </h3>

                    <div className="w-12 h-1 bg-[#00cc88] mx-auto mb-6 rounded-full" />

                    <p className="text-zinc-400 leading-relaxed mb-8">
                        {t(`partners.sponsors.${sponsor.id}.desc`)}
                    </p>

                    <div className="flex flex-wrap justify-center gap-3">
                        {sponsor.website && (
                            <a
                                href={sponsor.website}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-bold hover:bg-[#00cc88] transition-colors"
                            >
                                <Globe size={18} />
                                {t("partners.visit_web")}
                            </a>
                        )}
                        {sponsor.socials?.linkedin && (
                            <a
                                href={sponsor.socials.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0077b5] text-white font-bold hover:bg-[#006097] transition-colors"
                            >
                                <Linkedin size={18} />
                                LinkedIn
                            </a>
                        )}
                        {sponsor.socials?.instagram && (
                            <a
                                href={sponsor.socials.instagram}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E1306C] text-white font-bold hover:bg-[#c1275d] transition-colors"
                            >
                                <Instagram size={18} />
                                Instagram
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

// --- MAIN PAGE ---

export default function PartnersPage() {
    const { t } = useLanguage()
    const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null)

    const institutionalSponsors = SPONSORS.filter(s => s.type === 'institutional')
    const technicalSponsors = SPONSORS.filter(s => s.type === 'technical')

    return (
        <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-32">

            {/* HERO SECTION */}
            <section className="relative px-4 text-center mb-24">
                <div className="absolute inset-x-0 -top-40 h-[50vh] bg-gradient-to-b from-[#00cc88]/10 via-transparent to-transparent pointer-events-none opacity-50" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-[#00cc88]/10 text-[#00cc88] text-xs font-mono mb-4 border border-[#00cc88]/20">
                        {t("partners.our_partners")}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black font-[family-name:var(--font-display)] uppercase mb-6 tracking-tight">
                        {t("partners.title1")} <span className="text-[#00cc88]">{t("partners.title2")}</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        {t("partners.description")}
                    </p>
                </motion.div>
            </section>

            {/* INSIDER ACCESS CTA */}
            <section className="relative max-w-5xl mx-auto px-4 -mt-10 mb-32 z-20">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="relative overflow-hidden rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(0,204,136,0.1)] group"
                >
                    {/* Green Glow Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00cc88]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#00cc88]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-10 relative z-10">

                        {/* ICON */}
                        <div className="flex-shrink-0">
                            <div className="relative w-20 h-20 rounded-2xl bg-black/50 border border-[#00cc88]/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,204,136,0.15)]">
                                <LockOpen className="text-[#00cc88]" size={36} />
                                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#00cc88] animate-pulse shadow-[0_0_8px_#00cc88]" />
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="flex-1 text-center md:text-left">
                            <span className="text-[#00cc88] font-mono text-xs font-bold tracking-widest mb-2 block">
                                {t("partners.badge_access")}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                {t("partners.access_title1")} <span className="text-zinc-400">{t("partners.access_title2")}</span>
                            </h3>
                            <p className="text-zinc-400 mb-6 text-sm md:text-base max-w-2xl">
                                {t("partners.access_description")}
                            </p>

                            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-[#00cc88] transition-all duration-300 group-hover:pl-8">
                                {t("partners.access_cta")}
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

                {/* SECTION 1: INSTITUTIONAL */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-end gap-4 mb-10 border-b border-white/5 pb-4"
                    >
                        <h2 className="text-3xl font-bold uppercase tracking-wider">{t("partners.section_institutional")}</h2>

                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {institutionalSponsors.map(sponsor => (
                            <SponsorCard
                                key={sponsor.id}
                                sponsor={sponsor}
                                onClick={() => setSelectedSponsor(sponsor)}
                            />
                        ))}
                    </div>
                </section>

                {/* SECTION 2: TECHNICAL */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-end gap-4 mb-10 border-b border-white/5 pb-4"
                    >
                        <h2 className="text-3xl font-bold uppercase tracking-wider">{t("partners.section_technical")}</h2>

                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {technicalSponsors.map(sponsor => (
                            <SponsorCard
                                key={sponsor.id}
                                sponsor={sponsor}
                                onClick={() => setSelectedSponsor(sponsor)}
                            />
                        ))}
                    </div>
                </section>

            </div>

            {/* MODAL */}
            <AnimatePresence>
                {selectedSponsor && (
                    <SponsorModal
                        sponsor={selectedSponsor}
                        onClose={() => setSelectedSponsor(null)}
                    />
                )}
            </AnimatePresence>

        </main>
    )
}
