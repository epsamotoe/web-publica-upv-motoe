"use client"

import { Team } from "@/components/Team"
import { TeamSection } from "@/components/team-section"
import { BentoGrid } from "@/components/bento-grid"
import { Footer } from "@/components/footer"

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-20">
            <Team />
            <BentoGrid />
            <TeamSection />
            <Footer />
        </main>
    )
}
