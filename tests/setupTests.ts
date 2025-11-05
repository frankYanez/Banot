import '@testing-library/jest-dom/vitest'

class MatchMediaMock implements MediaQueryList {
  readonly media: string
  matches: boolean
  onchange: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null = null
  addEventListener = (_: 'change', listener: (event: MediaQueryListEvent) => void) => {
    this.listeners.add(listener)
  }
  removeEventListener = (_: 'change', listener: (event: MediaQueryListEvent) => void) => {
    this.listeners.delete(listener)
  }
  addListener = (listener: (event: MediaQueryListEvent) => void) => {
    this.listeners.add(listener)
  }
  removeListener = (listener: (event: MediaQueryListEvent) => void) => {
    this.listeners.delete(listener)
  }
  dispatchEvent: (event: Event) => boolean = () => true

  private listeners = new Set<(event: MediaQueryListEvent) => void>()

  constructor(query: string, matches = false) {
    this.media = query
    this.matches = matches
  }

  trigger(matches: boolean) {
    this.matches = matches
    const event = { matches, media: this.media } as MediaQueryListEvent
    this.listeners.forEach((listener) => listener(event))
    this.onchange?.call(this, event)
  }
}

if (typeof window !== 'undefined' && !('matchMedia' in window)) {
  // @ts-expect-error jsdom augmentation
  window.matchMedia = (query: string) => new MatchMediaMock(query)
}

if (typeof window !== 'undefined' && !('ResizeObserver' in window)) {
  class ResizeObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  // @ts-expect-error jsdom augmentation
  window.ResizeObserver = ResizeObserverMock
}
