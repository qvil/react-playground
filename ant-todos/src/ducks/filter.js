// Constants
export const SHOW_ALL = "SHOW_ALL";
export const SHOW_ACTIVE = "SHOW_ACTIVE";
export const SHOW_COMPLETED = "SHOW_COMPLETED";

// Action Types
const SET_FILTER = "ant-todos/filter/SET_FILTER"

// Actions
export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});

// Reducer
const filter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter
    default:
      return state;
  }
}

export default filter;