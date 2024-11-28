import { LengthConverter } from "./classes/LengthConverter.js"
let currentOutput = ""
const lengthCoverter = new LengthConverter(0, 'CM-INCH')
lengthCoverter.loadRates()
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
    lengthCoverter.setNewConversionRate(rate)
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