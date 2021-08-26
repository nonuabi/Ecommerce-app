import {
  DELETE_PRODUCT,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  PRODUCT_INFORMATION,
} from "./postType";

// INITIAL STATE
const initialState = {
  loading: false,
  posts: [],
  error: "",
  product_info_id: 0,
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        product_info_id: 0,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        product_info_id: 0,

        posts: action.payload,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        product_info_id: 0,
        error: action.payload,
      };
    case DELETE_PRODUCT:
      alert("want to delete product");
      return {
        ...state,
        loading: false,
        error: "",
        product_info_id: 0,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case PRODUCT_INFORMATION:
      console.log("INFO payload ", action.payload);
      return {
        ...state,
        product_info_id: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
