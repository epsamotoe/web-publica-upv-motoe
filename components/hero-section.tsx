"use client"

import { HeroCover } from "./hero-cover"
import { TechSpecs } from "./tech-specs"

export function HeroSection() {
  return (
    <div className="flex flex-col w-full bg-[#0a0a0a]">
      <HeroCover />
      <TechSpecs />
    </div>
  )
}
