import React from "react";
// import { Link } from "react-router-dom";
import PostItem from "./PostItem";
import "./PostList.css";

const PostList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="text-center">
        <h2>No post Found</h2>
      </div>
    );
  }

  return (
    <ul className="post-items">
      {props.items.map((post) => {
        return (
          //   <Link to={"post/" + post.id}>
          <PostItem
            key={post.id}
            id={post.id}
            image={post.image}
            name={post.name}
            upvotesCount={post.upvotes}
            viewsCount={post.views}
            commentsCount={post.comments}
          />
          //   </Link>
        );
      })}
    </ul>
  );
};

export default PostList;
