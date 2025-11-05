'use client'

import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

export type ThemeSetting = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

export interface UISettingsContextValue {
  theme: ThemeSetting
  resolvedTheme: ResolvedTheme
  setTheme: Dispatch<SetStateAction<ThemeSetting>>
  animationsSwitch: boolean
  setAnimationsSwitch: Dispatch<SetStateAction<boolean>>
  animationsActive: boolean
  mounted: boolean
  prefersReducedMotion: boolean
}

const UISettingsContext = createContext<UISettingsContextValue | null>(null)

const THEME_STORAGE_KEY = 'ui-theme'
const ANIMATION_STORAGE_KEY = 'ui-animations'
export const ANIMATIONS_ENABLED = true

export function UISettingsProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [theme, setTheme] = useState<ThemeSetting>('dark')
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>('dark')
  const [animationsSwitch, setAnimationsSwitch] = useState<boolean>(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window === 'undefined') return
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeSetting | null
    const storedAnimations = localStorage.getItem(ANIMATION_STORAGE_KEY)
    if (storedTheme) {
      setTheme(storedTheme)
    }
    if (storedAnimations !== null) {
      setAnimationsSwitch(storedAnimations === 'true')
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setSystemTheme(event.matches ? 'dark' : 'light')
    }

    handleChange(mediaQuery)
    const listener = (event: MediaQueryListEvent) => handleChange(event)
    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }, [])

  useEffect(() => {
    if (!mounted || typeof document === 'undefined') return
    const root = document.documentElement
    const resolved = theme === 'system' ? systemTheme : theme
    root.classList.remove('light', 'dark')
    root.classList.add(resolved)
    root.dataset.theme = resolved
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme, systemTheme, mounted])

  useEffect(() => {
    if (!mounted || typeof document === 'undefined') return
    localStorage.setItem(ANIMATION_STORAGE_KEY, String(animationsSwitch))
  }, [animationsSwitch, mounted])

  const value = useMemo<UISettingsContextValue>(() => {
    const animationsActive =
      ANIMATIONS_ENABLED && animationsSwitch && !prefersReducedMotion

    return {
      theme,
      resolvedTheme: theme === 'system' ? systemTheme : theme,
      setTheme,
      animationsSwitch,
      setAnimationsSwitch,
      animationsActive,
      mounted,
      prefersReducedMotion,
    }
  }, [theme, systemTheme, animationsSwitch, mounted, prefersReducedMotion])

  return (
    <UISettingsContext.Provider value={value}>
      <div data-theme={value.resolvedTheme} data-animations={value.animationsActive}>
        {children}
      </div>
    </UISettingsContext.Provider>
  )
}

export function useUISettings() {
  const context = useContext(UISettingsContext)
  if (!context) {
    throw new Error('useUISettings must be used within UISettingsProvider')
  }
  return context
}
