import Calculator from '../Calculator';
import React from 'react';
import { render, screen } from '@testing-library/react';

test('Renders Calculator Component', () => {
  render(<Calculator />);
  const calculatorAc = screen.getByText('Lets do Some Math!');
  expect(calculatorAc).toMatchSnapshot();
});
