import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = props => {
  const { todos } = props;
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
};

const mapStateToProps = state => {
};

export default TodoList;
