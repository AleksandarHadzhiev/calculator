class BaseCalculator {
    constructor(firstNumber, secondNumber, operator) {
        this.firstNumber = firstNumber
        this.secondNumber = secondNumber
        this.operator = operator
        this.allowedOperationActions = {
            '-': this.substractTwoNumbers.bind(this),
            '+': this.addTwoNumbers.bind(this),
            '/': this.divideTwoNumbers.bind(this),
            '*': this.multiplyTwoNumbers.bind(this),
        }
    }

    reset(firstNumber, secondNumber, operator) {
        this.firstNumber = firstNumber
        this.secondNumber = secondNumber
        this.operator = operator
    }

    addTwoNumbers() {
        const result = this.firstNumber + this.secondNumber
        return result;
    }

    substractTwoNumbers() {
        const result = this.firstNumber - this.secondNumber
        return result;
    }

    multiplyTwoNumbers() {
        const result = this.firstNumber * this.secondNumber
        return result;
    }

    divideTwoNumbers() {
        if (this.secondNumber === 0) {
            return "Can't divide by 0."
        }
        const result = this.firstNumber / this.secondNumber
        return result;
    }

    performCalculation() {
        const action = this.allowedOperationActions[this.operator];
        if (action) {
            return action();
        }
        else {
            throw new Error("Invalid operator");
        }
    }
}

class StandardCalculator extends BaseCalculator {
    constructor(firstNumber, secondNumber, operator) {
        super(firstNumber, secondNumber, operator); // Call the constructor of the BaseCalculator
        this.allowedOperationActions['**'] = this.toThePowerOfTwo.bind(this);
        this.allowedOperationActions['√'] = this.squareRoot.bind(this);
        this.allowedOperationActions['#'] = this.divideOneByNumber.bind(this);
        this.allowedOperationActions['%'] = this.getModuloNumber.bind(this);
    }

    divideOneByNumber() {
        if (this.firstNumber === 0) {
            return "Can't divide by 0"
        }
        const result = 1 / Number(this.firstNumber)
        return result.toString()
    }

    squareRoot() {
        const result = Math.sqrt(this.firstNumber)
        return result.toString()
    }

    toThePowerOfTwo() {
        const result = this.firstNumber * this.firstNumber
        return result.toString()
    }

    getModuloNumber() {
        if (this.secondNumber === 0) {
            return "Can't modulo by 0"
        }
        const result = this.firstNumber % this.secondNumber;
        return result.toString()
    }
}

class ProgrammingCalculator extends BaseCalculator {
    constructor(firstNumber, secondNumber, operator, base = 2) {
        super(firstNumber, secondNumber, operator)
        this.allowedOperationActions['%'] = this.getModuloNumber.bind(this);
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

    // Validate the input for the given base
    validateInputForBase(number, base) {
        const baseRegex = {
            2: /^[01]+$/,            // Binary: Only 0 or 1
            8: /^[0-7]+$/,           // Octal: Only 0-7
            10: /^[0-9]+$/,          // Decimal: Only 0-9
            16: /^[0-9A-Fa-f]+$/,    // Hexadecimal: Only 0-9 and A-F
        };

        if (!baseRegex[base].test(number)) {
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


// Binary (Base 2) Calculation
const programmingCalculator = new ProgrammingCalculator("1010", "0101", "+", 2);
console.log(programmingCalculator.performCalculation()); // "15" (10 + 5 in decimal)

// Hexadecimal (Base 16) Calculation
programmingCalculator.reset("A", "5", "*", 16);
console.log(programmingCalculator.performCalculation()); // "50" (10 * 5 in decimal)

// Invalid Input Example
try {
    programmingCalculator.reset("1010", "89", "+", 2);
    console.log(programmingCalculator.performCalculation());
} catch (error) {
    console.error(error.message); // "Invalid input '89' for base 2"
}

module.exports = {
    BaseCalculator,
    StandardCalculator,
    ProgrammingCalculator
};