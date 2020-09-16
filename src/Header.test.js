import React from 'react';
import { render, screen } from "@testing-library/react";
import Header from './Header';

test('it renders the header', () => {
  render(<Header />)
  const element = screen.getByText(/yet another to do list/i)
  expect(element).toBeInTheDocument();
})