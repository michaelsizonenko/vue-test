import { mount } from '@vue/test-utils'
import Counter from '../counter'

describe('Компонент Counter', () => {
  const wrapper = mount(Counter)

  it('отображает корректную разметку', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

    it('имеет кнопку', () => {
    expect(wrapper.find('button'))
  })

})
