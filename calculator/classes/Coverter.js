export class Converter {
    constructor(baseBalue, conversionRate) {
        this.baseValue = baseBalue
        this.convertedValue = 0
        this.conversionRate = conversionRate
        this.allowedConversionRates = {}
    }

    convert() {
        this.convertedValue = this.baseBalue * this.conversionRate
    }

    setNewBaseBalue(newBaseValue) {
        this.baseBalue = newBaseValue
        this.convertValue()
    }

    setNewConversionRate(newConversionRate) {
        this.conversionRate = newConversionRate
        this.convertValue()
    }

    convertValue() {
        const action = this.allowedConversionRates[this.conversionRate];
        if (action) {
            return action();
        }
        else {
            throw new Error("Invalid operator");
        }
    }
}