import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { i18n } from '@/i18n'
import TrustStrip from '@/components/sections/TrustStrip.vue'
import HowItWorks from '@/components/sections/HowItWorks.vue'
import BenefitsSection from '@/components/sections/BenefitsSection.vue'
import SafetySection from '@/components/sections/SafetySection.vue'
import RoutesSection from '@/components/sections/RoutesSection.vue'
import ClosingBanner from '@/components/sections/ClosingBanner.vue'
import SiteFooter from '@/components/sections/SiteFooter.vue'

const global = { plugins: [i18n] }
const m = (c: Parameters<typeof mount>[0]) => mount(c, { global })

describe('responsive layout contract', () => {
  it('trust strip is 2 columns, 4 on desktop', () => {
    expect(m(TrustStrip).find('ul').classes()).toEqual(
      expect.arrayContaining(['grid-cols-2', 'lg:grid-cols-4']),
    )
  })

  it('how it works puts the phone beside the steps from tablet up', () => {
    expect(m(HowItWorks).find('section > div').classes()).toContain(
      'md:grid-cols-[minmax(0,1fr)_300px]',
    )
  })

  it('benefits are 1/2/3 columns and the last card fills the tablet row', () => {
    const w = m(BenefitsSection)
    expect(w.find('ul').classes()).toEqual(
      expect.arrayContaining(['sm:grid-cols-2', 'lg:grid-cols-3']),
    )
    const cards = w.findAll('[data-test="benefit"]')
    expect(cards[8].classes()).toEqual(expect.arrayContaining(['sm:col-span-2', 'lg:col-span-1']))
  })

  it('safety stacks until desktop', () => {
    expect(m(SafetySection).find('[data-test="safety-card"]').classes()).toContain('lg:flex-row')
  })

  it('routes are 1/2/4 columns', () => {
    expect(m(RoutesSection).find('ul').classes()).toEqual(
      expect.arrayContaining(['sm:grid-cols-2', 'lg:grid-cols-4']),
    )
  })

  it('every section uses the shared container', () => {
    for (const c of [
      TrustStrip,
      HowItWorks,
      BenefitsSection,
      SafetySection,
      RoutesSection,
      ClosingBanner,
      SiteFooter,
    ]) {
      expect(m(c).find('.container-page').exists(), c.__name).toBe(true)
    }
  })
})
