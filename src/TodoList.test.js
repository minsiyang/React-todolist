import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from './TodoList';

test('it renders the title of todo list', () => {
  render(<TodoList />)
  const element = screen.getByText(/yet another to do list/i)
  const textBox = screen.getByLabelText(/add todo/i)
  expect(element).toBeInTheDocument();
  expect(textBox).toBeInTheDocument();
})

test('user can add a todo note', () => {
  render(<TodoList />)
  const textBox = screen.getByLabelText(/add todo/i)
  userEvent.type(textBox, "Testing todo list")
  userEvent.click(screen.getByText(/save/i))
  const todo = screen.getByText("Testing todo list")
  expect(todo).toBeInTheDocument();
})

test('user can check off a list', () => {
  render(<TodoList />)
  const textBox = screen.getByLabelText("Add Todo")
  userEvent.type(textBox, "Get Milk")
  userEvent.click(screen.getByText(/save/i))
  const checkBox = screen.getByRole("checkbox")
  userEvent.click(checkBox)
  expect(checkBox).toBeChecked();
})

test('user can delete the whole list', () => {
  render(<TodoList />)
  const textBox = screen.getByRole("textbox")
  userEvent.type(textBox, "School Pickup")
  userEvent.click(screen.getByText(/save/i))
  const todo = screen.getByText(/school pickup/i)
  expect(todo).toBeInTheDocument()
  userEvent.click(screen.getByText(/reset/i))
  expect(todo).not.toBeInTheDocument();
})