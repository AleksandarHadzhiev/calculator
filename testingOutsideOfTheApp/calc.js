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

// Example Usage
const diff = new DateDifference("2031-04-10", "2024-02-12");
const result = diff.getDifference();
const test1 = new DateDifference("2032-03-10", "2025-02-12") // v
const test2 = new DateDifference("2024-03-10", "2020-02-12") // v
const test3 = new DateDifference("2031-03-10", "2024-02-12") // v
const test4 = new DateDifference("2031-03-10", "2025-02-12") // v
const test5 = new DateDifference("2032-01-10", "2025-02-12") // v
const test6 = new DateDifference("2024-01-10", "2020-02-12") // v
const test7 = new DateDifference("2031-01-10", "2024-02-12") // v
const test8 = new DateDifference("2031-01-10", "2025-02-12") // v
const test9 = new DateDifference("2032-07-16", "2025-02-12") // v
const test10 = new DateDifference("2029-07-10", "2024-02-12") // v
const test11 = new DateDifference("2031-07-10", "2024-02-12") // v
const test12 = new DateDifference("2031-03-20", "2024-02-12") // v
const test13 = new DateDifference("2031-03-10", "2024-02-12") // v
const test14 = new DateDifference("2031-04-10", "2024-02-12") // v
const test15 = new DateDifference("2031-04-11", "2024-02-12") // v
const test16 = new DateDifference("2031-04-11", "2024-03-12") // v
console.log(test1.getDifference()) // 7 years, 0 months, 3 weeks, 6 days.
console.log(test2.getDifference()) // 4 years, 0 months, 3 weeks, 6 days.
console.log(test3.getDifference()) // 7 years, 0 months, 3 weeks, 5 days. 
console.log(test4.getDifference()) // 6 years, 0 months, 3 weeks, 5 days.
console.log(test5.getDifference()) // 6 years, 10 months, 4 weeks, 1 days.
console.log(test6.getDifference()) // 3 years, 10 months, 4 weeks, 1 days.
console.log(test7.getDifference()) // 6 years, 10 months, 4 weeks, 1 days.
console.log(test8.getDifference()) // 5 years, 10 months, 4 weeks, 1 days.
console.log(test9.getDifference()) // 7 years, 5 months, 0 weeks, 4 days.
console.log(test10.getDifference()) // 5 years, 4 months, 4 weeks, 0 days.
console.log(test11.getDifference()) // 5 years, 4 months, 4 weeks, 0 days.
console.log(test12.getDifference()) // 7 years, 1 months, 1 weeks, 1 days.
console.log(test13.getDifference()) // 7 years, 0 months, 3 weeks, 5 days.
console.log(test14.getDifference()) // 7 years, 1 months, 3 weeks, 5 days.
console.log(test15.getDifference()) // 7 years, 1 months, 3 weeks, 5 days.
console.log(test16.getDifference()) // 7 years, 1 months, 3 weeks, 5 days.

console.log(
    `Difference: ${result.years} years, ${result.months} months, ${result.weeks} weeks, ${result.days} days`
);
