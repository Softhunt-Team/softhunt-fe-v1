import React from "react";

import "./SideItem.css";

const SideItem = (props) => {
  const truncate = (str) => {
    return str.length > 70 ? str.substring(0, 50) + "..." : str;
  };

  return (
    <li className="side-item mb-3">
      <div className="content d-flex">
        <div className="product_image mr-3">
          <img src={props.image} alt={`${props.name} logo`} />
        </div>
        <div className="product_details">
          <p className="product_name mb-1">{props.name}</p>
          <p className="product_description">{truncate(props.description)}</p>
        </div>
      </div>
    </li>
  );
};

export default SideItem;
