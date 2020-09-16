import React from 'react';

function TodoList(props) {

    const todos = props.lists
    return(
      <div className="todolist">
        <ul>
          {todos.map((todo, index) => {
            return <li key={index}>{todo}
                    <input type="checkbox" />
                    </li>
        })}
        </ul>
      </div>
    )
}

export default TodoList;