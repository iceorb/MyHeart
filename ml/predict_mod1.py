import joblib
import pandas as pd


def load_model1(data):
    loaded_model = joblib.load('Models/model1.mdl')

    # data = [47.0, 160.0, 263.0, 0.0, 174.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]

    X_new = pd.DataFrame(
        [data])
    X_new.columns = ['Age', 'RestingBP', 'Cholesterol', 'FastingBS', 'MaxHR', 'Oldpeak', 'Sex_F', 'Sex_M',
                     'ChestPainType_ASY', 'ChestPainType_ATA', 'ChestPainType_NAP', 'ChestPainType_TA', 'RestingECG_LVH',
                     'RestingECG_Normal', 'RestingECG_ST', 'ExerciseAngina_N', 'ExerciseAngina_Y', 'ST_Slope_Down',
                     'ST_Slope_Flat', 'ST_Slope_Up']

    ynew = loaded_model.predict(X_new)
    # Output = No heart disease
    return ynew
