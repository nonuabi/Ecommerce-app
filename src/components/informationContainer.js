import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
const InformationContainer = ({ product_info }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    let temp = product_info.posts.filter(
      (post) => post.id === product_info.product_info_id
    );
    setItem(temp);
  }, []);

  console.log("info item ", item);
  return (
    <div>
      <h2>{item.title} Information</h2>
      {item.map((info) => {
        return (
          <div className="card" key={info.id}>
            <div className="card-body">
              <h5 className="card-title">{info.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{info.rating}</h6>
              <p className="card-text">{info.description}</p>
              <p className="card-text">
                <i className="fas fa-rupee-sign"></i>
                {info.price}
              </p>
            </div>
          </div>
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
// const mapDispatchToProps = (dispatch) => {
//   return {};
// };
export default connect(
  mapStateToProps
  //   mapDispatchToProps
)(InformationContainer);
