import { CurrencyConverter } from './classes/CurrencyConverter.js'
import { GetCurrentCurrencyRatesFromAPI } from './classes/currencyAPICall.js';
import { GetCurrentCurrencyRatesFromJSON } from './classes/currenciesJSONfile.js';
let currentOutput = ""
const currencyConverter = new CurrencyConverter(0, 'EUR-USD')
const json = new GetCurrentCurrencyRatesFromJSON()
const getCurrencyRates = new GetCurrentCurrencyRatesFromAPI()
getCurrencyRates.fetchCurrencyRates()
json.loadRatesFromFile()
if (getCurrencyRates.getRates() != null) {
    currencyConverter.conversionRates = getCurrencyRates.getRates()
}
else {
    currencyConverter.conversionRates = json.getRates()

}

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
    if (currentOutput.length > 1) {
        currentOutput = currentOutput.slice(0, -1);
        convertRates()
    }
    else {
        currentOutput = ""
    }
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
    currencyConverter.setNewBaseValue(currentOutput)
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