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

module.exports = {
    BaseCalculator
};