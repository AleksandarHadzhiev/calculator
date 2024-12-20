import { BaseCalculator } from "./baseCalculator.js";

export class ScienceCalculator extends BaseCalculator {
    constructor(firstNumber = 0, secondNumber = 0, operator = '+') {
        super(firstNumber, secondNumber, operator)
        this.allowedOperationActions['²'] = this.toThePowerOfTwo.bind(this);
        this.allowedOperationActions['√'] = this.squareRoot.bind(this);
        this.allowedOperationActions['#'] = this.divideOneByNumber.bind(this);
        this.allowedOperationActions['^'] = this.firstToThePowerOfSecond.bind(this)
        this.allowedOperationActions['!'] = this.calculateExp.bind(this)
        this.allowedOperationActions['M'] = this.calculateModuleOfTwoNumbers.bind(this)
        this.specialOperators = {
            'e': this.fetchEFromMath.bind(this),
            'p': this.fetchPifromMath.bind(this),
            'log': this.logarithmOfNumber.bind(this),
            'ln': this.lnOfNumber.bind(this),
            '@': this.tenToThePowerOfNumber.bind(this),
            'n!': this.calculateFactorialOfANumber.bind(this),
            'abs': this.getTheAbsoluteValueOfANumber.bind(this),
            '+/-': this.changeNumberToOposite.bind(this),

        }
    }

    calculateExp() {
        let expNumber = `${this.firstNumber}`
        let zeroes = ""
        for (let index = 0; index < this.secondNumber; index++) {
            zeroes += "0"
        }
        expNumber += zeroes
        return expNumber
    }

    calculateModuleOfTwoNumbers() {
        const module = this.firstNumber % this.secondNumber
        return module
    }

    divideOneByNumber() {
        if (this.firstNumber === 0) {
            return "Can't divide by 0"
        }
        const result = 1 / Number(this.firstNumber)
        return result.toString()
    }

    calculateFactorialOfANumber() {
        let factorial = 1
        if (this.firstNumber == 0) {
            return factorial.toString()
        }
        else if (this.firstNumber < 0) {
            return "NaN"
        }

        for (let index = 2; index <= this.firstNumber; index++) {
            factorial = factorial * index;
        }

        return factorial.toString()
    }

    getTheAbsoluteValueOfANumber() {
        return Math.abs(this.firstNumber)
    }

    changeNumberToOposite() {
        if (this.firstNumber > 0) {
            return `-${this.firstNumber}`
        }
        return this.getTheAbsoluteValueOfANumber()
    }

    squareRoot() {
        const result = Math.sqrt(this.firstNumber)
        return result.toString()
    }

    firstToThePowerOfSecond() {
        const result = Math.pow(this.firstNumber, this.secondNumber)
        return result.toString()
    }

    tenToThePowerOfNumber() {
        const result = Math.pow(10, this.secondNumber)
        return result.toString()
    }

    logarithmOfNumber() {
        const result = Math.log10(this.firstNumber)
        return result.toString()
    }

    lnOfNumber() {
        const result = Math.log(this.firstNumber)
        return result.toString()
    }

    fetchPifromMath() {
        return Math.PI
    }

    fetchEFromMath() {
        return Math.E
    }

    toThePowerOfTwo() {
        const result = this.firstNumber * this.firstNumber
        return result.toString()
    }

    performSpecialOperators() {
        const action = this.specialOperators[this.operator];
        if (action) {
            const result = action()
            return result;
        }
        else {
            throw new Error("Invalid operator");
        }
    }
}