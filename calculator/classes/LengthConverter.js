import { GetLengthsRatesFromJSON } from "./lengthsJSONfile.js"

export class LengthConverter {
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

    loadRates() {
        const getLengthsFromJSON = new GetLengthsRatesFromJSON()
        getLengthsFromJSON.loadRatesFromFile()
        this.conversionRates = getLengthsFromJSON.getRates()
    }

    convertValue() {
        const operation = this.baseBalue.toString() + this.conversionRates[this.conversionRate]
        this.convertedValue = eval(operation)
        this.convertedValue = Math.round(this.convertedValue * 100) / 100
    }
}