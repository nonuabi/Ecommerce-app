import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { App, Products, NewProduct, Navbar } from "./components/index";
import store from "./store";
import { Provider } from "react-redux";

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
