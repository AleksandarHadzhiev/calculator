class DateCalculator {
    constructor(date1, date2) {
        this.date1 = date1;  // Ensure the dates are proper Date objects
        this.date2 = date2;

        // Initialize properties
        this.Difference_In_Days = 0;
        this.isLeapYear = false;
        this.isSameDate = false;
        this.isSameMonth = false;
        this.isSameYear = false;
        this._years = 0;
        this._months = 0; // This property is currently unused, but could be added for future purposes
        this._weeks = 0;  // This property is currently unused, but could be added for future purposes
        this._days = 0;   // This property is currently unused, but could be added for future purposes

        // Set up the necessary comparison fields
        this.setHelpingFields();

        // Calculate the total difference in days at the time of instantiation
        this.setTotalDifferenceInDays();
    }

    // Getter for total difference in days
    get totalDifferenceInDays() {
        return this.Difference_In_Days; // Return the already computed value
    }

    // Getter for years difference
    get years() {
        return this._years;
    }

    get months() {
        return this._months
    }

    get weeks() {
        return this._weeks
    }

    get days() {
        return this._days
    }

    // Helper method to calculate the total difference in days
    setTotalDifferenceInDays() {
        const Difference_In_Time = Math.abs(this.date2.getTime() - this.date1.getTime());
        this.Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));  // Convert milliseconds to days
    }

    // Helper method to calculate the difference in years
    calculateDifferenceInYears() {
        if (this.totalDifferenceInDays >= 365) {
            if (this.isSameYear && this.isLeapYear && this.totalDifferenceInDays === 366) {
                this._years = 1;
            } else if (this.isSameYear && !this.isLeapYear && this.totalDifferenceInDays === 365) {
                this._years = 1;
            } else {
                this._years = Math.floor(this.totalDifferenceInDays / 365);
            }
        }
        return this._years;
    }

    calculateDifferenceInMonths() {
        if (this.isSameYear && this.isSameDate) {
            this._months = Math.abs(this.date1.getMonth() - this.date2.getMonth())
        }
        else if (this.isSameDate && this.isSameYear !== true && !this.secondDateislaterMonth) {
            this._months = (this.date2.getMonth() + 12) - this.date1.getMonth()
        }
        else if (this.isSameDate && this.isSameYear !== true && this.secondDateislaterMonth) {
            this._months = (this.date2.getMonth()) - this.date1.getMonth()
        }
        else if (this.secondDateislaterDay) {
            this._months = Math.abs(this.date1.getMonth() - this.date2.getMonth())
        }
        else if (this.secondDateislaterDay !== true && this.isSameYear !== true && !this.secondDateislaterMonth) {
            this._months = (this.date2.getMonth() + 12) - this.date1.getMonth()
            this._months -= 1
        }
        else {
            this._months = Math.abs(this.date2.getMonth() - this.date1.getMonth())
            this._months -= 1
        }

    }

    calculateDifferenceInWeeks() {
        if (this.isSameDate) {
            this._weeks = 0
            this._days = 0
        }
        else if (this.secondDateislaterDay) {
            this._days = this.date2.getDate() - this.date1.getDate()
            this._weeks = Math.floor(this._days / 7)
            this._days = this._days - this._weeks * 7
        }
        else {
            this.calculateSecondDateIsEarlierDate()
        }
    }

    calculateSecondDateIsEarlierDate() {
        if (this.date1.getMonth() > this.date2.getMonth()) {
            const totalDaysInMonth = this.setDaysInMonth(this.date2.getFullYear(), this.date2.getMonth())
            this._days = (totalDaysInMonth - this.date1.getDate()) + this.date2.getDate()
        }
        else {
            const totalDaysInMonth = this.setDaysInMonth(this.date2.getFullYear(), this.date1.getMonth())
            this._days = (totalDaysInMonth - this.date1.getDate()) + this.date2.getDate()

            if (this.date2.getMonth() > 3 && this.isFebruary) {
                const leap_years = this.countLeapYears()
                this._days += leap_years
            }
        }
        this._weeks = Math.floor(this._days / 7)
        this._days = this._days - this._weeks * 7
    }

    // Method to set helper properties based on the dates
    setHelpingFields() {
        this.isSameYear = this.date1.getFullYear() === this.date2.getFullYear();
        this.isSameMonth = this.date1.getMonth() === this.date2.getMonth();
        this.isSameDate = this.date1.getDate() === this.date2.getDate();
        this.isLeapYear = this.isLeapYearForYear(this.date1.getFullYear());  // Check if the first date is in a leap year
        this.secondDateislaterDay = this.date2.getDate() > this.date1.getDate()
        this.secondDateislaterMonth = this.date2.getMonth() > this.date1.getMonth()
        this.isFebruary = this.date2.getMonth() === 1 || this.date1.getMonth() === 1
    }

    // Check if the year of a given date is a leap year
    isLeapYearForYear(year) {
        return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
    }

    setDaysInMonth(year, month) {
        // Month is 0-based (0 = January, 1 = February, ..., 11 = December)
        // Create a new Date object for the first day of the next month
        const date = new Date(year, month + 1, 0); // The day 0 of the next month is the last day of the current month
        return date.getDate();  // Return the day number (which will be the number of days in the current month)
    }

    countLeapYears() {
        // Ensure date1 is earlier than date2

        const startYear = this.date1.getFullYear();
        const endYear = this.date2.getFullYear();

        let leapYearCount = 0;

        for (let year = startYear; year <= endYear; year++) {
            if (this.isLeapYearForYear(year)) {
                leapYearCount++;
            }
        }

        return leapYearCount;
    }
}


