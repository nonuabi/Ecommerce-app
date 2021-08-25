import { createStore } from "redux";
import handleProducts from "./reducers/index";

const store = createStore(
  handleProducts,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
