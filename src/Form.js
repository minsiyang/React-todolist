import React, { Component } from 'react';
import TodoList from './TodoList';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

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
        <form>
          <label htmlFor="textbox" >Add Todo</label>
          <input type="text" id="textbox" value={this.state.input} onChange={this.handleChange} />
          <br />
          <Button variant="outlined"
                  id="save"
                  startIcon={<SaveIcon />}
                  size="small"
                  type="submit" 
                  onClick={this.handleSubmit} >Save</Button>
                  
          <Button variant="contained" 
                  color="secondary"
                  size="small"
                  startIcon={<DeleteIcon />} 
                  type="button" 
                  onClick={this.handleReset}>Reset</Button>
        </form>
        <TodoList lists={this.state.todos} />
      </div>
    )
  }
}

export default Form;