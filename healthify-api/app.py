import pickle
import numpy as np
from flask import Flask, request
from sklearn import svm

app = Flask(__name__)

DIABETES_MODEL = 'models/diabetes_model.pkl'
HYPERTENSION_MODEL = 'models/hypertension_model.pkl'
CARDIOVASCULAR_MODEL = 'models/cardiovascular_model.pkl'

with open(DIABETES_MODEL, 'rb') as f:
    diabetes_model = pickle.load(f)

with open(HYPERTENSION_MODEL, 'rb') as f:
    hypertension_model = pickle.load(f)

with open(CARDIOVASCULAR_MODEL, 'rb') as f:
    cardiovascular_model = pickle.load(f)

@app.route('/diabetes', methods=['POST'])
def diabetes():
    data = request.get_json()

    pregnancies = data['pregnancies']
    glucose = data['glucose']
    blood_pressure = data['blood_pressure']
    skin_thickness = data['skin_thickness']
    insulin = data['insulin']
    bmi = data['bmi']
    diabetes_pedigree_function = data['diabetes_pedigree_function']
    age = data['age']
    
    array_data = [pregnancies, glucose, blood_pressure, skin_thickness, insulin, bmi, diabetes_pedigree_function, age]
    prediction = diabetes_model.predict(np.array(array_data).reshape(1, -1))
    result = int(prediction[0])
    
    return {'prediction': result}

@app.route('/hypertension', methods=['POST'])
def hypertension():
    data = request.get_json()

    folio = 2022_01001004
    sex = data['sex']
    age = data['age']
    hemoglobin = data['hemoglobin']
    acid_uric = data['acid_uric']
    cholesterol = data['cholesterol']
    glucose = data['glucose']
    insulin = data['insulin']
    triglycerides = data['triglycerides']
    weight = data['weight']
    height = data['height']
    waist = data['waist']
    blood_pressure = data['blood_pressure']
    sleep_hours = data['sleep_hours']
    bmi = data['bmi']
    total_activity = data['total_activity']

    array_data = [folio, sex, age, hemoglobin, acid_uric, cholesterol, glucose, insulin, triglycerides, weight, height, waist, blood_pressure, sleep_hours, bmi, total_activity]
    prediction = hypertension_model.predict(np.array(array_data).reshape(1, -1))
    result = int(prediction[0])

    return {'prediction': result}

@app.route('/cardiovascular', methods=['POST'])
def cardiovascular():
    data = request.get_json()

    weight = data['weight']
    ap_hi = data['ap_hi']
    ap_lo = data['ap_lo']
    cholesterol = data['cholesterol']
    gluc = data['gluc']
    smoke = data['smoke']
    alco = data['alco']
    active = data['active']
    age = data['age']
    gender = data['gender']
    height = data['height']

    array_data = [weight, ap_hi, ap_lo, cholesterol, gluc, smoke, alco, active, age, gender, height]
    prediction = cardiovascular_model.predict(np.array(array_data).reshape(1, -1))
    result = int(prediction[0])

    return {'prediction': result}

@app.route('/test', methods=['POST'])
def test():
    data = request.get_json()
    return {'prediction': data['test']}

if __name__ == '__main__':
    app.run(debug=True)
