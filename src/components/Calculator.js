import React, { Component } from 'react';
import Calculate from '../logic/calculate.js';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
    };
  }

  calculate = (e) => {
    this.setState((prev) => Calculate(prev, e.target.name));
  };

  render() {
    let input;
    const { total, next } = this.state;
    if (next === null && total === null) {
      input = <p>0</p>;
    } else if (next === null) {
      input = <p>{total}</p>;
    } else {
      input = <p>{next}</p>;
    }
    return <div className='calculator'>
      <div className='input'>
        {input}
      </div>
      <div className='calculator-buttons'>
        <button name='AC' type='button' className='cal-style' onClick={this.calculate}>AC</button>
        <button name='+/-' type='button' className='cal-style' onClick={this.calculate}>+/-</button>
        <button name='%' type='button' className='cal-style' onClick={this.calculate}>%</button>
        <button name='÷' type='button' className='cal-style is-orange' onClick={this.calculate}>÷</button>
        <button name='7' type='button' className='cal-style' onClick={this.calculate}>7</button>
        <button name='8' type='button' className='cal-style' onClick={this.calculate}>8</button>
        <button name='9' type='button' className='cal-style' onClick={this.calculate}>9</button>
        <button name='x' type='button' className='cal-style is-orange' onClick={this.calculate}>x</button>
        <button name='4' type='button' className='cal-style' onClick={this.calculate}>4</button>
        <button name='5' type='button' className='cal-style' onClick={this.calculate}>5</button>
        <button name='6' type='button' className='cal-style' onClick={this.calculate}>6</button>
        <button name='-' type='button' className='cal-style is-orange' onClick={this.calculate}>-</button>
        <button name='1' type='button' className='cal-style' onClick={this.calculate}>1</button>
        <button name='2' type='button' className='cal-style' onClick={this.calculate}>2</button>
        <button name='3' type='button' className='cal-style' onClick={this.calculate}>3</button>
        <button name='+' type='button' className='cal-style is-orange' onClick={this.calculate}>+</button>
        <button name='0' type='button' className='cal-style is-zero' onClick={this.calculate}>0</button>
        <button name='.' type='button' className='cal-style' onClick={this.calculate}>.</button>
        <button name='=' type='button' className='cal-style is-orange' onClick={this.calculate}>=</button>
      </div>
    </div>;
  }
}

export default Calculator;