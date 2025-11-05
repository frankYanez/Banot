"use client"

import { memo } from "react"
import { motion } from "framer-motion"

// Simple animated background beams using gradients and blur
function BackgroundBeamsBase() {
  const beams = Array.from({ length: 6 }, (_, i) => i)

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft radial glow */}
      <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 h-[80vh] w-[80vw] rounded-full bg-gold-base/10 blur-3xl" />
      <div className="absolute -bottom-1/3 right-1/2 translate-x-1/2 h-[70vh] w-[70vw] rounded-full bg-gold-light/10 blur-3xl" />

      {/* Beams */}
      {beams.map((b) => (
        <motion.div
          key={b}
          className="absolute h-[140vh] w-[8px] from-gold-base/0 via-gold-base/30 to-gold-base/0 bg-gradient-to-b blur-[2px]"
          initial={{ y: -200, opacity: 0.6 }}
          animate={{ y: [ -200, 200 ], opacity: [0.6, 0.9, 0.6 ] }}
          transition={{ duration: 8 + b * 1.5, repeat: Infinity, ease: "easeInOut", delay: b * 0.4 }}
          style={{ left: `${10 + b * 15}%`, rotate: (b % 2 ? -8 : 8) as any }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
    </div>
  )
}

export const BackgroundBeams = memo(BackgroundBeamsBase)

export default BackgroundBeams

