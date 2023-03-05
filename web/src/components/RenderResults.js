import { Grid, Card, Text } from "@nextui-org/react";

export default function App() {
  const MockItem = ({ text }) => {
    return (
      <Card variant="bordered">
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
      <Grid xs={6}>
        <MockItem text="1 of 2" />
      </Grid>
      <Grid xs={6}>
        <MockItem text="2 of 2" />
      </Grid>
      <Grid xs={6}>
        <MockItem text="1 of 3" />
      </Grid>
      <Grid xs={3}>
        <MockItem text="2 of 3" />
      </Grid>
      <Grid xs={3}>
        <MockItem text="3 of 3" />
      </Grid>
      <Grid xs={3}>
        <MockItem text="1 of 4" />
      </Grid>
      <Grid xs={3}>
        <MockItem text="2 of 4" />
      </Grid>
      <Grid xs={3}>
        <MockItem text="3 of 4" />
      </Grid>
      <Grid xs={3}>
        <MockItem text="4 of 4" />
      </Grid>
      <Grid xs={3}>
        <MockItem text="1 of 3" />
      </Grid>
      <Grid xs={6}>
        <MockItem text="2 of 3" />
      </Grid>
      <Grid xs={3}>
        <MockItem text="3 of 3" />
      </Grid>
    </Grid.Container>
  );
}
