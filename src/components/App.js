import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../actions/index";

const App = () => {
  const myState = useSelector((state) => state.handleProducts);
  console.log(myState);
  return (
    <div className="App">
      <button onClick={() => fetchData()}>Click</button>
    </div>
  );
};

export default App;
