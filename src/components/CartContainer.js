import React from "react";
import { connect } from "react-redux";
import { deleteProduct, productInformation } from "../redux/posts/postAction";
import { Link } from "react-router-dom";

const CartContainer = ({ cart, deleteProduct, product_Information }) => {
  return (
    <div>
      <h2>Cart Items</h2>
      {cart.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{item.rating}</h6>
              <p className="card-text">{item.description}</p>
              <p className="card-text">
                <i className="fas fa-rupee-sign"></i>
                {item.price}
              </p>
              <button onClick={() => deleteProduct(item.id)}>
                <i className="fas fa-trash"></i>
              </button>

              <Link
                to="productInformation"
                onClick={() => product_Information(item.id)}
              >
                Info
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id) => dispatch(deleteProduct(id)),
    product_Information: (id) => dispatch(productInformation(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
