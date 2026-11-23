import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App', () => {
  it('renders the Boleia wordmark', () => {
    const wrapper = mount(App)
    expect(wrapper.find('img[alt="Boleia"]').exists()).toBe(true)
  })
})
