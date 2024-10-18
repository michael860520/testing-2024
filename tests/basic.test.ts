import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ShopIndex from '../pages/shop/index.vue'

describe('shopIndex', () => {
  it('mounts properly', () => {
    const wrapper = mount(ShopIndex)
    expect(wrapper.vm).toBeTruthy()
  })
})
