"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Linkedin, ExternalLink } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

// Custom TikTok Icon since it might not be in all Lucide versions
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
)


export function SocialHub() {
    const { t } = useLanguage()

    const SOCIAL_LINKS = [
        {
            name: "Instagram",
            icon: Instagram,
            color: "hover:bg-pink-600",
            iconColor: "text-[#E1306C]",
            url: "https://www.instagram.com/upvmotoe/?hl=es",
            description: t("home.social_ig_desc"),
            cta: t("home.social_ig_cta")
        },
        {
            name: "TikTok",
            icon: TikTokIcon,
            color: "hover:bg-black",
            iconColor: "text-white",
            url: "https://www.tiktok.com/@upvmotoe",
            description: t("home.social_tk_desc"),
            cta: t("home.social_tk_cta")
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            color: "hover:bg-blue-700",
            iconColor: "text-[#0077b5]",
            url: "https://www.linkedin.com/company/upv-moto-e/posts/?feedView=all",
            description: t("home.social_li_desc"),
            cta: t("home.social_li_cta")
        }
    ]

    return (
        <section className="py-20 bg-neutral-900 border-t border-white/5 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00cc88]/5 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-black font-[family-name:var(--font-display)] uppercase text-white mb-4">
                        {t("home.social_connect")} <span className="text-[#00cc88]">{t("home.social_us")}</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        {t("home.social_desc")}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {SOCIAL_LINKS.map((social, index) => (
                        <Dialog key={social.name}>
                            <DialogTrigger asChild>
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`group relative p-8 rounded-xl bg-zinc-800/50 border border-white/10 hover:border-[#00cc88]/50 transition-all duration-300 flex flex-col items-center gap-4 ${social.color} hover:text-white`}
                                >
                                    <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                                        <social.icon className={`w-8 h-8 ${social.iconColor} group-hover:text-white transition-colors`} />
                                    </div>
                                    <span className="font-bold text-lg tracking-wider uppercase">{social.name}</span>

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                                </motion.button>
                            </DialogTrigger>
                            <DialogContent className="bg-zinc-950 border-white/10 text-white sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle className="flex items-center gap-2 text-2xl font-black uppercase">
                                        <social.icon className={`w-6 h-6 ${social.iconColor}`} />
                                        {social.name}
                                    </DialogTitle>
                                    <DialogDescription className="text-zinc-400 text-base pt-2">
                                        {social.description}
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="flex justify-end mt-4">
                                    <Button
                                        asChild
                                        className="bg-[#00cc88] text-black hover:bg-[#00bb77] font-bold"
                                    >
                                        <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                            {social.cta}
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    )
}
