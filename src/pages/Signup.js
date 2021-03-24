import React from "react";

import GoogleLogo from "../assets/Google.svg";
import FacebookLogo from "../assets/Facebook.svg";
import LinkedInLogo from "../assets/LinkedIn.svg";

import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <div className="wrap">
        <h1>
          Soft<span class="hunt">hunt</span>
        </h1>
        <div class="signup__box">
          <h2>Create an account</h2>
          <form class="mb-4">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="exampleInputUsername1"
                aria-describedby="usernameHelp"
                placeholder="Username"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email address"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <button type="submit" class="btn btn-primary w-100">
              Continue
            </button>
          </form>

          <div class="d-flex mid justify-content-between align-items-center">
            <div></div>
            <span>OR</span>
            <div></div>
          </div>

          <div class="others__ mt-4 mb-5">
            <div class="d-flex justify-content-between align-items-center">
              <div class="google">
                <img src={GoogleLogo} alt="Google img" />
              </div>
              <div class="linkedin">
                <img src={LinkedInLogo} alt="LinkedIn img" />
              </div>
              <div class="facebook">
                <img src={FacebookLogo} alt="Facebook img" />
              </div>
            </div>
          </div>

          <p class="tc-text">
            By continuing, you agree to Softhunt's Terms of Service and Privacy
            policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
