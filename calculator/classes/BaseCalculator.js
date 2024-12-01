import { ActionStorer } from "./ActionStorer.js"

export class BaseCalculator {
    constructor(firstNumber, secondNumber, operator) {
        this.actionStorer = new ActionStorer("CalculatorStorage")
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
    setOperator(newOperator) {
        this.operator = newOperator
    }

    setFirstNumber(newNumber) {
        this.firstNumber = newNumber
    }

    setSecondNumber(newNumber) {
        this.secondNumber = newNumber
    }

    reset(firstNumber, secondNumber, operator) {
        this.firstNumber = Number(firstNumber)
        this.secondNumber = Number(secondNumber)
        this.operator = operator
    }

    addTwoNumbers() {
        console.log(typeof this.firstNumber)
        console.log(typeof this.secondNumber)
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
        const date = new Date()
        let content = {
            "firstNumber": this.firstNumber,
            "secondNumber": this.secondNumber,
            "operator": this.operator,
            "expression": `${this.firstNumber} ${this.operator} ${this.secondNumber}`,
            "date": date.toLocaleString()
        }
        const action = this.allowedOperationActions[this.operator];
        if (action) {
            const result = action()
            content["result"] = result
            this.actionStorer.setBody(content)
            this.actionStorer.createJSONFile()
            return result;
        }
        else {
            throw new Error("Invalid operator");
        }
    }
}
