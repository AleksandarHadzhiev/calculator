let currentOutput = '0';
let isBinaryCalculation = false
let isHexCalculation = false
let isDecCalculation = true
let isOctCalculation = false
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

function setBinaryCalculation() {
    isBinaryCalculation = true
    isHexCalculation = false
    isDecCalculation = false
    isOctCalculation = false
    setBinaryMode()
}

function setDecCalculation() {
    isBinaryCalculation = false
    isHexCalculation = false
    isDecCalculation = true
    isOctCalculation = false
    setDecCalculator()
}

function setOctCalculation() {
    isBinaryCalculation = false
    isHexCalculation = false
    isDecCalculation = false
    isOctCalculation = true
    setOctCalculator()
}

function setHexCalculation() {
    isBinaryCalculation = false
    isDecCalculation = false
    isHexCalculation = true
    isOctCalculation = false
    setHexMode()
}

function setDecCalculator() {
    SetModeActive()
    const disallowedValues = ['A', 'B', 'C', 'D', 'E', 'F'];

    // Get all buttons in the container
    const buttons = document.querySelectorAll('.buttons button');

    // Iterate over each button and enable/disable based on allowedValues
    assignDIsabled(buttons, disallowedValues)
}

function setOctCalculator() {
    SetModeActive()
    const disallowedValues = ['A', 'B', 'C', 'D', 'E', 'F', '8', '9'];

    // Get all buttons in the container
    const buttons = document.querySelectorAll('.buttons button');

    // Iterate over each button and enable/disable based on allowedValues
    assignDIsabled(buttons, disallowedValues)
}

function assignDIsabled(buttons, disallowedValues) {
    buttons.forEach(button => {
        const buttonValue = button.textContent.trim();
        if (disallowedValues.includes(buttonValue)) {
            button.classList.add('disabled'); // Remove the disabled class
            button.setAttribute('disabled', true); // Enable functionality
        } else {
            button.classList.remove('disabled'); // Apply the disabled class
            button.removeAttribute('disabled'); // Ensure functionality is also disabled
        }
    });
}

function setBinaryMode() {
    SetModeActive()
    // Define the allowed buttons for binary calculations
    const disallowedValues = ['A', 'B', 'C', 'D', 'E', 'F', '8', '9', '7', '6', '5', '4', '3', '2'];

    // Get all buttons in the container
    const buttons = document.querySelectorAll('.buttons button');

    // Iterate over each button and enable/disable based on allowedValues
    assignDIsabled(buttons, disallowedValues)
}

function setHexMode() {
    SetModeActive()
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.classList.remove('disabled'); // Remove the disabled class
        button.removeAttribute('disabled'); // Enable functionality
    });
}


// --> Check this function for possible improvements
function SetModeActive() {
    const bin = document.getElementById('bin')
    const hex = document.getElementById('hex')
    const oct = document.getElementById('oct')
    const dec = document.getElementById('dec')
    if (isBinaryCalculation) {
        bin.classList.add("isClicked")
        hex.classList.remove("isClicked")
        oct.classList.remove("isClicked")
        dec.classList.remove("isClicked")
        let number = parseInt(currentOutput, 2);
        currentOutput = number
        document.getElementById('output').innerText = currentOutput;
    }
    else if (isHexCalculation) {
        bin.classList.remove("isClicked")
        hex.classList.add("isClicked")
        oct.classList.remove("isClicked")
        dec.classList.remove("isClicked")
        let number = parseInt(currentOutput, 16);
        currentOutput = number
        document.getElementById('output').innerText = currentOutput;
    }
    else if (isDecCalculation) {
        bin.classList.remove("isClicked")
        hex.classList.remove("isClicked")
        oct.classList.remove("isClicked")
        dec.classList.add("isClicked")

        let number = parseInt(currentOutput, 10);
        currentOutput = number
        document.getElementById('output').innerText = currentOutput;
    }
    else if (isOctCalculation) {
        bin.classList.remove("isClicked")
        hex.classList.remove("isClicked")
        oct.classList.add("isClicked")
        dec.classList.remove("isClicked")

        let number = parseInt(currentOutput, 8);
        currentOutput = number
        document.getElementById('output').innerText = currentOutput;
    }
}
// <-- Check this function for possible improvements

