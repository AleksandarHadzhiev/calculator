export class GetCurrentCurrencyRates {
    constructor() {
        this.conversionRates = {}
        this.apiKey = "62f42b2c414b0673a3024d37"
    }

    async fetchCurrencyRates() {
        const USDBase = "USD"
        const EURBase = "EUR"
        const BGNBase = "BGN"
        const YENBase = "JPY"
        const USDRates = await this.fetchFromAPI(this.apiKey, USDBase);
        const EURRates = await this.fetchFromAPI(this.apiKey, EURBase);
        const BGNRates = await this.fetchFromAPI(this.apiKey, BGNBase);
        const YENRates = await this.fetchFromAPI(this.apiKey, YENBase);

        if (USDRates) {
            this.fetchNeededRATES(USDRates, USDBase)
            this.fetchNeededRATES(EURRates, EURBase)
            this.fetchNeededRATES(BGNRates, BGNBase)
            this.fetchNeededRATES(YENRates, YENBase)
        }
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
        const desiredRates = ['BGN', 'EUR', 'USD', 'JPY']

        desiredRates.forEach(rate => {
            const key = `${base}-${rate}`
            this.conversionRates[key] = rates.conversion_rates[rate]
        });

    }

    getRates() {
        return this.conversionRates
    }
}
