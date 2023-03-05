import React from 'react';
import { Grid, Card, Text } from "@nextui-org/react";
import {Spacer} from "@nextui-org/react"; // Import the Spacer component
import {Progress} from "@nextui-org/react"; // Import the Progress component

function RenderResults(props) {
  const Factors = ({ text, percent, color }) => {
    if (percent>70) {
      color="error"
    }
    else if (percent >40) {
      color="warning"
    }
    return (
      <Card variant="flat" color={color}>
        <Card.Body>
          <Text h6 size={15} css={{ m: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={4}>
        <Factors text="1 of 2" />
      </Grid>
      <Grid xs={4}>
        <Factors text="2 of 2" />
      </Grid>
      <Grid xs={4}>
        <Factors text="1 of 3" />
      </Grid>
      <Grid xs={4}>
        <Factors text="2 of 3" />
      </Grid>
      <Grid xs={4}>
        <Factors text="3 of 3" />
      </Grid>
      <Grid xs={4}>
        <Factors text="1 of 4" />
      </Grid>
      <Grid xs={4}>
        <Factors text="2 of 4" />
      </Grid>
      <Grid xs={4}>
        <Factors text="3 of 4" />
      </Grid>
      <Grid xs={4}>
        <Factors text="4 of 4" />
      </Grid>
      <Grid xs={6}>
      <Card variant="flat">
        <Card.Body>
          <Text h6 size={15} css={{ m: 0 }}>
            Model 1
          </Text>
          <Spacer y=".5" />
          <Progress value={10} shadow color="warning" status="warning" />
        </Card.Body>
      </Card>
      </Grid>
      <Grid xs={6}>
      <Card variant="flat">
        <Card.Body>
          <Text h6 size={15} css={{ m: 0 }}>
            Model 2
          </Text>
          <Spacer y=".5" />
          <Progress value={10} shadow color="error" status="error" />
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
