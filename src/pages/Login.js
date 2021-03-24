import React from "react";

import GoogleLogo from "../assets/Google.svg";
import FacebookLogo from "../assets/Facebook.svg";
import LinkedInLogo from "../assets/LinkedIn.svg";

import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="wrap">
        <h1>
          Soft<span className="hunt">hunt</span>
        </h1>
        <div className="login__box">
          <h2>Login to your account</h2>
          <form className="mb-4">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email address"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <div>
              <Link to="/forgot-password">
                <p className="forgot-pwd mb-3 text-right">Forgot Password?</p>
              </Link>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Continue
            </button>
          </form>

          <div className="d-flex mid justify-content-between align-items-center">
            <div></div>
            <span>OR</span>
            <div></div>
          </div>

          <div className="others__ mt-4 mb-5">
            <div className="d-flex justify-content-between align-items-center">
              <div className="google">
                <img src={GoogleLogo} alt="Google img" />
              </div>
              <div className="linkedin">
                <img src={LinkedInLogo} alt="LinkedIn img" />
              </div>
              <div className="facebook">
                <img src={FacebookLogo} alt="Facebook img" />
              </div>
            </div>
          </div>

          <p className="tc-text">
            By continuing, you agree to Softhunt's Terms of Service and Privacy
            policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
