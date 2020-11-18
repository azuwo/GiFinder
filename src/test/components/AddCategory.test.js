import React from 'react'
import {shallow} from 'enzyme'
import {AddCategory} from "../../components/AddCategory"
import '@testing-library/jest-dom'


describe('test in AddCategory', () => {

    const setCategories = jest.fn()
    let wrapper

    beforeEach(()=>{
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    })

    test('should show component correclty', () => {

        expect(wrapper).toMatchSnapshot()
    })

    test('should change textBox', () => {
        const input = wrapper.find('input')
        const value = 'Hola Mundo'
        input.simulate('change', {target:{value}})
    })

    test('shouldnt change on submit ', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}})

        expect(setCategories).not.toHaveBeenCalled()
    })

    test('should call setCategories and clean textBox', () => {
        //simulate input change
        const input = wrapper.find('input')
        const value = 'Hola Mundo'
        input.simulate('change', {target:{value}})

        //simulate submit
        wrapper.find('form').simulate('submit', {preventDefault(){}})

        //setCategories should have been called
        expect(setCategories).toHaveBeenCalled()
        //expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

        //input value = ''
        expect(input.prop('value')).toBe('')

    });
})