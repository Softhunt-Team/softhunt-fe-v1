import React from "react";
import "./CommentItem.css";

function CommentItem({ comment }) {
  return (
    <li className="comment-item">
      <div className="commenter-info d-flex">
        <div className="commenter-img mr-3">
          <img src={comment.image} alt={`${comment.name} image`} />
        </div>
        <div>
          <p className="commenter-name mb-1">{comment.name}</p>
          <p className="commenter-desc">{comment.description}</p>
        </div>
      </div>
      <div className="comment-info">
        <p className="comment-text">{comment.commentText}</p>

        <div className="btn-holder d-flex">
          <button type="button" class="btn btn-link pl-0">
            upvote
          </button>
          <button type="button" class="btn btn-link">
            delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default CommentItem;
