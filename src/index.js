import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Products,
  NewProduct,
  Navbar,
  InformationContainer,
  CartContainer,
} from "./components/index";
// GET PROVIDER FROM THE REACT REDUX
import { Provider } from "react-redux";
// IMPORT STORE
import store from "./redux/store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(
  // SEDING STORE AS A PROPS
  <Provider store={store}>
    <Router>
      <Navbar />
      {/* USED SWITCH  */}
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
        <Route path="/productInformation">
          <InformationContainer />
        </Route>
        <Route path="/cart">
          <CartContainer />
        </Route>
      </Switch>
    </Router>
  </Provider>,

  document.getElementById("root")
);
