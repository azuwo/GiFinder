import { shallow } from 'enzyme';
import React from 'react'
import GifGridItem from '../../components/GifGridItem';

describe('Test in GifGridItem', () => {

    const title = 'Hola'
    const url= 'https://someurl.com'
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)

    test('should show component correctly', () => {

        expect(wrapper).toMatchSnapshot()
    })

/*     test('should have <p> with a title', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title);
    }); */

    test('should contains an image and alt by props', () => {
        const {src,alt} = wrapper.find('img').props()
        expect(src).toBe(url)
        expect(alt).toBe(title)

    });

    test('should contain class', () => {
        const {className} = wrapper.find('div').props()
        expect(className.includes('card')).toBe(true)
    });
})
