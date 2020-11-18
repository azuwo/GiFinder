const { default: getGifs } = require("../../helpers/getGifs");

describe('Test in getGifs Fech', () => {
    test('should return 10 elements', async() => {
        const gifs = await getGifs('One Punch')
        expect(gifs.length).toBe(10);
    });

    test('should return 0 elements', async() => {
        const gifs = await getGifs('')
        expect(gifs.length).toBe(0);
    });
});