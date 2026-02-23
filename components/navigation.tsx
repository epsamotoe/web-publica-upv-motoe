"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useLanguage, Language } from "@/context/LanguageContext"
import { LanguageSwitcher } from "./language-switcher"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { currentLang, setLanguage, t } = useLanguage()

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.history"), href: "/historia/" },
    { label: t("nav.team"), href: "/team/" },
    { label: t("nav.partners"), href: "/partners/" },
  ]

  const languages: { code: Language; name: string }[] = [
    { code: "ES", name: "Español" },
    { code: "EN", name: "Inglés" },
    { code: "FR", name: "Francés" },
    { code: "DE", name: "Alemán" },
    { code: "IT", name: "Italiano" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  }

  const handleLanguageSelect = (code: Language) => {
    setLanguage(code)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || pathname !== '/'
        ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#222]"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" prefetch={false}>
            <div className="relative w-32 md:w-40 h-10 md:h-12 flex items-center">
              <Image
                src="/logo.png"
                alt="UPV MotoE"
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/5 ${isActive(item.href)
                  ? "text-[#00cc88]"
                  : "text-white/70 hover:text-[#00cc88]"
                  }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Dropdown (Desktop) */}
            <div className="relative ml-2">
              <LanguageSwitcher />
            </div>

            <Link
              href="/contact/"
              prefetch={false}
              className={`ml-4 px-6 py-2.5 font-bold text-sm rounded-full hover:shadow-[0_0_25px_rgba(0,204,136,0.5)] transition-all hover:scale-105 ${isActive('/contact/')
                ? "bg-[#00cc88] text-[#0a0a0a] shadow-[0_0_15px_rgba(0,204,136,0.3)]"
                : "bg-[#00cc88] text-[#0a0a0a]"
                }`}
            >
              {t("nav.contact")}
            </Link>
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
        className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-[30rem]" : "max-h-0"
          }`}
      >
        <div className="bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#222] px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-colors ${isActive(item.href)
                ? "text-[#00cc88] bg-white/5"
                : "text-white/70 hover:text-[#00cc88] hover:bg-white/5"
                }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Language Selector (Mobile) */}
          <div className="border-t border-zinc-800 my-2 pt-2">
            <p className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Idioma</p>
            <div className="grid grid-cols-5 gap-1 px-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className={`flex items-center justify-center py-2 text-sm font-medium rounded-md transition-all ${currentLang === lang.code
                    ? "bg-[#00cc88]/10 text-[#00cc88] border border-[#00cc88]/20"
                    : "text-zinc-400 hover:text-[#00cc88] hover:bg-white/5"
                    }`}
                >
                  {lang.code}
                </button>
              ))}
            </div>
          </div>

          <Link
            href="/contact/"
            prefetch={false}
            onClick={() => setIsMobileMenuOpen(false)}
            className="block mt-4 px-4 py-3 bg-[#00cc88] text-[#0a0a0a] font-bold text-center rounded-lg"
          >
            {t("nav.contact")}
          </Link>
        </div>
      </div>
    </nav>
  )
}
