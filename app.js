function fromDollarToYen(dollars) {
    return (dollars / 1.07) * 156.5;
}

function fromEuroToDollar(euros) {
    return euros * 1.07;
}

function fromYenToPound(yen) {
    return (yen / 156.5) * 0.87;
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };