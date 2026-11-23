import { afterEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import FadeContent from '@/components/motion/FadeContent.vue'

function mockMatchMedia(reduce: boolean) {
  vi.stubGlobal('matchMedia', (q: string) => ({
    matches: reduce && q.includes('reduce'),
    media: q,
    addEventListener() {},
    removeEventListener() {},
  }))
}

afterEach(() => vi.unstubAllGlobals())

describe('FadeContent', () => {
  it('shows content immediately with reduced motion', async () => {
    mockMatchMedia(true)
    const w = mount(FadeContent, { slots: { default: '<p>hi</p>' } })
    await nextTick()
    const el = w.element as HTMLElement
    expect(el.style.opacity).toBe('1')
    expect(el.style.transition).toBe('')
  })

  it('shows content when IntersectionObserver is missing', async () => {
    mockMatchMedia(false)
    vi.stubGlobal('IntersectionObserver', undefined)
    const w = mount(FadeContent, { slots: { default: '<p>hi</p>' } })
    await nextTick()
    expect((w.element as HTMLElement).style.opacity).toBe('1')
  })

  it('starts hidden then shows when intersecting', async () => {
    mockMatchMedia(false)
    let fire: (entries: { isIntersecting: boolean }[]) => void = () => {}
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        constructor(cb: typeof fire) {
          fire = cb
        }
        observe() {}
        disconnect() {}
      },
    )
    const w = mount(FadeContent, { slots: { default: '<p>hi</p>' } })
    await nextTick()
    expect((w.element as HTMLElement).style.opacity).toBe('0')
    fire([{ isIntersecting: true }])
    await nextTick()
    expect((w.element as HTMLElement).style.opacity).toBe('1')
  })
})
