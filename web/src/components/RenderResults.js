import React from 'react';
import { Grid, Card, Text, Row, Container, Popover, Button, Tooltip } from "@nextui-org/react";
import {Spacer} from "@nextui-org/react"; // Import the Spacer component
import {Progress} from "@nextui-org/react"; // Import the Progress component

function RenderResults(props) {
  const Factors = ({ text, flag, recommend}) => {
    let color = "default";
    let warningEmoji = "";
    let description = "-";
    if (flag == 2) {
      color="error";
      warningEmoji = "⚠️ ";
      description = "High risk";
    }
    else if (flag==1){
      color="warning"
      description = "Medium risk";
    }
    else if (flag==0){
      color="#17C964"
      description = "Low risk";
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

  const tooltip = (
    <Grid.Container
      css={{
        borderRadius: "14px",
        padding: "0.75rem",
        maxWidth: "400px",
      }}
    >
<Text>
        Community-based risk factors are factors that are related to the community or environment in which an individual lives 
        and can contribute to the development of various health conditions, including heart disease.
      
        Socioeconomic factors: Low income, low education level, unemployment, 
        and poverty are all associated with an increased risk of heart disease.
      </Text>
    </Grid.Container>
  )
  

  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={6}>
        <Factors text="Alcohol" flag={props.signal.danger} recommend="Stop drinking"/>
      </Grid>
      <Grid xs={6}>
        <Factors text="Physical" flag={props.signal.danger2} recommend="Work out"/>
      </Grid>
      <Grid xs={6}>
        <Factors text="Food Access" flag={props.signal.danger1} recommend="(link to database of food pantries)"/>
      </Grid>
      <Grid xs={6}>
        <Factors text="Park Access" flag={props.signal.danger2} recommend="information about park access" />
        </Grid>

      <Grid xs={6}>
      <Card variant="flat">
        <Card.Body>
          <Text h3 css={{ m: 0 }}>
            Biological Model
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
            Biological Model 2
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
          <Card.Header><Text h3>Community Based Risk Model</Text><Tooltip content={tooltip}>
          <Button light auto>
            What is this?
          </Button>
        </Tooltip></Card.Header>
          <Card.Divider />
          <Card.Body>
          <Progress value="85" shadow color="error" status="error" />
            <Text h4>85%</Text>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
}

export default RenderResults;
