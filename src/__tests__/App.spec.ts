import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import { i18n } from '@/i18n'

describe('App', () => {
  it('renders the Boleia wordmark', () => {
    const wrapper = mount(App, { global: { plugins: [i18n] } })
    expect(wrapper.find('img[alt="Boleia"]').exists()).toBe(true)
  })
})
