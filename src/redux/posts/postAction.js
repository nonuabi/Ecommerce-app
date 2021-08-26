// IMPORT ACTION TYPES
import axios from "axios";
import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  DELETE_PRODUCT,
  PRODUCT_INFORMATION,
} from "./postType";

// ACTION CREATER
export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};
export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};
export const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

// FETCH POST FORM THE API ACTION WHICH RETURN AN FUNCTION
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest);
    axios
      .get("https://my-json-server.typicode.com/nonuabi/Ecommerce-App-DB/posts")
      .then((response) => {
        console.log("api fetch posts response ", response);
        dispatch(fetchPostsSuccess(response.data));
      })
      .catch((err) => {
        dispatch(fetchPostsFailure(err.message));
      });
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};

export const productInformation = (product_id) => {
  console.log("INFO ID ", product_id);
  return {
    type: PRODUCT_INFORMATION,
    payload: product_id,
  };
};
