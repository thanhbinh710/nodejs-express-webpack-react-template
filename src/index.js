import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/app";
import reducers from "./reducers";

import '../public/style/css/fonts.css';
import '../public/style/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector(".placeholderContainer")
);
