import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
  const inputText = useRef("");
  useEffect(() => {
    fetchPost();
  }, [postData.sort]);
  // useEffect(() => {
  //   inputText.current = inEdit.value;
  // }, [inEdit]);
  console.log("PRODUCDS STATE ", postData);

  // const [tempPosts, setTempPosts] = useState([...postData.posts]);

  const changeEditMode = (product_id) => {
    // console.log("temp posts ", tempPosts);
    // console.log("edit product id ", product_id);
    // let currentPost = tempPosts.filter((item) => item.id === product_id);
    // currentPost.title = "helo";
    // edit(product_id);

    // setTempPosts([(tempPosts.filter((item) => item.id === product_id))]);

    setInEdit({
      ...inEdit,
      isInEditMode: !inEdit.isInEditMode,
      id: product_id,
    });
    console.log("Click");
  };

  const updateComponentValue = () => {
    console.log("INPUT VALUE: ", inputText);
    setInEdit({
      ...inEdit,
      isInEditMode: !inEdit.isInEditMode,
      // value: inputText.current.focus(),
    });
  };
  console.log("Edit mode : ", inEdit);

  return postData.loading ? (
    <h2 class="display-1">Loading...</h2>
  ) : postData && postData.error ? (
    <h2>{postData.error}</h2>
  ) : (
    <div>
      <h2>Product List</h2>
      <button onClick={sort}>Sort</button>
      <div>
        {postData &&
          postData.posts &&
          postData.sort &&
          postData.posts.map((post) => {
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
                        ref={inputText}
                        // value={inEdit.value}
                        // onChange={(e) => setInEdit(e.target.value)}
                      />
                      <button onClick={changeEditMode}>X</button>
                      <button onClick={updateComponentValue}>OK</button>
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
                  <button onClick={() => deleteProduct(post.id)}>
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
          })}
        {postData.sort === false
          ? postData.posts
              .sort((a, b) => {
                return a.price - b.price;
              })
              .map((post) => {
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
                      <button onClick={() => addToCart(post.id)}>
                        Add To Cart
                      </button>
                      <button onClick={() => deleteProduct(post.id)}>
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

        {postData.new_products.length > 0
          ? postData.new_products.map((post) => {
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
                    <button onClick={() => addToCart(post.id)}>
                      Add To Cart
                    </button>
                    <button onClick={() => deleteProduct(post.id)}>
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
    edit: (id) => dispatch(handleEditPost(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
// [].concat(postData.posts).sort((a, b) => (a.itemM > b.itemM ? 1 : -1));
