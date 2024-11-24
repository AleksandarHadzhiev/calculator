function hexCalculation(hex1, operator, hex2) {
    try {
        // Convert hex inputs to decimal
        const num1 = parseInt(hex1, 16);
        const num2 = parseInt(hex2, 16);

        let result;

        // Perform the operation based on the operator
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
                if (num2 === 0) throw new Error("Division by zero");
                result = Math.floor(num1 / num2); // Integer division
                break;
            default:
                throw new Error("Invalid operator. Use +, -, *, or /.");
        }

        // Convert the result back to hexadecimal and return
        return "0x" + result.toString(16).toUpperCase();
    } catch (error) {
        console.error("Hexadecimal Calculation Error:", error.message);
        return "Error";
    }
}


// Add two hexadecimal numbers
const result1 = hexCalculation("7A", "+", "12");
console.log(result1); // Output: 0x19

// Subtract two hexadecimal numbers
const result2 = hexCalculation("0x1E", "-", "0xB");
console.log(result2); // Output: 0x13

// Multiply two hexadecimal numbers
const result3 = hexCalculation("0x3", "*", "0x4");
console.log(result3); // Output: 0xC

// Divide two hexadecimal numbers
const result4 = hexCalculation("0x20", "/", "0x4");
console.log(result4); // Output: 0x8
