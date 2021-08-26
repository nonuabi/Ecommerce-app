import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deleteProduct, fetchPosts } from "../redux/posts/postAction";
const Products = ({ fetchPost, postData, deleteProduct }) => {
  useEffect(() => {
    fetchPost();
  }, []);
  console.log("PRODUCDS STATE ", postData);

  return postData && postData.loading ? (
    <h2 class="display-1">Loading...</h2>
  ) : postData && postData.error ? (
    <h2>{postData.error}</h2>
  ) : (
    <div>
      <h2>Product List</h2>
      <div>
        {postData &&
          postData.posts &&
          postData.posts.map((post, index) => {
            return (
              <div className="card" key={post.id}>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {post.rating}
                  </h6>
                  <p className="card-text">{post.description}</p>
                  <p className="card-text">
                    <i className="fas fa-rupee-sign"></i>
                    {post.price}
                  </p>
                  <button>Add To Cart</button>
                  <button onClick={() => deleteProduct(post.id)}>
                    <i className="fas fa-trash"></i>
                  </button>
                  <button>
                    <i className="fas fa-info "></i>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("product map to state ", state);
  return {
    postData: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: () => dispatch(fetchPosts()),
    deleteProduct: (id) => dispatch(deleteProduct(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
