import {mount, shallowMount} from '@vue/test-utils'
import Counter from '../../src/components/Counter'

describe('Counter', () => {
    const wrapper = mount(Counter);
    afterEach(() => {
        wrapper.destroy()
    })
    test('setup correctly', () => {
        expect(true).toBe(true)
    })
    test('increment the counter value when button is clicked', () => {
        wrapper.trigger('click', {
            counter: 1
        });
        wrapper.trigger('click', {
            counter: 2
        });
    })
    test('renders the stars', () => {
        const starts = wrapper.findAll('.stars');
        expect(starts.length).toBe(5)
    })
    test('renders has the active starts', () => {
        const active = wrapper.findAll('.stars.active');
        expect(active.length).toBe(2)
    })
    test('rnders a summary', () => {
        const summary = wrapper.find('.summary');
        expect(summary.text()).toBe('2 of 5')
    })
})
