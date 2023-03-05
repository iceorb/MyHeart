import joblib
import pandas as pd

loaded_model = joblib.load('Models/model2.mdl')

# Example data placeholder BMI	Smoking	AlcoholDrinking	Stroke	PhysicalHealth	MentalHealth	DiffWalking	Sex
# AgeCategory	Race	Diabetic	PhysicalActivity	GenHealth	SleepTime	Asthma	KidneyDisease	SkinCancer
# 26.43     1	0               0	        30	        15	        1	            Female
# 70-74	White	    1	  0	                Poor	    6	        0	    1	                0

example_data = [26.43,1,0,0,30,15,1,0,6,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0]

X_new = pd.DataFrame([example_data])
X_new.columns = ['BMI', 'Smoking', 'AlcoholDrinking', 'Stroke', 'PhysicalHealth', 'MentalHealth', 'DiffWalking',
                 'PhysicalActivity', 'SleepTime', 'Asthma', 'KidneyDisease', 'SkinCancer', 'Sex_Female', 'Sex_Male',
                 'AgeCategory_18-24', 'AgeCategory_25-29', 'AgeCategory_30-34', 'AgeCategory_35-39',
                 'AgeCategory_40-44', 'AgeCategory_45-49', 'AgeCategory_50-54', 'AgeCategory_55-59',
                 'AgeCategory_60-64', 'AgeCategory_65-69', 'AgeCategory_70-74', 'AgeCategory_75-79',
                 'AgeCategory_80 or older', 'Race_American Indian/Alaskan Native', 'Race_Asian', 'Race_Black',
                 'Race_Hispanic', 'Race_Other', 'Race_White', 'Diabetic_0', 'Diabetic_1',
                 'Diabetic_No, borderline diabetes', 'Diabetic_Yes (during pregnancy)', 'GenHealth_Excellent',
                 'GenHealth_Fair', 'GenHealth_Good', 'GenHealth_Poor', 'GenHealth_Very good']

ynew = loaded_model.predict(X_new)
print(ynew)
# output = 1 (yes: heart disease)
