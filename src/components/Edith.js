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
import "./Edith.css";
import { Link } from "react-router-dom";
import editha from "../assets/edith/editha.jpg";
import edithb from "../assets/edith/edithb.jpg";
import edithc from "../assets/edith/edithc.JPG";
import edithd from "../assets/edith/edithd.JPG";
import edithe from "../assets/edith/edithe.JPG";
import edithf from "../assets/edith/edithf.JPG";
// import Transition from "../Transition";

const Edith = () => {
  return (
    <AnimatedPage>
      <div className="edith-content">
        <div>
          <h1>EDITH ADA MICHAEL</h1>
          <Link
            className="ig-edith"
            to="https://www.instagram.com/ada_michaeledith/?igshid=MzRlODBiNWFlZA%3D%3D"
          >
            <FaInstagram
              size={30}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
          </Link>
          <p>
            <b>
              HEIGHT: 177.8 CM WAIST: 24 CM BUST: 33 CM HIPS: 34CM SHOES: 40
              DRESS: 6{" "}
            </b>
          </p>
          <div className="Main-container">
            <img src={editha} alt="slide 1" />
            <img src={edithb} alt="slide 2" />
            <img src={edithc} alt="slide 3" />
            <img src={edithd} alt="slide 4" />
            <img src={edithe} alt="slide 5" />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Edith;

{
  /* <AnimatedPage>
      <div className="edith-container">
        <div className="content">
          <h1>EDITH ADA MICHAEL</h1>
          <p>
            <b>
              HEIGHT: 177.8 CM WAIST: 24 CM BUST: 33 CM HIPS: 34CM SHOES: 40
              DRESS: 6{" "}
            </b>
          </p>
          <div className="Main-container">
            <Link
              className="ig"
              to="https://www.instagram.com/ada_michaeledith/?igshid=MzRlODBiNWFlZA%3D%3D"
            >
              <FaInstagram
                size={30}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
            </Link>
            <img src={editha} alt="slide 1" />
            <img src={edithb} alt="slide 2" />
            <img src={edithc} alt="slide 3" />
            <img src={edithd} alt="slide 4" />
            <img src={edithe} alt="slide 5" />
          </div>
        </div>
      </div>
    </AnimatedPage> */
}
