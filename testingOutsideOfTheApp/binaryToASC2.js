const text = "Aleksandar"
let ascii_numbers = []
for (let index = 0; index < text.length; index++) {
    console.log(text.codePointAt(index))
    ascii_numbers[index] = text.codePointAt(index)
}

let regenerated_text = ""

ascii_numbers.forEach(number => {
    console.log(String.fromCharCode(number))
    regenerated_text += String.fromCharCode(number)
});

console.log(regenerated_text)


// --> BINARY 
let binary_string = "01000001 01110010 01100101 01101110 00100111 01110100"
let binString = '';

binary_string.split(' ').map(function (bin) {
    binString += String.fromCharCode(parseInt(bin, 2));
});
console.log(binString)

let output = "";
for (var i = 0; i < text.length; i++) {
    output += text[i].charCodeAt(0).toString(2) + " ";
}

console.log(output)
let myName = "";
output.split(' ').map(function (bin) {
    myName += String.fromCharCode(parseInt(bin, 2));
});
console.log(myName)
// BINARY <--