import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/posts/postAction";
const InformationContainer = ({ product_info, addToCart }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    let temp = product_info.posts.filter(
      (post) => post.id === product_info.product_info_id
    );
    setItem(temp);
  }, []);

  return (
    <div>
      {item.map((info) => {
        return (
          <>
            <h2>Detailed Information</h2>
            <div className="card" key={info.id}>
              <div className="card-body">
                <h5 className="card-title">{info.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Rating : {info.rating}
                </h6>
                <p className="card-text">{info.description}</p>
                <p className="card-text">{info.about}</p>
                <p className="card-text">
                  <i className="fas fa-rupee-sign"></i>
                  {info.price}
                </p>
                <button onClick={() => addToCart(info.id)}>Add To Cart</button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("info mapstate ", state);
  return {
    product_info: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InformationContainer);
