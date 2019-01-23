import React, { Component } from 'react';
import Todo from './Todo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../actions/todo';

class TodoList extends Component {
  constructor(props){
    super(props);
    console.log(props)
  }

  state = {
    todo: ''
  }

  render(){
    return (
      <ul>
        {/* {this.props.todo.map(todo => (<Todo todo={todo} key={todo.id}/> ))} */}
      </ul>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);
const mapStateToProps = state => ({
  todo: state.todo
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

