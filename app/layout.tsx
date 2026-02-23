import React from "react"
import type { Metadata } from 'next'
import { Rajdhani, Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from "@/components/navigation"
import { CookieBanner } from "@/components/cookie-banner"
import PageTransition from "@/components/page-transition"
import { LanguageProvider } from "@/context/LanguageContext"

const _rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-display'
});
const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'UPV MotoE Team | Electric Racing Excellence',
  description: 'UPV MotoE - Equipo de competición de motos eléctricas de la Universitat Politècnica de València. Ingeniería, velocidad y sostenibilidad.',
  generator: 'v0.app',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_rajdhani.variable} font-sans antialiased text-white min-h-screen relative`}>
        {/* Global Background Layers */}
        <div className="fixed inset-0 z-[-1] bg-carbon-fiber opacity-100 pointer-events-none" />
        <div className="fixed inset-0 z-[-1] bg-engineering-grid opacity-20 pointer-events-none" />
        <div className="bg-noise" />

        <LanguageProvider>
          <Navigation />
          <PageTransition>
            {children}
          </PageTransition>
        </LanguageProvider>
        <CookieBanner />
      </body>
    </html>
  )
}
