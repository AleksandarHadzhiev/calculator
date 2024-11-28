import { GetTempretureRatesFromJSON } from "./tempretureJSONfile.js"

export class TempretureConverter {
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

    loadRates() {
        const getTempFromJSON = new GetTempretureRatesFromJSON()
        getTempFromJSON.loadRatesFromFile()
        this.conversionRates = getTempFromJSON.getRates()
    }

    convertValue() {
        const operation = `(${this.baseValue} ${this.conversionRates[this.conversionRate]}`
        this.convertedValue = eval(operation)
    }

}