"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Footer } from "@/components/footer"
import { MapPin, Mail, Instagram, Linkedin, Send, Loader2, CheckCircle, XCircle } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
    const { t } = useLanguage()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('sending')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (res.ok) {
                setStatus('success')
                setFormData({ name: "", email: "", subject: "", message: "" })
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                setStatus('error')
            }
        } catch (error) {
            console.error(error)
            setStatus('error')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">

            {/* Header Section */}
            <div className="pt-32 pb-16 px-4 text-center bg-gradient-to-b from-neutral-900 to-[#0a0a0a]">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black font-[family-name:var(--font-display)] uppercase mb-4"
                >
                    {t("contact.title1")} <span className="text-[#00cc88]">{t("contact.title2")}</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-zinc-400 max-w-2xl mx-auto"
                >
                    {t("contact.description")}
                </motion.p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Contact Info Column */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-12"
                >
                    <div>
                        <h3 className="text-2xl font-bold uppercase mb-6 flex items-center gap-2">
                            <span className="w-1 h-8 bg-[#00cc88]" />
                            {t("contact.info_title")}
                        </h3>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-neutral-900 rounded-lg border border-white/5">
                                    <Mail className="text-[#00cc88]" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500 font-mono mb-1">{t("contact.email_label")}</p>
                                    <a href="mailto:epsamotoe@gmail.com" className="text-lg hover:text-[#00cc88] transition-colors">
                                        epsamotoe@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-neutral-900 rounded-lg border border-white/5">
                                    <MapPin className="text-[#00cc88]" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500 font-mono mb-1">{t("contact.address_label")}</p>
                                    <p className="text-lg text-zinc-300 leading-relaxed">
                                        {t("contact.address_text1")}<br />
                                        {t("contact.address_text2")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold uppercase mb-6 flex items-center gap-2">
                            <span className="w-1 h-8 bg-[#00cc88]" />
                            {t("contact.follow_us")}
                        </h3>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/upvmotoe/?hl=es"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center border border-white/5 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] transition-all duration-300 group"
                            >
                                <Instagram size={24} className="text-zinc-400 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/upv-moto-e/posts/?feedView=all"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center border border-white/5 hover:bg-[#0077b5] transition-all duration-300 group"
                            >
                                <Linkedin size={24} className="text-zinc-400 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Form Column */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-neutral-900/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5"
                >
                    <h3 className="text-2xl font-bold uppercase mb-8">{t("contact.form_title")}</h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-mono text-zinc-500 ml-1">{t("contact.f_name")}</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00cc88] transition-colors placeholder:text-zinc-700"
                                    placeholder={t("contact.f_name_ph")}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-mono text-zinc-500 ml-1">{t("contact.f_email")}</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00cc88] transition-colors placeholder:text-zinc-700"
                                    placeholder={t("contact.f_email_ph")}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-mono text-zinc-500 ml-1">{t("contact.f_subject")}</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00cc88] transition-colors placeholder:text-zinc-700"
                                placeholder={t("contact.f_subject_ph")}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-mono text-zinc-500 ml-1">{t("contact.f_message")}</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00cc88] transition-colors placeholder:text-zinc-700 resize-none"
                                placeholder={t("contact.f_message_ph")}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full bg-[#00cc88] text-black font-bold py-4 rounded-xl hover:bg-[#00bb77] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? (
                                <>
                                    <Loader2 className="animate-spin" />
                                    {t("contact.btn_sending")}
                                </>
                            ) : (
                                <>
                                    {t("contact.btn_send")}
                                    <Send size={18} />
                                </>
                            )}
                        </button>

                        {/* Feedback Messages */}
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-500"
                            >
                                <CheckCircle size={20} />
                                <p className="font-bold">{t("contact.msg_success")}</p>
                            </motion.div>
                        )}

                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500"
                            >
                                <XCircle size={20} />
                                <p className="font-bold">{t("contact.msg_error")}</p>
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </div>
            <Footer />
        </main>
    )
}
