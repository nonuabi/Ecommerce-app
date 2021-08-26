import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container-fluid">
        {/* <a className="navbar-brand">
          <i className="fas fa-store-alt"></i>
          eCommerce
        </a> */}
        <Link className="navbar-brand" to="/">
          eCommerce
        </Link>
        <div className="collapse navbar-collapse" id="navbarText">
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
        </Link>
      </div>
      {/* <a className="navbar-brand">
        <i className="fas fa-cart-plus"></i>
        <span>0</span>
      </a> */}
    </div>
  );
};

export default Navbar;
