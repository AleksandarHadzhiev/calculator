export class GetCurrentCurrencyRatesFromJSON {
    constructor() {
        this.conversionRates = {};
        this.currencies = ["USD", "EUR", "BGN", "JPY", "AUD", "CAD", "GBP", "EGP", "CNY", "CHF"];
    }

    async loadRatesFromFile() {
        try {
            // Fetch the JSON file (use relative or absolute path)
            const response = await fetch("./jsonObjects/currencies.json");
            const rates = await response.json();

            // Structure the conversion rates with the key format "base-currency"
            this.currencies.forEach(baseCurrency => {
                this.currencies.forEach(targetCurrency => {
                    const key = `${baseCurrency}-${targetCurrency}`;
                    if (rates[key] !== undefined) {
                        this.conversionRates[key] = rates[key];
                    }
                });
            });
        } catch (error) {
            throw new Error("Error loading conversion rates:", error.message);
        }
    }

    getRates() {
        return this.conversionRates;
    }
}

