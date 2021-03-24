import React from "react";
import { Link } from "react-router-dom";

import UpvoteIcon from "../assets/Upvote.svg";

import "./PostItem.css";

const PostItem = (props) => {
  return (
    <li className="post-item mt-3">
      <div className="post_content d-flex justify-content-between">
        <div className="post__image">
          <img src={props.image} alt={`${props.name} img`} className="h-100" />
        </div>
        <div className="post__details py-2">
          <h3 className="post__name">{props.name}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            ea nihil. Sed, unde. Deserunt non neque dolor rem nobis id.
          </p>

          <div className="btn-holder">
            <Link to="/post">
              <button type="button" class="btn btn-light">
                Details
              </button>
            </Link>
          </div>
        </div>
        <div className="upvote__box d-flex flex-column align-items-center justify-content-center">
          <img src={UpvoteIcon} alt="upvote" />
          <span className="mt-2">{props.upvotesCount}</span>
        </div>
      </div>
    </li>
  );
};

export default PostItem;
