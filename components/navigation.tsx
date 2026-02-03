"use client"

import { useState, useEffect } from "react"
import { Menu, X, Zap } from "lucide-react"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "La Moto", href: "#moto" },
  { label: "Equipo", href: "#equipo" },
  { label: "Patrocinadores", href: "#patrocinadores" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#222]" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-[#00cc88] flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,204,136,0.5)] transition-shadow">
              <Zap className="w-6 h-6 text-[#0a0a0a]" />
            </div>
            <span className="font-[family-name:var(--font-display)] font-bold text-lg tracking-wider text-white">
              UPV<span className="text-[#00cc88]">MotoE</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-[#00cc88] transition-colors rounded-full hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-4 px-6 py-2.5 bg-[#00cc88] text-[#0a0a0a] font-bold text-sm rounded-full hover:shadow-[0_0_25px_rgba(0,204,136,0.5)] transition-all hover:scale-105"
            >
              Contacto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#00cc88] transition-colors"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#222] px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-white/70 hover:text-[#00cc88] hover:bg-white/5 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block mt-4 px-4 py-3 bg-[#00cc88] text-[#0a0a0a] font-bold text-center rounded-lg"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  )
}
