import React from "react";
import { useState } from 'react';
import { Grid, Modal, Container, Row, Col, Card } from '@nextui-org/react';
import { Input, Dropdown, Spacer, Text, Button, Avatar } from '@nextui-org/react';

function HealthInput(props) {

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const {
    onSubmit,
  } = props

  const [age, setAge] = useState(''); // Age
  const [sex, setSex] = useState(''); // Sex (male or female)
  const selectedSex = React.useMemo(
    () => Array.from(sex).join(", ").replaceAll("_", " "),
    [sex]
  );
  const [restingBP, setRestingBP] = useState(''); // Resting Blood Pressure
  const [cholesterol, setCholesterol] = useState(''); // Cholesterol Level
  const [fastingBS, setFastingBS] = useState(''); // Fasting Blood Sugar
  const [maxHR, setMaxHR] = useState(''); // Maximum Heart Rate Achieved
  const [angina, setAngina] = useState(''); // Exercise-Induced Angina (yes or no)
  const selectedAngina = React.useMemo(
    () => Array.from(angina).join(", ").replaceAll("_", " "),
    [angina]
  );


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      age: age,
      sex: selectedSex,
      bp: restingBP,
      chol: cholesterol,
      bs: fastingBS,
      hr: maxHR,
      angina: selectedAngina
    };
    onSubmit(data)
  };


  const MockItem = ({ text }) => {
    return (
      <Card 
      variant="bordered"
      >
        <Card.Body>
          <Text h6 size={15} css={{ m: 0 }}>
            {text}
          </Text>
          <Spacer y=".7"/>
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
        Update Data
      </Button>


      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Body>
          <Container gap={0} align="center" justify="center">
            <form onSubmit={handleSubmit}>
        <Row gap={1}>
            <Col justify="center" align="center">
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
                  setMaxHR(event.target.value)
                }
              />
              <Spacer y={0.5} />
              <Dropdown>
                <Dropdown.Button flat css={{ tt: "capitalize" }}>
                  {angina ? angina : "Angina"}
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
            </Col>
            <Col justify="center" align="center">

              <Spacer y={0.5} />
              <Input
                clearable
                Placeholder="Age"
                onChange={(event) =>
                  setAge(event.target.value)
                }
              />

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
        <MockItem text="FACTOR1" />
      </Grid>
      <Grid xs={6}>
        <MockItem text="FACTOR2" />
      </Grid>
      <Grid xs={6}>
        <MockItem text="FACTOR3" />
      </Grid>
      <Grid xs={6}>
        <MockItem text="STAT1" />
      </Grid>
      <Grid xs={6}>
        <MockItem text="STAT2" />
      </Grid>
      <Grid xs={6}>
        <MockItem text="STAT3" />
      </Grid>
      </Grid.Container>
      <Spacer y="1" />
    </Container>
  );
}

export default HealthInput;