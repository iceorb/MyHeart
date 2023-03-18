# MyHeart
***Built and demoed at MadHacks 2023***

***Winner of Epic Systems Healthcare Empowerment Award***


MyHeart is a proof-of-concept web application that empowers patients to take control of their own health by providing personalized recommendations and risk assessments for users based on three separate ML models.

Built by 4 UW-Madison students at their first-ever hackathon, MyHeart meets at the intersection of machine learning, healthcare, and social good. Drawing from research done by New York University's School of Medicine, machine learning was combined with [social determinants of health](https://health.gov/healthypeople/priority-areas/social-determinants-health) to better contextualize the community and environmental factors that can impact an individual's cardiovascular health. The resulting technology allows healthcare professionals to provide more personalized and effective care to patients, while also addressing broader public health concerns related to social inequalities and access to care.

## Preview

[**Try out the demo!**](https://icexorb.github.io/myheart/)

<img src="https://github.com/icexorb/myheart/blob/main/Demo/image1.png?raw=true" width="720"/>
<img src="https://github.com/icexorb/myheart/blob/main/Demo/image3.png?raw=true" width="720"/>
<img src="https://github.com/icexorb/myheart/blob/main/Demo/image2.png?raw=true" width="720"/>

## Technology
MyHeart uses three models to provide personalized recommendations and risk assessments for users:
- Biological Model 
- Behavorial Model 
- Community-based Risk Model

The application is built using React, Node.js, NextUI, and REST APIs for the web app, and Python and Flask with scikit-learn for the backend. MyHeart uses a K-Folding Logistic Regression model to evaluate the performance of each data set and to determine the best parameters.

## Dataset
We trained and demonstrated the model using two sample datasets obtained from Kaggle. While these datasets were not perfect, they are representative of the types of data that other companies might have access to.

Dataset 1: Contains ~900 data points, accuracy = 87%.
Dataset 2: Contains ~32,000 data points, accuracy=91.5%.

## Model
We used two datasets, that use different metrics, to predict the risk of heart disease. Using these datasets, we were able to run a K-fold Logistic Regression model to predict whether the user was at low, moderate, or high risk of heart disease. By combining these two datasets, with a total of approximately 33,000 entries, we can give our predictions with 90% confidence.

## Getting Started
To get started with MyHeart, simply clone the repository and install the necessary dependencies:

```
git clone https://github.com/icexorb/myheart.git
cd myheart
pip install scikit-learn pandas flask flask-cors
npm install
```

Once you have installed the dependencies, start the required servers, ensure you are located in the /web/ directory:
```
python ml/main.py
cd web
npm start
```

You can then access the application by navigating to http://localhost:3000 in your web browser.

## Usage

To use the MyHeart model, simply submit your healthcare information, including biological, behavioral, and socioeconomic factors. The MyHeart model will then give you proactive suggestions and information to improve your cardiovascular health.

You results and recommendations will be printed in the terminal running the Python script. GUI results displayed on the front-end is planned but not implemented yet.

## DISCLAIMER

MyHeart does NOT collect nor store any data outside of your device. You data is NEVER sent or stored outside of the device you are running MyHeart on.

Note: MyHeart is not intended to provide medical advice or diagnosis. The predictions and recommendations provided by the application are based on statistical models and should not be used as a substitute for professional medical advice or treatment. Users should always consult with a qualified healthcare professional before making any changes to their healthcare regimen. MyHeart is intended to be a tool to help patients take control of their own health, but it is not a substitute for professional medical advice or treatment.
