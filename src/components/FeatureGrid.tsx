'use client'

import { type ReactNode } from 'react'
import { ShieldCheck, Sparkles, Workflow } from 'lucide-react'

import FuturisticCard, {
  type FuturisticCardProps,
  futuristicCardMock,
} from '@/components/FuturisticCard'

export type FeatureGridItem = FuturisticCardProps & {
  id: string
}

export interface FeatureGridProps {
  items?: FeatureGridItem[]
  heading?: ReactNode
  description?: ReactNode
}

export const featureGridMock: FeatureGridItem[] = [
  {
    id: 'feature-ai-orchestration',
    ...futuristicCardMock,
  },
  {
    id: 'feature-synthetic-ux',
    title: 'Synthetic Experience Layer',
    description:
      'Interfaces que se reconfiguran según el contexto del usuario, con voice UI, hápticos y adaptabilidad cognitiva.',
    badges: [
      { id: 'badge-3', label: 'UX Generativa' },
      { id: 'badge-4', label: 'On-Device AI' },
    ],
    cta: {
      label: 'Ver experiencia',
      href: '#portfolio',
      ariaLabel: 'Ver experiencia de Synthetic Experience Layer',
    },
    icon: <Sparkles className="h-6 w-6" aria-hidden="true" />,
  },
  {
    id: 'feature-trust',
    title: 'Zero-Trust Automation',
    description:
      'Auditoría continua, logs verificables y compliance inteligente para ecosistemas regulados y misiones críticas.',
    badges: [
      { id: 'badge-5', label: 'Audit Ready' },
      { id: 'badge-6', label: 'Compliance AI' },
    ],
    cta: {
      label: 'Evaluar riesgos',
      href: '#about',
      ariaLabel: 'Evaluar riesgos con Zero-Trust Automation',
    },
    icon: <ShieldCheck className="h-6 w-6" aria-hidden="true" />,
  },
  {
    id: 'feature-operating',
    title: 'Neural Operating Mesh',
    description:
      'Unificamos datos, procesos y agentes autónomos en una malla neural con latencia sub-segundo.',
    badges: [
      { id: 'badge-7', label: 'Latency <1s' },
      { id: 'badge-8', label: 'Edge AI' },
    ],
    cta: {
      label: 'Activar malla',
      href: '#servicios',
      ariaLabel: 'Activar Neural Operating Mesh',
    },
    icon: <Workflow className="h-6 w-6" aria-hidden="true" />,
  },
]

export function FeatureGrid({
  items = featureGridMock,
  heading,
  description,
}: FeatureGridProps) {
  return (
    <section
      aria-labelledby="feature-grid-heading"
      className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        {heading ?? (
          <h2
            id="feature-grid-heading"
            className="text-balance text-3xl font-heading tracking-tight text-white sm:text-4xl"
          >
            Arquitecturas moduladas para experiencias autónomas
          </h2>
        )}
        {description ?? (
          <p className="mt-4 text-balance text-base text-white/70">
            Diseñamos plataformas listas para producción que conectan agentes, datos y experiencias
            totalmente personalizadas. Edite este contenido en <code>featureGridMock</code>.
          </p>
        )}
      </div>
      <div
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        role="list"
      >
        {items.map((item) => (
          <div key={item.id} role="listitem" className="h-full">
            <FuturisticCard {...item} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureGrid
