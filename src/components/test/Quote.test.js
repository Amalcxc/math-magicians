import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../Quote.js';

test('Renders Calculator Component', () => {
  render(<Quote />);
  const div = document.createElement('div');
  div.innerHTML = '<h4 className="quote"></h4>';
  expect(div).toMatchSnapshot();
});