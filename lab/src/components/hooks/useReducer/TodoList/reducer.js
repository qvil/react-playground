import { ADD_TODO, REMOVE_TODO } from "./constants";

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
    case REMOVE_TODO:
      return state.filter(todo => {
        console.log(todo.id, action.id);
        return todo.id !== action.id;
      });
    default:
      return state;
  }
}
