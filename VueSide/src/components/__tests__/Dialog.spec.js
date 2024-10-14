import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Dialog from '../Dialog.vue'

describe('Dialog', () => {
  it('renders properly', () => {
    let wrapper = mount(Dialog, { props: {note: { id: 1, tittle:'First', content:'Message' } }})
    expect(wrapper.find('#title').exists()).toBe(true)
    expect(wrapper.find('#content').exists()).toBe(true)
    let text = wrapper.find('#content')
    expect(wrapper.vm.content === text.value).toBe(true)
    let title = wrapper.find('#title')
    expect(wrapper.vm.title === title.value).toBe(true)
    // text.setValue('Second')
    // expect(wrapper.vm.content).toBe('Second')
  })
})