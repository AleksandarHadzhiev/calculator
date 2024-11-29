import { GetAngleRatesFromJSON } from "./angleJSONfile.js"

export class AngleConverter {
    constructor(baseValue, conversionRate) {
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
        const operation = `${this.baseValue} ${this.conversionRates[this.conversionRate]}`
        console.log(operation)
        this.convertedValue = eval(operation)
    }

}