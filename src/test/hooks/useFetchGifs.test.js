import { useFetchGifs } from '../../hooks/useFetchGifs'
import {renderHook} from '@testing-library/react-hooks'
describe('Test in hook useFetchGifs', () => {

    test('should return initial state', () => {

        const {result} = renderHook(()=> useFetchGifs('One Punch'))
        const {data,loading} = result.current

        expect(loading).toBeTruthy();
        expect(data).toEqual([]);
    });

    test('should return Array with images and false loading', async() => {

        const {result,waitForNextUpdate} = renderHook(()=> useFetchGifs('One Punch'))
        await waitForNextUpdate()
        const {data,loading} = result.current

        expect(loading).toBeFalsy();
        expect(data.length).toBe(10);
    });
})
