"use client"

import { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stage, useGLTF, Html, useProgress } from "@react-three/drei"
import { cn } from "@/lib/utils"
import { useInView } from "framer-motion"

function Model() {
    const { scene } = useGLTF("/models/BlenderCarbonFiber.glb")
    return <primitive object={scene} />
}

function Loader() {
    const { progress } = useProgress()
    return (
        <Html center>
            <div className="flex flex-col items-center justify-center p-4 bg-zinc-950/80 rounded-lg border border-[#00cc88]/30 backdrop-blur-sm min-w-[280px]">
                <div className="flex justify-between w-full mb-2 text-xs font-mono text-[#00cc88]/80">
                    <span>SYSTEM_BOOT</span>
                    <span>{progress.toFixed(0)}%</span>
                </div>

                {/* Progress Bar Container */}
                <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden mb-2">
                    <div
                        className="h-full bg-[#00cc88] transition-all duration-200 ease-out shadow-[0_0_10px_rgba(0,204,136,0.5)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="text-[#00cc88] font-bold text-sm tracking-widest font-[family-name:var(--font-display)] animate-pulse">
                    CARGANDO INGENIERÍA...
                </div>

                <div className="mt-2 text-[10px] text-zinc-500 font-mono">
                    MODEL: MOTO-E_PROTOTYPE_V2
                </div>
            </div>
        </Html>
    )
}

export function MotoViewer({ className }: { className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: false, amount: 0.1 })

    return (
        <div
            ref={containerRef}
            className={cn("relative w-full h-full min-h-[400px] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/20 will-change-transform", className)}
        >
            {/* Scanner Effect */}
            <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-xl">
                <div className="w-full h-[2px] bg-[#00cc88]/50 shadow-[0_0_15px_rgba(0,204,136,0.5)] animate-scan" />
            </div>

            {/* HUD Corners */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-[#00cc88]/50 rounded-tl-sm z-30 opacity-70" />
            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-[#00cc88]/50 rounded-tr-sm z-30 opacity-70" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-[#00cc88]/50 rounded-bl-sm z-30 opacity-70" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-[#00cc88]/50 rounded-br-sm z-30 opacity-70" />

            {isInView && (
                <Canvas
                    dpr={[1, 1.5]}
                    gl={{
                        alpha: true,
                        antialias: false,
                        powerPreference: "high-performance",
                        stencil: false,
                        depth: true
                    }}
                    camera={{ position: [0, 2, 6], fov: 40 }}
                >
                    <Suspense fallback={<Loader />}>
                        <Stage
                            environment="studio"
                            intensity={1}
                            shadows={{
                                type: 'contact',
                                opacity: 0.4,
                                blur: 2,
                                resolution: 512
                            }}
                        >
                            <Model />
                        </Stage>
                    </Suspense>
                    <OrbitControls
                        autoRotate={isInView}
                        autoRotateSpeed={3.0}
                        enableZoom={false}
                        enablePan={false}
                        minPolarAngle={Math.PI / 3}
                        maxPolarAngle={Math.PI / 2}
                        makeDefault
                    />
                </Canvas>
            )}
        </div>
    )
}

useGLTF.preload("/models/BlenderCarbonFiber.glb")
