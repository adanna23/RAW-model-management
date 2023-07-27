import React from "react";
import "./FooterStyles.css";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaSearchLocation,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
            <div>
              <p>No 5 Akinola Adedeji street</p>
              <h4>Igando bustop Lasu isheri road Lagos, Nigeria</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />{" "}
              +2348171993275
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />{" "}
              Rawmodelsafrica@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <p>
            Raw Model Management is a modeling agency based in Lagos, Nigeria
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
            <Link to="https://www.instagram.com/rawmodelmanagement/?hl=en">
              <FaInstagram
                size={30}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
            </Link>
            <FaTwitter
              size={30}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
