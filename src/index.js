import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './store.js'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
//createStore(reducer)
//After dispatch, a store is created here
/*
UNDER THE HOOD:
function createStore(reducer) {
  let state;
 
  function dispatch(action) {
    state = reducer(state, action);
    render();
  }
 //reducer is imported from combineReducers
  function getState() {
    return state;
  };
 
  return {
    dispatch,
    getState
  };
};
