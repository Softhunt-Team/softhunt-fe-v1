import React from "react";

import CommentItem from "./CommentItem";

import "./CommentList.css";

function CommentList(props) {
  return (
    <ul className="comment-list pt-5 mt-5">
      {props.comments.map((comment) => {
        return <CommentItem key={comment.id} comment={comment} />;
      })}
    </ul>
  );
}

export default CommentList;
