from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import numpy as np

app = Flask(__name__)
model = load_model('models/financial_model.h5')

@app.route('/predict', methods=['POST'])
def predict():
  data = request.get_json(force=True)
  prediction = model.predict(np.array([data['income'], data['expenses'], data['assets'], data['liabilities']]).reshape(1, -1))
  return jsonify({'financial_health': prediction[0][0]})

if __name__ == '__main__':
  app.run(port=5001, debug=True)
