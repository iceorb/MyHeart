import React from "react";
import { useState } from 'react';
import { Container, Row, Col, Card } from '@nextui-org/react';
import { Input, Dropdown, Spacer, Text} from '@nextui-org/react';

export default function App() {

  const [selected, setSelected] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );


  return (
    <Container xs>
      <Text h1>Enter biological factors</Text>
      <Spacer y={5} />
      <Card css={{ $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Col xs justify="center" align="center">
      <Text h2>Enter your biological information</Text>
      <Input
      labelPlaceholder="Age"
      />
      <Spacer y={0.5} />
      <Input
      bordered
      labelLeft="Weight"
      placeholder="200 lbs"
      />
      <Spacer y={0.5} />
      <Input placeholder="Weight" />
      <Spacer y={0.5} />
      <Input placeholder="Your mom" />
      <Spacer y={0.5} />
      <Input placeholder="Age" />
      <Spacer y={0.5} />
      <Input placeholder="Age" />
      <Spacer y={0.5} />
      </Col>
      </Card.Body>
      </Card>
      <Spacer y={5} />
      <Card css={{ $$cardColor: '$colors$primary' }}>
      <Dropdown>
      <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Disease"
        color="secondary"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="text">Text</Dropdown.Item>
        <Dropdown.Item key="number">Number</Dropdown.Item>
        <Dropdown.Item key="date">Date</Dropdown.Item>
        <Dropdown.Item key="single_date">Single Date</Dropdown.Item>
        <Dropdown.Item key="iteration">Iteration</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
        {selectedValue}
    </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Disease"
        color="secondary"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="text">Text</Dropdown.Item>
        <Dropdown.Item key="number">Number</Dropdown.Item>
        <Dropdown.Item key="date">Date</Dropdown.Item>
        <Dropdown.Item key="single_date">Single Date</Dropdown.Item>
        <Dropdown.Item key="iteration">Iteration</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


    </Card>
    </Container>
  );
}
