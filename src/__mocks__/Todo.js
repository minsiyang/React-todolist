import React from 'react';

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

export default TodoMock;