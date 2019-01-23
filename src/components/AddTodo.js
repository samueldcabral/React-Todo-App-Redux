import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as todoActions from '../actions/todo';
import { bindActionCreators } from 'redux';

class AddTodo extends Component {
  constructor(props){
    super(props);
    console.log(props)
  }
  state = {
    todo: ''
  }

  addTodo = () => {
    this.props.addTodo(this.state.todo)
  }

  render() {
    return (
      <div>
        <label> Enter todo
          <input type="text" placeholder="Enter a todo" onChange={(e) => this.setState({todo: e.target.value})} value={this.state.todo}/>
        </label>
        <br />
        <br />
        <label>Enter
          <button onClick={this.addTodo}>Submit</button>
        </label>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);
const mapStateToProps = state => ({
  todo: state.todo
})


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)