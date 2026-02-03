import React from "react"
import { cn } from "@/lib/utils"

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    className?: string
    noHover?: boolean
}

export function BentoCard({ children, className, noHover = false, ...props }: BentoCardProps) {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-xl transition-all duration-500",
                !noHover && "hover:border-[#00cc88]/60 hover:shadow-[0_0_60px_rgba(0,204,136,0.15)] group",
                className
            )}
            {...props}
        >
            {children}
            {/* Inner Glow Gradient on Hover */}
            {!noHover && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#00cc88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            )}
        </div>
    );
}
