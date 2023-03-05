import React from 'react';
import { Grid, Card, Text, Row, Popover, Button } from "@nextui-org/react";
import {Spacer} from "@nextui-org/react"; // Import the Spacer component
import {Progress} from "@nextui-org/react"; // Import the Progress component

function RenderResults(props) {
  const Factors = ({ text, flag, recommend}) => {
    let color = "default";
    let warningEmoji = "";
    let description = "";
    if (flag == 2) {
      color="error";
      warningEmoji = "⚠️ ";
      description = "Warning: High risk";
    }
    else if (flag==1){
      color="warning"
      description = "Medium risk";
    }
    return (
      <Card variant="flat">
        <Card.Body>
          <Text h5 css={{ m: 0 }}>
            {text} {warningEmoji}
          </Text>
          <Spacer y=".2"/>
          <Text h2>
            {description}
          </Text>
          <Spacer y="1"></Spacer>
          {flag > 1 ? (
          <Popover>
          <Popover.Trigger>
            <Button auto flat>View Recommendations</Button>
          </Popover.Trigger>
          <Popover.Content>
            <Text css={{ p: "$10" }}>{recommend}</Text>
          </Popover.Content>
        </Popover>
    ) : (
      <Spacer y="2"></Spacer>
    )}
        </Card.Body>
      </Card>
    );
  };

  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={6}>
        <Factors text="Heart Disease" flag={props.signal.danger} recommend="Eat a heart-healthy diet" />
      </Grid>
      <Grid xs={6}>
        <Factors text="Physical" />
      </Grid>
      <Grid xs={6}>
        <Factors text="Alcohol" />
      </Grid>
      <Grid xs={6}>
        <Factors text="Sleep" />
        </Grid>

      <Grid xs={6}>
      <Card variant="flat">
        <Card.Body>
          <Text h3 css={{ m: 0 }}>
            Model 1
          </Text>
          <Spacer y=".5" />
          <Progress value={props.nums.model1} shadow color="warning" status="warning" />
          <Spacer y=".2" />
          <Text>{props.nums.model1}%</Text>
        </Card.Body>
      </Card>
      </Grid>
      <Grid xs={6}>
      <Card variant="flat">
        <Card.Body>
          <Text h3 css={{ m: 0 }}>
            Model 2
          </Text>
          <Spacer y=".5" />
          <Progress value={props.nums.model2} shadow color="error" status="error" />
          <Spacer y=".2" />
          <Text>{props.nums.model2}%</Text>
        </Card.Body>
      </Card>
      </Grid>
      <Grid md={12}>
        <Card >
          <Card.Header><Text h4>Recommendations</Text></Card.Header>
          <Card.Divider />
          <Card.Body>
            <Text h4>Blank text</Text>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
}

export default RenderResults;