const date = new Date()
const dateWithoutTime = date.toLocaleDateString();
console.log(dateWithoutTime)

const parsedDate = new Date("2023-01-07")
const parsedWithoutTime = parsedDate.toLocaleDateString()
console.log(parsedWithoutTime)

// Find total days difference between the two dates:
function getDateDifference(d1, d2) {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    if (date1 > date2) {
        const temp = date1;
        date1 = date2;
        date2 = temp;
    }
    console.log(date1.getMonth(), date2.getMonth())
    const dateCalculator = new DateCalculator(date1, date2)
    const d1WithoutTime = date1.toLocaleDateString()
    const d2WithoutTime = date2.toLocaleDateString()
    console.log(date1, date2)
    if (d1WithoutTime === d2WithoutTime) {
        return "Same dates"
    }
    dateCalculator.setTotalDifferenceInDays()
    dateCalculator.calculateDifferenceInYears()
    dateCalculator.calculateDifferenceInMonths()
    dateCalculator.calculateDifferenceInWeeks()
    const totalDifference = dateCalculator.totalDifferenceInDays
    let years = dateCalculator.years
    let months = dateCalculator.months

    let weeks = dateCalculator._weeks
    let days = dateCalculator._days
    console.log(totalDifference)
    return years.toString() + " years, " + months.toString() + " months, " + weeks.toString() + " weeks, " + days.toString() + " days."
}


const test1 = getDateDifference("2032-03-10", "2025-02-12")
const test2 = getDateDifference("2024-03-10", "2020-02-12")
const test3 = getDateDifference("2031-03-10", "2024-02-12")
const test4 = getDateDifference("2031-03-10", "2025-02-12")
const test5 = getDateDifference("2032-01-10", "2025-02-12")
const test6 = getDateDifference("2024-01-10", "2020-02-12")
const test7 = getDateDifference("2031-01-10", "2024-02-12")
const test8 = getDateDifference("2031-01-10", "2025-02-12")
const test9 = getDateDifference("2032-07-16", "2025-02-12")
const test10 = getDateDifference("2029-07-10", "2024-02-12")
const test11 = getDateDifference("2031-07-10", "2024-02-12")
const test12 = getDateDifference("2031-03-20", "2024-02-12")
const test13 = getDateDifference("2031-03-10", "2024-02-12")
const test14 = getDateDifference("2031-04-10", "2024-02-12")
const test15 = getDateDifference("2031-04-11", "2024-02-12")
const test16 = getDateDifference("2031-04-11", "2024-03-12")
console.log(test1) // 7 years, 0 months, 3 weeks, 6 days.
console.log(test2) // 4 years, 0 months, 3 weeks, 6 days.
console.log(test3) // 7 years, 0 months, 3 weeks, 5 days. 
console.log(test4) // 6 years, 0 months, 3 weeks, 5 days.
console.log(test5) // 6 years, 10 months, 4 weeks, 1 days.
console.log(test6) // 3 years, 10 months, 4 weeks, 1 days.
console.log(test7) // 6 years, 10 months, 4 weeks, 1 days.
console.log(test8) // 5 years, 10 months, 4 weeks, 1 days.
console.log(test9) // 7 years, 5 months, 0 weeks, 4 days.
console.log(test10) // 5 years, 4 months, 4 weeks, 0 days.
console.log(test11) // 5 years, 4 months, 4 weeks, 0 days.
console.log(test12) // 7 years, 1 months, 1 weeks, 1 days.
console.log(test13) // 7 years, 0 months, 3 weeks, 5 days.
console.log(test14) // 7 years, 1 months, 3 weeks, 5 days.
console.log(test15) // 7 years, 1 months, 3 weeks, 5 days.
console.log(test16) // 7 years, 1 months, 3 weeks, 5 days.


