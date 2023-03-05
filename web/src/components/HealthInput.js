import React from "react";
import { useState } from 'react';
import { Container, Row, Col, Card } from '@nextui-org/react';
import { Input, Dropdown, Spacer, Text, Button } from '@nextui-org/react';

function HealthInput() {



  const [age, setAge] = useState(''); // Age
  const [sex, setSex] = React.useState(new Set(["Gender"])); // Sex (male or female)
  const selectedSex = React.useMemo(
    () => Array.from(sex).join(", ").replaceAll("_", " "),
    [sex]
  );
  const [restingBP, setRestingBP] = useState(''); // Resting Blood Pressure
  const [cholesterol, setCholesterol] = useState(''); // Cholesterol Level
  const [fastingBS, setFastingBS] = useState(''); // Fasting Blood Sugar
  const [maxHR, setMaxHR] = useState(''); // Maximum Heart Rate Achieved
  const [angina, setAngina] = useState(''); // Exercise-Induced Angina (yes or no)  

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      age: age,
      sex: selectedSex,
      bp: restingBP,
      chol: cholesterol,
      bs: fastingBS,
      hr: maxHR,
      angina: angina
    };
  };


  return (
    <Container xs align="center">
      <Spacer y={3} />
      <Text h2 align="center">Enter biological factors</Text>
      <Spacer y={.7} />
      <form>
        <Card shadow="lg">
          <Card.Body>
            <Col xs justify="center" align="center">

              <Spacer y={0.5} />
              <Input
                clearable
                Placeholder="Age"
                onChange={(event) =>
                  setAge(event.target.value)
                }
              />

              <Spacer y={0.5} />
              <Dropdown>
                <Dropdown.Button light css={{ tt: "capitalize" }}>
                  {sex || "Sex"}
                </Dropdown.Button>
                <Dropdown.Menu
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={sex}
                  onSelectionChange={setSex}
                >
                  <Dropdown.Item key="male">Male</Dropdown.Item>
                  <Dropdown.Item key="female">Female</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Spacer y={0.5} />
              <Input
                clearable
                Placeholder="Resting BP"
                onChange={(event) =>
                  setRestingBP(event.target.value)
                }
              />
              <Spacer y={0.5} />
              <Input
                clearable
                Placeholder="Cholesterol"
                onChange={(event) =>
                  setCholesterol(event.target.value)
                }
              />
              <Spacer y={0.5} />
              <Input
                clearable
                Placeholder="Fasting BS"
                onChange={(event) =>
                  setFastingBS(event.target.value)
                }
              />
              <Spacer y={0.5} />
              <Input
                clearable
                Placeholder="Max HR"
                onChange={(event) =>
                  setRestingBP(event.target.value)
                }
              />
              <Spacer y={0.5} />
            </Col>
          </Card.Body>
        </Card>


        <Spacer y={2} />
        <Text h2 align="center">Enter socioeconomic factors</Text>
        <Spacer y={.7} />
        <Card shadow="lg">
          <Card.Body>
            <Col xs justify="center" align="center">

              <Spacer y={0.5} />
              <Input
                clearable
                Placeholder="Age"
                onChange={(event) =>
                  setAge(event.target.value)
                }
              />

              <Spacer y={0.5} />
              <Spacer y={0.5} />
              <Input
                clearable
                Placeholder="Resting BP"
                onChange={(event) =>
                  setRestingBP(event.target.value)
                }
              />
              <Spacer y={0.5} />
              <Input
                clearable
                Placeholder="Cholesterol"
                onChange={(event) =>
                  setCholesterol(event.target.value)
                }
              />
              <Spacer y={0.5} />
              <Input
                clearable
                Placeholder="Fasting BS"
                onChange={(event) =>
                  setFastingBS(event.target.value)
                }
              />
              <Spacer y={0.5} />
              <Input
                clearable
                Placeholder="Household Income"
                onChange={(event) =>
                  setRestingBP(event.target.value)
                }
              />
              <Spacer y={0.5} />
            </Col>
          </Card.Body>
        </Card>

        <Card shadow="lg">
          <Card.Body>
            <Col xs justify="center" align="center">
              <h5>
                Age: {age} <br />
                Sex: {selectedSex} <br />
                Resting BP: {restingBP} <br />
                Cholesterol: {cholesterol} <br />
                Fasting BS: {fastingBS} <br />
                Max HR: {maxHR} <br />
                Angina: {angina} <br />
              </h5>
            </Col>
          </Card.Body>
        </Card>
        <Spacer y={1} />
        <Button type="submit">Calculate</Button>
      </form>
    </Container>
  );
}

export default HealthInput;