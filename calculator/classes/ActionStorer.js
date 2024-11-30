export class ActionStorer {
    constructor(storageName) {
        this.storageName = storageName
        this.body = ""
    }

    setName(storageName) {
        this.storageName = storageName;
    }

    setBody(newBody) {
        console.log(newBody)
        this.body = newBody
    }

    createJSONFile() {
        const content = JSON.stringify({ fileName: this.storageName, content: this.body })
        return new Promise((resolve, reject) => {
            const pythonScriptUrl = 'http://localhost:5000/generate_json_file'; // Replace with the actual URL of your Python script

            fetch(pythonScriptUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: content
            })
                .then((response) => {
                    if (response.ok) {
                        resolve('JSON file generated successfully');
                    } else {
                        reject('Error generating JSON file');
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

}
