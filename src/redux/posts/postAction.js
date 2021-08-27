// IMPORT ACTION TYPES
import axios from "axios";
import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  DELETE_PRODUCT,
  PRODUCT_INFORMATION,
  ADD_TO_CART,
  DELETE_PROUDUCT_FROM_CART,
  POST_PRODUCT_SUCCESS,
} from "./postType";

const api_url =
  "https://my-json-server.typicode.com/nonuabi/Ecommerce-App-DB/posts";

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
      .get(api_url)
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

export const addToCart = (product_id) => {
  return {
    type: ADD_TO_CART,
    payload: product_id,
  };
};

export const deleteProductFromCart = (product_id) => {
  return {
    type: DELETE_PROUDUCT_FROM_CART,
    payload: product_id,
  };
};

export const postProductSuccess = (product) => {
  console.log("new product action ", product);
  return {
    type: POST_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const addProduct = (product) => {
  return async (dispatch) => {
    const res = await fetch(api_url, {
      method: "POST",
      body: JSON.stringify({
        ...product,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
    if (data) {
      dispatch(postProductSuccess(data));
    }
    console.log(data);
  };
};