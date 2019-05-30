import { createAction, handleActions } from "redux-actions";

export const SET_DATA = "SET_DATA";
export const setData = createAction(SET_DATA);
export const FETCH_DATA = "FETCH_DATA";
export const fetchData = createAction(FETCH_DATA);

const initialState = { data: 1 };
const reducer = handleActions(
  {
    [SET_DATA]: (state, action) => {
      console.log("TCL: action", action);
      return {
        ...state,
        data: action.payload.data
      };
    }
  },
  initialState
);

export default reducer;
