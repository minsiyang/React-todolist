import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

jest.mock('./Todo', () => {
  const TodoMock = props => {
    return (
      <div>
        <li>
          {props.note}
          <input type="checkbox" />
        </li>
      </div>
    )
  }
  return TodoMock;
})

test('it can render a todo note', () => {
  render(<TodoList lists={["Get Milk"]} />)
  const todo = screen.getByText("Get Milk")
  const checkBox = screen.getByRole("checkbox")
  expect(todo).toBeInTheDocument();
  expect(checkBox).toBeInTheDocument();
})

test('user can check off lists', () => {
  render(<TodoList lists={["Get Milk", "School Pickup"]}/>)
  const todoOne = screen.getByText("Get Milk")
  const todoTwo = screen.getByText("School Pickup")
  expect(todoOne).toBeInTheDocument();
  expect(todoTwo).toBeInTheDocument();
})
