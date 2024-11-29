
export async function loadRatesFromFile(lengths, jsonFileName) {
    let conversionRates = {}
    try {
        const response = await fetch(jsonFileName);
        const rates = await response.json();

        // Structure the conversion rates with the key format "base-length"
        lengths.forEach(baseLength => {
            lengths.forEach(targetLength => {
                const key = `${baseLength}_${targetLength}`;
                if (rates[key] !== undefined) {
                    conversionRates[key] = rates[key];
                }
            });
        });
        return conversionRates
    } catch (error) {
        throw new Error("Error loading conversion rates:", error.message);
    }
}


