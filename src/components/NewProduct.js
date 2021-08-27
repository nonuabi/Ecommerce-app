import React, { useState } from "react";
import { addProduct } from "../redux/posts/postAction";
import { useDispatch } from "react-redux";

import "../css/NewProduct.css";
const NewProduct = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({
    title: "",
    description: "",
    price: 0,
    rating: 0.0,
  });

  return (
    <div className="new_product">
      <h1 className="display-4">Add a Product</h1>
      <div className="form_item">
        <div className="form-floating mb-3">
          <input
            name="title"
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Name"
            onChange={(e) => setDetails({ ...details, title: e.target.value })}
            value={details.title}
          />
          <label v-for="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            name="description"
            value={details.description}
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder="Description"
            onChange={(e) =>
              setDetails({ ...details, description: e.target.value })
            }
          />
          <label v-for="floatingPassword">Description</label>
        </div>

        <div className="form-floating mb-3">
          <input
            name="price"
            value={details.price}
            type="number"
            className="form-control"
            id="floatingPassword"
            placeholder="Price"
            onChange={(e) => setDetails({ ...details, price: e.target.value })}
          />
          <label v-for="floatingPassword">Price</label>
        </div>

        <div className="form-floating mb-3">
          <input
            name="rating"
            value={details.rating}
            type="number"
            className="form-control"
            id="floatingPassword"
            placeholder="Rating"
            onChange={(e) => setDetails({ ...details, rating: e.target.value })}
          />
          <label v-for="floatingPassword">Rating</label>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            onClick={() => dispatch(addProduct(details))}
            className="btn btn-dark"
            type="submit"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
