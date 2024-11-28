import { Converter } from "./Coverter.js";

export class CurrencyConverter {
    constructor(baseBalue, conversionRate) {
        super(baseBalue, conversionRate)
        this.allowedConversionRates['euro-usd'] = this.convertCurrency.bind(this)
        this.allowedConversionRates['usd-euro'] = this.convertCurrency.bind(this)
        this.allowedConversionRates['euro-leva'] = this.convertCurrency.bind(this)
        this.allowedConversionRates['leva-euro'] = this.convertCurrency.bind(this)
        this.allowedConversionRates['yen-usd'] = this.convertCurrency.bind(this)
        this.allowedConversionRates['usd-yen'] = this.convertCurrency.bind(this)
        this.allowedConversionRates['euro-yen'] = this.convertCurrency.bind(this)
        this.allowedConversionRates['yen-euro'] = this.convertCurrency.bind(this)
    }
}