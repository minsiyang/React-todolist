import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import TodoList from './TodoList';

test('user can add a todo note', () => {
  render(<TodoList lists={["Get Milk"]} />)
  const todo = screen.getByText("Get Milk")
  expect(todo).toBeInTheDocument();
})

// test('user can check off a list', () => {
//   render(<TodoList />)
//   // const textBox = screen.getByLabelText("Add Todo")
//   // userEvent.type(textBox, "Get Milk")
//   // userEvent.click(screen.getByText(/save/i))

//   const checkBox = screen.getByRole("checkbox")
//   userEvent.click(checkBox)
//   expect(checkBox).toBeChecked();
// })

// test('user can delete the whole list', () => {
//   render(<TodoList />)
//   const textBox = screen.getByRole("textbox")
//   userEvent.type(textBox, "School Pickup")
//   userEvent.click(screen.getByText(/save/i))
//   const todo = screen.getByText(/school pickup/i)
//   expect(todo).toBeInTheDocument()
//   userEvent.click(screen.getByText(/reset/i))
//   expect(todo).not.toBeInTheDocument();
// })