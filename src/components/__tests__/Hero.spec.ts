import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { i18n, setLocale } from '@/i18n'
import SiteNav from '@/components/sections/SiteNav.vue'
import HeroSection from '@/components/sections/HeroSection.vue'

const global = { plugins: [i18n] }

describe('hero and nav', () => {
  it('store badges are not links or buttons', () => {
    const wrapper = mount(HeroSection, { global })
    const badges = wrapper.findAll('[data-test="store-badge"]')
    expect(badges).toHaveLength(2)
    for (const b of badges) {
      expect(b.element.tagName).not.toMatch(/^(A|BUTTON)$/)
      expect(b.find('a, button').exists()).toBe(false)
    }
  })

  it('nav links point to section anchors', () => {
    const wrapper = mount(SiteNav, { global })
    const hrefs = wrapper.findAll('a[href^="#"]').map((a) => a.attributes('href'))
    expect(hrefs).toEqual(['#como', '#vantagens', '#seguranca'])
  })

  it('hero shows the PT title by default', () => {
    setLocale('pt')
    const wrapper = mount(HeroSection, { global })
    expect(wrapper.text()).toContain('A sua próxima boleia já vai a caminho.')
  })

  it('hero has no fixed width wider than a phone', () => {
    const wrapper = mount(HeroSection, { global })
    for (const el of wrapper.findAll('*')) {
      const w = (el.element as HTMLElement).style.width
      if (w.endsWith('px')) expect(parseFloat(w)).toBeLessThanOrEqual(360)
    }
    expect(wrapper.find('[data-test="badge-row"]').classes()).toContain('flex-wrap')
  })
})
