const pricing = require('../priceCalculator.js');

test('Two unique products charged at correct discounted rate', () => {
    var expectedTotal = 2 * 299 * (1-.05);
    expect(pricing.computeTotalPrice(['A','B'])).toBe(expectedTotal);
});

test('Three unique products charged at correct discounted rate', () => {
    var expectedTotal = 3 * 299 * (1-.10);
    expect(pricing.computeTotalPrice(['A','B','C'])).toBe(expectedTotal);
});

test('Four unique products charged at correct discounted rate', () => {
    var expectedTotal = 4 * 299 * (1-.20);
    expect(pricing.computeTotalPrice(['A','B','C','D'])).toBe(expectedTotal);
});

test('Five unique products charged at correct discount rate', () => {
    var expectedTotal = 5 * 299 * (1-.25);
    expect(pricing.computeTotalPrice(['A','B','C','D','E'])).toBe(expectedTotal);
});

test('Set of only non-unique products charged at base rate', () => {
    var expectedTotal = 3 * 299;
    expect(pricing.computeTotalPrice(['A','A','A'])).toBe(expectedTotal);
});

test('Mix of unique and non-unique products charged at discount and base rate respectively', () => {
    var expectedTotal = (5 * 299 * .75) + (5 * 299);
    expect(pricing.computeTotalPrice(['A','A','A','B','B','C','D','E','E','E'])).toBe(expectedTotal);
});

test('Single products charged at base rate', () => {
    var expectedTotal = (4 * 299) + 5 * 299 * (1-.25);
    expect(pricing.computeTotalPrice(['A','A','B','B','C','D','E','E','E'])).toBe(expectedTotal);
});
