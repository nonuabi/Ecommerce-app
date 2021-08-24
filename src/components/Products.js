import React, { useEffect, useState } from "react";

const Products = () => {
  useEffect(() => {
    handleApi();
  }, []);
  const api_url =
    "https://my-json-server.typicode.com/nonuabi/Ecommerce-App-DB";
  const [products, setProducts] = useState([]);

  const handleApi = async () => {
    let response = await fetch(api_url + "/posts");
    let data = await response.json();
    console.log("api fetched data : ", data);
    setProducts(data);
  };

  console.log("product state ", products);

  return (
    <div className="products">
      {products.map((item, index) => {
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
              <button>Add To Cart</button>
              <button>
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
  );
};

export default Products;
