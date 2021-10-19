import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    this.bar = 'Hello World';
    return <div className='calculator'>
      <div className='input'>
        <input type="number" id="number" value="number" />
      </div>
      <div className='calculator-buttons'>
        <button className='cal-style'>AC</button>
        <button className='cal-style'>+/-</button>
        <button className='cal-style'>%</button>
        <button className='cal-style is-orange'>.-.</button>
        <button className='cal-style'>7</button>
        <button className='cal-style'>8</button>
        <button className='cal-style'>9</button>
        <button className='cal-style is-orange'>x</button>
        <button className='cal-style'>4</button>
        <button className='cal-style'>5</button>
        <button className='cal-style'>6</button>
        <button className='cal-style is-orange'>-</button>
        <button className='cal-style'>1</button>
        <button className='cal-style'>2</button>
        <button className='cal-style'>3</button>
        <button className='cal-style is-orange'>+</button>
        <button className='cal-style is-zero'>0</button>
        <button className='cal-style'>.</button>
        <button className='cal-style is-orange'>=</button>
      </div>
    </div>;
  }
}

export default Calculator;