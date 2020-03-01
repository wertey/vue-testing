import {mount} from '@vue/test-utils'
import TitleApp from "../../src/components/TitleApp";

describe('TitleApp', () => {
    test('check html h1', () => {
        const wrapper = mount(TitleApp);
        const titleText = wrapper.find('h1')
        expect(titleText.is('h1')).toBe(true)
    })
    test('check text of title', () => {
        const wrapper = mount(TitleApp);
        const titleText2 = wrapper.find('h1')
        expect(titleText2.text()).toBe('Hello wer')
    })
})
