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
                "relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-md transition-all duration-300",
                !noHover && "hover:border-[#00cc88]/50 hover:shadow-[0_0_40px_rgba(0,204,136,0.1)]",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
