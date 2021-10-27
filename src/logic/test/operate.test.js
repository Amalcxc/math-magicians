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
