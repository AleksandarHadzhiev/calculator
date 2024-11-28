export class Converter {
    constructor(baseBalue, conversionRate) {
        this.baseValue = baseBalue
        this.convertedValue = 0
        this.conversionRate = conversionRate
        this.allowedConversionRates = {}
    }

    converValue() {
        const action = this.allowedConversionRates[this.conversionRate];
        if (action) {
            return action();
        }
        else {
            throw new Error("Invalid operator");
        }
    }
}