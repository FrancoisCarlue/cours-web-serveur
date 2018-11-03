const sum = require('./sum');

describe('test sum', () => {
    test('adds 0 + 0 to equal 0', () => {
        return expect(sum(0, 0)).toBe(0)
    });
    test('adds 1 + 2 to equal 3', () => {
        return expect(sum(1, 2)).toBe(3)
    });
})