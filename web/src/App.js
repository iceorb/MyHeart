import React from "react";
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { NextUIProvider } from '@nextui-org/react';
import { Button, Container, Spacer, Text} from '@nextui-org/react';
import HealthInput from './components/HealthInput';
import DataTransfer from './components/DataTransfer';
import RenderResults from './components/RenderResults';
import Nav from './components/Nav';

function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <Nav />
      <Container align="center">
      <HealthInput />
      <DataTransfer />
      <RenderResults />
      <Spacer y="10" />
      <Text h5
      weight="bold"
      >Made in Wisconsin with ❤️ and 🧀</Text>
      <Spacer y="3" />
      </Container>
    </NextUIProvider>
  );
}

export default App;
