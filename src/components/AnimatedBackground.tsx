'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import { useUISettings } from '@/components/providers/ui-settings-provider'

export type BackgroundBlob = {
  id: string
  size: string
  color: string
  blur: string
  opacity: number
  initial: { x: number; y: number }
}

export type BackgroundParticle = {
  id: string
  size: number
  opacity: number
  duration: number
}

export const backgroundBlobs: BackgroundBlob[] = [
  {
    id: 'blob-1',
    size: 'clamp(12rem, 25vw, 28rem)',
    color: 'radial-gradient(circle at 30% 30%, rgba(255, 215, 0, 0.35), transparent 70%)',
    blur: '120px',
    opacity: 0.85,
    initial: { x: -20, y: -40 },
  },
  {
    id: 'blob-2',
    size: 'clamp(10rem, 22vw, 24rem)',
    color: 'radial-gradient(circle at 70% 40%, rgba(80, 220, 255, 0.3), transparent 70%)',
    blur: '100px',
    opacity: 0.7,
    initial: { x: 30, y: 10 },
  },
  {
    id: 'blob-3',
    size: 'clamp(14rem, 28vw, 32rem)',
    color: 'radial-gradient(circle at 50% 50%, rgba(180, 105, 255, 0.28), transparent 75%)',
    blur: '140px',
    opacity: 0.8,
    initial: { x: -10, y: 40 },
  },
]

const pseudoRandom = (seed: number, offset = 0) => {
  const x = Math.sin(seed * 12.9898 + offset * 78.233) * 43758.5453
  return x - Math.floor(x)
}

export const backgroundParticles: BackgroundParticle[] = Array.from({ length: 14 }, (_, index) => ({
  id: `particle-${index}`,
  size: 0.8 + pseudoRandom(index + 1) * 2.4,
  opacity: 0.22 + pseudoRandom(index + 1, 2) * 0.25,
  duration: 8 + pseudoRandom(index + 1, 4) * 6,
}))

const NOISE_TEXTURE =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200"><filter id="n"><feTurbulence baseFrequency="0.7" seed="12" type="fractalNoise"/></filter><rect width="1200" height="1200" filter="url(%23n)" opacity="0.18"/></svg>'

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const gradientRef = useRef<HTMLDivElement | null>(null)
  const blobRefs = useRef<HTMLDivElement[]>([])
  const particleRefs = useRef<HTMLDivElement[]>([])
  const { animationsActive } = useUISettings()

  useEffect(() => {
    if (!animationsActive) {
      blobRefs.current.forEach((blob) => {
        if (blob) blob.style.transform = 'translate3d(0, 0, 0)'
      })
      particleRefs.current.forEach((particle) => {
        if (particle) particle.style.transform = 'translate3d(0, 0, 0)'
      })
      if (gradientRef.current) {
        gradientRef.current.style.backgroundPosition = '50% 50%'
      }
      return
    }

    if (!containerRef.current) return

    const pointerHandler = (event: PointerEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5

      blobRefs.current.forEach((blob, index) => {
        if (!blob) return
        gsap.to(blob, {
          duration: 0.6,
          xPercent: x * 12 * (index + 1),
          yPercent: y * 12 * (index + 1),
          overwrite: true,
          ease: 'power2.out',
        })
      })
    }

    const ctx = gsap.context(() => {
      if (gradientRef.current) {
        gsap.to(gradientRef.current, {
          backgroundPosition: '200% 50%',
          duration: 28,
          ease: 'none',
          repeat: -1,
        })
      }

      blobRefs.current.forEach((blob, index) => {
        if (!blob) return
        gsap.fromTo(
          blob,
          {
            xPercent: backgroundBlobs[index]?.initial.x ?? 0,
            yPercent: backgroundBlobs[index]?.initial.y ?? 0,
          },
          {
            xPercent: `+=${10 + index * 4}`,
            yPercent: `-=${8 + index * 5}`,
            duration: 18 + index * 4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          },
        )
      })

      particleRefs.current.forEach((particle, index) => {
        if (!particle) return
        const config = backgroundParticles[index]
        gsap.fromTo(
          particle,
          {
            yPercent: -20,
            xPercent: gsap.utils.random(-12, 12),
          },
          {
            yPercent: 120,
            duration: config?.duration ?? 10,
            repeat: -1,
            ease: 'sine.inOut',
            delay: gsap.utils.random(0, 6),
          },
        )
      })
    }, containerRef)

    window.addEventListener('pointermove', pointerHandler, { passive: true })

    return () => {
      ctx.revert()
      window.removeEventListener('pointermove', pointerHandler)
    }
  }, [animationsActive])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      data-animate={animationsActive}
    >
      <div
        ref={gradientRef}
        className="absolute inset-0 scale-110 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.18),rgba(0,0,0,0.05)_55%),radial-gradient(circle_at_bottom,rgba(80,220,255,0.12),rgba(0,0,0,0.2)_60%)]"
        style={{ backgroundSize: '160% 160%, 120% 120%' }}
      />
      <div
        className="absolute inset-0 mix-blend-soft-light"
        style={{ backgroundImage: `url(${NOISE_TEXTURE})` }}
      />
      <div className="absolute inset-0">
        {backgroundBlobs.map((blob, index) => (
          <div
            key={blob.id}
            ref={(node) => {
              if (node) blobRefs.current[index] = node
            }}
            className="absolute will-change-transform"
            style={{
              width: blob.size,
              height: blob.size,
              left: '50%',
              top: '50%',
              marginLeft: 'calc(-1 * clamp(6rem, 12vw, 14rem))',
              marginTop: 'calc(-1 * clamp(6rem, 12vw, 14rem))',
              filter: `blur(${blob.blur})`,
              opacity: blob.opacity,
              backgroundImage: blob.color,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0">
        {backgroundParticles.map((particle, index) => (
          <div
            key={particle.id}
            ref={(node) => {
              if (node) particleRefs.current[index] = node
            }}
            className="absolute rounded-full will-change-transform"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${pseudoRandom(index + 1, 6) * 100}%`,
              top: `${pseudoRandom(index + 1, 8) * 100}%`,
              opacity: particle.opacity,
              background:
                'radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,215,0,0.4) 40%, transparent 75%)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default AnimatedBackground
