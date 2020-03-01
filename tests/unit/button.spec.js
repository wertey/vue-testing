import {mount} from '@vue/test-utils'
import ButtonTemplate from "../../src/components/ButtonTemplate";

describe('ButtonTemplate', () => {
    test('check button html tag', () => {
        const wrapper = mount(ButtonTemplate);
        const btn = wrapper.find('button');
        expect(btn.is('button')).toBe(true);
    })
    test('is button has main class', () => {
        const wrapper = mount(ButtonTemplate);
        const btn = wrapper.find('button');
        expect(btn.classes('btn')).toBe(true);
    })
    test('check button of text', () => {
        const wrapper = mount(ButtonTemplate);
        const btn = wrapper.find('button');
        expect(btn.text()).toBe('Submited')
    })
})
