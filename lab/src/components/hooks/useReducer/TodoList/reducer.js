import { ADD_TODO, EDIT_TODO } from "./constants";

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.text
        }
      ];
    case EDIT_TODO:
      console.log("TCL: reducer -> action", action);
      // return state.filter(todo => todo.id === action.id);
      return state;
    default:
      return state;
  }
}
