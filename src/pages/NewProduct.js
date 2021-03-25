import React from "react";

import Advert from "../components/Advert";

import "./NewProduct.css";

const NewProduct = () => {
  return (
    <div className="new-product">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="left">
            <div className="content">
              <h1>Submit a new Product</h1>

              <form action="">
                <div className="first px-4 py-4 mb-5">
                  <h2>Product details</h2>
                  <div className="form-group">
                    <label for="appName">Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="appName"
                      placeholder="Example Facebook"
                    />
                  </div>

                  <div className="form-group">
                    <label for="apphead">Headline</label>
                    <input
                      type="text"
                      className="form-control"
                      id="apphead"
                      placeholder="Example Instantly connect with family and friends"
                    />
                  </div>

                  <div className="form-group">
                    <label for="appURL">Product Link</label>
                    <input
                      type="link"
                      className="form-control"
                      id="appURL"
                      placeholder="Example https://www.facebook.com"
                    />
                  </div>

                  <div className="form-group">
                    <label for="appTag">Tag</label>
                    <input
                      type="text"
                      className="form-control"
                      id="appTag"
                      placeholder="Example Social, Messaging, Chat, Lifestyle"
                    />
                  </div>

                  <div class="form-group">
                    <label for="appThumb">Thumbnail</label>
                    <input type="file" class="form-control-file" id="appThub" />
                  </div>
                </div>
                <div className="second px-4 py-5 ">
                  <h2>Describe your product</h2>

                  <ul>
                    <li>At least 120 characters is required.</li>
                    <li>
                      For best results, ensure your description is at least 150
                      words.
                    </li>
                    <li>
                      If accepted, your app description will be published
                      exactly as entered here.
                    </li>
                    <li>
                      Do not include comments, there is another box for that
                      below.
                    </li>
                  </ul>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">
                      Product Description
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <div className="btn-holder pl-4">
                  <button
                    type="submit"
                    class="btn btn-secondary submit-product"
                  >
                    Submit product
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="right">
            <div className="mb-5">
              <h2>Advert</h2>
              <Advert />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
