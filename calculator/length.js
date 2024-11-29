import { loadRatesFromFile } from "./classes/RatesFileReader.js";
import { RateConverter } from "./classes/RateConverter.js";
let currentOutput = ""
const lengths = ["CM", "INCH", "METER", "FOOT", "YARD", "MILE", "KM"];
const jsonFileName = "./jsonObjects/lengths.json"
const ratesFromJSONFile = await loadRatesFromFile(lengths, jsonFileName)
const rate = LoadConversionRate()
const lengthCoverter = new RateConverter(0, rate)
lengthCoverter.setConverionRates(ratesFromJSONFile)
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
    lengthCoverter.setNewConversionRate(rate)
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
    lengthCoverter.setNewBaseValue(currentOutput)
    document.getElementById('base-value').innerText = currentOutput;
    const convertedValue = lengthCoverter.getConvertedValue()
    document.getElementById('converted-value').innerText = convertedValue;
}
// Add the functions to the global `window` object
window.ToggleSidebar = ToggleSidebar;
window.Back = Back;
window.clearOutput = clearOutput;
window.appendToOutput = appendToOutput;
window.updateConversionRate = updateConversionRate;