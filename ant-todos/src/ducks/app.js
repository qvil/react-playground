// Constants
export const SHOW_LOADING = "ant-todos/app/SHOW_LOADING";

// Actions
export const showLoading = (mode = true) => ({
  type: SHOW_LOADING,
  mode
});

// Reducer
const initialState = {
  isLoadded: false,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        isLoadded: action.mode,
      };
    default:
      return state;
  }
}

export default app;