"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function PageTransition({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const [showOverlay, setShowOverlay] = useState(false)
    const isFirstRender = useRef(true)

    useEffect(() => {
        // Skip showing the overlay on initial page load
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        // Show the overlay on every subsequent navigation
        setShowOverlay(true)
    }, [pathname])

    return (
        <>
            {/*
              CONTENT: Always in the DOM, never unmounted.
              This is the key fix - children are NEVER removed during navigation.
            */}
            <div className="w-full">
                {children}
            </div>

            {/*
              OVERLAY: A separate, independent element that plays an animation
              on top of the content WITHOUT affecting its lifecycle.
            */}
            <AnimatePresence>
                {showOverlay && (
                    <motion.div
                        key="transition-overlay"
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-neutral-950 pointer-events-none"
                        initial={{ opacity: 1 }}
                        animate={{
                            opacity: 0,
                            transition: { delay: 0.6, duration: 0.5, ease: "easeInOut" }
                        }}
                        exit={{ opacity: 0 }}
                        onAnimationComplete={() => setShowOverlay(false)}
                    >
                        <motion.div
                            className="relative w-40 h-40 md:w-60 md:h-60"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{
                                scale: [0.5, 1, 30],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 0.8,
                                times: [0, 0.3, 1],
                                ease: "easeInOut"
                            }}
                        >
                            <Image
                                src="/MurcielagoUPV.png"
                                alt="UPV MotoE Logo"
                                fill
                                sizes="(max-width: 768px) 160px, 240px"
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
