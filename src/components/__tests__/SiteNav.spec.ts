import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { i18n, setLocale } from '@/i18n'
import SiteNav from '@/components/sections/SiteNav.vue'

const global = { plugins: [i18n] }
const menuButton = (w: ReturnType<typeof mount>) => w.find('button[aria-controls]')

describe('mobile menu', () => {
  it('menu button toggles the link panel', async () => {
    setLocale('pt')
    const w = mount(SiteNav, { global, attachTo: document.body })
    const btn = menuButton(w)
    expect(btn.attributes('aria-expanded')).toBe('false')
    expect(btn.attributes('aria-label')).toBe('Menu')
    await btn.trigger('click')
    expect(btn.attributes('aria-expanded')).toBe('true')
    const panel = w.find(`#${btn.attributes('aria-controls')}`)
    expect(panel.isVisible()).toBe(true)
    expect(panel.findAll('a').map((a) => a.attributes('href'))).toEqual([
      '#como',
      '#vantagens',
      '#seguranca',
    ])
    w.unmount()
  })

  it('choosing a link closes the menu', async () => {
    const w = mount(SiteNav, { global, attachTo: document.body })
    await menuButton(w).trigger('click')
    await w.find(`#${menuButton(w).attributes('aria-controls')} a`).trigger('click')
    expect(menuButton(w).attributes('aria-expanded')).toBe('false')
    w.unmount()
  })

  it('Escape closes the menu', async () => {
    const w = mount(SiteNav, { global, attachTo: document.body })
    await menuButton(w).trigger('click')
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await w.vm.$nextTick()
    expect(menuButton(w).attributes('aria-expanded')).toBe('false')
    w.unmount()
  })

  it('panel and button are hidden from md up', async () => {
    const w = mount(SiteNav, { global })
    await menuButton(w).trigger('click')
    expect(menuButton(w).classes()).toContain('md:hidden')
    expect(w.find(`#${menuButton(w).attributes('aria-controls')}`).classes()).toContain('md:hidden')
  })
})
