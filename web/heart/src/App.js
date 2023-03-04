import logo from './logo.svg';
import './App.css';
import React from 'react'
import { NextUIProvider } from '@nextui-org/react';
import * as ReactDOM from 'react-dom';
import Glass from './components/Glass'

function App() {
  return (
    <div className="app">
    <div className="wrapper">
      <h1>Input Biological Factors</h1>
      <form>
      </form>
      <h1>Input Socioeconomic Factors</h1>
      <form>

      </form>
    </div>
  </div>
  );
}

export default App;
