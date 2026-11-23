import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import LanguageSwitch from '@/components/LanguageSwitch.vue'
import { i18n, setLocale } from '@/i18n'

describe('LanguageSwitch', () => {
  it('switches to English, persists and updates html lang', async () => {
    setLocale('pt')
    const wrapper = mount(LanguageSwitch, { global: { plugins: [i18n] } })
    const en = wrapper.findAll('button').find((b) => b.text() === 'EN')!
    await en.trigger('click')
    expect(localStorage.getItem('boleia-locale')).toBe('en')
    expect(document.documentElement.lang).toBe('en')
    expect(en.attributes('aria-pressed')).toBe('true')
    setLocale('pt')
  })
})
