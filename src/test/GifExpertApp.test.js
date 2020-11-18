import React from 'react'
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import GifExpertApp from '../GifExpertApp'

describe('Test in GifExpertApp', () => {
    test('should return component', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot()
    })

    test('should show category list', () => {
        const categories = ['One Punch','Dragon Ball']
        const wrapper = shallow(<GifExpertApp defaultCategories = {categories}/>)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
})