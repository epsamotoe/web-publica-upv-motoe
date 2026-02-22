"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Check if the user has already accepted or rejected cookies
        const cookiePreference = localStorage.getItem("motoe_cookies_accepted")
        if (!cookiePreference) {
            // Small delay to ensure smooth entry after page load
            const timer = setTimeout(() => setIsVisible(true), 500)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem("motoe_cookies_accepted", "true")
        setIsVisible(false)
    }

    const handleReject = () => {
        localStorage.setItem("motoe_cookies_accepted", "false")
        setIsVisible(false)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed bottom-0 left-0 w-full z-50 bg-neutral-900/95 backdrop-blur-md border-t border-white/10"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex-1">
                            <p className="text-sm md:text-base text-neutral-300 font-sans">
                                Utilizamos cookies técnicas y analíticas para asegurar que disfrutes de la mejor experiencia de navegación y rendimiento en nuestro sitio web.{" "}
                                <Link href="/cookies" className="text-[#00cc88] hover:underline underline-offset-4 transition-all">
                                    Más información
                                </Link>
                                .
                            </p>
                        </div>
                        <div className="flex items-center gap-3 w-full md:w-auto shrink-0 mt-2 md:mt-0">
                            <button
                                onClick={handleReject}
                                className="flex-1 md:flex-none px-6 py-2.5 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                            >
                                Rechazar
                            </button>
                            <button
                                onClick={handleAccept}
                                className="flex-1 md:flex-none px-6 py-2.5 text-sm font-bold bg-[#00cc88] text-black hover:bg-[#00cc88]/80 rounded transition-colors"
                            >
                                Aceptar y arrancar
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
