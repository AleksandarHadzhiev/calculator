class DateCalculator {
    constructor(date1) {
        this.date1 = new Date(date1);
        this.year = this.date1.getFullYear();
        this.month = this.date1.getMonth();
        this.day = this.date1.getDate();
    }

    addYears(yearsToAdd) {
        this.year += yearsToAdd;
    }

    subsractYears(yearsToSubstract) {
        this.year -= yearsToSubstract
    }

    addMonths(monthsToAdd) {
        if (this.month + monthsToAdd <= 12)
            this.month += monthsToAdd;
        else {
            const months = this.month + monthsToAdd
            const years = Math.floor(months / 12)
            this.month = months - years * 12
            this.addYears(years)
        }
    }

    subsractMonths(monthsToSubstract) {
        this.month -= monthsToSubstract
        if (this.month - monthsToSubstract >= 1)
            this.month -= monthsToSubstract;
        else {
            const months = Math.abs(this.month - monthsToSubstract)
            const years = Math.floor(months / 12)
            this.month = months - years * 12
            this.subsractYears(years)
        }
    }

    addDays(daysToAdd) {
        this.day += daysToAdd;
    }

    subsractDays(daysToSubstract) {
        this.day -= daysToSubstract
    }

}