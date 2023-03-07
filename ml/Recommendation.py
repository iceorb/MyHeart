import pandas as pd

def recommend(file,heart, smoke, alc, phys, sleep):

    df = pd.read_csv(file)
    df = df[df['HeartDisease'] == 0].reset_index()
 

    col = ['Smoking','AlcoholDrinking','PhysicalActivity','SleepTime']
    input = [smoke, alc, phys, sleep]
    output = [0,0,0,0]
    mean = [0,0,0,0]
    std = [0,0,0,0]

    i = 0
    for s in col:
        mean[i] = df[s].mean()
        std[i] = df[s].std()
      
        i = i+1

    #smoke
    if input[0] > mean[0] + (std[0]*1.5):
        output[0] = 2
    elif input[0] > mean[0] + (std[0]):
        if heart == 0:
            output[0] = 1
        else:
            output[0] = 2
    #alc
    if input[1] > mean[1] + (std[1]*1.5):
        output[1] = 2
    elif input[1] > mean[1] + (std[1]):
        if heart != 0:
            output[1] = 1
    #phys
    if input[2] < mean[2] - (std[2]*1.5):
        if heart == 2:
            output[2] = 2
        elif heart == 1:
            output[2] = 1
    elif input[2] < mean[2] - (std[2]):
        if heart != 0:
            output[2] = 1
    #sleep
    if input[3] < mean[3] - (std[3]*1.5):
        if heart == 0:
            output[3] = 1
        else:
            output[3] = 2
    elif input[3] < mean[3] - (std[3]):
        if heart == 1:
            output[3] = 1
        elif heart == 2:
            output[3] = 2
 
    return [output[0], output[1],output[2],output[3]]

   

        





