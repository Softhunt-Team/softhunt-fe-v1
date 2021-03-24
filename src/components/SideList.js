import React from "react";
import SideItem from "./SideItem";

import "./SideList.css";

const SideList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="text-center">
        <h2>No post Found</h2>
      </div>
    );
  }

  return (
    <ul className="side-items">
      {props.items.map((post) => {
        return (
          <SideItem
            key={post.id}
            id={post.id}
            image={post.image}
            name={post.name}
            description={post.description}
          />
        );
      })}
    </ul>
  );
};

export default SideList;
