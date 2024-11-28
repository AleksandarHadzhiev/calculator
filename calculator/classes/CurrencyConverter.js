import { Converter } from "./Coverter.js";

export class CurrencyConverter extends Converter {
    constructor(baseBalue, conversionRate) {
        super(baseBalue, conversionRate)
        this.allowedConversionRates['euro-usd'] = this.convertEUROToUSD.bind(this)
        this.allowedConversionRates['usd-euro'] = this.convertUSDToEURO.bind(this)
        this.allowedConversionRates['euro-leva'] = this.convertEUROToBGN.bind(this)
        this.allowedConversionRates['leva-euro'] = this.convertBGNToEURO.bind(this)
        this.allowedConversionRates['yen-usd'] = this.convertYENToUSD.bind(this)
        this.allowedConversionRates['usd-yen'] = this.convertUSDToYEN.bind(this)
        this.allowedConversionRates['usd-leva'] = this.convertUSDToBGN.bind(this)
        this.allowedConversionRates['leva-usd'] = this.convertBGNToUSD.bind(this)
        this.allowedConversionRates['euro-yen'] = this.convertEUROToYEN.bind(this)
        this.allowedConversionRates['yen-euro'] = this.convertYENToEURO.bind(this)
        this.allowedConversionRates['leva-yen'] = this.convertBGNToYEN.bind(this)
        this.allowedConversionRates['yen-leva'] = this.convertYENToBGN.bind(this)
        this.allowedConversionRates['usd-usd'] = this.noConvertionRequired.bind(this)
        this.allowedConversionRates['euro-euro'] = this.noConvertionRequired.bind(this)
        this.allowedConversionRates['leva-leva'] = this.noConvertionRequired.bind(this)
        this.allowedConversionRates['yen-yen'] = this.noConvertionRequired.bind(this)
    }

    convertEUROToUSD() {
        this.convertedValue = this.baseBalue * 1.05;
        console.log(this.convertedValue)
    }

    convertUSDToEURO() {
        this.convertedValue = this.baseBalue * 0.95;
        console.log(this.convertedValue)
    }

    convertEUROToYEN() {
        this.convertedValue = this.baseBalue * 160.01;
        console.log(this.convertedValue)
    }

    convertYENToEURO() {
        this.convertedValue = this.baseBalue * 0.0062;
        console.log(this.convertedValue)
    }

    convertBGNToYEN() {
        this.convertedValue = this.baseBalue * 81.84;
        console.log(this.convertedValue)
    }

    convertYENToBGN() {
        this.convertedValue = this.baseBalue * 0.012;
        console.log(this.convertedValue)
    }

    convertEUROToBGN() {
        this.convertedValue = this.baseBalue * 1.96;
        console.log(this.convertedValue)
    }

    convertBGNToEURO() {
        this.convertedValue = this.baseBalue * 0.51;
        console.log(this.convertedValue)
    }

    convertUSDToBGN() {
        this.convertedValue = this.baseBalue * 1.86;
        console.log(this.convertedValue)
    }

    convertBGNToUSD() {
        this.convertedValue = this.baseBalue * 0.54;
        console.log(this.convertedValue)
    }


    convertUSDToYEN() {
        this.convertedValue = this.baseBalue * 151.85;
        console.log(this.convertedValue)
    }

    convertYENToUSD() {
        this.convertedValue = this.baseBalue * 0.0066;
        console.log(this.convertedValue)
    }

    noConvertionRequired() {
        this.convertedValue = this.baseBalue
    }
}