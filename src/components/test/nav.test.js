import Nav from '../nav'
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';


test('renders to Nav', () => {
  render( 
  <BrowserRouter>
    <Nav />
  </BrowserRouter>);
  const navText = screen.getByText('Math Magicians');
  expect(navText).toMatchSnapshot();
});

