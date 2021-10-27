import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../nav.js';

test('renders to Nav', () => {
  render(
  <BrowserRouter>
    <Nav />
  </BrowserRouter>,
  );
  const navText = screen.getByText('Math Magicians');
  expect(navText).toMatchSnapshot();
});
