import { Converter } from "./Coverter.js";

export class CurrencyConverter extends Converter {
    constructor(baseBalue, conversionRate) {
        super(baseBalue, conversionRate)
        this.conversionRates = {}
        this.allowedConversionRates['EUR-USD'] = this.convertEUROToUSD.bind(this)
        this.allowedConversionRates['USD-EUR'] = this.convertUSDToEURO.bind(this)
        this.allowedConversionRates['EUR-BGN'] = this.convertEUROToBGN.bind(this)
        this.allowedConversionRates['BGN-EUR'] = this.convertBGNToEURO.bind(this)
        this.allowedConversionRates['JPY-USD'] = this.convertYENToUSD.bind(this)
        this.allowedConversionRates['USD-JPY'] = this.convertUSDToYEN.bind(this)
        this.allowedConversionRates['USD-BGN'] = this.convertUSDToBGN.bind(this)
        this.allowedConversionRates['BGN-USD'] = this.convertBGNToUSD.bind(this)
        this.allowedConversionRates['EUR-JPY'] = this.convertEUROToYEN.bind(this)
        this.allowedConversionRates['JPY-EUR'] = this.convertYENToEURO.bind(this)
        this.allowedConversionRates['BGN-JPY'] = this.convertBGNToYEN.bind(this)
        this.allowedConversionRates['JPY-BGN'] = this.convertYENToBGN.bind(this)
        this.allowedConversionRates['USD-USD'] = this.noConvertionRequired.bind(this)
        this.allowedConversionRates['EUR-EUR'] = this.noConvertionRequired.bind(this)
        this.allowedConversionRates['BGN-BGN'] = this.noConvertionRequired.bind(this)
        this.allowedConversionRates['JPY-JPY'] = this.noConvertionRequired.bind(this)
    }

    setConversionRates(newConversionrates) {
        this.conversionRates = newConversionrates
    }

    convertEUROToUSD() {
        this.convertedValue = this.baseBalue * this.conversionRates['EUR-USD'];
        this.convertedValue = Math.round(this.convertedValue * 100) / 100
    }

    convertUSDToEURO() {
        this.convertedValue = this.baseBalue * this.conversionRates['USD-EUR'];
        this.convertedValue = Math.round(this.convertedValue * 100) / 100
    }

    convertEUROToYEN() {
        this.convertedValue = this.baseBalue * this.conversionRates['EUR-JPY'];
        this.convertedValue = Math.round(this.convertedValue * 100) / 100
    }

    convertYENToEURO() {
        this.convertedValue = this.baseBalue * this.conversionRates['JPY-EUR'];
        this.convertedValue = Math.round(this.convertedValue * 100) / 100
    }

    convertBGNToYEN() {
        this.convertedValue = this.baseBalue * this.conversionRates['BGN-JPY'];
        this.convertedValue = Math.round(this.convertedValue * 100) / 100
    }

    convertYENToBGN() {
        this.convertedValue = this.baseBalue * this.conversionRates['JPY-BGN'];
        this.convertedValue = Math.round(this.convertedValue * 100) / 100
    }

    convertEUROToBGN() {
        this.convertedValue = this.baseBalue * this.conversionRates['EUR-BGN'];
        this.convertedValue = Math.round(this.convertedValue * 100) / 100
    }

    convertBGNToEURO() {
        this.convertedValue = this.baseBalue * this.conversionRates['BGN-EUR'];
        this.convertedValue = Math.round(this.convertedValue * 100) / 100
    }

    convertUSDToBGN() {
        this.convertedValue = this.baseBalue * this.conversionRates['USD-BGN'];
        this.convertedValue = Math.round(this.convertedValue * 100) / 100
    }

    convertBGNToUSD() {
        this.convertedValue = this.baseBalue * this.conversionRates['BGN-USD'];
        this.convertedValue = Math.round(this.convertedValue * 100) / 100

    }


    convertUSDToYEN() {
        this.convertedValue = this.baseBalue * this.conversionRates['USD-JPY'];
        this.convertedValue = Math.round(this.convertedValue * 100) / 100

    }

    convertYENToUSD() {
        this.convertedValue = this.baseBalue * this.conversionRates['JPY-USD'];
        this.convertedValue = Math.round(this.convertedValue * 100) / 100
    }

    noConvertionRequired() {
        this.convertedValue = this.baseBalue
    }
}
