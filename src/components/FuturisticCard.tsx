'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import Link from 'next/link'

import { useUISettings } from '@/components/providers/ui-settings-provider'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

export type FuturisticCardBadge = {
  id: string
  label: string
}

export type FuturisticCardCTA = {
  label: string
  href: string
  ariaLabel?: string
}

export type FuturisticCardProps = {
  title: string
  description: string
  badges?: FuturisticCardBadge[]
  cta?: FuturisticCardCTA
  icon?: ReactNode
  className?: string
  headerSlot?: ReactNode
  mediaSlot?: ReactNode
  contentSlot?: ReactNode
  footerSlot?: ReactNode
}

export const futuristicCardMock: FuturisticCardProps = {
  title: 'Autonomous Ops Assistant',
  description:
    'Orquestamos workflows inteligentes con IA que aprenden, predicen y automatizan decisiones críticas en tiempo real.',
  badges: [
    { id: 'badge-1', label: 'IA Adaptativa' },
    { id: 'badge-2', label: 'Tiempo Real' },
  ],
  cta: {
    label: 'Explorar demo',
    href: '#contacto',
    ariaLabel: 'Explorar demo de Autonomous Ops Assistant',
  },
}

export function FuturisticCard({
  title,
  description,
  badges = [],
  cta,
  icon,
  className,
  headerSlot,
  mediaSlot,
  contentSlot,
  footerSlot,
}: FuturisticCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const glowRef = useRef<HTMLDivElement | null>(null)
  const { animationsActive } = useUISettings()

  useEffect(() => {
    const card = cardRef.current
    const glow = glowRef.current
    if (!card) return

    const resetCard = (instant = false) => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transformPerspective: 1000,
        ease: 'power2.out',
        duration: instant ? 0 : 0.6,
      })
      if (glow) {
        gsap.to(glow, {
          opacity: 0.35,
          duration: instant ? 0 : 0.6,
          ease: 'power2.out',
        })
      }
    }

    if (!animationsActive) {
      resetCard(true)
      return
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (!card) return
      const rect = card.getBoundingClientRect()
      const offsetX = event.clientX - rect.left
      const offsetY = event.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((offsetY - centerY) / centerY) * -8
      const rotateY = ((offsetX - centerX) / centerX) * 10

      gsap.to(card, {
        rotateX,
        rotateY,
        scale: 1.015,
        transformPerspective: 1000,
        ease: 'power2.out',
        duration: 0.4,
      })

      if (glow) {
        const intensity = Math.max(Math.abs(rotateX), Math.abs(rotateY)) / 10
        gsap.to(glow, {
          opacity: 0.35 + intensity * 0.4,
          xPercent: ((offsetX - centerX) / centerX) * 12,
          yPercent: ((offsetY - centerY) / centerY) * 12,
          duration: 0.4,
          ease: 'power2.out',
        })
      }
    }

    const handlePointerLeave = () => {
      resetCard()
    }

    const handleFocus = () => {
      gsap.to(card, { scale: 1.01, duration: 0.3, ease: 'power2.out' })
      if (glow) {
        gsap.to(glow, { opacity: 0.6, duration: 0.3, ease: 'power2.out' })
      }
    }

    const handleBlur = () => {
      resetCard()
    }

    card.addEventListener('pointermove', handlePointerMove)
    card.addEventListener('pointerleave', handlePointerLeave)
    card.addEventListener('focus', handleFocus)
    card.addEventListener('blur', handleBlur)

    return () => {
      card.removeEventListener('pointermove', handlePointerMove)
      card.removeEventListener('pointerleave', handlePointerLeave)
      card.removeEventListener('focus', handleFocus)
      card.removeEventListener('blur', handleBlur)
    }
  }, [animationsActive])

  return (
    <Card
      ref={cardRef}
      className={cn(
        'relative isolate flex h-full flex-col overflow-hidden border border-white/10 bg-white/5 p-6 shadow-[0_12px_60px_rgba(15,23,42,0.45)] backdrop-blur-[18px] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light/60',
        'supports-[backdrop-filter]:backdrop-saturate-150 dark:bg-black/40 dark:border-white/5',
        className,
      )}
      role="region"
      aria-label={title}
      tabIndex={0}
      data-animate={animationsActive}
    >
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.25),transparent_65%)] opacity-35 blur-3xl transition-opacity"
      />
      <div className="pointer-events-none absolute inset-px rounded-[calc(theme(borderRadius.lg))] border border-white/10 bg-gradient-to-br from-white/10 via-white/2 to-white/5 dark:from-white/5 dark:via-white/1 dark:to-white/10" />
      <CardHeader className="relative z-10 gap-3 p-0">
        {headerSlot}
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-lg font-heading text-white">
              <span className="bg-gradient-to-r from-gold-light via-gold-base to-gold-dark bg-clip-text text-transparent">
                {title}
              </span>
            </CardTitle>
            <CardDescription className="mt-2 max-w-prose text-sm text-white/70">
              {description}
            </CardDescription>
          </div>
          {icon && (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-gold-light shadow-inner">
              {icon}
            </div>
          )}
        </div>
        {mediaSlot && <div className="mt-3">{mediaSlot}</div>}
      </CardHeader>
      <CardContent className="relative z-10 mt-4 flex-1 space-y-4 p-0 text-sm text-white/80">
        {contentSlot}
        {badges.length > 0 && (
          <ul className="flex flex-wrap gap-2" aria-label="Etiquetas destacadas">
            {badges.map((badge) => (
              <li key={badge.id}>
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/80 shadow-sm">
                  {badge.label}
                </span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter className="relative z-10 mt-6 flex flex-col gap-4 p-0">
        {footerSlot}
        {cta && (
          <Button
            asChild
            className="group inline-flex items-center justify-start gap-2 self-start rounded-full border border-gold-light/60 bg-gold-light/90 px-5 py-2 text-sm font-semibold text-gray-900 shadow-[0_10px_40px_rgba(255,215,0,0.35)] transition-transform hover:translate-x-0.5 focus-visible:ring-gold-light"
          >
            <Link href={cta.href} aria-label={cta.ariaLabel ?? cta.label}>
              <span>{cta.label}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

export default FuturisticCard
