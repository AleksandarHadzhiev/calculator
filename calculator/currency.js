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

function updateConversionRate() {
    const baseRate = document.getElementById('base-rate').value;
    const conversionRate = document.getElementById('conversion-rate').value;
    const rate = baseRate + "-" + conversionRate
    console.log(rate)
    currencyConverter.setNewConversionRate(rate)
    convertRates()
}

function Back() {
    currentOutput = currentOutput.slice(0, -1);
    convertRates()

}
function clearOutput() {
    currentOutput = '0';
    document.getElementById('base-value').innerText = currentOutput;
    convertRates()

}

function appendToOutput(value) {
    currentOutput += value
    convertRates()
}

function convertRates() {
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
window.updateConversionRate = updateConversionRate;