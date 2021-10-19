import React from 'react';
import './App.css';
import Calculator from './components/Calculator.js';

class App extends React.PureComponent {
  render() {
    this.hello = 'Hello World';
    return (
      <Calculator />
    );
  }
}

export default App;
