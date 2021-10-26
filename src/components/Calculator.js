import React, { useState } from 'react';
import Calculate from '../logic/calculate.js';

function Calculator() {
  const [calTotal, setTotal] = useState({ total: null, next: null });

  const calculate = (e) => {
    const value = e.target.name;
    setTotal((p) => Calculate(p, value));
  };

  function input() {
    const { total, next } = calTotal;
    if (next === null && total === null) {
      return <p className='p-tag'>0</p>;
    } if (next === null) {
      return <p className='p-tag'>{total}</p>;
    }
    return <p className='p-tag'>{next}</p>;
  }

  return <div className='container'>
    <h4 className='cal-text'>Lets do Some Math!</h4>
    <div className='calculator'>
      <div className='input'>
      {input()}
      </div>
      <div className='calculator-buttons'>
        <button name='AC' type='button' className='cal-style' onClick={calculate}>AC</button>
        <button name='+/-' type='button' className='cal-style' onClick={calculate}>+/-</button>
        <button name='%' type='button' className='cal-style' onClick={calculate}>%</button>
        <button name='÷' type='button' className='cal-style is-orange' onClick={calculate}>÷</button>
        <button name='7' type='button' className='cal-style' onClick={calculate}>7</button>
        <button name='8' type='button' className='cal-style' onClick={calculate}>8</button>
        <button name='9' type='button' className='cal-style' onClick={calculate}>9</button>
        <button name='x' type='button' className='cal-style is-orange' onClick={calculate}>x</button>
        <button name='4' type='button' className='cal-style' onClick={calculate}>4</button>
        <button name='5' type='button' className='cal-style' onClick={calculate}>5</button>
        <button name='6' type='button' className='cal-style' onClick={calculate}>6</button>
        <button name='-' type='button' className='cal-style is-orange' onClick={calculate}>-</button>
        <button name='1' type='button' className='cal-style' onClick={calculate}>1</button>
        <button name='2' type='button' className='cal-style' onClick={calculate}>2</button>
        <button name='3' type='button' className='cal-style' onClick={calculate}>3</button>
        <button name='+' type='button' className='cal-style is-orange' onClick={calculate}>+</button>
        <button name='0' type='button' className='cal-style is-zero' onClick={calculate}>0</button>
        <button name='.' type='button' className='cal-style' onClick={calculate}>.</button>
        <button name='=' type='button' className='cal-style is-orange' onClick={calculate}>=</button>
      </div>
    </div>
   </div>;
}

export default Calculator;