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
import ja1 from "../assets/janelle/ja-1.JPG";
import ja2 from "../assets/janelle/ja-2.JPG";
import ja3 from "../assets/janelle/ja-3.JPG";
import ja4 from "../assets/janelle/ja-4.jpg";
import ja5 from "../assets/janelle/ja-6.jpg";

const Janelle = () => {
  return (
    <AnimatedPage>
      <div className="model-content">
        <div>
          <h1>ONONYE JANELLE</h1>
          <Link
            className="ig-model"
            to="https://www.instagram.com/janeononye/?igshid=MzRlODBiNWFlZA%3D%3D"
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
            <img src={ja1} alt="slide 1" />
            <img src={ja2} alt="slide 2" />
            <img src={ja3} alt="slide 3" />
            <img src={ja4} alt="slide 4" />
            <img src={ja5} alt="slide 5" />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Janelle;
