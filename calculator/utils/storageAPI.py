import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

def generate_json_file(file_name, data):
    file_name = f"{file_name}.json"
    
    if os.path.exists(file_name):
        with open(file_name, 'r') as file:
            existing_data = json.load(file)
    else:
        existing_data = []

    existing_data.append(data)

    with open(file_name, 'w') as file:
        json.dump(existing_data, file, indent=2)



@app.route('/generate_json_file', methods=['POST'])
def generate_json():
    data = request.get_json()
    print(data)
    file_name = data.get('fileName')
    json_data = data.get('content')

    try:
        generate_json_file(file_name, json_data)
        return jsonify({'message': 'JSON file generated successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(port=5000)