import { mount } from '@vue/test-utils'

import UsingForm from '../UsingForm.vue'

describe('UsingForm.vue', () => {
  const wrapper = mount(UsingForm)

  it('Should render component', () => {
expect(wrapper.exists()).toBeTruthy()
  })
})