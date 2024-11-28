export class CurrencyConverter {

    constructor(baseValue, conversionRate) {
        this.baseValue = baseValue
        this.convertedValue = 0
        this.conversionRate = conversionRate
        this.conversionRates = {}
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

    setConversionRates(newConversionrates) {
        this.conversionRates = newConversionrates
    }

    convertValue() {
        this.convertedValue = this.baseValue * this.conversionRates[this.conversionRate];
        this.convertedValue = Math.round(this.convertedValue * 100) / 100
    }

}
