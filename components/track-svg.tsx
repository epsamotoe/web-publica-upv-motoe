"use client"

import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"

export function TrackSVG({ totalHeight }: { totalHeight: number }) {
    const [dimensions, setDimensions] = useState({ width: 600, amplitude: 200 })

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768
            setDimensions({
                width: isMobile ? window.innerWidth : 800, // Use full width on mobile to center properly or fixed on desktop
                amplitude: isMobile ? 50 : 250 // Mobile: straighter, Desktop: wide curves
            })
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const { width, amplitude } = dimensions
    const centerX = width / 2

    // Generate the path dynamically based on height
    // We want a curve every X pixels. Let's say every 400px is a full cycle or half cycle?
    // User sample: 300, 600, 900. step = 300.
    // We need to generate enough segments to cover totalHeight
    const step = 600 // Distance between curves vertically (increased for card space)

    // Initial curve to first point
    // M centerX 0
    // Q centerX (step/3), (centerX - amplitude) (step)
    // We'll control the "bend" with the first control point.
    // let pathD = `M ${centerX} 0 C ${centerX} ${step * 0.4}, ${centerX - amplitude} ${step * 0.4}, ${centerX - amplitude} ${step}`

    // We use Cubic Bezier (C) for more control or extend with S (Smooth Cubic) which is like T but for C.
    // Or stick to Q/T.
    // Let's stick to Q/T for simplicity as per prompt, but adjust Y.
    // Q control point: (centerX, step * 0.5)? 
    // If we want it to end at (step), control at (step/2) is good.
    let pathD = `M ${centerX} 0 Q ${centerX} ${step / 2}, ${centerX - amplitude} ${step}`

    const steps = Math.ceil(totalHeight / step) + 2

    for (let i = 1; i < steps; i++) {
        const currentY = step * (i + 1) // 1200, 1800... if step=600.
        // Wait. i=1. We want next point at 2*step.
        // The first segment ends at "step" (600).
        // Next segment ends at 2*step (1200).

        const targetX = (i % 2 !== 0) ? centerX + amplitude : centerX - amplitude

        pathD += ` T ${targetX} ${step * (i + 1)}`
    }

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0 flex justify-center">
            <svg
                width={width}
                height={totalHeight}
                viewBox={`0 0 ${width} ${totalHeight}`}
                className="opacity-50"
                style={{ overflow: 'visible' }}
            >
                <defs>
                    <linearGradient id="neonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#00cc88" stopOpacity="0" />
                        <stop offset="20%" stopColor="#00cc88" stopOpacity="1" />
                        <stop offset="80%" stopColor="#00cc88" stopOpacity="1" />
                        <stop offset="100%" stopColor="#00cc88" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Base Track (Dark Grey) */}
                <path
                    d={pathD}
                    fill="none"
                    stroke="#1a1a1a"
                    strokeWidth="40"
                    strokeLinecap="round"
                />

                {/* Active Trace (Neon Green - Animated) */}
                <motion.path
                    d={pathD}
                    fill="none"
                    stroke="#00cc88"
                    strokeWidth="10"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    style={{ pathLength: useScroll().scrollYProgress }}
                />

                {/* Glow Effect */}
                <motion.path
                    d={pathD}
                    fill="none"
                    stroke="#00cc88"
                    strokeWidth="20"
                    strokeOpacity="0.3"
                    filter="blur(15px)"
                    style={{ pathLength: useScroll().scrollYProgress }}
                />
            </svg>
        </div>
    )
}
