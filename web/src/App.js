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
    fetch('https://localhost:8080/bio-data', {
      body: JSON.stringify(data),
      method: 'post',
    })
  };


  return (
    <NextUIProvider>
    <Container lg gap={0}>
      <Spacer y={2} />
      <Row gap={2}>
        <Col span={8}>
            <RenderResults />
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
    // <NextUIProvider>
    //   <Container>
    //     <Col width="70%">
    //   <HealthInput onSubmit={handleSubmit}/>
    //   </Col>
    //   <Col width="30%">
    //   <RenderResults />
    //   </Col>
    //   <Spacer y="10" />
    // </NextUIProvider>
  );
}

export default App;
