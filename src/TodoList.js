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
    this.setState( {todos: this.state.todos})
    event.preventDefault();
  }

  render () {
    return(
      <div className="todolist">
        <h1>Yet Another To Do List</h1>
        <label htmlFor="textbox" >Add Todo</label>
        <input type="text" id="textbox" value={this.state.input} onChange={this.handleChange} />
        <input type="submit" value="Save" onClick={this.handleSubmit} />
        <p>{this.state.todos}</p>
      </div>
    )
  }
}

export default TodoList;