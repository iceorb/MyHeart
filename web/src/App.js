//import React from "react";
import React, { useState, useEffect } from 'react';
//import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { NextUIProvider, Navbar, Button } from '@nextui-org/react';
import { createTheme, Card, Col, Row, Grid, Container, Spacer, Text } from '@nextui-org/react';
import HealthInput from './components/HealthInput';
import RenderResults from './components/RenderResults';
import Nav from './components/Nav';

function App({ Component }) {
  const [result, setResult] = useState(0);
  const [flags, setFlags] = useState({
    alc:-1,
    smoke:-1,
    pa:-1,
    sleep:-1
  });

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
      setFlags(data.flags);
    });
  }, [flags, result]);
  // PLEASE FIX: dependency causing it to go into an infinite loop of calling flask back-end


  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    type: darkMode ? 'dark' : 'light',
  });

  return (
    <NextUIProvider theme={theme}>
      <Container lg>
        <Spacer y="2"></Spacer>
      <Grid.Container gap={2}>
        <Grid sm={8} xs={12}>
          <RenderResults nums={result} signal={flags} />
        </Grid>
        <Grid sm={4} xs={12}>
          <Card>
            <Card.Body>
              <HealthInput onSubmit={handleSubmit} />
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
      <Spacer y="2" />
      <Col justify="center" align="center">
        <Button justify="center" align="center" flex="center"
          onPress={toggleDark}
          light>
          <Text
            weight="bold"
          >Made in Wisconsin with ❤️ and 🧀</Text>
        </Button>
      </Col>
      <Spacer y="2" />
      </Container>
    </NextUIProvider>
  );
}

export default App;
