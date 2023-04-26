import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App', () => {
  it('renders content', () => {
    const wrapper = mount(App)
    expect(wrapper.findComponent('[alt="Vue logo"')).toBeDefined()
    expect(wrapper.findComponent('.btn-mode')).toBeDefined()
  })
})
