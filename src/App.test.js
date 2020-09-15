import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const element = screen.getByText(/yet another to do list/i);
  const textBox = screen.getByRole('textbox')
  expect(element).toBeInTheDocument();
  expect(textBox).toBeInTheDocument();
});
