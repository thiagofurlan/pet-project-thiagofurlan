const math = require('../src/math');

test('adds 1 + 2 to equal 3', () => {
    expect(math.sum(1, 2)).toBe(3);
});

test('sub 3 - 1 to equal 2', () => {
    expect(math.sub(3, 1)).toBe(2);
});

test('mul 2 * 1 to equal 2', () => {
    expect(math.mul(1, 2)).toBe(2);
});

test('div 2 / 2 to equal 1', () => {
    expect(math.div(2, 2)).toBe(1);
});

test('div 2 / 0 to equal Error', () => {
    expect(() => math.div(2, 0)).toThrowError("Division by zero");
});