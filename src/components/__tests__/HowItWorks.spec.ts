import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { i18n, setLocale } from '@/i18n'
import HowItWorks from '@/components/sections/HowItWorks.vue'
import PassengerHomeScreen from '@/components/phone/PassengerHomeScreen.vue'
import DriverFareScreen from '@/components/phone/DriverFareScreen.vue'

const global = { plugins: [i18n] }
const tab = (w: ReturnType<typeof mount>, label: string) =>
  w.findAll('[role="tab"]').find((t) => t.text() === label)!

describe('HowItWorks', () => {
  it('shows passenger steps and the passenger phone by default', () => {
    setLocale('pt')
    const w = mount(HowItWorks, { global })
    expect(w.text()).toContain('Pesquise')
    expect(w.findComponent(PassengerHomeScreen).exists()).toBe(true)
    expect(w.findComponent(DriverFareScreen).exists()).toBe(false)
  })

  it('switches to driver steps and the driver phone on click', async () => {
    setLocale('pt')
    const w = mount(HowItWorks, { global, attachTo: document.body })
    const driver = tab(w, 'Sou motorista')
    await driver.trigger('mousedown', { button: 0 })
    await driver.trigger('click')
    await nextTick()
    expect(w.text()).toContain('Seja verificado')
    expect(w.findComponent(DriverFareScreen).exists()).toBe(true)
    w.unmount()
  })

  it('tabs are keyboard operable', async () => {
    // jsdom has no layout, so reka-ui's arrow-key roving can't move focus here; this pins the
    // two halves we own: a roving tab order, and activation when a tab receives keyboard focus.
    // Arrow keys themselves are checked in a real browser (plan Task 7).
    setLocale('pt')
    const w = mount(HowItWorks, { global, attachTo: document.body })
    await nextTick()
    // the tablist is the single Tab stop; reka-ui forwards focus to the active tab
    expect(w.find('[role="tablist"]').attributes('tabindex')).toBe('0')
    const driver = tab(w, 'Sou motorista')
    ;(driver.element as HTMLElement).focus()
    await driver.trigger('focus')
    await nextTick()
    expect(driver.attributes('data-state')).toBe('active')
    expect(w.text()).toContain('Seja verificado')
    w.unmount()
  })

  it('section has the #como anchor', () => {
    expect(mount(HowItWorks, { global }).find('section#como').exists()).toBe(true)
  })
})
