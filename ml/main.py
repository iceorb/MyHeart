from flask import Flask, jsonify, request
from flask_cors import CORS
# from results_return import app as results
from predict_mod1 import load_model1
from predict_mod2 import load_model2

app = Flask(__name__)
CORS(app)

model1_res = 0
model2_res = 0
rec = [-1,-1,-1,-1]


@app.route('/api/form', methods=['POST'])
def form():
    global model1_res, model2_res, rec
    data_json = request.get_json()

    mod1_data = [int(data_json['Age']),
                 int(data_json['RestingBP']),
                 int(data_json['Cholesterol']),
                 1 if data_json['FastingBS'] == "yes" else 0,
                 int(data_json['MaxHR']),
                 int(data_json['Oldpeak']),
                 1 if data_json['Sex'] == "female" else 0,
                 1 if data_json['Sex'] == "male" else 0,
                 1 if data_json['ChestPain'] == "ChestPainType ASY" else 0,
                 1 if data_json['ChestPain'] == "ChestPainType ATA" else 0,
                 1 if data_json['ChestPain'] == "ChestPainType NAP" else 0,
                 1 if data_json['ChestPain'] == "ChestPainType TA" else 0,
                 1 if data_json['RestingECG'] == "RestingECG LVH" else 0,
                 1 if data_json['RestingECG'] == "RestingECG Normal" else 0,
                 1 if data_json['RestingECG'] == "RestingECG ST" else 0,
                 1 if data_json['ExerciseAngina'] == "no" else 0,
                 1 if data_json['ExerciseAngina'] == "yes" else 0,
                 1 if data_json['ST_Slope'] == "ST Slope Down" else 0,
                 1 if data_json['ST_Slope'] == "ST Slope Flat" else 0,
                 1 if data_json['ST_Slope'] == "ST Slope Up" else 0
    ]

    mod2_data = [
        int(data_json['BMI']),
        1 if data_json['Smoking'] == "yes" else 0,
        1 if data_json['AlcoholDrinking'] == "yes" else 0,
        1 if data_json['Stroke'] == "yes" else 0,
        int(data_json['PhysicalHealth']),
        int(data_json['MentalHealth']),
        1 if data_json['DiffWalking'] == "yes" else 0,
        1 if data_json['PhysicalActivity'] == "yes" else 0,
        int(data_json['SleepTime']),
        1 if data_json['Asthma'] == "yes" else 0,
        1 if data_json['KidneyDisease'] == "yes" else 0,
        1 if data_json['SkinCancer'] == "yes" else 0,
        1 if data_json['Sex'] == "female" else 0,
        1 if data_json['Asthma'] == "male" else 0,
        1 if 18 <= int(data_json['Age']) < 25 else 0,
        1 if 25 <= int(data_json['Age']) < 30 else 0,
        1 if 30 <= int(data_json['Age']) < 35 else 0,
        1 if 35 <= int(data_json['Age']) < 40 else 0,
        1 if 40 <= int(data_json['Age']) < 45 else 0,
        1 if 45 <= int(data_json['Age']) < 50 else 0,
        1 if 50 <= int(data_json['Age']) < 55 else 0,
        1 if 55 <= int(data_json['Age']) < 60 else 0,
        1 if 60 <= int(data_json['Age']) < 65 else 0,
        1 if 65 <= int(data_json['Age']) < 70 else 0,
        1 if 70 <= int(data_json['Age']) < 75 else 0,
        1 if 75 <= int(data_json['Age']) < 80 else 0,
        1 if 80 <= int(data_json['Age']) else 0,
        1 if data_json['Race'] == "Race American Indian/Alaskan Native" else 0,
        1 if data_json['Race'] == "Race Asian" else 0,
        1 if data_json['Race'] == "Race Black" else 0,
        1 if data_json['Race'] == "Race Hispanic" else 0,
        1 if data_json['Race'] == "Race Other" else 0,
        1 if data_json['Race'] == "Race White" else 0,
        1 if data_json['Diabetic'] == "Diabetic 0" else 0,
        1 if data_json['Diabetic'] == "Diabetic No, borderline diabetes" else 0,
        1 if data_json['Diabetic'] == "Diabetic 1" else 0,
        1 if data_json['Diabetic'] == "Diabetic Yes (during pregnancy)" else 0,
        1 if data_json['GenHealth'] == "GenHealth Excellent" else 0,
        1 if data_json['GenHealth'] == "GenHealth Fair" else 0,
        1 if data_json['GenHealth'] == "GenHealth Good" else 0,
        1 if data_json['GenHealth'] == "GenHealth Poor" else 0,
        1 if data_json['GenHealth'] == "GenHealth Very Good" else 0,
    ]

    output1 = load_model1(mod1_data)
    output2 = load_model2(mod2_data)

    print(output1)
    print(output2)

    output_final = int(output1[0]) + int(output2[0])

    model1_res = 100 if int(output1[0]) == 1 else 0
    model2_res = 100 if int(output2[0]) == 1 else 0

    from Recommendation import recommend

    # print("Potential problems:")
    rec = recommend('Data/heart_disease_new_cleaned.csv', output_final, mod2_data[1], mod2_data[2], mod2_data[7],
                    mod2_data[8])

    rec[0] = 2 if rec[0] == 1 else rec[0]
    print(rec)
    return {'result': {'model1': model1_res, 'model2': model2_res}, 'flags': {'smoke': rec[0], 'alc': rec[1], 'pa': rec[2], 'sleep': rec[3]}}


@app.route('/data')
def say_hello_world():
    return jsonify({'result': {'model1': model1_res, 'model2': model2_res}, 'flags': {'smoke': rec[0], 'alc': rec[1], 'pa': rec[2], 'sleep': rec[3]}})


if __name__ == '__main__':
    while True:
        app.jinja_env.auto_reload = True
        app.config['TEMPLATES_AUTO_RELOAD'] = True
        app.run(debug=False, host='0.0.0.0')