// --> Check this function for possible improvements
function calculateResult() {
    let inputs = splitAtOperator(currentOutput)

    const convertedResults = document.getElementsByClassName("converted-result")
    if (isBinaryCalculation) {
        currentOutput = calculateBinary(inputs)
        document.getElementById('output').innerText = currentOutput;
    }
    else if (isHexCalculation) {
        currentOutput = hexCalculation(inputs)
        document.getElementById('output').innerText = currentOutput;
    }
    else if (isDecCalculation) {
        currentOutput = calculateDec(inputs)
        document.getElementById('output').innerText = currentOutput;
    }
    else if (isOctCalculation) {
        currentOutput = octCalculation(inputs)
        document.getElementById('output').innerText = currentOutput;
    }
    numbers = convertNumber()
    convertedResults[0].innerText = numbers["binary"]
    convertedResults[1].innerText = numbers["octal"]
    convertedResults[2].innerText = numbers["decimal"]
    convertedResults[3].innerText = numbers["hexadecimal"]
}
// <-- Check this function for possible improvements

function convertNumber() {
    // Detect base from prefix or default to decimal
    let results = {
        decimal: "",
        binary: "",
        octal: "",
        hexadecimal: "",
    };
    if (currentOutput === "Can not divide by 0") {
        return results
    }
    let base = 10; // Default base is decimal
    let number = currentOutput.toString().toLowerCase().trim();

    if (isHexCalculation) {
        base = 16; // Hexadecimal
    } else if (isOctCalculation) {
        base = 8; // Octal
    } else if (isBinaryCalculation) {
        base = 2; // Binary
    }

    // Parse the number based on detected base
    let decimalValue = parseInt(number, base);

    // If parsing fails, return an error
    if (isNaN(decimalValue)) {
        return { error: "Invalid input. Please provide a valid number." };
    }

    // Convert to all bases
    results = {
        decimal: decimalValue.toString(10),
        binary: addZeroesToBin(decimalValue.toString(2)),
        octal: decimalValue.toString(8),
        hexadecimal: decimalValue.toString(16).toUpperCase(),
    };
    return results;
}

function addZeroesToBin(binary) {
    const length = String(binary).length
    const additionalNumbers = length - (Math.floor(length / 4) * 4)
    let newBinary = binary
    if (additionalNumbers === 1) {
        newBinary = "000" + binary
    }
    else if (additionalNumbers === 2) {
        newBinary = "00" + binary
    }
    else if (additionalNumbers === 3) {
        newBinary = "0" + binary
    }
    const separatedBinary = newBinary.match(/.{1,4}/g)
    return separatedBinary.join(' ')
}

function splitAtOperator(input) {
    // Define the operators you want to split by
    const operators = ['+', '-', '*', '/', '^', '%'];

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
    if (inputs !== null && inputs.afterOperator !== '') {
        calculateResult()
    }
    currentOutput += value
    document.getElementById('output').innerText = currentOutput;
}

function clearOutput() {
    currentOutput = '0';
    document.getElementById('output').innerText = currentOutput;
    const convertedResults = document.getElementsByClassName("converted-result")
    convertedResults[0].innerText = currentOutput
    convertedResults[1].innerText = currentOutput
    convertedResults[2].innerText = currentOutput
    convertedResults[3].innerText = currentOutput
}

function calculateDec(inputs) {
    let input1 = inputs.beforeOperator
    let input2 = inputs.afterOperator
    let operator = inputs.operator
    let expression = input1 + operator + input2
    let result = "";
    if (input2 === "0" || input2 === "0" && operator === "/") {
        return "Can not divide by 0";
    }
    try {
        result = eval(expression.replace('x', '*'));
    }
    catch {
        result = "Error"
    }
    return result
}

