from flask import Flask, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "https://nn-exe.github.io"}})

with open('products.json') as f:
    products = json.load(f)

@app.route('/api/products', methods=['GET'])
def get_products():
    return jsonify(products)

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)