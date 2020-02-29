import {mount, shallowMount} from '@vue/test-utils'
import Counter from '../../src/components/Counter'

describe('Counter', () => {
    test('setup correctly', () => {
        const wrapper = mount(Counter);
        expect(true).toBe(true)
    })
    test('increment the counter value when button is clicked', () => {
        const wrapper = mount(Counter);
        wrapper.trigger('click', {
            counter: 1
        });
        wrapper.trigger('click', {
            counter: 2
        });
    })
})
