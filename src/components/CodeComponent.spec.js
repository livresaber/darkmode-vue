import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CodeComponent from '@/components/CodeComponent.vue'

describe('CodeComponent', () => {
  it('renders content', () => {
    const wrapper = mount(CodeComponent)
    expect(wrapper.findComponent('.code')).toBeDefined()
  })
})
