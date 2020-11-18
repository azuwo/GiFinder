import { shallow } from 'enzyme';
import React from 'react'
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Test in GifGrid', () => {
    const category = 'Goku'

    test('should show component', () => {

        useFetchGifs.mockReturnValue({
            data:[],
            loading: false
        })
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot()
    });

    test('should show items when images from useFechGifs are loaded', () => {
        const gifs = [{
            id:'ABC',
            url:'https://localhost/cualquiercosa/cosa.jpg',
            title:'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: false
        })
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
});