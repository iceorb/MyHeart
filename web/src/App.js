import React from "react";
import logo from './logo.svg';
import './App.css';

import { NextUIProvider } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import HealthInput from './components/HealthInput';
import DataTransfer from './components/DataTransfer';
import Nav from './components/Nav';

const Component = () => <Button>Click me</Button>;
function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <Nav />
      <HealthInput />
      <DataTransfer />
    </NextUIProvider>
  );
}

export default App;
