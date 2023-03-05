import joblib
import pandas as pd

loaded_model = joblib.load('model1.mdl')

example_data = [47.0, 160.0, 263.0, 0.0, 174.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]

X_new = pd.DataFrame(
    [example_data])
X_new.columns = ['Age', 'RestingBP', 'Cholesterol', 'FastingBS', 'MaxHR', 'Oldpeak', 'Sex_F', 'Sex_M',
                 'ChestPainType_ASY', 'ChestPainType_ATA', 'ChestPainType_NAP', 'ChestPainType_TA', 'RestingECG_LVH',
                 'RestingECG_Normal', 'RestingECG_ST', 'ExerciseAngina_N', 'ExerciseAngina_Y', 'ST_Slope_Down',
                 'ST_Slope_Flat', 'ST_Slope_Up']

ynew = loaded_model.predict(X_new)
print(ynew)
# Output = No heart disease