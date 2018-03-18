const add = (a, b) => a + b;
const greet = (name = 'Anonymous') => (`Hello ${name}`);

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should greet person', () => {
    const result = greet('Andrew');
    expect(result).toBe('Hello Andrew');
});

test('should greet person with no name', () => {
    const result = greet();
    expect(result).toBe('Hello Anonymous');
});