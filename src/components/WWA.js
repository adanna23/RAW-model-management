import React from "react";
import { Link } from "react-router-dom";
import "./WhoWeAre.css";
import Raph from "../assets/cover.png";
import AnimatedPage from "../AnimatedPage";

import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaSearchLocation,
} from "react-icons/fa";
import Line from "../assets/Line.png";

const WWA = () => {
  return (
    <AnimatedPage>
      <div className="about-heading">
        <h1> Who We Are</h1>
      </div>
      <div className="wwa-container">
        <section className="about">
          <div className="about-image">
            <img src={Raph}></img>
          </div>
          <div className="about-content">
            <p>
              Raw model management is one of the leading scouting and model
              management agencies established in 2017 and based in Lagos,
              Nigeria. It was founded by Onyemaechi Rapheal with great
              understanding of scouting, model management and experience in the
              fashion industry.
              <br /> <br /> At Raw Models, we immensely believe in our every
              growth we have our discoveries working for major brands such as
              Valentino, Dior, Louis Vuitton, Gucci, JW Anderson, Prada, Comme
              des Garçons, Givenchy, Armani, Issey Miyaki, Lanvin, Marcello
              Burlon, just to name a few.
              <br /> <br /> Our vision is to change the narrative of what
              modeling is in Africa, whilst we are in the ever changing industry
              we carefully scout, develop and nurture our models ensuring
              longevity all through different stages of their careers.
              <br /> <br /> Our strength lies in reaching the elusive and
              empowering lives.
            </p>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default WWA;
