import React from 'react';

const TodoListMock = props => {
  return (
    <div>
      <ul>
        {props.lists.map((todo, index) => {
          return ( <li key={index}>{todo}
                    <input type="checkbox" />
                  </li>)
        })}
      </ul>
    </div>
  )
}

export default TodoListMock;
