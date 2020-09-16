import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      todos: []
    }
  }
  
  handleChange = event => {
    this.setState( { input: event.target.value } );
  }

  handleSubmit = event => {
    this.state.todos.push(this.state.input)
    this.setState( {todos: this.state.todos, input: '' })
    event.preventDefault();
  }

  handleReset = event => {
    this.setState( {todos: [] })
    event.preventDefault();
  }

  render () {
    return(
      <div className="todolist">
        <h1>Yet Another To Do List</h1>
        <form>
          <label htmlFor="textbox" >Add Todo</label>
          <input type="text" id="textbox" value={this.state.input} onChange={this.handleChange} />
          <input type="submit" value="Save" onClick={this.handleSubmit} />
          <button type="button" onClick={this.handleReset}>Reset</button>
        </form>
        <ul>{this.state.todos.map((todo, index) => {
             return <li key={index}>{todo}
                    <input type="checkbox" />
                    </li>
        })}</ul>
      </div>
    )
  }
}

export default TodoList;