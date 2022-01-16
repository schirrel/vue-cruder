import { mount } from '@vue/test-utils'

import UsingList from '../UsingList.vue'

describe('UsingList.vue', () => {
  const wrapper = mount(UsingList)

  it('Should render component', () => {
expect(wrapper.exists()).toBeTruthy()
  })
})