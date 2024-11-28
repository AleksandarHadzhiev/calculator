import { Converter } from "./Coverter.js";

export class CurrencyConverter extends Converter {
    constructor(baseBalue, conversionRate) {
        super(baseBalue, conversionRate)
        this.allowedConversionRates['euro-usd'] = this.convertEUROToUSD.bind(this)
        this.allowedConversionRates['usd-euro'] = this.convertUSDToEURO.bind(this)
        //     this.allowedConversionRates['euro-leva'] = this.convertCurrency.bind(this)
        //     this.allowedConversionRates['leva-euro'] = this.convertCurrency.bind(this)
        //     this.allowedConversionRates['yen-usd'] = this.convertCurrency.bind(this)
        //     this.allowedConversionRates['usd-yen'] = this.convertCurrency.bind(this)
        //     this.allowedConversionRates['euro-yen'] = this.convertCurrency.bind(this)
        //     this.allowedConversionRates['yen-euro'] = this.convertCurrency.bind(this)
    }

    convertEUROToUSD() {
        this.convertedValue = this.baseBalue * 1.05;
        console.log(this.convertedValue)
    }

    convertUSDToEURO() {
        this.convertedValue = this.baseBalue * 0.95;
        console.log(this.convertedValue)
    }
}