export class GetTempretureRatesFromJSON {
    constructor() {
        this.conversionRates = {};
        this.lengths = ["CEL", "FAHR", "KEV"];
    }

    async loadRatesFromFile() {
        try {
            // Fetch the JSON file (use relative or absolute path)
            const response = await fetch("./jsonObjects/tempreture.json");
            const rates = await response.json();

            // Structure the conversion rates with the key format "base-length"
            this.lengths.forEach(baseLength => {
                this.lengths.forEach(targetLength => {
                    const key = `${baseLength}-${targetLength}`;
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
