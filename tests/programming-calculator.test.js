const {
    ProgrammingCalculator
} = require('../programmingCalculator');
describe('ProgrammingCalculator Tests', () => {
    test('Binary addition', () => {
        const calc = new ProgrammingCalculator('1010', '0101', '+', 2);
        expect(calc.performCalculation()).toBe('1111'); // Binary 1010 + 0101 = Decimal 15
    });

    test('Hexadecimal multiplication', () => {
        const calc = new ProgrammingCalculator('A', '5', '*', 16);
        expect(calc.performCalculation()).toBe('32'); // Hexadecimal A * 5 = Decimal 50
    });

    test('Invalid binary input throws error', () => {
        const calc = new ProgrammingCalculator('1010', '89', '+', 2);
        expect(() => calc.performCalculation()).toThrow('Invalid input "89" for base 2');
    });

    test('Division by zero', () => {
        const calc = new ProgrammingCalculator('1010', '0', '/', 2);
        expect(calc.performCalculation()).toBe("Can't divide by 0.");
    });
});
