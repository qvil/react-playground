import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from 'ducks';
// import App from 'containers';

const store = createStore(reducer);
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
