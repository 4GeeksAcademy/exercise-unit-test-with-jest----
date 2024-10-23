const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./currencyConverter');

// Prueba para convertir de Dólares a Yenes
test('Convert 10 USD to JPY', () => {
    const result = fromDollarToYen(10);
    const expected = (10 / 1.07) * 156.5; // Cálculo esperado
    console.log(`Result for 10 USD to JPY: ${result}, Expected: ${expected}`);
    expect(result).toBeCloseTo(expected, 2);  // Precisión de 2 decimales
});

// Prueba para convertir de Euros a Dólares
test('Convert 5 EUR to USD', () => {
    const result = fromEuroToDollar(5);
    const expected = 5 * 1.07; // Cálculo esperado
    console.log(`Result for 5 EUR to USD: ${result}, Expected: ${expected}`);
    expect(result).toBeCloseTo(expected, 2);  // Precisión de 2 decimales
});

// Prueba para convertir de Yenes a Libras Esterlinas
test('Convert 1000 JPY to GBP', () => {
    const result = fromYenToPound(1000);
    const expected = (1000 / 156.5) * 0.87; // Cálculo esperado
    console.log(`Result for 1000 JPY to GBP: ${result}, Expected: ${expected}`);
    expect(result).toBeCloseTo(expected, 2);  // Precisión de 2 decimales
});
