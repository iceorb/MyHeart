from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.model_selection import KFold

import pandas as pd


def train(file):
    data = pd.read_csv(file)
    string_col = data.select_dtypes(include="object").columns

    df=pd.get_dummies(data,columns=string_col,drop_first=False)

    kf5 = KFold(n_splits=5, shuffle=True, random_state=123)

    model = LogisticRegression(solver="liblinear", multi_class="auto")

    i = 1
    for train_index, test_index in kf5.split(df):
        X_train = df.iloc[train_index].drop('HeartDisease', axis=1)
        X_test = df.iloc[test_index].drop('HeartDisease', axis=1)
        y_train = df.iloc[train_index]['HeartDisease']
        y_test = df.loc[test_index]['HeartDisease']

        # Train the model
        model.fit(X_train, y_train)  # Training the model
        print(f"Accuracy for the fold no. {i} on the test set: {accuracy_score(y_test, model.predict(X_test))}")
        i += 1


if __name__ == '__main__':
    # Data1
    train('heart.csv')
    # Data3
    train('heart_disease_new_cleaned.csv')
