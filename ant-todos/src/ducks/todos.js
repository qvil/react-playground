// Action Types
const ADD_TODO = "ant-todos/todos/ADD_TODO";
const TOGGLE_TODO = "ant-todos/todos/TOGGLE_TODO";
const MODIFY_TODO = "ant-todos/todos/MODIFY_TODO";
const REMOVE_TODO = "ant-todos/todos/REMOVE_TODO";

export const addTodo = text => ({
  type: ADD_TODO,
  text
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const modifyTodo = (id, text) => ({
  type: MODIFY_TODO,
  id,
  text
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id,
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
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case MODIFY_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, text: action.text }
          : todo
      );
    case REMOVE_TODO:
    // Need return
      return state.splice(state.map((todo, index) => (
        todo.id === action.id
          ? index
          : null
      )), 1);
      // return state.map((todo, index) => {
      //   todo.id === action.id
      //     ? state.splice(index, 1)
      //     : todo
      // });
    default:
      return state;
  }
};

export default todos;