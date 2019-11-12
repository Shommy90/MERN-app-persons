import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import personReducer from "./reducers/personReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(personReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
