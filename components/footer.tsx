"use client"

import { Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#00cc88] flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,204,136,0.5)] transition-shadow">
              <Zap className="w-4 h-4 text-[#0a0a0a]" />
            </div>
            <span className="font-[family-name:var(--font-display)] font-bold tracking-wider text-white">
              UPV<span className="text-[#00cc88]">MotoE</span>
            </span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#inicio" className="text-white/50 hover:text-[#00cc88] transition-colors">
              Inicio
            </a>
            <a href="#moto" className="text-white/50 hover:text-[#00cc88] transition-colors">
              La Moto
            </a>
            <a href="#equipo" className="text-white/50 hover:text-[#00cc88] transition-colors">
              Equipo
            </a>
            <a href="#patrocinadores" className="text-white/50 hover:text-[#00cc88] transition-colors">
              Patrocinadores
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-white/30">
            © {new Date().getFullYear()} UPV MotoE Team
          </div>
        </div>
      </div>
    </footer>
  )
}
