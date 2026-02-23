"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error("[UPV MotoE] Global Error:", error)
    }, [error])

    return (
        <html lang="es">
            <body style={{ margin: 0, padding: 0, background: "#0a0a0a", color: "#fff", fontFamily: "sans-serif" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "100vh",
                        padding: "2rem",
                        textAlign: "center",
                    }}
                >
                    {/* Accent line */}
                    <div style={{ width: "4px", height: "60px", background: "#00cc88", marginBottom: "2rem", borderRadius: "2px" }} />

                    <h1
                        style={{
                            fontSize: "clamp(2rem, 6vw, 4rem)",
                            fontWeight: 900,
                            textTransform: "uppercase",
                            letterSpacing: "-0.02em",
                            margin: "0 0 1rem 0",
                        }}
                    >
                        Error de{" "}
                        <span style={{ color: "#00cc88" }}>Sistema</span>
                    </h1>

                    <p
                        style={{
                            color: "#a1a1aa",
                            maxWidth: "480px",
                            lineHeight: 1.6,
                            marginBottom: "2.5rem",
                            fontSize: "1.05rem",
                        }}
                    >
                        Algo fue mal al cargar esta página. Puedes intentar recargarla o volver al inicio.
                    </p>

                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                        <button
                            onClick={reset}
                            style={{
                                padding: "0.875rem 2rem",
                                background: "#00cc88",
                                color: "#0a0a0a",
                                border: "none",
                                borderRadius: "9999px",
                                fontWeight: 700,
                                fontSize: "0.95rem",
                                cursor: "pointer",
                                textTransform: "uppercase",
                                letterSpacing: "0.05em",
                            }}
                        >
                            Intentar de nuevo
                        </button>

                        <Link
                            href="/"
                            style={{
                                padding: "0.875rem 2rem",
                                background: "transparent",
                                color: "#fff",
                                border: "2px solid rgba(255,255,255,0.2)",
                                borderRadius: "9999px",
                                fontWeight: 700,
                                fontSize: "0.95rem",
                                cursor: "pointer",
                                textDecoration: "none",
                                textTransform: "uppercase",
                                letterSpacing: "0.05em",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}
                        >
                            ← Volver al Inicio
                        </Link>
                    </div>
                </div>
            </body>
        </html>
    )
}
