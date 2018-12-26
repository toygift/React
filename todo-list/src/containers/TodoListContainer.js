import React, { Component } from 'react';
import TodoList from '../components/TodoList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todosActions from '../modules/todos';

class TodoListContainer extends Component {
  handleToggle = id => {
    const { TodosActions } = this.props;
    TodosActions.toggle(id);
  };
  handleRemove = id => {
    const { TodosActions } = this.props;
    TodosActions.remove(id);
  };
  render() {
    const { todos } = this.props;
    console.log('todos', todos);
    return <TodoList todos={todos} onToggle={this.handleToggle} onRemove={this.handleRemove} />;
  }
}

export default connect(
  state => ({
    todos: state.todos //state는 combineReducers 묶어준것들
  }),
  dispatch => ({
    TodosActions: bindActionCreators(todosActions, dispatch)
  })
)(TodoListContainer);
