import { ADD_TODO } from '../actionTypes';

const initialState = {
  todos: [],
};

const demoAction = {
  type: 'ADD_TODO',
  payload: {
    id: 1,
    content: 'todo text',
  }
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // const { id, content } = action.payload;
      return {
        ...state,
        todos: [...state.todos, action.payload]
        // allIds: [ ...state.allIds, id],
        // byIds: {
        //   ...state.byIds,
        //   [id]: {
        //     content: content,
        //     completed: false,
        //   },
        // },
      };
      break;
  
    default:
      break;
  }
  return state;
};

export default todos;
