import React from "react";

import Trending from "../components/Trending";
import PostList from "../components/PostList";
import ProductWeek from "../components/ProductWeek";
import SideList from "../components/SideList";

import "./Home.css";

const Home = () => {
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
    <div className="home">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="post-list">
            <Trending items={DUMMY_POSTS} />
            <PostList items={DUMMY_POSTS} />
          </div>
          <div className="sidebar">
            <div>
              <h2>Product of the week</h2>
              <ProductWeek />
            </div>
            <div>
              <h2>New Products</h2>
              <SideList items={DUMMY_POSTS} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