function calculateBinary(inputs) {
    let input1 = inputs.beforeOperator
    let input2 = inputs.afterOperator
    // let operator = inputs.operator
    // Convert binary inputs to decimal for calculation
    let num1 = parseInt(input1, 2);
    let num2 = parseInt(input2, 2);
    let result;
    inputs.beforeOperator = num1
    inputs.afterOperator = num2
    result = calculateDec(inputs)
    // if (input2 === "0" || input2 === "0" && operator === "/") {
    //     return "Can not divide by 0";
    // }
    // switch (operator) {
    //     case '+':
    //         result = num1 + num2;
    //         break;
    //     case '-':
    //         result = num1 - num2;
    //         break;
    //     case '*':
    //         result = num1 * num2;
    //         break;
    //     case '/':
    //         if (num2 === 0) {
    //             return "Error: Division by Zero";
    //         }
    //         result = num1 / num2;
    //         break;
    //     case '&':
    //         result = num1 & num2; // Bitwise AND
    //         break;
    //     case '|':
    //         result = num1 | num2; // Bitwise OR
    //         break;
    //     case '^':
    //         result = num1 ^ num2; // Bitwise XOR
    //         break;
    //     case '<<':
    //         result = num1 << num2; // Left shift
    //         break;
    //     case '>>':
    //         result = num1 >> num2; // Right shift
    //         break;
    //     case '~':
    //         result = ~num1; // Bitwise NOT (only on one number)
    //         break;
    //     default:
    //         return "Error: Invalid Operator";
    // }

    // Convert the result back to binary
    return addZeroesToBin(result.toString(2));
}

function hexCalculation(inputs) {
    let hex1 = inputs.beforeOperator
    let hex2 = inputs.afterOperator
    // let operator = inputs.operator
    const num1 = parseInt(hex1, 16);
    const num2 = parseInt(hex2, 16);
    inputs.beforeOperator = num1
    inputs.afterOperator = num2
    let result;
    result = calculateDec(inputs)
    return result.toString(16).toUpperCase();
    // if (hex2 === "0" || hex1 === "0" && operator === "/") {
    //     return "Can not divide by 0";
    // }
    // try {
    //     // Convert hex inputs to decimal
    //     const num1 = parseInt(hex1, 16);
    //     const num2 = parseInt(hex2, 16);

    //     let result;

    //     // Perform the operation based on the operator
    //     switch (operator) {
    //         case '+':
    //             result = num1 + num2;
    //             break;
    //         case '-':
    //             result = num1 - num2;
    //             break;
    //         case '*':
    //             result = num1 * num2;
    //             break;
    //         case '/':
    //             if (num2 === 0) throw new Error("Division by zero");
    //             result = Math.floor(num1 / num2); // Integer division
    //             break;
    //         default:
    //             throw new Error("Invalid operator. Use +, -, *, or /.");
    //     }

    //     // Convert the result back to hexadecimal and return
    //     return result.toString(16).toUpperCase();
    // } catch (error) {
    //     console.error("Hexadecimal Calculation Error:", error.message);
    //     return "Error";
    // }
}

function octCalculation(inputs) {
    let oct1 = inputs.beforeOperator
    let oct2 = inputs.afterOperator
    // let operator = inputs.operator
    const num1 = parseInt(oct1, 8);
    const num2 = parseInt(oct2, 8);
    inputs.beforeOperator = num1
    inputs.afterOperator = num2
    let result;
    result = calculateDec(inputs)
    return result.toString(8).toUpperCase();
    // if (oct2 === "0" || oct1 === "0" && operator === "/") {
    //     return "Can not divide by 0";
    // }
    // try {
    //     // Convert hex inputs to decimal
    //     const num1 = parseInt(oct1, 8);
    //     const num2 = parseInt(oct2, 8);

    //     let result;

    //     // Perform the operation based on the operator
    //     switch (operator) {
    //         case '+':
    //             result = num1 + num2;
    //             break;
    //         case '-':
    //             result = num1 - num2;
    //             break;
    //         case '*':
    //             result = num1 * num2;
    //             break;
    //         case '/':
    //             if (num2 === 0) throw new Error("Division by zero");
    //             result = Math.floor(num1 / num2); // Integer division
    //             break;
    //         default:
    //             throw new Error("Invalid operator. Use +, -, *, or /.");
    //     }

    //     // Convert the result back to hexadecimal and return
    //     return result.toString(8).toUpperCase();
    // } catch (error) {
    //     console.error("Hexadecimal Calculation Error:", error.message);
    //     return "Error";
    // }
}

//Boot up the programming calculator with Dec setup
setDecCalculator()
SetModeActive()