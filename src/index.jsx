import React from "react";
import { render } from "react-dom";
import "./styles/style.css";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./redux/store.config";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
