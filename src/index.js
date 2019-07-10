import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
/*
import rootReducer from './reducers/index'
*/
import { combineReducers } from 'redux';
import quotes from './reducers/quotes';

const rootReducer = combineReducers({
  quotes
});

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
