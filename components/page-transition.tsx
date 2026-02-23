"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Image from "next/image"

// --- COMPONENTE DE TRANSICIÓN "ZOOM DE ATAQUE" ---
export default function PageTransition({
    children,
}: {
    children: React.ReactNode
}) {
    // Detectamos el cambio de ruta
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full"
            >
                {/* 
                  OVERLAY DE TRANSICIÓN 
                  Este elemento actúa como la "cortina" que tapa la web vieja y revela la nueva.
                */}
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950 pointer-events-none"
                    initial={{ opacity: 1 }} // Entra tapando todo
                    animate={{
                        opacity: 0,
                        transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" } // Se desvanece después del zoom
                    }}
                    exit={{ opacity: 0 }} // Al salir (cambiar ruta), empieza invisible, pero el nuevo key lo reinicia a opacity 1
                >
                    <motion.div
                        className="relative w-40 h-40 md:w-60 md:h-60"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{
                            scale: [0.5, 1, 30], // Secuencia: Pequeño -> Normal -> GIGANTE
                            opacity: [0, 1, 0],   // Secuencia: Invisible -> Visible -> Invisible
                        }}
                        transition={{
                            duration: 0.8, // Duración total del "ataque"
                            times: [0, 0.3, 1], // Timing de la secuencia (30% entrada, resto salida zoom)
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

                {/* CONTENIDO DE LA PÁGINA */}
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
