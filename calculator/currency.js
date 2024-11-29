import { GetCurrentCurrencyRatesFromAPI } from './classes/currencyAPICall.js';
import { RateConverter } from './classes/RateConverter.js';
import { loadRatesFromFile } from "./classes/RatesFileReader.js";
let currentOutput = ""
const rate = LoadConversionRate()
const lengths = ["USD", "EUR", "BGN", "JPY", "AUD", "CAD", "GBP", "EGP", "CNY", "CHF"];
const jsonFileName = "./jsonObjects/currencies.json"
const ratesFromJSONFile = await loadRatesFromFile(lengths, jsonFileName)
const currencyConverter = new RateConverter(0, rate)
const getCurrencyRates = new GetCurrentCurrencyRatesFromAPI()
getCurrencyRates.fetchCurrencyRates()
let rates
if (getCurrencyRates.getRates() != null) {
    rates = getCurrencyRates.getRates()
}
else {
    rates = ratesFromJSONFile

}

currencyConverter.setConverionRates(rates)

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
    const rate = LoadConversionRate()
    currencyConverter.setNewConversionRate(rate)
    convertRates()
}

function LoadConversionRate() {
    const baseRate = document.getElementById('base-rate').value;
    const conversionRate = document.getElementById('conversion-rate').value;
    return baseRate + "_" + conversionRate
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