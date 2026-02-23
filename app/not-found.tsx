"use client"

import Link from "next/link"

export default function NotFound() {
    return (
        <main
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                background: "#0a0a0a",
                color: "#fff",
                fontFamily: "sans-serif",
                padding: "2rem",
                textAlign: "center",
            }}
        >
            <div style={{ width: "4px", height: "60px", background: "#00cc88", marginBottom: "2rem", borderRadius: "2px" }} />

            <span style={{ color: "#00cc88", fontFamily: "monospace", fontSize: "0.9rem", letterSpacing: "0.2em", marginBottom: "1rem", display: "block" }}>
                ERROR 404
            </span>

            <h1
                style={{
                    fontSize: "clamp(2rem, 6vw, 4rem)",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                    margin: "0 0 1rem 0",
                }}
            >
                Página no{" "}
                <span style={{ color: "#00cc88" }}>Encontrada</span>
            </h1>

            <p style={{ color: "#a1a1aa", maxWidth: "480px", lineHeight: 1.6, marginBottom: "2.5rem", fontSize: "1.05rem" }}>
                La página que buscas no existe o ha sido movida.
            </p>

            <Link
                href="/"
                style={{
                    padding: "0.875rem 2rem",
                    background: "#00cc88",
                    color: "#0a0a0a",
                    border: "none",
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
        </main>
    )
}
