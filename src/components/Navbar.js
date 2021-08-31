import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../css/Navbar.css";
const Navbar = ({ numOfCartItems }) => {
  return (
    <div className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container-fluid">
        <Link id="home_link" className="navbar-brand" to="/">
          eCommerce
        </Link>
        <div className=" navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item nav-link active">
              <Link className="navbar-brand" to="products">
                Products
              </Link>
            </li>
            <li className="nav-item nav-link active">
              {" "}
              <Link className="navbar-brand" to="/new">
                Add a Product <i class="fas fa-folder-plus"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Link className="navbar-brand" to="/cart">
          <i className="fas fa-cart-plus"></i>
          <span>{numOfCartItems}</span>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCartItems: state.cart.length,
  };
};

export default connect(mapStateToProps)(Navbar);
