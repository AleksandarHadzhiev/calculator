import { DateCalculator } from "./classes/DateCalculator.js";
import { DateDifferenceCalculator } from "./classes/DateDifferenceCalculator.js";

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

function toggleButtons() {
    const buttons = document.querySelectorAll(".calculator-button");
    buttons.forEach(button => {
        button.disabled = false; // Enable buttons
    });
}

// Add the functions to the global `window` object
window.ToggleSidebar = ToggleSidebar;
window.toggleButtons = toggleButtons;
window.changeOperation = changeOperation;
window.calculateDifferences = calculateDifferences;
window.calculateNewDate = calculateNewDate;

// Other functions remain accessible within this file
function changeOperation() {
    const operation = document.getElementById('operation-select').value;

    if (operation === 'compare') {
        document.getElementById('end-date-group').style.display = 'block';
        document.getElementById('add-subtract-group').style.display = 'none';
    } else if (operation === 'addSubtract') {
        document.getElementById('end-date-group').style.display = 'none';
        document.getElementById('add-subtract-group').style.display = 'block';
    }
}

function calculateDifferences() {
    const endDate = document.getElementById('end-date').value;
    const startDate = document.getElementById('start-date').value;
    const diff = document.getElementById('diff');
    const totalDays = document.getElementById('total-days');

    const dateDifferenceCalculator = new DateDifferenceCalculator(startDate, endDate);
    const differences = dateDifferenceCalculator.getDifference();
    const totalDifference = dateDifferenceCalculator.getTotalDifference();
    const message = `${differences.years} years, ${differences.months} months, ${differences.weeks} weeks, ${differences.days} days.`;

    totalDays.innerText = totalDifference;
    diff.innerText = message;
}

function calculateNewDate() {
    const date = document.getElementById('start-date').value;
    const operation = document.getElementById('operation').value;
    const years = document.getElementById('years').value;
    const months = document.getElementById('months').value;
    const days = document.getElementById('days').value;
    const result = document.getElementById('result-date');

    const dateCalculator = new DateCalculator(date);
    if (operation === "add") {
        dateCalculator.addYears(Number(years));
        dateCalculator.addMonths(Number(months));
        dateCalculator.addDays(Number(days));
    } else {
        dateCalculator.subtractYears(Number(years));
        dateCalculator.subtractMonths(Number(months));
        dateCalculator.subtractDays(Number(days));
    }
    result.innerHTML = dateCalculator.getFormattedDate();
}
