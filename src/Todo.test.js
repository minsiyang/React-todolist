import React from 'react';
import { render, screen } from "@testing-library/react";
import Todo from './Todo';

test('it renders a single todo note and a checkbox', () => {
  render(<Todo note={ 'Get Milk' }/>)
  const todo = screen.getByText(/get milk/i)
  const checkBox = screen.getByRole('checkbox')
  expect(todo).toBeInTheDocument();
  expect(checkBox).toBeInTheDocument();
})