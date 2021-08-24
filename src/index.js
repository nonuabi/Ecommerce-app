import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import { Products, NewProduct, Navbar } from "./components/index";

ReactDOM.render(
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
  </Router>,
  document.getElementById("root")
);
