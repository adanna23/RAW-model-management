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
import ch1 from "../assets/chidinma/ok-1.JPG";
import ch2 from "../assets/chidinma/ok-3.jpg";
import ch3 from "../assets/chidinma/ok-4.JPG";
import ch4 from "../assets/chidinma/ok-5.jpg";
import ch5 from "../assets/chidinma/ok-6.jpg";
import ch6 from "../assets/chidinma/ok-7.jpg";

const Chidinma = () => {
  return (
    <AnimatedPage>
      <div className="model-content">
        <div>
          <h1>OKONKWO CHIDINMA</h1>
          <Link
            className="ig-model"
            to="https://instagram.com/chidaluobiakwala?igshid=MzRlODBiNWFlZA=="
          >
            <FaInstagram
              size={30}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
          </Link>
          <p>
            <b>
              {" "}
              HEIGHT: 177.8 CM WAIST: 24 CM BUST: 32 CM HIPS: 34CM SHOES: 41{" "}
            </b>
          </p>
          <div className="Model-container">
            <img src={ch1} alt="slide 1" />
            <img src={ch2} alt="slide 2" />
            <img src={ch3} alt="slide 3" />
            <img src={ch4} alt="slide 4" />
            <img src={ch5} alt="slide 5" />
            <img src={ch6} alt="slide 6" />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};
export default Chidinma;
