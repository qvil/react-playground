import { ADD_TODO } from "./constants";

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
    default:
      return state;
  }
}
