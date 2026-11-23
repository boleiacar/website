import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { i18n, setLocale } from '@/i18n'
import BenefitsSection from '@/components/sections/BenefitsSection.vue'
import SafetySection from '@/components/sections/SafetySection.vue'
import RoutesSection from '@/components/sections/RoutesSection.vue'
import ClosingBanner from '@/components/sections/ClosingBanner.vue'
import SiteFooter from '@/components/sections/SiteFooter.vue'

const global = { plugins: [i18n] }

describe('lower sections', () => {
  it('renders 9 benefit cards', () => {
    const w = mount(BenefitsSection, { global })
    expect(w.find('section#vantagens').exists()).toBe(true)
    expect(w.findAll('[data-test="benefit"]')).toHaveLength(9)
  })

  it('safety lists the 4 documents', () => {
    setLocale('pt')
    const w = mount(SafetySection, { global })
    expect(w.find('section#seguranca').exists()).toBe(true)
    const docs = w.findAll('[data-test="doc"]').map((d) => d.text())
    expect(docs).toEqual([
      'BI',
      'Carta de condução',
      'Selfie em tempo real',
      'Documentos do veículo',
    ])
    expect(w.find('img').attributes('alt')).toBe(
      'Motorista da Boleia a receber passageiros à porta de um hotel',
    )
  })

  it('routes show 4 cards with city/intercity labels', () => {
    setLocale('pt')
    const cards = mount(RoutesSection, { global }).findAll('[data-test="route"]')
    expect(cards).toHaveLength(4)
    expect(cards[0].text()).toContain('Cidade')
    expect(cards[0].text()).toContain('Talatona')
    expect(cards[3].text()).toContain('Interurbana')
    expect(cards[3].text()).toContain('Lobito')
  })

  it('closing banner uses the dark wordmark on yellow', () => {
    const w = mount(ClosingBanner, { global })
    expect(w.find('img[alt="Boleia"]').attributes('src')).toContain('boleia-wordmark-dark')
  })

  it('footer has no social links until URLs exist', () => {
    const w = mount(SiteFooter, { global })
    expect(w.find('a[href*="instagram"], a[href*="facebook"], a[href*="linkedin"]').exists()).toBe(
      false,
    )
    expect(w.text()).not.toContain('[Instagram]')
  })

  it('footer omits Feito em Angola', () => {
    expect(mount(SiteFooter, { global }).text()).not.toMatch(/feito em angola/i)
  })
})
