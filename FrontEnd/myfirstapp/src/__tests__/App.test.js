import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('Renders_slogan_on Home', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Your best bookstore/i);
  expect(linkElement).toBeInTheDocument();
});
