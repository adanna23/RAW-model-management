import React from "react";
import AnimatedPage from "../AnimatedPage";

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

import { Link } from "react-router-dom";
import ez1 from "../assets/Eze/e-1.JPG";
import ez2 from "../assets/Eze/e-2.JPG";
import ez3 from "../assets/Eze/e-3.JPG";
import ez4 from "../assets/Eze/e-4.JPG";
import ez5 from "../assets/Eze/e-5.JPG";

const Eze = () => {
  return (
    <AnimatedPage>
      <div className="model-content">
        <div>
          <h1>EZE ADAEZE MARY</h1>
          <Link
            className="ig-model"
            to="https://www.secure.instagram.com/ezeadaeze_/?hl=en-gb"
          >
            <FaInstagram
              size={30}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
          </Link>
          <p>
            <b>HEIGHT: 174 CM WAIST: 26 CM BUST: 33 CM HIPS: 34CM SHOES: 42 </b>
          </p>
          <div className="Model-container">
            <img src={ez1} alt="slide 1" />
            <img src={ez2} alt="slide 2" />
            <img src={ez3} alt="slide 3" />
            <img src={ez4} alt="slide 4" />
            <img src={ez5} alt="slide 5" />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Eze;
