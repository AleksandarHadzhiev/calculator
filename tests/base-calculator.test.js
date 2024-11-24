const {
    BaseCalculator
} = require('../programmingCalculator');
describe('BaseCalculator Tests', () => {
    test('Addition of two numbers', () => {
        const calc = new BaseCalculator(10, 20, '+');
        expect(calc.performCalculation()).toBe(30);
    });

    test('Subtraction of two numbers', () => {
        const calc = new BaseCalculator(20, 10, '-');
        expect(calc.performCalculation()).toBe(10);
    });

    test('Division by zero', () => {
        const calc = new BaseCalculator(20, 0, '/');
        expect(calc.performCalculation()).toBe("Can't divide by 0.");
    });

    test('Invalid operator throws error', () => {
        const calc = new BaseCalculator(10, 20, '&');
        expect(() => calc.performCalculation()).toThrow('Invalid operator');
    });
});