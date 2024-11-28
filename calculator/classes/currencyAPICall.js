export class GetCurrentCurrencyRatesFromAPI {
    constructor() {
        this.conversionRates = null
        this.apiKey = "62f42b2c414b0673a3024d37"
        this.currencies = ["USD", "EUR", "BGN", "JPY", "AUD", "CAD", "GBP", "EGP", "CNY", "CHF"]
    }

    async fetchCurrencyRates() {
        this.currencies.forEach(async currency => {
            const rates = await this.fetchFromAPI(this.apiKey, currency);
            if (rates) {
                this.fetchNeededRATES(rates, currency)
            }
        });
    };

    async fetchFromAPI(apiKey, base) {
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${base}`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error("Failed to fetch currency rates:", error.message);
        }
    }

    fetchNeededRATES(rates, base) {

        this.currencies.forEach(currency => {
            const key = `${base}-${currency}`
            this.conversionRates[key] = rates.conversion_rates[currency]
        });

    }

    getRates() {
        return this.conversionRates
    }
}
