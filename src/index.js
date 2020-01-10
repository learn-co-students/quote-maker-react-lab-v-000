import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index";

let store = createStore(
  rootReducer,
  window.__REDUX_DEV_TOOLS__ && window.__REDUX_DEV_TOOLS__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
