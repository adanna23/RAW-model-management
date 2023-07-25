import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaSearchLocation,
} from "react-icons/fa";
import "./style1.css";
import AnimatedPage from "../AnimatedPage";

// import "./Edith.css";
import { Link } from "react-router-dom";
import c1 from "../assets/Chidalu/c-6.WEBP";
import c2 from "../assets/Chidalu/c-10.JPG";
import c3 from "../assets/Chidalu/c-9.JPG";
import c4 from "../assets/Chidalu/c-8.JPG";
import c5 from "../assets/Chidalu/c-7.JPG";
import c6 from "../assets/Chidalu/c-1.jpg";

const Chidalu = () => {
  return (
    <AnimatedPage>
      <div className="model-content">
        <div>
          <h1>OBIAKWALA CHIDALU</h1>
          <Link
            className="ig-model"
            to="https://www.instagram.com/chidaluobiakwala/"
          >
            <FaInstagram
              size={30}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
          </Link>
          <p>
            <b>HEIGHT: 180 CM WAIST: 25 CM BUST: 31 CM HIPS: 35CM SHOES: 40 </b>
          </p>
          <div className="Model-container">
            <img src={c1} alt="slide 1" />
            <img src={c2} alt="slide 2" />
            <img src={c3} alt="slide 3" />
            <img src={c4} alt="slide 4" />
            <img src={c5} alt="slide 5" />
            <img src={c6} alt="slide 6" />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Chidalu;
