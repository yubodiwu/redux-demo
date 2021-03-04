import React from 'react';

class AddTodo extends React.Component {
  render() {
    return (
      <div>
        <input />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default AddTodo;
