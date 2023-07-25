import React from "react";
import pic1 from "../assets/ayo/pic1.jpeg";
import pic2 from "../assets/ayo/pic2.jpeg";
import pic3 from "../assets/ayo/pic3.jpeg";
import pic4 from "../assets/ayo/pic4.jpeg";
import pic5 from "../assets/ayo/pic5.jpeg";
import pic6 from "../assets/ayo/pic6.jpeg";
import "./style1.css";
import { Link } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";

import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaSearchLocation,
} from "react-icons/fa";

const Ayo = () => {
  return (
    <AnimatedPage>
      <div className="model-content">
        <div>
          <h1>SIRIKU AYOMIDE</h1>
          <Link
            className="ig-model"
            to="https://www.instagram.com/ayomideazeem1/?igshid=MzRlODBiNWFlZA%3D%3D"
          >
            <FaInstagram
              size={30}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
          </Link>
          <p>
            <b>
              HEIGHT: 192 CM COLOR: NOIR EYES: BLACK WAIST: 32 CM CHEST: 32 CM
              SHOE:45
            </b>
          </p>
          <div className="Model-container">
            <img src={pic1} />
            <img src={pic2} />
            <img src={pic3} />
            <img src={pic4} />
            <img src={pic5} />
            <img src={pic6} />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Ayo;
