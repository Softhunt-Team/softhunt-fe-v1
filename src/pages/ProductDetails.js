import React from "react";

import CommentVector from "../assets/Comment.svg";
import ShareVector from "../assets/Share.svg";
import SaveVector from "../assets/Save.svg";

import CommenterImg from "../assets/Commenter.png";
import PostImg from "../assets/Post.jpg";

import CommentList from "../components/CommentList";

import AuthorCard from "../components/AuthorCard";
import SideList from "../components/SideList";

import "./ProductDetails.css";

const ProductDetails = () => {
  const DUMMY_PRODUCT = {
    name: "Shark attack",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elitRatione omnis, recusandae sit eius veniam voluptatibus id doloremque ex minus quam",
    image: "https://cdn.gametop.com/download-free-games/shark-attack/m0.jpg",
    category: ["game", "kid", "adventure"],
  };

  const DUMMY_COMMENTS = [
    {
      id: 1,
      name: "John doe",
      description: "CEO ABC",
      image: CommenterImg,
      commentText: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 2,
      name: "John doe",
      description: "CEO ABC",
      image: CommenterImg,
      commentText:
        "Lorem, ipsum dolor si  dolor sit amet consectetur adipisicingt amet consectetur adipisicing.",
    },
    {
      id: 3,
      name: "John doe",
      description: "CEO ABC",
      image: CommenterImg,
      commentText: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 4,
      name: "John doe",
      description: "CEO ABC",
      image: CommenterImg,
      commentText: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    },
  ];

  const DUMMY_POSTS = [
    {
      id: 1,
      name: "Shark attack",
      description:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam cum voluptatibus unde deleniti ducimus! Ad.",
      image:
        "https://static.scientificamerican.com/sciam/cache/file/2EC5EEC8-3F49-440B-8FCAB734812A5A7C_source.jpg",
      upvotes: 200,
      views: 329,
      comments: 30,
    },
    {
      id: 2,
      name: "Shark attack",
      description:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam cum voluptatibus unde deleniti ducimus! Ad.",
      image:
        "https://static.scientificamerican.com/sciam/cache/file/2EC5EEC8-3F49-440B-8FCAB734812A5A7C_source.jpg",
      upvotes: 200,
      views: 329,
      comments: 30,
    },
    {
      id: 3,
      name: "Shark attack",
      description:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam cum voluptatibus unde deleniti ducimus! Ad.",
      image:
        "https://static.scientificamerican.com/sciam/cache/file/2EC5EEC8-3F49-440B-8FCAB734812A5A7C_source.jpg",
      upvotes: 200,
      views: 329,
      comments: 30,
    },
    {
      id: 4,
      name: "Shark attack",
      description:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam cum voluptatibus unde deleniti ducimus! Ad.",
      image:
        "https://static.scientificamerican.com/sciam/cache/file/2EC5EEC8-3F49-440B-8FCAB734812A5A7C_source.jpg",
      upvotes: 200,
      views: 329,
      comments: 30,
    },
  ];

  return (
    <div className="product-details-page">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="left">
            <div className="content d-flex">
              <div className="product-images">
                {/* <img
                  src={DUMMY_PRODUCT.image }
                  alt={`${DUMMY_PRODUCT.name} logo`}
                /> */}
                <img src={PostImg} alt={`${DUMMY_PRODUCT.name} logo`} />
              </div>
              <div className="product-content px-3 pt-3 pb-2">
                <h3 className="product-name">{DUMMY_PRODUCT.name}</h3>
                <p className="product-descri">{DUMMY_PRODUCT.description}</p>

                <div className="btn-holders d-flex justify-content-between mt-5 mb-5">
                  <button type="button" class="btn btn-primary">
                    Get it
                  </button>
                  <button type="button" class="btn btn-outline-primary">
                    <span>Upvote</span>
                  </button>
                </div>

                <div className="tags d-flex justify-content-between mb-5">
                  {DUMMY_PRODUCT.category.map((tag) => {
                    return <span>{tag}</span>;
                  })}
                </div>

                <div className="more d-flex justify-content-between mt-3">
                  <button
                    type="button"
                    className="btn btn-link px-0 d-flex align-items-center"
                  >
                    <img src={CommentVector} alt="comment" className="mr-1" />
                    <span>Comment</span>
                  </button>
                  <button
                    type="button"
                    class="btn btn-link px-0 d-flex align-items-center"
                  >
                    <img src={ShareVector} alt="share" className="mr-1" />
                    <span>Share</span>
                  </button>
                  <button
                    type="button"
                    class="btn btn-link px-0 d-flex align-items-center"
                  >
                    <img src={SaveVector} alt="save" className="mr-1" />
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="comments-container">
              <div className="new-comment">
                <div className="d-flex">
                  <div className="author-img mr-3">
                    <img src={CommenterImg} alt="authur img" />
                  </div>
                  <div className="comment-box">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                      <div className="text-right mt-3">
                        <button type="button" class="btn btn-outline-primary">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="old-comments">
                <CommentList comments={DUMMY_COMMENTS} />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="mb-5">
              <h2>Owner</h2>
              <AuthorCard />
            </div>
            <div>
              <h2>Related Products</h2>
              <SideList items={DUMMY_POSTS} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
