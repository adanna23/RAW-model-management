import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaSearchLocation,
} from "react-icons/fa";
// import "./Edith.css";
import "./style1.css";
import AnimatedPage from "../AnimatedPage";

import { Link } from "react-router-dom";
import j1 from "../assets/jane/j-1.jpeg";
import j2 from "../assets/jane/j-2.jpeg";
import j3 from "../assets/jane/j-3.jpeg";
import j4 from "../assets/jane/j-4.jpeg";
import j5 from "../assets/jane/j-6.jpeg";
import j6 from "../assets/jane/j-8.jpeg";

const Jane = () => {
  return (
    <AnimatedPage>
      <div className="model-content">
        <div>
          <h1>UZU JANE</h1>
          <Link
            className="ig-model"
            to="https://instagram.com/uzu_jane?igshid=MzRlODBiNWFlZA=="
          >
            <FaInstagram
              size={30}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
          </Link>
          <p>
            <b>
              HEIGHT: 177.8 CM WAIST: 24 CM BUST: 31 CM HIPS: 35CM SHOES: 40
              DRESS: 6{" "}
            </b>
          </p>
          <div className="Model-container">
            <img src={j1} alt="slide 1" />
            <img src={j2} alt="slide 2" />
            <img src={j3} alt="slide 3" />
            <img src={j4} alt="slide 4" />
            <img src={j5} alt="slide 5" />
            <img src={j6} alt="slide 6" />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Jane;
