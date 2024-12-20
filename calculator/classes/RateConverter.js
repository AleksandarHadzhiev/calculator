export class RateConverter {
    constructor(baseValue = 0, conversionRate = '') {
        this.baseValue = baseValue
        this.convertedValue = 0
        this.conversionRate = conversionRate
        this.conversionRates = {}
    }

    setConverionRates(newConversionRates) {
        this.conversionRates = newConversionRates
    }
    getConvertedValue() {
        return this.convertedValue
    }

    setNewBaseValue(newBaseValue) {
        this.baseValue = newBaseValue
        this.convertValue()
    }

    setNewConversionRate(newConversionRate,) {
        this.conversionRate = newConversionRate
        this.convertValue()
    }

    convertValue() {
        console.log(this.conversionRates)
        console.log(this.conversionRate)
        const operation = `(${this.baseValue} ${this.conversionRates[this.conversionRate]}`
        console.log(operation)
        this.convertedValue = eval(operation)
    }

}