import { loadRatesFromFile } from "./classes/RatesFileReader.js";
import { RateConverter } from "./classes/RateConverter.js";
let currentOutput = ""
const lengths = ["CEL", "FAHR", "KEV"];
const jsonFileName = "./jsonObjects/tempreture.json"
const ratesFromJSONFile = await loadRatesFromFile(lengths, jsonFileName)
const rate = LoadConversionRate()
const tempConverter = new RateConverter(0, rate)
tempConverter.setConverionRates(ratesFromJSONFile)
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
    tempConverter.setNewConversionRate(rate)
    convertRates()
}

function LoadConversionRate() {
    const baseRate = document.getElementById('base-rate').value;
    const conversionRate = document.getElementById('conversion-rate').value;
    return baseRate + "-" + conversionRate
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
    console.log(currentOutput)
    if (currentOutput === "") {
        currentOutput = "0"
    }
    tempConverter.setNewBaseValue(currentOutput)
    document.getElementById('base-value').innerText = currentOutput;
    const convertedValue = tempConverter.getConvertedValue()
    document.getElementById('converted-value').innerText = convertedValue;
}
// Add the functions to the global `window` object
window.ToggleSidebar = ToggleSidebar;
window.Back = Back;
window.clearOutput = clearOutput;
window.appendToOutput = appendToOutput;
window.updateConversionRate = updateConversionRate;