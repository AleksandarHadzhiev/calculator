export class DateDifferenceCalculator {
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
