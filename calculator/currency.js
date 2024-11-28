import { CurrencyConverter } from './classes/CurrencyConverter.js'
import { GetCurrentCurrencyRates } from './classes/currencyAPICall.js';
let currentOutput = ""
const currencyConverter = new CurrencyConverter(0, 'EUR-USD')
const getCurrencyRates = new GetCurrentCurrencyRates()
getCurrencyRates.fetchCurrencyRates()
currencyConverter.conversionRates = getCurrencyRates.getRates()

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
    document.getElementById('converted-value').innerText = convertedValue;
}
// Add the functions to the global `window` object
window.ToggleSidebar = ToggleSidebar;
window.Back = Back;
window.clearOutput = clearOutput;
window.appendToOutput = appendToOutput;
window.updateConversionRate = updateConversionRate;