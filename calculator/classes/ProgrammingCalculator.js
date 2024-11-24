import { BaseCalculator } from "./baseCalculator.js";

export class ProgrammingCalculator extends BaseCalculator {
    constructor(firstNumber, secondNumber, operator, base = 2) {
        super(firstNumber, secondNumber, operator)
        this.allowedOperationActions['%'] = this.getModuloNumber.bind(this);
        this.allowedOperationActions['&'] = this.getBitwiseAnd.bind(this);
        this.allowedOperationActions['|'] = this.getBitwiseOr.bind(this);
        this.allowedOperationActions['^'] = this.getBitwiseXor.bind(this);
        this.allowedOperationActions['~'] = this.getBitwiseNot.bind(this);
        this.allowedOperationActions['<<'] = this.getBitwiseLeftShift.bind(this);
        this.allowedOperationActions['>>'] = this.getBitwiseRightShift.bind(this);
        this.base = base
    }

    setBase(base) {
        this.base = base
    }

    reset(firstNumber, secondNumber, operator, base = 2) {
        super.reset(firstNumber, secondNumber, operator);
        this.base = base
    }

    getModuloNumber() {
        if (this.secondNumber === 0) {
            return "Can't modulo by 0"
        }
        const result = this.firstNumber % this.secondNumber;
        return result
    }

    // Bitwise AND operation
    getBitwiseAnd() {
        const result = this.firstNumber & this.secondNumber;
        return result.toString(this.base);
    }

    // Bitwise OR operation
    getBitwiseOr() {
        const result = this.firstNumber | this.secondNumber;
        return result.toString(this.base);
    }

    // Bitwise XOR operation
    getBitwiseXor() {
        const result = this.firstNumber ^ this.secondNumber;
        return result.toString(this.base);
    }

    // Bitwise NOT operation
    getBitwiseNot() {
        const result = ~this.firstNumber;
        return result.toString(this.base);
    }

    // Bitwise left shift operation
    getBitwiseLeftShift(shiftAmount) {
        const result = this.firstNumber << shiftAmount;
        return result.toString(this.base);
    }

    // Bitwise right shift operation
    getBitwiseRightShift(shiftAmount) {
        const result = this.firstNumber >> shiftAmount;
        return result.toString(this.base);
    }

    // Validate the input for the given base
    validateInputForBase(number, base) {
        const trimmedNumber = number.replace(/ /g, '')
        const baseRegex = {
            2: /^[01]+$/,            // Binary: Only 0 or 1
            8: /^[0-7]+$/,           // Octal: Only 0-7
            10: /^[0-9]+$/,          // Decimal: Only 0-9
            16: /^[0-9A-Fa-f]+$/,    // Hexadecimal: Only 0-9 and A-F
        };

        if (!baseRegex[base].test(trimmedNumber)) {
            throw new Error(`Invalid input "${number}" for base ${base}`);
        }
    }

    // Convert input to the specified base
    convertToBase10(number, base) {
        return parseInt(number, base); // Convert string to base 10 integer
    }

    performCalculation() {
        // Validate and convert inputs based on the base
        this.validateInputForBase(this.firstNumber, this.base);
        this.validateInputForBase(this.secondNumber, this.base);

        // Convert inputs to base 10 for calculations
        const firstNumberBase10 = this.convertToBase10(this.firstNumber, this.base);
        const secondNumberBase10 = this.convertToBase10(this.secondNumber, this.base);

        // Temporarily overwrite the base class numbers for calculation
        this.firstNumber = firstNumberBase10;
        this.secondNumber = secondNumberBase10;

        // Perform the calculation using the base class logic
        const result = super.performCalculation();
        return result.toString(this.base)
    }
}
