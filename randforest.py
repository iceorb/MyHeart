import numpy as np
import pandas as pd

data = pd.read_csv('heart.csv')
string_col = data.select_dtypes(include="object").columns

df=pd.get_dummies(data,columns=string_col,drop_first=False)

y = df.HeartDisease.values
x_data = df.drop(['HeartDisease'],axis=1)
# print(x_data.shape)
# print(x_data)

# normalization
x = (x_data - x_data.min())/(x_data.max() - x_data.min())
# print(x.shape)
# print(x)

from sklearn.model_selection import train_test_split
x_train, x_test, y_train, y_test = train_test_split(x,y,test_size = 0.2,random_state=25)

from sklearn.ensemble import RandomForestClassifier

rf = RandomForestClassifier(n_estimators=9,random_state=7)

rf.fit(x_train,y_train)

y_pred = rf.predict(x_test)


# Accuracy
print("Accuracy of Renadom Forest: {}\n".format(rf.score(x_test,y_test)))

# print(y_test)
# print(y_pred)