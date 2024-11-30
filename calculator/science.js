import { ScienceCalculator } from "./classes/ScienceCalculator.js";

const scienceCalculator = new ScienceCalculator(0, 0, '+')

let currentOutput = '0';

function ToggleSidebar() {
    const myDiv = document.getElementById('myDiv');
    if (myDiv.classList.contains('invisible')) {
        myDiv.classList.remove('invisible');
        myDiv.classList.add('visible');
    } else {
        myDiv.classList.remove('visible');
        myDiv.classList.add('invisible');
    }
}

function specialOperator(value) {
    event.preventDefault()
    scienceCalculator.setOperator(value)
    currentOutput = scienceCalculator.performSpecialOperators()
    document.getElementById('output').innerHTML = currentOutput;
}

function splitAtOperator(input) {
    // Define the operators you want to split by
    const operators = ['+', '-', '*', '/', '^', '%', '>>', '<<', '^', '|', '&', '~', '²', '#', '√'];

    // Find the first occurrence of any operator
    for (let i = 0; i < input.length; i++) {
        if (operators.includes(input[i])) {
            // Split the string into three parts: before, operator, after
            const beforeOperator = input.slice(0, i);
            const operator = input[i];
            const afterOperator = input.slice(i + 1);

            return {
                beforeOperator,
                operator,
                afterOperator
            };
        }
    }

    // If no operator is found, return null or handle as desired
    return null;
}

function appendToOutput(value) {
    if (currentOutput == '0') {
        currentOutput = value;
    } else {
        currentOutput += value;
    }
    document.getElementById('output').innerText = currentOutput;
}

function appendAnOperatorToOutput(value) {
    let inputs = splitAtOperator(currentOutput)
    const inSpecialOperators = checkIfInSpecialOperators(value)
    if (inputs !== null && inputs.afterOperator !== '') {
        Result()
    }
    else if (inSpecialOperators) {
        calculateSpecialResult(value)
    }
    else {
        currentOutput += value
        document.getElementById('output').innerText = currentOutput;
    }
}

function calculateSpecialResult(operator) {
    let scienceCalculator = new ScienceCalculator(Number(currentOutput), 0, operator)
    currentOutput = scienceCalculator.performCalculation()
    document.getElementById('output').innerText = currentOutput;
}

function checkIfInSpecialOperators(operator) {
    const specialoperators = ['²', '#', '√']
    if (specialoperators.includes(operator)) {
        return true
    }
    return false
}

function clearOutput() {
    currentOutput = '0';
    document.getElementById('output').innerText = currentOutput;
}

function Result() {
    let inputs = splitAtOperator(currentOutput)
    let scienceCalculator = new ScienceCalculator(Number(inputs.beforeOperator), Number(inputs.afterOperator), inputs.operator)
    currentOutput = scienceCalculator.performCalculation()
    document.getElementById('output').innerText = currentOutput;
}

function Clear() {
    var inp = document.getElementById('output');
    inp.value = '';
}
function Back() {
    var ev = document.getElementById('output');
    ev.value = ev.value.slice(0, -1);
}
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
        Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
        Result();
    } else if (key === 'Backspace') {
        Back();
    } else if (key.toLowerCase() === 'c') {
        Clear();
    }
});

window.ToggleSidebar = ToggleSidebar;
window.clearOutput = clearOutput;
window.appendAnOperatorToOutput = appendAnOperatorToOutput;
window.appendToOutput = appendToOutput;
window.Result = Result;
window.Clear = Clear;
window.Back = Back;
window.specialOperator = specialOperator;