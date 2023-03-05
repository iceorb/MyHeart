from predict_mod1 import load_model1
from predict_mod2 import load_model2

mod1_data = [47.0, 160.0, 263.0, 0.0, 174.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0,
             1.0]
mod2_data = [26.43, 1, 0, 0, 30, 15, 1, 0, 6, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
             1, 0, 1, 0, 0, 0, 0, 0, 1, 0]

entries1 = ['Age', 'RestingBP', 'Cholesterol', 'FastingBS', 'MaxHR', 'Oldpeak', 'Sex',
                     'ChestPainType', 'RestingECG', 'ExerciseAngina', 'ST_Slope']
entries2 = ['BMI', 'Smoking', 'AlcoholDrinking', 'Stroke', 'PhysicalHealth', 'MentalHealth', 'DiffWalking',
                     'PhysicalActivity', 'SleepTime', 'Asthma', 'KidneyDisease', 'SkinCancer', 'Sex',
                     'AgeCategory', 'Race', 'Diabetic', 'GenHealth']

print("Data points to be inputted by the user:")
print(entries1)
print(entries2)

print("")
print("Sample Data:")

print(mod1_data)
print(mod2_data)


output1 = load_model1(mod1_data)
output2 = load_model2(mod2_data)

output_final = int(output1[0]) + int(output2[0])

print(" ")
if output_final == 0:
    print("LOW RISK OF HEART DISEASE")

elif output_final == 1:
    print("MODERATE RISK OF HEART DISEASE")

elif output_final == 2:
    print("HIGH RISK OF HEART DISEASE")

else:
    print("Invalid")

from Recommendation import recommend

print(recommend('flask/Data/heart_disease_new_cleaned.csv',output_final, mod2_data[1], mod2_data[2], mod2_data[7], mod2_data[8]))


