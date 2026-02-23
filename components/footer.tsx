"use client"

import { Linkedin, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-neutral-950 py-12 border-t border-white/10 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <div className="relative w-32 md:w-40 h-10 md:h-12 flex items-center">
                <Image
                  src="/logo.png"
                  alt="UPV MotoE"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm">
              Innovación eléctrica y alto rendimiento desde el Campus d'Alcoi.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/upv-moto-e/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00cc88] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/upvmotoe/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00cc88] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold tracking-wide">Explorar</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#inicio" className="hover:text-[#00cc88] transition-colors block">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/#moto" className="hover:text-[#00cc88] transition-colors block">
                  {t("footer.moto")}
                </Link>
              </li>
              <li>
                <Link href="/team/" className="hover:text-[#00cc88] transition-colors block">
                  {t("nav.team")}
                </Link>
              </li>
              <li>
                <Link href="/partners/" className="hover:text-[#00cc88] transition-colors block">
                  {t("nav.partners")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold tracking-wide">Contacto</h3>
            <div className="space-y-3 text-sm">
              <p>
                <strong>Universitat Politècnica de València</strong><br />
                Campus d'Alcoi<br />
                Pabellón Deportivo Georgina Blanes. C/ Alarcón, 1.
              </p>
              <p className="pt-2">
                <a href="mailto:contacto@upvmotoe.com" className="hover:text-[#00cc88] transition-colors">
                  contacto@upvmotoe.com
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 mt-8">
          <div className="text-sm text-neutral-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} UPV MotoE Team. Todos los derechos reservados.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
            <Link href="/aviso-legal/" className="hover:text-white transition-colors">
              Aviso Legal
            </Link>
            <Link href="/privacidad/" className="hover:text-white transition-colors">
              Privacidad
            </Link>
            <Link href="/cookies/" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
