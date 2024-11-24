class DateDifference {
    constructor(date1, date2) {
        this.date1 = new Date(date1);
        this.date2 = new Date(date2);

        // Ensure date1 is earlier
        if (this.date1 > this.date2) {
            [this.date1, this.date2] = [this.date2, this.date1];
        }

        this.years = 0;
        this.months = 0;
        this.weeks = 0;
        this.days = 0;
        this.calculateDifference();
        this.totalDifference = this.setTotalDifferenceInDays()
    }

    // Helper method to calculate the total difference in days
    setTotalDifferenceInDays() {
        const Difference_In_Time = Math.abs(this.date2.getTime() - this.date1.getTime());
        return Math.round(Difference_In_Time / (1000 * 3600 * 24));  // Convert milliseconds to days
    }

    getTotalDifference() {
        return this.totalDifference
    }

    calculateDifference() {
        // Calculate years
        this.years = this.date2.getFullYear() - this.date1.getFullYear();

        // Adjust years if the month and day of date2 are earlier than date1
        if (
            this.date2.getMonth() < this.date1.getMonth() ||
            (this.date2.getMonth() === this.date1.getMonth() &&
                this.date2.getDate() < this.date1.getDate())
        ) {
            this.years--;
        }

        // Calculate months
        this.months = this.date2.getMonth() - this.date1.getMonth();
        if (this.months < 0) {
            this.months += 12;
        }
        // Adjust months if day of date2 is earlier
        if (this.date2.getDate() < this.date1.getDate()) {
            this.months--;
            if (this.months < 0) {
                this.months += 12;
            }
        }

        // Calculate days
        const adjustedDate1 = new Date(
            this.date1.getFullYear() + this.years,
            this.date1.getMonth() + this.months,
            this.date1.getDate()
        );
        const diffInMs = this.date2 - adjustedDate1;
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

        this.weeks = Math.floor(diffInDays / 7);
        this.days = diffInDays % 7;
    }

    getDifference() {
        return {
            years: this.years,
            months: this.months,
            weeks: this.weeks,
            days: this.days,
        };
    }

}

class DateCalculator {
    constructor(date1) {
        this.date1 = new Date(date1);
        this.year = this.date1.getFullYear();
        this.month = this.date1.getMonth();
        this.day = this.date1.getDate();
    }

    addYears(yearsToAdd) {
        this.year += yearsToAdd;
        this.date1.setFullYear(this.year); // Update the date object accordingly
        this.updateDateFields(); // Sync updated fields
    }

    subtractYears(yearsToSubstract) {
        this.year -= yearsToSubstract;
        this.date1.setFullYear(this.year); // Update the date object accordingly
        this.updateDateFields(); // Sync updated fields
    }

    addMonths(monthsToAdd) {
        this.date1.setMonth(this.date1.getMonth() + monthsToAdd); // Automatically handles month overflow
        this.updateDateFields(); // Sync updated fields
    }

    subtractMonths(monthsToSubstract) {
        this.date1.setMonth(this.date1.getMonth() - monthsToSubstract); // Automatically handles month overflow
        this.updateDateFields(); // Sync updated fields
    }

    addDays(daysToAdd) {
        this.date1.setDate(this.date1.getDate() + daysToAdd); // Adds days while handling overflow
        this.updateDateFields(); // Sync updated fields
    }

    subtractDays(daysToSubstract) {
        this.date1.setDate(this.date1.getDate() - daysToSubstract); // Subtracts days while handling overflow
        this.updateDateFields(); // Sync updated fields
    }

    updateDateFields() {
        // Sync the year, month, and day with the updated date1
        this.year = this.date1.getFullYear();
        this.month = this.date1.getMonth();
        this.day = this.date1.getDate();
    }

    getFormattedDate() {
        return this.date1.toLocaleDateString();
    }
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

function toggleButtons() {
    const buttons = document.querySelectorAll(".calculator-button");
    buttons.forEach(button => {
        button.disabled = false; // Enable buttons
    });
}

// This function will be called when the drop-down selection is changed
function changeOperation() {
    const operation = document.getElementById('operation-select').value;

    if (operation === 'compare') {
        // Show the date comparison section and hide the add/subtract section
        document.getElementById('end-date-group').style.display = 'block';
        document.getElementById('add-subtract-group').style.display = 'none';
    } else if (operation === 'addSubtract') {
        // Show the add/subtract years, months, and days section and hide the date comparison section
        document.getElementById('end-date-group').style.display = 'none';
        document.getElementById('add-subtract-group').style.display = 'block';
    }
}

function calculateDifferences() {
    const endDate = document.getElementById('end-date').value;
    const startDate = document.getElementById('start-date').value;
    const diff = document.getElementById('diff');
    const totalDays = document.getElementById('total-days');

    const dateDifferenceCalculator = new DateDifference(startDate, endDate)
    const differences = dateDifferenceCalculator.getDifference()
    const totalDifference = dateDifferenceCalculator.getTotalDifference()
    const message = differences.years + " years, " + differences.months + " months, " + differences.weeks + " weeks, " + differences.days + " days.";

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

    const dateCalculator = new DateCalculator(date)
    if (operation === "add") {
        dateCalculator.addYears(Number(years))
        dateCalculator.addMonths(Number(months))
        dateCalculator.addDays(Number(days))
    }
    else {
        dateCalculator.subtractYears(Number(years))
        dateCalculator.subtractMonths(Number(months))
        dateCalculator.subtractDays(Number(days))
    }
    result.innerHTML = dateCalculator.getFormattedDate()
}