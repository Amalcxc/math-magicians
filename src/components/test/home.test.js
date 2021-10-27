import Home from '../home'
import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders to home', () => {
  render(<Home />);
  const homeText = screen.getByText('Welcome to the Home');
  expect(homeText).toMatchSnapshot();
});
