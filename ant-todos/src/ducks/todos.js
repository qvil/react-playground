// Action Types
const ADD_TODO = "ant-todos/todos/ADD_TODO";
const TOGGLE_TODO = "ant-todos/todos/TOGGLE_TODO";

export const addTodo = text => ({
  type: ADD_TODO,
  text
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
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
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todos;