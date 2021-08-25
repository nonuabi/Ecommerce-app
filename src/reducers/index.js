import { GETPRODUCTDATA } from "../actions/index";
// TO GET THE PRODUCT DATA FORM THE API
const initialState = 0;
const handleProducts = (state = initialState, action) => {
  switch (action.type) {
    case "GETPRODUCTDATA":
      return state + 1;
    default:
      return state;
  }
};
export default handleProducts;
