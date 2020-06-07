import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const Todo = ({ todos, markComplete, delTodo }) => {
  // console.log(this.props.todos);
  return todos.map((todo) => <TodoItem key={todo.id} todo={todo} markComplete={markComplete} delTodo={delTodo} />);
};

//Prop types
Todo.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todo;
