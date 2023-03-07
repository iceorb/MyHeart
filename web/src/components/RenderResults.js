import React from 'react';

// eslint-disable-next-line
import { Grid, Card, Text, Row, Container, Popover, Button, Tooltip } from "@nextui-org/react";
import {Spacer} from "@nextui-org/react"; // Import the Spacer component
import {Progress} from "@nextui-org/react"; // Import the Progress component


function RenderResults(props) {
  const Factors = ({ text, flag, recommend}) => {
    let color = "default";
    let warningEmoji = "";
    let description = "-";
    if (flag === 2) {
      color="error";
      warningEmoji = "⚠️ ";
      description = "High risk";
    }
    else if (flag===1){
      color="warning"
      description = "Moderate risk";
    }
    else if (flag===0){
      color="#17C964"
      description = "Low risk";
    }
    else {
      color="#808080"
      description = "No data";
    }
    return (
      <Card variant="flat">
        <Card.Body>
          <Text h5 css={{ m: 0 }}>
            {text}
          </Text>
          <Spacer y=".1"/>
          <Text h2 color={color}>
            {description} {warningEmoji}
          </Text>
          {flag >= 0 ? (
          <Popover>
          <Popover.Trigger>
            <Button auto flat>View Recommendations</Button>
          </Popover.Trigger>
          <Popover.Content>
            <Text css={{ p: "$10" }}>{recommend}</Text>
          </Popover.Content>
        </Popover>
    ) : (
      <Spacer y="0"></Spacer>
    )}
        </Card.Body>
      </Card>
    );
  };

  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={6} md={6}>
        <Factors text="Alcohol" flag={props.signal.alc} recommend="Stop drinking"/>
      </Grid>
      <Grid xs={6} md={6}>
        <Factors text="Smoking" flag={props.signal.smoke} recommend="Quit smoking"/>
      </Grid>
      <Grid xs={6}>
        <Factors text="Physical Activity" flag={props.signal.pa} recommend="Exercise more"/>
      </Grid>
      <Grid xs={6}>
        <Factors text="Sleep" flag={props.signal.sleep} recommend="Get more sleep and a consistent sleep schedule." />
        </Grid>

        <Grid xs={12} md={6}>
      <Card variant="flat">
        <Card.Body>
          <Text h3 css={{ m: 0 }}>
            Health Model
          </Text>
          <Spacer y=".5" />
          <Progress value={props.nums.model1} shadow color="warning" status="warning" />
          <Spacer y=".2" />
          <Text>{props.nums.model1}%</Text>
        </Card.Body>
      </Card>
      </Grid>
      <Grid xs={12} md={6}>
      <Card variant="flat">
        <Card.Body>
          <Text h3 css={{ m: 0 }}>
            Genetic Model
          </Text>
          <Spacer y=".5" />
          <Progress value={props.nums.model2} shadow color="error" status="error" />
          <Spacer y=".2" />
          <Text>{props.nums.model2}%</Text>
        </Card.Body>
      </Card>
      </Grid>
    </Grid.Container>
  );
}
export default RenderResults;
