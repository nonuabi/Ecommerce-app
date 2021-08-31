import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../css/ProductsContainer.css";
import {
  deleteProduct,
  fetchPosts,
  productInformation,
  addToCart,
  handleSortButton,
  handleEditPost,
} from "../redux/posts/postAction";
const Products = ({
  fetchPost,
  postData,
  deleteProduct,
  product_Information,
  addToCart,
  sort,
  edit,
}) => {
  const [inEdit, setInEdit] = useState({
    value: "Type Here..",
    isInEditMode: false,
    id: -1,
  });
  const inputRef = useRef(null);
  useEffect(() => {
    fetchPost();
  }, [postData.sort]);
  const changeEditMode = (product_id) => {
    setInEdit({
      ...inEdit,
      isInEditMode: !inEdit.isInEditMode,
      id: product_id,
    });
  };

  const updateComponentValue = (product_id) => {
    edit({ id: product_id, value: inputRef.current.value });
    if (inputRef.current) {
      setInEdit({
        ...inEdit,
        isInEditMode: !inEdit.isInEditMode,
        value: inputRef.current.value,
      });
    }
  };
  const handleSort = () => {
    if (postData.sort) {
      return postData.posts;
    } else {
      let sorted = postData.posts.sort((a, b) => {
        return a.price - b.price;
      });
      return sorted;
    }
  };
  console.log("Edit mode : ", inEdit);
  console.log("PRODUCDS STATE ", postData);
  return postData.loading ? (
    <h2 class="display-1">Loading...</h2>
  ) : postData && postData.error ? (
    <h2>{postData.error}</h2>
  ) : (
    <div>
      <div className="product_header">
        <h2>Product List</h2>
        <button class="btn btn-outline-dark" onClick={sort}>
          Sort
        </button>
      </div>
      <div className="cart_container">
        {postData &&
          postData.posts &&
          handleSort().map((post) => {
            return (
              <div className="card" id="cart_id" key={post.id}>
                <div className="card-body">
                  {inEdit.isInEditMode && inEdit.id === post.id ? (
                    <div
                      id="edit_input_container"
                      class="input-group flex-nowrap"
                    >
                      <input
                        class="form-control"
                        type="text"
                        defaultValue={post.title}
                        ref={inputRef}
                      />
                      <button
                        id="edit_btn"
                        class="btn btn-danger"
                        onClick={changeEditMode}
                      >
                        X
                      </button>
                      <button
                        id="edit_btn"
                        class="btn btn-success"
                        onClick={() => updateComponentValue(post.id)}
                      >
                        OK
                      </button>
                    </div>
                  ) : (
                    <div className="header_container">
                      <h5 className="card-title">{post.title}</h5>
                      <button
                        class="btn btn-outline-primary"
                        onClick={() => changeEditMode(post.id)}
                      >
                        <i class="fas fa-pencil-alt"></i>
                      </button>
                    </div>
                  )}
                  <h6 className="card-subtitle mb-2 text-muted">
                    {post.rating}
                  </h6>
                  <p className="card-text">{post.description}</p>
                  <p className="card-text">
                    <i className="fas fa-rupee-sign"></i>
                    {post.price}
                  </p>
                  <div class="button_container">
                    <button
                      class="btn btn-outline-primary"
                      onClick={() => addToCart(post.id)}
                    >
                      Add To Cart
                    </button>
                    <button
                      class="btn btn-outline-danger"
                      onClick={() => deleteProduct(post.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>

                    <Link
                      class="btn btn-outline-info"
                      to="productInformation"
                      onClick={() => product_Information(post.id)}
                    >
                      Info
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

        {postData.new_products.length > 0
          ? postData.new_products.map((post) => {
              return (
                <div className="card" key={post.id}>
                  <div className="card-body">
                    <button onClick={() => changeEditMode(post.id)}>
                      <i class="fas fa-pencil-alt"></i>
                    </button>
                    {inEdit.isInEditMode && inEdit.id === post.id ? (
                      <div>
                        <input
                          type="text"
                          defaultValue={post.title}
                          ref={inputRef}
                        />
                        <button onClick={changeEditMode}>X</button>
                        <button onClick={() => updateComponentValue(post.id)}>
                          OK
                        </button>
                      </div>
                    ) : (
                      <h5 className="card-title">{post.title}</h5>
                    )}
                    <h6 className="card-subtitle mb-2 text-muted">
                      {post.rating}
                    </h6>
                    <p className="card-text">{post.description}</p>
                    <p className="card-text">
                      <i className="fas fa-rupee-sign"></i>
                      {post.price}
                    </p>
                    <button onClick={() => addToCart(post.id)}>
                      Add To Cart
                    </button>
                    <button
                      class="btn btn-danger"
                      onClick={() => deleteProduct(post.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>

                    <Link
                      to="productInformation"
                      onClick={() => product_Information(post.id)}
                    >
                      Info
                    </Link>
                  </div>
                </div>
              );
            })
          : null}
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
    product_Information: (id) => dispatch(productInformation(id)),
    addToCart: (id) => dispatch(addToCart(id)),
    sort: () => dispatch(handleSortButton()),
    edit: (data) => dispatch(handleEditPost(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
