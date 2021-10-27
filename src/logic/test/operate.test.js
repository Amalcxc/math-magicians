import operate from '../operate.js';

describe('testing the operations', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('minus 1 - 2 to equal -1', () => {
    expect(operate(1, 2, '-')).toBe('-1');
  });

  test('times 0 x 2 to equal 0', () => {
    expect(operate(0, 2, 'x')).toBe('0');
  });

  test('division 10 ÷ 2 to equal 5', () => {
    expect(operate(10, 2, '÷')).toBe('5');
  });
});


describe('negative testing the operations', () => {
  test('adds 1 + 2 not to equal 5', () => {
    expect(operate(1, 2, '+')).not.toBe('5');
  });

  test('minus 1 - 2 not to equal 7', () => {
    expect(operate(1, 2, '-')).not.toBe('7');
  });

  test('times 0 x 2 not to equal -6', () => {
    expect(operate(0, 2, 'x')).not.toBe('-6');
  });

  test('division 10 ÷ 2 not to equal 12', () => {
    expect(operate(10, 2, '÷')).not.toBe('12');
  });
});
