import pandas as pd
import math
import numpy as np
import matplotlib.pyplot as plt
import matplotlib
import sklearn                   
from sklearn import metrics
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import cross_validate,GridSearchCV,ParameterGrid, cross_val_score
from sklearn.model_selection import KFold,RepeatedKFold
import graphviz
df1 = pd.read_csv('full_part1.csv')
df2 = pd.read_csv('full_part2.csv')
target = pd.read_csv('target.csv')

#Create feature 
feature = pd.concat([df1['FIPS'],df1['State'],df1['County'],df1['Food Environment Index'], df1['% Completed High School'], df1['% Some College'], 
                        df1['% Children in Poverty'],df2['% Food Insecure'], df2['Median Household Income']],axis=1)
#Delete state fips headers
feature = feature[feature['County'].notnull()].reset_index()
#Combine and clean NAN
total = pd.concat([target,feature],axis=1)
total = total.dropna().reset_index()
target = total['Value'] 
total = total.drop(columns=['level_0','index','cnty_fips','display_name','Value','FIPS','State','County'])

normal_features = MinMaxScaler().fit_transform(total)
normal_features_df = pd.DataFrame(normal_features,columns=total.columns)

X = normal_features_df
Y = target

split = 0.1

X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size = split)

#RandomForestRegression
forest_reg= RandomForestRegressor(n_estimators=1,bootstrap=False).fit(X_train,Y_train)
Y_train_predict = forest_reg.predict(X_train)    # Make predictions on training data
Y_test_predict = forest_reg.predict(X_test)      # Make predictions on testing data

print(forest_reg.score(X_test,Y_test))


MSE = np.square(np.subtract(Y_train,Y_train_predict)).mean() 
 
RMSE = math.sqrt(MSE)
print("Root Mean Square Error:\n")
print(RMSE)

MSE = np.square(np.subtract(Y_test,Y_test_predict)).mean() 
 
RMSE = math.sqrt(MSE)
print("Root Mean Square Error:\n")
print(RMSE)

def rfr_model(X, y):
# Perform Grid-Search
    gsc = GridSearchCV(
        estimator=RandomForestRegressor(),
        param_grid={
            'n_estimators': (10, 50, 100, 200),
        },
        cv=5, scoring='root_mean_squared_error', verbose=0,n_jobs=-1)
    
    grid_result = gsc.fit(X, y)
    best_params = grid_result.best_params_
    
    rfr = RandomForestRegressor(n_estimators=best_params["n_estimators"],random_state=False, verbose=False)
    scores = cross_val_score(rfr, X, y, cv=10, scoring='neg_mean_absolute_error')

    return scores

from sklearn.metrics import mean_squared_error

# Load your dataset into X and y arrays

# Define the number of folds for cross-validation
k = 20

# Define the random forest regressor model
rf = RandomForestRegressor(n_estimators=100)

# Initialize the KFold cross-validation object
kf = KFold(n_splits=k, shuffle=True, random_state=42)

# Initialize an array to store the mean squared errors for each fold
mse_scores = []

# Loop over the KFold object to perform cross-validation
for train_idx, test_idx in kf.split(X):
    # Split the data into training and testing sets
    X_train, X_test = X.iloc[train_idx], X.iloc[test_idx]
    y_train, y_test = Y[train_idx], Y[test_idx]
    
    # Fit the random forest regressor model on the training data
    rf.fit(X_train, y_train)
    
    # Predict the target variable for the testing data
    y_pred = rf.predict(X_test)
    
    # Calculate the mean squared error for this fold
    mse = mean_squared_error(y_test, y_pred)
    
    # Add the mean squared error to the list of scores
    mse_scores.append(mse)

# Calculate the mean and standard deviation of the mean squared errors
mean_mse = np.mean(mse_scores)
std_mse = np.std(mse_scores)

# Print the mean and standard deviation of the mean squared errors
print("Mean squared error: {:.3f} (± {:.3f})".format(mean_mse, std_mse))