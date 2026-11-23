import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { i18n, setLocale } from '@/i18n'
import PhoneFrame from '@/components/phone/PhoneFrame.vue'
import PassengerHomeScreen from '@/components/phone/PassengerHomeScreen.vue'
import DriverFareScreen from '@/components/phone/DriverFareScreen.vue'

const global = { plugins: [i18n] }

describe('phone mockups', () => {
  it('passenger screen shows sample data only', () => {
    const text = mount(PassengerHomeScreen, { global }).text()
    expect(text).toContain('Ana Manuel')
    expect(text).toContain('Talatona')
    expect(text).not.toMatch(/@|\.com\b/)
  })

  it('phone frame never exceeds its container', () => {
    const wrapper = mount(PhoneFrame, { props: { label: 'x' }, slots: { default: '<p>s</p>' } })
    expect(wrapper.classes()).toContain('max-w-full')
    expect(wrapper.classes()).toContain('w-[340px]')
  })

  it('mockup controls are not focusable', () => {
    for (const screen of [PassengerHomeScreen, DriverFareScreen]) {
      const wrapper = mount(screen, { global })
      expect(wrapper.find('button, a, input, select, textarea').exists()).toBe(false)
    }
  })

  it('driver screen shows the recommended fare', () => {
    setLocale('pt')
    const text = mount(DriverFareScreen, { global }).text()
    expect(text).toContain('700')
    expect(text).toContain('Preço recomendado')
  })
})
