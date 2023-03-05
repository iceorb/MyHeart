import React from "react";
import logo from './logo.svg';
import './App.css';

import { NextUIProvider } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import HealthInput from './components/HealthInput';

const Component = () => <Button>Click me</Button>;
function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <HealthInput />
    </NextUIProvider>
  );
}

export default App;
