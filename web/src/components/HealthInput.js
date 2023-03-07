import React from "react";
import { useState } from 'react';
// eslint-disable-next-line
import { Grid, Modal, Loading, Container, Row, Col, Card } from '@nextui-org/react';
import { Input, Dropdown, Spacer, Text, Button, Avatar } from '@nextui-org/react';

function HealthInput(props) {

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

//  const {
//    onSubmit,
//  } = props

  const [age, setAge] = useState(''); // Age
  const [sex, setSex] = useState(''); // Sex (male or female)
  const selectedSex = React.useMemo(
    () => Array.from(sex).join(", ").replaceAll("_", " "),
    [sex]
  );
  const [restingBP, setRestingBP] = useState(''); // Resting Blood Pressure
  const [cholesterol, setCholesterol] = useState(''); // Cholesterol Level
  const [fastingBS, setFastingBS] = useState(''); // Exercise-Induced Angina (yes or no)
  const selectedFastingBS = React.useMemo(
    () => Array.from(fastingBS).join(", ").replaceAll("_", " "),
    [fastingBS]
  );
  const [maxHR, setMaxHR] = useState(''); // Maximum Heart Rate Achieved
  const [angina, setAngina] = useState(''); // Exercise-Induced Angina (yes or no)
  
  const selectedAngina = React.useMemo(
    () => Array.from(angina).join(", ").replaceAll("_", " "),
    [angina]
  );
  const [oldPeak, setOldPeak] = useState(''); // Oldpeak 
  const [chestPain, setChestPain] = useState(''); // ChestPain ('ChestPainType_ATA' or 'ChestPainType_NAP' or 'ChestPainType_TA')

  const selectedChestPain = React.useMemo(
    () => Array.from(chestPain).join(", ").replaceAll("_", " "),
    [chestPain]
  );

  const [restingECG, setRestingECG] = useState(''); // Resting ECG ('RestingECG_LVH' or 'RestingECG_Normal' or 'RestingECG_ST')

  const selectedRestingECG = React.useMemo(
    () => Array.from(restingECG).join(", ").replaceAll("_", " "),
    [restingECG]
  );

  const [ST_Slope, setST_Slope] = useState(''); // ST_Slope options: ('ST_Slope_Down','ST_Slope_Flat', 'ST_Slope_Up')

  const selectedST_Slope = React.useMemo(
    () => Array.from(ST_Slope).join(", ").replaceAll("_", " "),
    [ST_Slope]
  );

  const [BMI, setBMI] = useState(''); // BMI

  const [smoking, setSmoking] = useState(''); // Smoking options: ('yes', 'no')

  const selectedSmoking = React.useMemo(
    () => Array.from(smoking).join(", ").replaceAll("_", " "),
    [smoking]
  );

  const [alcoholDrinking, setAlcoholDrinking] = useState(''); // AlcoholDrinking options: ('yes', 'no')

  const selectedAlcoholDrinking = React.useMemo(
    () => Array.from(alcoholDrinking).join(", ").replaceAll("_", " "),
    [alcoholDrinking]
  );
  const [stroke, setStroke] = useState(''); // Stroke options: ('yes', 'no')

  const selectedStroke = React.useMemo(
    () => Array.from(stroke).join(", ").replaceAll("_", " "),
    [stroke]
  );
  
  const [physicalHealth, setPhysicalHealth] = useState(''); // PhysicalHealth (1-30)
  const [mentalHealth, setMentalHealth] = useState(''); // MentalHealth (1-30)
  const [diffWalking, setDiffWalking] = useState(''); // Difficulty walking options: ('yes', 'no')

  const selectedDiffWalking = React.useMemo(
    () => Array.from(diffWalking).join(", ").replaceAll("_", " "),
    [diffWalking]
  );

  const [physicalActivity, setPhysicalActivity] = useState(''); // Physical Activity (past thirty days yes or no)

  const selectedPhysicalActivity = React.useMemo(
    () => Array.from(diffWalking).join(", ").replaceAll("_", " "),
    [diffWalking]
  );

  
  const [sleepTime, setSleepTime] = useState(''); // SleepTime (hrs)
  const [asthma, setAsthma] = useState(''); // Asthma options: ('yes', 'no')

  const selectedAsthma = React.useMemo(
    () => Array.from(asthma).join(", ").replaceAll("_", " "),
    [asthma]
  );

  const [kidneyDisease, setKidneyDisease] = useState(''); // KidneyDisease options: ('yes', 'no')

  const selectedKidneyDisease = React.useMemo(
    () => Array.from(kidneyDisease).join(", ").replaceAll("_", " "),
    [kidneyDisease]
  );

  const [skinCancer, setSkinCancer] = useState(''); // SkinCancer options: ('yes', 'no')

  const selectedSkinCancer = React.useMemo(
    () => Array.from(skinCancer).join(", ").replaceAll("_", " "),
    [skinCancer]
  );

  const [race, setRace] = useState(''); // race options: ('Race_American Indian/Alaskan Native', 'Race_Asian', 'Race_Black','Race_Hispanic', 'Race_Other', 'Race_White')

  const selectedRace = React.useMemo(
    () => Array.from(race).join(", ").replaceAll("_", " "),
    [race]
  );

  const [diabetic, setDiabetic] = useState(''); // Diabetic options: ( 'Diabetic_0', 'Diabetic_1','Diabetic_No, borderline diabetes', 'Diabetic_Yes (during pregnancy)')

  const selectedDiabetic = React.useMemo(
    () => Array.from(diabetic).join(", ").replaceAll("_", " "),
    [diabetic]
  );

  const [genHealth, setGenHealth] = useState(''); // GenHealth options: ('GenHealth_Excellent','GenHealth_Fair', 'GenHealth_Good', 'GenHealth_Poor', 'GenHealth_Very good')

  const selectedGenHealth = React.useMemo(
    () => Array.from(genHealth).join(", ").replaceAll("_", " "),
    [genHealth]
  );



  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/api/form', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Age: age,
          Sex: selectedSex,
          RestingBP: restingBP,
          Cholesterol: cholesterol,
          FastingBS: selectedFastingBS,
          MaxHR: maxHR,
          ExerciseAngina: selectedAngina,
          Oldpeak: oldPeak,
          ChestPain: selectedChestPain,
          RestingECG: selectedRestingECG,
          ST_Slope: selectedST_Slope,
          BMI: BMI,
          Smoking: selectedSmoking,
          AlcoholDrinking: selectedAlcoholDrinking,
          Stroke: selectedStroke,
          PhysicalHealth: physicalHealth,
          MentalHealth: mentalHealth,
          DiffWalking: selectedDiffWalking,
          PhysicalActivity: selectedPhysicalActivity,
          SleepTime: sleepTime,
          Asthma: selectedAsthma,
          KidneyDisease: selectedKidneyDisease,
          SkinCancer: selectedSkinCancer,
          Diabetic: selectedDiabetic,
          GenHealth: selectedGenHealth,
          Race: selectedRace
        })
    })
        .then(response => response.json())
  };


  const MockItem = ({ text, variable }) => {
    return (
      <Card 
      variant="bordered"
      >
        <Card.Body> 
          <Text h6 size={15} css={{ m: 0 }}>
            {text}
          </Text>
          <Text h2 css={{tt:"capitalize"}}>
          {variable || "0"}
          </Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Container lg align="center">
      <Spacer y={.7} />
      <Avatar
          src="https://cdn.theathletic.com/app/uploads/2022/08/26124913/USATSI_12352237-scaled-e1661532605880.jpg"
          css={{ size: "$40" }}
          bordered
              color="gradient"
              stacked
        />
        <Spacer y={.7} />
      <Text h2 align="center" weight="bold">Bucky Badger</Text>

      <Button auto shadow onPress={handler}>
        Update Profile
      </Button>


      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        width="1000px"
      >
        <Modal.Body>
          <Container gap={0} align="center" justify="center">
            <form onSubmit={handleSubmit}>
        <Row gap={1}>
            <Col justify="center" align="center">
            <Text h4 align="center">General Patient Data</Text>
              <Spacer y={1.0} />
              <Text h7 align="center">Age (18+)</Text>
              <Input
                clearable
                Placeholder="Age"
                value={age}
                onChange={(event) =>
                  setAge(event.target.value)
                }
              />

              <Spacer y={1.0} />
              <Text h7 align="center">Sex</Text>
              <Dropdown>
                <Dropdown.Button flat css={{ tt: "capitalize" }}>
                  {sex ? sex : "Sex"}
                </Dropdown.Button>
                <Dropdown.Menu
                  disallowEmptySelection="true"
                  selectionMode="single"
                  onSelectionChange={setSex}
                >
                  <Dropdown.Item key="male">Male</Dropdown.Item>
                  <Dropdown.Item key="female">Female</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

               <Spacer y={1.0} />
              <Text h7 align="center">Race</Text>
                <Dropdown>
                  <Dropdown.Button flat css={{ tt: "capitalize" }}>
                    {race ? race : "Race"}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    disallowEmptySelection="true"
                    selectionMode="single"
                    onSelectionChange={setRace}
                  >
                    <Dropdown.Item key="Race_American Indian/Alaskan Native">American Indian/Alaskan Native</Dropdown.Item>
                    <Dropdown.Item key="Race_Asian">Asian</Dropdown.Item>
                    <Dropdown.Item key="Race_Black">Black</Dropdown.Item>
                    <Dropdown.Item key="Race_White">White</Dropdown.Item>
                    <Dropdown.Item key="Race_Hispanic">Hispanic</Dropdown.Item>
                    <Dropdown.Item key="Race_Other">Other</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              <Spacer y={1.0} />
              <Text h7 align="center">Do you smoke?</Text>
                <Dropdown>
                  <Dropdown.Button flat css={{ tt: "capitalize" }}>
                    {smoking ? smoking : "Smoking"}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    disallowEmptySelection="true"
                    selectionMode="single"
                    onSelectionChange={setSmoking}
                  >
                    <Dropdown.Item key="yes">Yes</Dropdown.Item>
                    <Dropdown.Item key="no">No</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              <Spacer y={1.0} />
              <Text h7 align="center">Do you consume alcohol?</Text>
                <Dropdown>
                  <Dropdown.Button flat css={{ tt: "capitalize" }}>
                    {alcoholDrinking ? alcoholDrinking : "Drink Alchohol"}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    disallowEmptySelection="true"
                    selectionMode="single"
                    onSelectionChange={setAlcoholDrinking}
                  >
                    <Dropdown.Item key="yes">Yes</Dropdown.Item>
                    <Dropdown.Item key="no">No</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
               <Spacer y={1.0} />
              <Text h7 align="center">How much sleep (in hours) do you get?</Text>
                <Input
                  clearable
                  Placeholder="Sleep Time (hrs)"
                  value={sleepTime}
                  onChange={(event) =>
                    setSleepTime(event.target.value)
                  }
                />

              <Spacer y={1.0} />
              <Text h7 align="center">Body Mass Index</Text>
              <Input
                clearable
                Placeholder="BMI"
                value={BMI}
                onChange={(event) =>
                  setBMI(event.target.value)
                }
              />
                <Spacer y={0.5} />
            </Col>

            <Col justify="center" align="center">
            <Text h4 align="center">General Health</Text>
                <Spacer y={1.0} />
              <Text h7 align="center">How would you rate your general health?</Text>
                <Dropdown>
                  <Dropdown.Button flat css={{ tt: "capitalize" }}>
                    {genHealth ? genHealth : "General Health Level"}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    disallowEmptySelection="true"
                    selectionMode="single"
                    onSelectionChange={setGenHealth}
                  >
                    <Dropdown.Item key="GenHealth_Excellent">Excellent</Dropdown.Item>
                    <Dropdown.Item key="GenHealth_Very good">Very Good</Dropdown.Item>
                    <Dropdown.Item key="GenHealth_Good">Good</Dropdown.Item>
                    <Dropdown.Item key="GenHealth_Fair">Fair</Dropdown.Item>
                    <Dropdown.Item key="GenHealth_Poor">Poor</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              <Spacer y={1.0} />
              <Text h7 align="center">Rate your physical health: 0 (good) to 30 (poor)</Text>
              <Input
                clearable
                Placeholder="Physical Health (0-30)"
                value={physicalHealth}
                onChange={(event) =>
                  setPhysicalHealth(event.target.value)
                }
              />

              <Spacer y={1.0} />
              <Text h7 align="center">Rate your mental health: 0 (poor) to 30 (good)</Text>
              <Input
                clearable
                Placeholder="Mental Health (0-30)"
                value={mentalHealth}
                onChange={(event) =>
                  setMentalHealth(event.target.value)
                }
              />

               <Spacer y={1.0} />
              <Text h7 align="center">Physical activity in the past 30 days?</Text>
                <Dropdown>
                  <Dropdown.Button flat css={{ tt: "capitalize" }}>
                    {physicalActivity ? physicalActivity : "Physical Activity"}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    disallowEmptySelection="true"
                    selectionMode="single"
                    onSelectionChange={setPhysicalActivity}
                  >
                    <Dropdown.Item key="yes">Yes</Dropdown.Item>
                    <Dropdown.Item key="no">No</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

               <Spacer y={1.0} />
              <Text h7 align="center">Do you have difficulty walking or climbing stairs?</Text>
                <Dropdown>
                  <Dropdown.Button flat css={{ tt: "capitalize" }}>
                    {diffWalking ? diffWalking : "Difficulty Walking"}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    disallowEmptySelection="true"
                    selectionMode="single"
                    onSelectionChange={setDiffWalking}
                  >
                    <Dropdown.Item key="yes">Yes</Dropdown.Item>
                    <Dropdown.Item key="no">No</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Spacer y={0.5} />
            </Col>

            <Col justify="center" align="center">
            <Text h4 align="center">Health History</Text>
               <Spacer y={1.0} />
              <Text h7 align="center">Do you have/ever had Asthma?</Text>
                <Dropdown>
                  <Dropdown.Button flat css={{ tt: "capitalize" }}>
                    {asthma ? asthma : "Asthma"}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    disallowEmptySelection="true"
                    selectionMode="single"
                    onSelectionChange={setAsthma}
                  >
                    <Dropdown.Item key="yes">Yes</Dropdown.Item>
                    <Dropdown.Item key="no">No</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

               <Spacer y={1.0} />
              <Text h7 align="center">Do you have/ever had Kidney Disease?</Text>
                <Dropdown>
                  <Dropdown.Button flat css={{ tt: "capitalize" }}>
                    {kidneyDisease ? kidneyDisease : "Kidney Disease"}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    disallowEmptySelection="true"
                    selectionMode="single"
                    onSelectionChange={setKidneyDisease}
                  >
                    <Dropdown.Item key="yes">Yes</Dropdown.Item>
                    <Dropdown.Item key="no">No</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              <Spacer y={1.0} />
              <Text h7 align="center">Do you have/ever had Skin Cancer?</Text>
                <Dropdown>
                  <Dropdown.Button flat css={{ tt: "capitalize" }}>
                    {skinCancer ? skinCancer : "Skin Cancer"}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    disallowEmptySelection="true"
                    selectionMode="single"
                    onSelectionChange={setSkinCancer}
                  >
                    <Dropdown.Item key="yes">Yes</Dropdown.Item>
                    <Dropdown.Item key="no">No</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>


                <Spacer y={1.0} />
              <Text h7 align="center">Do you have/ever had Diabetes?</Text>
                <Dropdown>
                  <Dropdown.Button flat css={{ tt: "capitalize" }}>
                    {diabetic ? diabetic : "Diabetic"}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    disallowEmptySelection="true"
                    selectionMode="single"
                    onSelectionChange={setDiabetic}
                  >
                    <Dropdown.Item key="Diabetic_1">Yes</Dropdown.Item>
                    <Dropdown.Item key="Diabetic_0">No</Dropdown.Item>
                    <Dropdown.Item key="Diabetic_No, borderline diabetes">Borderline</Dropdown.Item>
                    <Dropdown.Item key="Diabetic_Yes (during pregnancy)">Yes,during pregnancy</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              <Spacer y={1.0} />
              <Text h7 align="center">Normal Fasting Blood Sugar</Text>
              <Dropdown>
                <Dropdown.Button flat css={{ tt: "capitalize" }}>
                  {fastingBS ? fastingBS : "Normal Fasting BS"}
                </Dropdown.Button>
                <Dropdown.Menu
                  disallowEmptySelection="true"
                  selectionMode="single"
                  onSelectionChange={setFastingBS}
                >
                  <Dropdown.Item key="yes">Yes</Dropdown.Item>
                  <Dropdown.Item key="no">No</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Spacer y={1.0} />
              <Text h7 align="center">Have you ever had a stroke?</Text>
                <Dropdown>
                  <Dropdown.Button flat css={{ tt: "capitalize" }}>
                    {stroke ? stroke : "Stroke"}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    disallowEmptySelection="true"
                    selectionMode="single"
                    onSelectionChange={setStroke}
                  >
                    <Dropdown.Item key="yes">Yes</Dropdown.Item>
                    <Dropdown.Item key="no">No</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              <Spacer y={1.0} />
              <Text h7 align="center">Exercise Induced Angina</Text>
              <Dropdown>
                <Dropdown.Button flat css={{ tt: "capitalize" }}>
                  {angina ? angina : "Exercise Induced Angina"}
                </Dropdown.Button>
                <Dropdown.Menu
                  disallowEmptySelection="true"
                  selectionMode="single"
                  onSelectionChange={setAngina}
                >
                  <Dropdown.Item key="yes">Yes</Dropdown.Item>
                  <Dropdown.Item key="no">No</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

                <Spacer y={0.5} />
            </Col>

            <Col justify="center" align="center">
            <Text h4 align="center">Technical Data</Text>
              <Spacer y={1.0} />
              <Text h7 align="center">Resting BP</Text>
              <Input
                clearable
                Placeholder="Resting BP"
                value={restingBP}
                onChange={(event) =>
                  setRestingBP(event.target.value)
                }
              />

              <Spacer y={1.0} />
              <Text h7 align="center">Max Heart Rate</Text>
              <Input
                clearable
                Placeholder="Max HR"
                value={maxHR}
                onChange={(event) =>
                  setMaxHR(event.target.value)
                }
              />

              <Spacer y={1.0} />
              <Text h7 align="center">Cholesterol</Text>
              <Input
                clearable
                Placeholder="Cholesterol"
                value={cholesterol}
                onChange={(event) =>
                  setCholesterol(event.target.value)
                }
              />

              <Spacer y={1.0} />
              <Text h7 align="center">Resting ECG</Text>
                <Dropdown>
                  <Dropdown.Button flat css={{ tt: "capitalize" }}>
                    {restingECG ? restingECG : "Resting ECG"}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    disallowEmptySelection="true"
                    selectionMode="single"
                    onSelectionChange={setRestingECG}
                  >
                    <Dropdown.Item key="RestingECG_LVH">LVH</Dropdown.Item>
                    <Dropdown.Item key="RestingECG_Normal">Normal</Dropdown.Item>
                    <Dropdown.Item key="RestingECG_ST">ST</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              <Spacer y={1.0} />
              <Text h7 align="center">ST Slope</Text>
                <Dropdown>
                  <Dropdown.Button flat css={{ tt: "capitalize" }}>
                    {ST_Slope ? ST_Slope : "ST Slope"}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    disallowEmptySelection="true"
                    selectionMode="single"
                    onSelectionChange={setST_Slope}
                  >
                    <Dropdown.Item key="ST_Slope_Down">Down</Dropdown.Item>
                    <Dropdown.Item key="ST_Slope_Flat">Flat</Dropdown.Item>
                    <Dropdown.Item key="ST_Slope_Up">Up</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              <Spacer y={1.0} />
                <Text h7 align="center">Chest Pain</Text>
                <Dropdown>
                  <Dropdown.Button flat css={{ tt: "capitalize" }}>
                    {chestPain ? chestPain : "Chest Pain"}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    disallowEmptySelection="true"
                    selectionMode="single"
                    onSelectionChange={setChestPain}
                  >
                    <Dropdown.Item key="ChestPainType_ATA">Atypical Angina</Dropdown.Item>
                    <Dropdown.Item key="ChestPainType_NAP">Non-Anginal Pain</Dropdown.Item>
                    <Dropdown.Item key="ChestPainType_TA">Typical Angina</Dropdown.Item>
                    <Dropdown.Item key="ChestPainType_ASY">Asymptomatic</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              <Spacer y={1.0} />
              <Text h7 align="center">Old Peak</Text>
              <Input
                clearable
                Placeholder="Old Peak"
                value={oldPeak}
                onChange={(event) =>
                  setOldPeak(event.target.value)
                }
              />

                <Spacer y={0.5} />
            </Col>
        <Spacer y={1} />
      </Row>
      <Spacer y={1} />
      <Button type="submit"
        onClick={closeHandler}
        >Calculate</Button>
        </form>
      </Container>
      </Modal.Body>
      </Modal>
      <Spacer y="2" />
      <Grid.Container gap={3} justify="center">
      <Grid xs={6}>
        <MockItem text="Age" variable={age} />
      </Grid>
      <Grid xs={6}>
        <MockItem text="Sex"variable={sex}/>
      </Grid>
      <Grid xs={6}>
        <MockItem text="Resting BP" variable={restingBP} />
      </Grid>
      <Grid xs={6}>
        <MockItem text="Cholesterol" variable={cholesterol} />
        </Grid>
      </Grid.Container>
      <Spacer y="1" />
    </Container>
  );
}

export default HealthInput;