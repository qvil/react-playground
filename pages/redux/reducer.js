import { createAction, handleActions } from "redux-actions";

export const FETCH_DATA = "FETCH_DATA";
export const fetchData = createAction(FETCH_DATA);

const initialState = { data: 1 };
const reducer = handleActions(
  {
    [FETCH_DATA]: (state, action) => ({
      ...state,
      data: action.payload.data
    })
  },
  initialState
);

export default reducer;
