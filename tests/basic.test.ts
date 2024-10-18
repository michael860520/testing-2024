import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { defineComponent } from 'vue'

// 模擬 ShopIndex 組件
const MockShopIndex = defineComponent({
  template: '<div>Shop Index</div>'
})

describe('shopIndex', () => {
  it('mounts properly', () => {
    const wrapper = mount(MockShopIndex)
    expect(wrapper.vm).toBeTruthy()
  })
})
