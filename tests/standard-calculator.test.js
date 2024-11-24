const {
    StandardCalculator
} = require('../programmingCalculator');

describe('StandardCalculator Tests', () => {
    test('Power of two operation', () => {
        const calc = new StandardCalculator(4, 20, '**');
        expect(calc.performCalculation()).toBe('16');
    });

    test('Square root operation', () => {
        const calc = new StandardCalculator(16, 20, '√');
        expect(calc.performCalculation()).toBe('4');
    });

    test('Divide 1 by a number', () => {
        const calc = new StandardCalculator(4, 20, '#');
        expect(calc.performCalculation()).toBe('0.25');
    });

    test('Modulo operation', () => {
        const calc = new StandardCalculator(10, 3, '%');
        expect(calc.performCalculation()).toBe('1');
    });
});