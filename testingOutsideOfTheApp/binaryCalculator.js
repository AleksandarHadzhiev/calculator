function calculateBinary(input1, input2, operator) {
    // Convert binary inputs to decimal for calculation
    let num1 = parseInt(input1, 2);
    let num2 = parseInt(input2, 2);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return "Error: Division by Zero";
            }
            result = num1 / num2;
            break;
        case '&':
            result = num1 & num2; // Bitwise AND
            break;
        case '|':
            result = num1 | num2; // Bitwise OR
            break;
        case '^':
            result = num1 ^ num2; // Bitwise XOR
            break;
        case '<<':
            result = num1 << num2; // Left shift
            break;
        case '>>':
            result = num1 >> num2; // Right shift
            break;
        case '~':
            result = ~num1; // Bitwise NOT (only on one number)
            break;
        default:
            return "Error: Invalid Operator";
    }

    // Convert the result back to binary
    return result.toString(2);
}

// Example Usage
let binary1 = '1100';  // 13 in decimal
let binary2 = '1100';  // 10 in decimal
let operator = '+';

let binaryResult = calculateBinary(binary1, binary2, operator);
console.log(`Result: ${binaryResult}`); // Result: 11111 (15 in decimal)