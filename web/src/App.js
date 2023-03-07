//import React from "react";
import React, { useState, useEffect } from 'react';
//import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { NextUIProvider, Navbar } from '@nextui-org/react';
import { createTheme, Card, Col, Row, Grid, Container, Spacer, Text} from '@nextui-org/react';
import HealthInput from './components/HealthInput';
import RenderResults from './components/RenderResults';
import Nav from './components/Nav';

function App({ Component }) {
  const [result, setResult] = useState(0);
  const handleSubmit = (data) => {
    console.log(data);
    fetch('http://127.0.0.1:5000/data', {
      headers: {
        "Content-Type": "application/json",
  },
      body: JSON.stringify(data),
      method: 'post',
    })
  };
  useEffect(() => {
    fetch('/data').then(res => res.json()).then(data => {
      setResult(data.result);
    });
  }, []);

  const flags = {
    danger:2,
    danger1:1,
    danger2:0
  }


  return (
    <NextUIProvider>
    <Container lg gap={0}>
      <Spacer y={2} />
      <Row gap={2}>
        <Col span={8}>
            <RenderResults nums={result} signal={flags}/>
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
