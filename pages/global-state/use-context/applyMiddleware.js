import { INCREMENT } from "./reducer";

export const applyMiddleware = dispatch => action => {
  switch (action.type) {
    case INCREMENT:
      console.log("Pre-action Middleware!");
      dispatch(action);
      break;
    default:
      dispatch(action);
      break;
  }
};
