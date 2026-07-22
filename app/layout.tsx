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
  metadataBase: new URL('https://upvmotoe.webs.upv.es'),
  title: {
    default: 'UPV MotoE | Equipo de Competición de Motos Eléctricas UPV',
    template: '%s | UPV MotoE Team'
  },
  description: 'UPV MotoE es el equipo de competición de motos eléctricas de la Universitat Politècnica de València. Ingeniería, velocidad, innovación y sostenibilidad en MotoStudent.',
  keywords: ['upv motoe', 'competicion moto electrica upv', 'upv electric team', 'moto upv', 'MotoStudent UPV', 'moto electrica', 'universitat politecnica de valencia', 'equipo competicion upv'],
  generator: 'Next.js',
  applicationName: 'UPV MotoE',
  authors: [{ name: 'UPV MotoE Team' }],
  creator: 'UPV MotoE Team',
  publisher: 'Universitat Politècnica de València',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'UPV MotoE | Equipo de Competición de Motos Eléctricas UPV',
    description: 'Conoce al UPV MotoE, el equipo de competición de motos eléctricas de la Universitat Politècnica de València.',
    url: 'https://upvmotoe.webs.upv.es',
    siteName: 'UPV MotoE',
    images: [
      {
        url: '/MotoHome.jpg',
        width: 1920,
        height: 1080,
        alt: 'UPV MotoE Racing Prototype',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UPV MotoE | UPV Electric Team',
    description: 'Equipo de competición de motos eléctricas de la Universitat Politècnica de València.',
    images: ['/MotoHome.jpg'],
  },
  icons: {
    icon: '/upvLogo.png?v=2',
    shortcut: '/upvLogo.png?v=2',
    apple: '/upvLogo.png?v=2',
  },
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
