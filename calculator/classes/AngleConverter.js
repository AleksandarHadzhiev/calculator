import { GetAngleRatesFromJSON } from "./angleJSONfile.js"

export class AngleConverter {
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
        const getTempFromJSON = new GetAngleRatesFromJSON()
        getTempFromJSON.loadRatesFromFile()
        this.conversionRates = getTempFromJSON.getRates()
    }

    convertValue() {
        console.log(this.conversionRate)
        const operation = `${this.baseValue} ${this.conversionRates[this.conversionRate]}`
        console.log(operation)
        this.convertedValue = eval(operation)
    }

}