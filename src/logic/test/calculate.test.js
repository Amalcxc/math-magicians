import calculate from '../calculate.js';

const emptyCalc = {
  total: null,
  next: null,
  operation: null,
};

const oneNumberPressed = {
  total: null,
  next: '5',
};

const dotPressed = {
  total: null,
  next: '5.',
};

const numberAfterDot = {
  total: null,
  next: '5.5',
};

const operationSymbolPressed = {
  total: '5',
  next: null,
  operation: '+',
};

const numberAfterOperation = {
  total: '5',
  next: '10',
  operation: '+',
};

const totalResult = {
  total: '15',
  next: null,
  operation: null,
};

describe('Testing 5 + 10 = 15', () => {
  test('Pressing AC for the first time', () => {
    const res = calculate(emptyCalc, 'AC');
    expect(res).toStrictEqual(emptyCalc);
  });
  test('Pressing 5 as the first number', () => {
    const res = calculate(emptyCalc, '5');
    expect(res).toStrictEqual(oneNumberPressed);
  });
  test('Pressing + after pressing 5', () => {
    const res = calculate(oneNumberPressed, '+');
    expect(res).toStrictEqual(operationSymbolPressed);
  });
  test('Pressing 10 after pressing +', () => {
    const res = calculate(operationSymbolPressed, '10');
    expect(res).toStrictEqual(numberAfterOperation);
  });
  test('Pressing = after pressing 10', () => {
    const res = calculate(numberAfterOperation, '=');
    expect(res).toStrictEqual(totalResult);
  });
});

describe('Testing 5.5', () => {
  test('Pressing 5 as the first number', () => {
    const res = calculate(emptyCalc, '5');
    expect(res).toStrictEqual(oneNumberPressed);
  });
  test('Pressing . after 5', () => {
    const res = calculate(oneNumberPressed, '.');
    expect(res).toStrictEqual(dotPressed);
  });
  test('Pressing 5 after .', () => {
    const res = calculate(dotPressed, '5');
    expect(res).toStrictEqual(numberAfterDot);
  });
});