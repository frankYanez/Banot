import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi, beforeEach } from 'vitest'
import type { ReactElement } from 'react'

vi.mock('gsap', () => {
  const gsap = {
    to: vi.fn(),
    fromTo: vi.fn(),
    utils: { random: vi.fn(() => 0) },
    context: (callback: () => void) => {
      callback()
      return { revert: vi.fn() }
    },
  }
  return { gsap }
})

import AnimatedBackground from '@/components/AnimatedBackground'
import FeatureGrid from '@/components/FeatureGrid'
import FuturisticCard, { futuristicCardMock } from '@/components/FuturisticCard'
import ToolbarTheme from '@/components/ToolbarTheme'
import { UISettingsProvider } from '@/components/providers/ui-settings-provider'

const renderWithProvider = (ui: ReactElement) =>
  render(<UISettingsProvider>{ui}</UISettingsProvider>)

const createMediaQueryList = (matches: boolean): MediaQueryList => ({
  matches,
  media: '',
  onchange: null,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  addListener: vi.fn(),
  removeListener: vi.fn(),
  dispatchEvent: vi.fn(() => true),
} as unknown as MediaQueryList)

beforeEach(() => {
  document.documentElement.className = ''
  document.documentElement.removeAttribute('data-theme')
  document.documentElement.removeAttribute('data-animations')
  localStorage.clear()
})

describe('UI enhanced components', () => {
  it('respects prefers-reduced-motion by disabling AnimatedBackground animations', () => {
    const matchMediaSpy = vi
      .spyOn(window, 'matchMedia')
      .mockImplementation((query: string) => {
        if (query.includes('prefers-reduced-motion')) {
          return createMediaQueryList(true)
        }
        if (query.includes('prefers-color-scheme: dark')) {
          return createMediaQueryList(true)
        }
        return createMediaQueryList(false)
      })

    const { container } = renderWithProvider(<AnimatedBackground />)
    const background = container.firstChild as HTMLElement
    expect(background.dataset.animate).toBe('false')
    matchMediaSpy.mockRestore()
  })

  it('renders FeatureGrid with responsive classes', () => {
    const { container } = renderWithProvider(<FeatureGrid />)
    const grid = container.querySelector('[role="list"]')
    expect(grid).toHaveClass('grid-cols-1')
    expect(grid).toHaveClass('sm:grid-cols-2')
    expect(grid).toHaveClass('lg:grid-cols-3')
    expect(grid).toHaveClass('xl:grid-cols-4')
  })

  it('allows keyboard focus on FuturisticCard and shows badges', async () => {
    const user = userEvent.setup()
    renderWithProvider(<FuturisticCard {...futuristicCardMock} />)
    const region = screen.getByRole('region', {
      name: futuristicCardMock.title,
    })
    expect(region).toHaveAttribute('tabindex', '0')
    await user.tab()
    expect(region).toHaveFocus()
    futuristicCardMock.badges?.forEach((badge) => {
      expect(screen.getByText(badge.label)).toBeInTheDocument()
    })
  })

  it('toggles theme and animation switch from ToolbarTheme', async () => {
    const user = userEvent.setup()
    renderWithProvider(<ToolbarTheme />)

    const darkButton = screen.getByRole('button', { name: /oscuro/i })
    await user.click(darkButton)
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    const switchControl = screen.getByRole('switch', { name: /animaciones/i })
    expect(switchControl).toHaveAttribute('aria-checked', 'true')
    await user.click(switchControl)
    expect(switchControl).toHaveAttribute('aria-checked', 'false')
  })
})
