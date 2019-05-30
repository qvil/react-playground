import React from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { helloSaga } from "./saga";
import reducer from "./reducer";
import ReduxApp from "./ReduxApp";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(helloSaga);

const Redux = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux</h1>
        <ReduxApp />
      </div>
    </Provider>
  );
};

export default Redux;
