import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaSearchLocation,
} from "react-icons/fa";
import "./NavStyles.css";
import rawlogo from "../assets/raw-logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <Link to="/">
        <img class="raw-l" src={rawlogo} />
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="https://www.instagram.com/rawmodelmanagement/?hl=en">
            <FaInstagram
              size={30}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
          </Link>
        </li>
        <li>
          <Link to="/WomanHome">Women</Link>
        </li>
        <li>
          <Link to="/MenHome">Men</Link>
        </li>
        <li>
          <Link to="/WhoWeAre">About</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact Us</Link>
          {/*dropdown  <div class="dropdowns">
                    <div class="dropdown">
                        <button class="dropdown-button">
                            <span><Link className='button' to='/'>Contact Us</Link></span>
                            <i class="bi bi-chevron-down"></i>
                        </button>
                        <div class="dropdown-menu">
                            <Link className='button' to='/'>Join Us</Link>
                        </div>
                    </div>
                </div>  */}
        </li>
        <li>
          <Link to="/JoinUs">Join Us</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
