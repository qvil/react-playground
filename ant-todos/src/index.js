import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'containers';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Firebase
import * as firebase from 'firebase';
// Custom
import reducer from 'ducks';

// Firebase Start
const config = {
  apiKey: "AIzaSyBaEKUTLA4sd2VakMU3lLQZlfZ1yLH5CPI",
  authDomain: "ant-todos.firebaseapp.com",
  databaseURL: "https://ant-todos.firebaseio.com",
  projectId: "ant-todos",
  storageBucket: "",
  messagingSenderId: "223321773229"
};
firebase.initializeApp(config);

const database = firebase.database();
// Firebase End

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer database={database} />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
