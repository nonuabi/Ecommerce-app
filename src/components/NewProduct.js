import React from "react";
import "../css/NewProduct.css";
const NewProduct = () => {
  return (
    <div className="new_product">
      <h1 className="display-4">Add a Product</h1>
      <form className="form_item">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Name"
          />
          <label v-for="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder="Description"
          />
          <label v-for="floatingPassword">Description</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingPassword"
            placeholder="Price"
          />
          <label v-for="floatingPassword">Price</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingPassword"
            placeholder="Rating"
          />
          <label v-for="floatingPassword">Rating</label>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-dark" type="submit">
            Button
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
