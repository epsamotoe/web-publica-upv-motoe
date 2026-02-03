import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BentoGrid } from "@/components/bento-grid"
import { TeamSection } from "@/components/team-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      <HeroSection />
      <BentoGrid />
      <TeamSection />
      <SponsorsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
