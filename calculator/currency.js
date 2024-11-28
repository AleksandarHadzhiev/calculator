import { CurrencyConverter } from './classes/CurrencyConverter.js'

let currentOutput = ""
const currencyConverter = new CurrencyConverter(0, 'euro-usd')

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

function Back() {
    var ev = document.getElementById('output');
    ev.value = ev.value.slice(0, -1);
}
function clearOutput() {
    currentOutput = '0';
    document.getElementById('output').innerText = currentOutput;
}

function appendToOutput(value) {
    currentOutput += value
    currencyConverter.setNewBaseBalue(currentOutput)
    document.getElementById('base-value').innerText = currentOutput;
    const convertedValue = currencyConverter.getConvertedValue()
    console.log(convertedValue)
    document.getElementById('converted-value').innerText = convertedValue;

}
// Add the functions to the global `window` object
window.ToggleSidebar = ToggleSidebar;
window.Back = Back;
window.clearOutput = clearOutput;
window.appendToOutput = appendToOutput;