import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// GET PROVIDER FROM THE REACT REDUX
import { Provider } from "react-redux";
// IMPORT STORE
import store from "./redux/store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
ReactDOM.render(
  // SEDING STORE AS A PROPS
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById("root")
);
