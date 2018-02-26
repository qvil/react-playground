// Firebase
import * as firebase from 'firebase';
// Action Types
const ADD_TODO = "ant-todos/todos/ADD_TODO";
const TOGGLE_TODO = "ant-todos/todos/TOGGLE_TODO";
const MODIFY_TODO = "ant-todos/todos/MODIFY_TODO";
const DELETE_TODO = "ant-todos/todos/DELETE_TODO";

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

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id,
});

const initialState = [
  { id: 0, text: "Play JS", completed: false },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
    // TODO: Change method set -> push
      firebase.database().ref('todos').set({
        id: state.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1,
        text: action.text,
        completed: false,
      });
      return state;
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
    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )
    default:
      return state;
  }
};

export default todos;