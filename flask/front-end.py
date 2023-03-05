from predict_mod1 import load_model1
from predict_mod2 import load_model2

from flask import Flask
from flask import request, jsonify

app = Flask(__name__, static_folder='web/src')

# Serve React App
@app.route('/data', methods=["GET", "POST"])
def add_entry():
    print("1")
    input_json = request.json
    print(input_json)
    mod1_data = [47.0, 160.0, 263.0, 0.0, 174.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0,
                 1.0]
    mod2_data = [26.43, 1, 0, 0, 30, 15, 1, 0, 6, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
                 1, 0, 1, 0, 0, 0, 0, 0, 1, 0]
    output1 = load_model1(mod1_data)
    output2 = load_model2(mod2_data)

    output_final = int(output1[0]) + int(output2[0])

    return jsonify(output_final)

app.run(port=5000)
# @app.route("/", methods=["GET", "POST"])
# def home():
#     mod1_data = [47.0, 160.0, 263.0, 0.0, 174.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0,
#                  1.0]
#     mod2_data = [26.43, 1, 0, 0, 30, 15, 1, 0, 6, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
#                  1, 0, 1, 0, 0, 0, 0, 0, 1, 0]
#     output1 = load_model1(mod1_data)
#     output2 = load_model2(mod2_data)
#
#     output_final = int(output1[0]) + int(output2[0])
#
#     return jsonify(output_final)



