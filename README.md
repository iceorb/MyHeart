# MyHeart
MyHeart is a proof-of-concept web application that empowers patients to take control of their own health by submitting healthcare information such as biological, behavioral, and socioeconomic factors. The focus of MyHeart is on addressing socioeconomic factors that can contribute to the development of various health conditions, including heart disease.

## Technology
MyHeart uses three models to provide personalized recommendations and risk assessments for users:

Biological Model 1
Biological Model 2
Community-based Risk Model

The application is built using React, Node.js, NextUI, and REST APIs for the web app, and Python with scikit-learn for the backend. MyHeart uses K-Folding to evaluate the performance of each model and to determine the best parameters.

## Dataset
We trained and demonstrated the model using two sample datasets obtained from Kaggle. While these datasets were not perfect, they are representative of the types of data that companies such as Epic might have access to.

Dataset 1: Contains just over 900 data points and scores around 87% on the accuracy test.
Dataset 2: Contains around 32,000 data points and has a consistent accuracy of about 91.5%.

## Model
We used two datasets that use different metrics to predict the risk of heart disease. Using these datasets, we were able to run a K-fold logistic regression model to predict whether the user was at low, moderate, or high risk of heart disease. By combining these two datasets, with a total of approximately 33,000 entries, we can give our prediction with 90% confidence.

## Getting Started
To get started with MyHeart, simply clone the repository and install the necessary dependencies:

```
bash
Copy code
git clone https://github.com/icexorb/myheart.git
cd myheart
npm install
```

You will also need to install the necessary Python dependencies:
```
bash
Copy code
pip install scikit-learn
```

Once you have installed the dependencies, start the server:
```bash
Copy code
npm start
```

You can then access the application by navigating to http://localhost:3000 in your web browser.

## Usage

To use the MyHeart model, simply submit your healthcare information, including biological, behavioral, and socioeconomic factors. The MyHeart model will then give you proactive suggestions and information to improve your cardiovascular health.

## License
MyHeart is licensed under the MIT License. See LICENSE for more information.
