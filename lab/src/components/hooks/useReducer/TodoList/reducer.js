import { ADD_TODO, EDIT_TODO } from "./constants";

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length,
          text: action.text
        }
      ];
    case EDIT_TODO:
      state[action.id] = {
        ...state[action.id],
        text: action.text
      };
      return state;
    default:
      return state;
  }
}
