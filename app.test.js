const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app');

test('Convert 10 USD to JPY', () => {
    const result = fromDollarToYen(10);
    const expected = (10 / 1.07) * 156.5;
    console.log(`Result for 10 USD to JPY: ${result}, Expected: ${expected}`);
    expect(result).toBeCloseTo(expected, 2);
});

test('Convert 5 EUR to USD', () => {
    const result = fromEuroToDollar(5);
    const expected = 5 * 1.07;
    console.log(`Result for 5 EUR to USD: ${result}, Expected: ${expected}`);
    expect(result).toBeCloseTo(expected, 2);
});

test('Convert 1000 JPY to GBP', () => {
    const result = fromYenToPound(1000);
    const expected = (1000 / 156.5) * 0.87;
    console.log(`Result for 1000 JPY to GBP: ${result}, Expected: ${expected}`);
    expect(result).toBeCloseTo(expected, 2);
});