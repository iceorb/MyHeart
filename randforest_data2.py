import numpy as np
import pandas as pd

data = pd.read_csv('sdoh_clean2.csv')
string_col = data.select_dtypes(include="object").columns

df=pd.get_dummies(data,columns=string_col,drop_first=False)

y = df.Value.values
x_data = df.drop(['Value'],axis=1)
# print(x_data.shape)
# print(x_data)

# normalization
x = (x_data - x_data.min())/(x_data.max() - x_data.min())
# y = (y_data - np.min(y_data))/(np.max(y_data) - np.min(y_data))
# print(x)

from sklearn.model_selection import train_test_split
x_train, x_test, y_train, y_test = train_test_split(x,y,test_size = 0.2,random_state=25)

from sklearn.ensemble import RandomForestRegressor

rf = RandomForestRegressor(random_state=2, n_estimators=25)

rf.fit(x_train,y_train)

y_pred = rf.predict(x_test)


# Accuracy
print("Accuracy of Random Forest: {}\n".format(rf.score(x_test,y_test)))

# print(y_test)
# print(y_pred)