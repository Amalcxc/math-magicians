import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../home.js';

test('renders to home', () => {
  render(<Home />);
  const homeText = screen.getByText('Welcome to the Home');
  expect(homeText).toMatchSnapshot();
});
