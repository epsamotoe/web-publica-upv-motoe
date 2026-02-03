"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stage, useGLTF, Html } from "@react-three/drei"

function Model() {
    const { scene } = useGLTF("/models/BlenderMotoE.glb")
    return <primitive object={scene} />
}

function Loader() {
    return (
        <Html center>
            <div className="flex flex-col items-center justify-center whitespace-nowrap">
                <span className="text-[#00cc88] font-bold text-lg animate-pulse tracking-widest font-[family-name:var(--font-display)]">
                    CARGANDO INGENIERÍA...
                </span>
            </div>
        </Html>
    )
}

export function MotoViewer() {
    return (
        <div className="h-[600px] md:h-[700px] w-full relative z-10 flex items-center justify-center">
            <Canvas dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }} camera={{ position: [0, 1, 4], fov: 50 }}>
                <Suspense fallback={<Loader />}>
                    <Stage
                        environment="studio"
                        intensity={0.8}
                        contactShadows={{
                            opacity: 0.5,
                            blur: 1.5,
                            resolution: 1024
                        }}
                    >
                        <Model />
                    </Stage>
                </Suspense>
                <OrbitControls
                    autoRotate
                    autoRotateSpeed={3.0}
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 2}
                    makeDefault
                />
            </Canvas>
        </div>
    )
}

useGLTF.preload("/models/BlenderMotoE.glb")
