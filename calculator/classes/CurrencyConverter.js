export class CurrencyConverter {

    constructor(baseBalue, conversionRate) {
        this.baseValue = baseBalue
        this.convertedValue = 0
        this.conversionRate = conversionRate
        this.conversionRates = {}
    }

    getConvertedValue() {
        return this.convertedValue
    }

    setNewBaseValue(newBaseValue) {
        this.baseBalue = newBaseValue
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
        this.convertedValue = this.baseBalue * this.conversionRates[this.conversionRate];
        this.convertedValue = Math.round(this.convertedValue * 100) / 100
    }

}
