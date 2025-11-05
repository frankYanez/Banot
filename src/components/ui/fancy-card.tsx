"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type FancyCardProps = React.HTMLAttributes<HTMLDivElement>

export function FancyCard({ className, children, ...props }: FancyCardProps) {
  return (
    <div className={cn("relative group", className)} {...props}>
      {/* gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-gold-light/50 via-gold-base/30 to-gold-light/50 opacity-60 group-hover:opacity-100 blur-[2px] transition-opacity" />
      <Card className="relative rounded-2xl border-dark-border/50 bg-dark-card/80 backdrop-blur-xl overflow-hidden">
        {/* shine */}
        <div className="pointer-events-none absolute -top-1/2 left-0 h-full w-[120%] -rotate-12 bg-gradient-to-b from-white/10 via-white/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        {children}
      </Card>
    </div>
  )
}

export default FancyCard

