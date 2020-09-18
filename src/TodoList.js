import React from 'react';
import Todo from './Todo';

function TodoList(props) {

    const todos = props.lists
    return(
      <div className="todolist">
        <ul>
          {todos.map((todo, index) => {
            return <Todo key={index} note={todo} />
        })}
        </ul>
      </div>
    )
}

export default TodoList;