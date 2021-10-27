import Home from '../home'
import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders to home', () => {
  render(<Home />);
  const linkElement = screen.getByText('Welcome to the Home');
  expect(linkElement).toBeInTheDocument();
});
