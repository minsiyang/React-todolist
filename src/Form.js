import React, { Component } from 'react';
import TodoList from './TodoList';
import Header from './Header';

class Form extends Component {
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

  render() {
    return(
      <div className="form">
        <Header />
        <form>
          <label htmlFor="textbox" >Add Todo</label>
          <input type="text" id="textbox" value={this.state.input} onChange={this.handleChange} />
          <input type="submit" value="Save" onClick={this.handleSubmit} />
          <button type="button" onClick={this.handleReset}>Reset</button>
        </form>
        <TodoList lists={this.state.todos} />
      </div>
    )
  }
}

export default Form;