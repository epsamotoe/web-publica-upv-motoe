import React from "react"
import type { Metadata } from 'next'
import { Rajdhani, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

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
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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

        {children}
        <Analytics />
      </body>
    </html>
  )
}
