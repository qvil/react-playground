import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "./constants";

let index = 0;
export default function reducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: index++,
          text: action.text
        }
      ];
    case EDIT_TODO:
      state[action.id] = {
        ...state[action.id],
        text: action.text
      };
      return state;
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}
