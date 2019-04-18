export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const initialState = { data: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, data: state.data + 1 };
    case DECREMENT:
      return { ...state, data: state.data - 1 };
    default:
      return state;
  }
};

export default reducer;
