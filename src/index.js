import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Products, NewProduct, Navbar } from "./components/index";
import { Provider } from "react-redux";
import store from "./redux/store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/new">
          <NewProduct />
        </Route>
      </Switch>
    </Router>
  </Provider>,

  document.getElementById("root")
);
