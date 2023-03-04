import logo from './logo.svg';
import './App.css';
import React from 'react'
import * as ReactDOM from 'react-dom';
import Glass from './components/Glass'

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <Component />
    </NextUIProvider>
  );
}

export default App;
