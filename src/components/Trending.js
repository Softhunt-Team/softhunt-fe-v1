import React from "react";
import "./Trending.css";

const Trending = (props) => {
  return (
    <div className="trending">
      <h2>Trending</h2>
      <div className="d-flex justify-content-between">
        {props.items.map((item) => {
          return (
            <div className="trending-item" key={item.id}>
              <img src={item.image} alt={`${item.name} logo`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
