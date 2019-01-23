import React, { Component } from 'react'

class Todo extends Component {

  render() {
    return (
      <div>
        <li key={this.props.todo.id}>{this.props.todo.text} <button id={this.props.todo.id}>Delete</button></li>
      </div>
    )
  }
}

export default Todo