import React from "react";
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { NextUIProvider, Navbar } from '@nextui-org/react';
import { createTheme, Card, Col, Row, Grid, Container, Spacer, Text} from '@nextui-org/react';
import HealthInput from './components/HealthInput';
import RenderResults from './components/RenderResults';
import Nav from './components/Nav';

function App({ Component }) {

  const handleSubmit = (data) => {
    console.log(data);
    fetch('https://localhost:8080/data', {
      body: JSON.stringify(data),
      method: 'post',
    })
  };

  
  const results = {
    test: 30,
    test2: 40,
    var3: 50,
    var4: 60,
  }


  return (
    <NextUIProvider>
    <Container lg gap={0}>
      <Spacer y={2} />
      <Row gap={2}>
        <Col span={8}>
            <RenderResults nums={results}/>
        </Col>
        <Col span={4}>
          <Card>
            <Card.Body>
              <HealthInput onSubmit={handleSubmit}/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Spacer y="2" />
      <Text 
      align="center" h5
      weight="bold"
>Made in Wisconsin with ❤️ and 🧀</Text>
<Spacer y="2" />
    </Container>
    </NextUIProvider>
  );
}

export default App;
