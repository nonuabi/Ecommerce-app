import React from "react";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">
          <i className="fas fa-store-alt"></i>
          eCommerce
        </a>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item nav-link active">Products</li>
            <li className="nav-item nav-link active">
              {" "}
              Add a Product <i class="fas fa-folder-plus"></i>
            </li>
          </ul>
        </div>
      </div>
      <a className="navbar-brand">
        <i class="fas fa-cart-plus"></i>
        <span>0</span>
      </a>
    </div>
  );
};

export default Navbar;
