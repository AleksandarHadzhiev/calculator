export class DateCalculator {
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