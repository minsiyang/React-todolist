import React from 'react';

function Todo(props) {
  return(
    <div className="single-todo">
      <li>
        {props.note}
        <input type="checkbox" />
      </li>
    </div>
  )
}
export default Todo;