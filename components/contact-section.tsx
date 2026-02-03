"use client"

import { ScrollReveal } from "./scroll-reveal"
import { AnimatedGrid } from "./animated-grid"
import { Mail, MapPin, Instagram, Linkedin, Youtube } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden">
      <AnimatedGrid />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <ScrollReveal>
            <div>
              <span className="inline-block px-4 py-1.5 text-sm font-bold tracking-widest text-[#00cc88] bg-[#00cc88]/10 border border-[#00cc88]/20 rounded-full mb-4 uppercase">
                CONTACTO
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-6">
                ¿Hablamos?
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Ya sea para colaboraciones, patrocinios o simplemente para saber más
                sobre nuestro proyecto, estamos encantados de escucharte.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:info@upvmotoe.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#111] border border-[#222] hover:border-[#00cc88]/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00cc88]/10 flex items-center justify-center group-hover:bg-[#00cc88]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#00cc88]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Email</div>
                    <div className="text-white font-medium">info@upvmotoe.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#111] border border-[#222]">
                  <div className="w-12 h-12 rounded-xl bg-[#00cc88]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#00cc88]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Ubicación</div>
                    <div className="text-white font-medium">UPV, Valencia, España</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-[#111] border border-[#222] flex items-center justify-center text-white/50 hover:text-[#00cc88] hover:border-[#00cc88]/40 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-[#111] border border-[#222] flex items-center justify-center text-white/50 hover:text-[#00cc88] hover:border-[#00cc88]/40 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-[#111] border border-[#222] flex items-center justify-center text-white/50 hover:text-[#00cc88] hover:border-[#00cc88]/40 transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Form */}
          <ScrollReveal delay={200}>
            <form className="p-8 rounded-3xl bg-[#111] border border-[#222]">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#222] text-white placeholder-white/30 focus:outline-none focus:border-[#00cc88] transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#222] text-white placeholder-white/30 focus:outline-none focus:border-[#00cc88] transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#222] text-white focus:outline-none focus:border-[#00cc88] transition-colors"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="patrocinio">Patrocinio</option>
                    <option value="colaboracion">Colaboración</option>
                    <option value="unirse">Unirse al equipo</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#222] text-white placeholder-white/30 focus:outline-none focus:border-[#00cc88] transition-colors resize-none"
                    placeholder="Tu mensaje..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#00cc88] text-[#0a0a0a] font-bold text-lg rounded-xl hover:shadow-[0_0_30px_rgba(0,204,136,0.5)] transition-all hover:scale-[1.02]"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
