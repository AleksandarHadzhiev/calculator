const {
    BaseCalculator
} = require('./BaseCalculator');

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

module.exports = {
    StandardCalculator,
};