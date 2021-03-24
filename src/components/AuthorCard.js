import React from "react";
import { Link } from "react-router-dom";

import Whatsapp from "../assets/whatsapp.svg";
import Linkedin from "../assets/linkedinD.svg";
import Facebook from "../assets/faceb.svg";
import IG from "../assets/instagram.svg";

import Author from "../assets/2.jpg";

import "./AuthorCard.css";

function AuthorCard() {
  return (
    <div className="author-card px-4 py-3">
      <div className="content">
        <div className="author-info d-flex pb-3">
          <div className="image mr-3">
            <img src={Author} alt="author image" />
          </div>
          <div className="namendesc">
            <p className="name mb-1">Jane Doe</p>
            <p className="desc">CTO XYZ</p>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <Link to="https://www.google.com">
            <img src={Whatsapp} alt="whatsapp" />
          </Link>
          <Link to="https://www.google.com">
            <img src={Linkedin} alt="whatsapp" />
          </Link>
          <Link to="https://www.google.com">
            <img src={Facebook} alt="whatsapp" />
          </Link>
          <Link to="https://www.google.com">
            <img src={IG} alt="whatsapp" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthorCard;
