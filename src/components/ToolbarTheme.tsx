'use client'

import { Monitor, MoonStar, Sparkles, SunMedium } from 'lucide-react'
import { useId, type ReactNode } from 'react'

import {
  ANIMATIONS_ENABLED,
  type ThemeSetting,
  useUISettings,
} from '@/components/providers/ui-settings-provider'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export type ThemeOption = {
  id: ThemeSetting
  label: string
  description: string
  icon: ReactNode
}

export interface ToolbarThemeProps {
  themeOptions?: ThemeOption[]
  animationsLabel?: string
}

export const toolbarThemeMock: ThemeOption[] = [
  {
    id: 'light',
    label: 'Luz',
    description: 'Interfaces claras y brillantes',
    icon: <SunMedium className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: 'dark',
    label: 'Oscuro',
    description: 'Contraste elevado con foco en el contenido',
    icon: <MoonStar className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: 'system',
    label: 'Sistema',
    description: 'Sincroniza con tu sistema operativo',
    icon: <Monitor className="h-4 w-4" aria-hidden="true" />,
  },
]

export function ToolbarTheme({
  themeOptions = toolbarThemeMock,
  animationsLabel = 'Animaciones vivas',
}: ToolbarThemeProps) {
  const {
    theme,
    setTheme,
    resolvedTheme,
    setAnimationsSwitch,
    animationsActive,
    mounted,
    prefersReducedMotion,
  } = useUISettings()
  const switchId = useId()

  const animationToggleDisabled = !ANIMATIONS_ENABLED || prefersReducedMotion

  return (
    <aside
      aria-label="Preferencias de experiencia"
      className="relative z-20 mx-auto mt-10 w-full max-w-7xl rounded-2xl border border-white/10 bg-black/40 px-4 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.45)] backdrop-blur-xl"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
            Preferencias
          </p>
          <h3 className="mt-2 text-xl font-heading text-white">
            Personaliza el tema y la energía visual
          </h3>
          <p className="mt-1 text-sm text-white/60">
            Estado actual: {mounted ? (resolvedTheme === 'dark' ? 'modo oscuro' : 'modo claro') : 'cargando…'}. Animaciones{' '}
            {animationsActive ? 'activas' : 'en reposo'}.
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:items-center lg:justify-end">
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Selector de tema">
            {themeOptions.map((option) => (
              <Button
                key={option.id}
                type="button"
                variant={theme === option.id ? 'default' : 'outline'}
                onClick={() => setTheme(option.id)}
                className={cn(
                  'h-auto rounded-full border border-white/10 px-4 py-2 text-sm text-white transition',
                  theme === option.id
                    ? 'bg-white/20 text-white shadow-[0_10px_35px_rgba(255,215,0,0.25)]'
                    : 'bg-white/5 hover:bg-white/15',
                )}
                aria-pressed={theme === option.id}
              >
                <span className="flex items-center gap-2">
                  {option.icon}
                  <span className="flex flex-col items-start">
                    <span className="text-sm font-semibold leading-none">{option.label}</span>
                    <span className="text-xs text-white/60">{option.description}</span>
                  </span>
                </span>
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <div className="flex flex-col">
              <span id={`${switchId}-label`} className="text-sm font-medium text-white">
                {animationsLabel}
              </span>
              <span className="text-xs text-white/60">
                Respeta preferencias del sistema.
                {animationToggleDisabled
                  ? prefersReducedMotion
                    ? ' Desactivado por preferencia de movimiento reducido.'
                    : ' Bloqueado por configuración.'
                  : ''}
              </span>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={animationsActive}
              aria-labelledby={`${switchId}-label`}
              onClick={() =>
                !animationToggleDisabled && setAnimationsSwitch((prev) => !prev)
              }
              className={cn(
                'relative inline-flex h-9 w-16 items-center rounded-full border border-white/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-black',
                animationsActive
                  ? 'bg-gradient-to-r from-gold-light via-gold-base to-gold-dark'
                  : 'bg-black/40',
              )}
              disabled={animationToggleDisabled}
            >
              <span
                className={cn(
                  'ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-transform',
                  animationsActive ? 'translate-x-7' : 'translate-x-0',
                )}
              >
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default ToolbarTheme
