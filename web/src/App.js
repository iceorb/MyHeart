//import React from "react";
import React, { useState, useEffect } from 'react';
//import { useState } from 'react';

// Comments to disable debug data in terminal
// eslint-disable-next-line
import logo from './logo.png';
import './App.css';

// eslint-disable-next-line
import { NextUIProvider, Navbar, Button } from '@nextui-org/react';

// eslint-disable-next-line
import { createTheme, Card, Col, Row, Grid, Container, Spacer, Text, Switch, Loading } from '@nextui-org/react';
import HealthInput from './components/HealthInput';
import RenderResults from './components/RenderResults';
import { Sun } from './components/Nightmode/Sun';
import { Moon } from './components/Nightmode/Moon';

// eslint-disable-next-line
import Nav from './components/Nav';



function App({ Component }) {
  useEffect(() => {
    document.title = 'MyHeart';
  }, []);

  const [result, setResult] = useState(0);
  const [flags, setFlags] = useState({
    alc:-1,
    smoke:-1,
    pa:-1,
    sleep:-1
  });

  // Count to update data
  const [count, setCount] = useState(-1);
  const [isRefreshing, setIsRefreshing] = useState(false);

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

  // update data and fetch info from backend
  useEffect(() => {
    fetch('/data').then(res => res.json()).then(data => {
      setResult(data.result);
      setFlags(data.flags);
    });
  }, [count]);

  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
  };

  // update count to update data
  const updateCount = () => {
    setIsRefreshing(true);

    // Perform the refresh action
    setTimeout(() => {
      setCount(count + 1);
      setIsRefreshing(false);
    }, 1700);
  };

  const theme = createTheme({
    type: darkMode ? 'dark' : 'light',
  });

  return (
    <NextUIProvider theme={theme}>
      <Container lg>
        <Spacer y="2"></Spacer>
      <Grid.Container gap={2}>
        <Grid sm={4} xs={12}>
          <Card>
            <Card.Body>
              <HealthInput onSubmit={handleSubmit} />
            </Card.Body>
          </Card>
        </Grid>

        <Grid sm={8} xs={12}>
          <RenderResults nums={result} signal={flags} />
        </Grid>

      </Grid.Container>
      <Spacer y="2" />
      <Col justify="center" align="center">
      <Button
        justify="center"
        align="left"
        flex="center"
        onPress={updateCount}
        disabled={isRefreshing}
        light
        animated={false}
      >
        {isRefreshing ? (
          <Loading color="currentColor" size="md" />
        ) : (
          <Text h4 align="left" weight="bold">
            Refresh
          </Text>
        )}
      </Button>
      </Col>
      <Spacer y="4" />
      <Col justify="center" align="center">
      <Switch
          color="default"
          onChange={toggleDark}
          checked={true}
          size="xl"
          iconOn={<Sun filled />}
          iconOff={<Moon filled />}
        />
      </Col>
      <Spacer y="2"/>
      <Col justify="center" align="center">
          <Text
            weight="bold"
          >Made in Wisconsin with ❤️ and 🧀</Text>
      </Col>
      </Container>
      <Spacer y="3"/>
    </NextUIProvider>
  );
}

export default App;
