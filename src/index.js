import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Products,
  NewProduct,
  Navbar,
  InformationContainer,
} from "./components/index";
import { Provider } from "react-redux";
import store from "./redux/store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CartContainer from "./components/CartContainer";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/Home">
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
