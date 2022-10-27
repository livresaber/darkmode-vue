import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import DarkMode from '@/components/DarkMode.vue'

describe('DarkMode', () => {
  it('renders content light mode', () => {
    const wrapper = mount(DarkMode)

    expect(wrapper.vm.mode).toBeFalsy()
    expect(JSON.parse(localStorage.getItem('darkmode'))).toBeFalsy()
    expect(wrapper.text()).toContain('LightMode')
    expect(wrapper.find('[aria-label="Icon Light Mode"]').isVisible()).toBeTruthy()
  })
  it('renders content darkmode mode', async () => {
    const wrapper = mount(DarkMode)
    await wrapper.trigger('click')

    expect(wrapper.vm.mode).toBeTruthy()
    expect(JSON.parse(localStorage.getItem('darkmode'))).toBeTruthy()
    expect(wrapper.text()).toContain('DarkMode')
    expect(wrapper.find('[aria-label="Icon Dark Mode"]').isVisible()).toBeTruthy()
  })
})
