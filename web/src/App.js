import logo from './logo.svg';
import './App.css';

import { NextUIProvider } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import Input from './components/Input';

const Component = () => <Button>Click me</Button>;
function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <Input />
    </NextUIProvider>
  );
}

export default App;
