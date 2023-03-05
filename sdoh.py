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
from sklearn.model_selection import cross_validate,GridSearchCV,ParameterGrid
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



MSE = np.square(np.subtract(Y_train,Y_train_predict)).mean() 
 
RMSE = math.sqrt(MSE)
print("Root Mean Square Error:\n")
print(RMSE)

MSE = np.square(np.subtract(Y_test,Y_test_predict)).mean() 
 
RMSE = math.sqrt(MSE)
print("Root Mean Square Error:\n")
print(RMSE)

number_of_trees = [1,10,25,50]

### MAKE EDITS ABOVE HERE ###

opt_dict = {'n_estimators':number_of_trees,'bootstrap':['True']}
# kfold = KFold(n_splits=5,random_state=seed,shuffle=True)
kfold = RepeatedKFold(n_splits=5,
                      n_repeats=5)


CV = GridSearchCV(total,# 1. the model whose hyperparamter is being optimized right now
                  opt_dict,   # 2. a dictionary of values that we want the grid search to use
                  cv=kfold,   # 4. k-fold cross-validation strategy is used to define training and validation splits (note this is separate from test splits) to be used for each grid point
                  return_train_score=True,
                  scoring=['neg_mean_squared_error','r2','neg_mean_absolute_error'], # 5. the performance metrics to be reported at each grid point specified in opt_dict
                  refit='neg_mean_squared_error')

# perform grid search

CV = CV.fit(X_train,Y_train)


# print results
print(CV.best_params_)