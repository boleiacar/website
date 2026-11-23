import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { i18n } from '@/i18n'
import HeroSection from '@/components/sections/HeroSection.vue'

const global = { plugins: [i18n] }

describe('hero picture', () => {
  it('serves a portrait source to phones and landscape to larger screens', () => {
    const w = mount(HeroSection, { global })
    const phone = w.find('picture source[media="(max-width: 639px)"][type="image/webp"]')
    expect(phone.attributes('srcset')).toContain('luanda-640')
    expect(phone.attributes('srcset')).toContain('luanda-1024')
    const large = w
      .findAll('picture source[type="image/webp"]')
      .find((s) => !s.attributes('media'))!
    expect(large.attributes('srcset')).toContain('road-2560')
    expect(large.attributes('sizes')).toBe('100vw')
  })

  it('hero image loads eagerly with intrinsic size and a JPEG fallback', () => {
    const img = mount(HeroSection, { global }).find('picture img')
    expect(img.attributes('fetchpriority')).toBe('high')
    expect(img.attributes('loading')).toBeUndefined()
    expect(img.attributes('width')).toBeTruthy()
    expect(img.attributes('height')).toBeTruthy()
    expect(img.attributes('src')).toMatch(/road-1600.*\.jpg/)
    expect(img.attributes('alt')).toBe('')
  })
})
