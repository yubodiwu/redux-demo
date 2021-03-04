import React from 'react';
import { connect } from 'react-redux';
import { ADD_TODO } from '../redux/actionTypes';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  }

  handleAddTodo = () => {
    const { dispatch } = this.props;

    dispatch({
      type: ADD_TODO,
      payload: this.state.input,
    });
  }
  
  render() {
    return (
      <div>
        <input onChange={e => this.updateInput(e.target.value)} />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state is ", state);
}

export default connect(mapStateToProps)(AddTodo);
