const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app');

console.log('10 USD to JPY:', fromDollarToYen(10));
console.log('5 EUR to USD:', fromEuroToDollar(5));
console.log('1000 JPY to GBP:', fromYenToPound(1000));