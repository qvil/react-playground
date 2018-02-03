// Action Types
const ADD_TODO = "ant-todos/todos/ADD_TODO";

export const addTodo = (text) => ({
  type: ADD_TODO,
  text
});

const initialState = [
  { id: 0, text: "Play JS", completed: false },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1,
          text: action.text
        }
      ]
    default:
      return state;
  }
};

export default todos;