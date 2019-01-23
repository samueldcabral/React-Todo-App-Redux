import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AddTodo />
        <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
