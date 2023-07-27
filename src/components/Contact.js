import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaSearchLocation,
} from "react-icons/fa";
import AnimatedPage from "../AnimatedPage";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_63pv5d7", e.target, "z07kVYSnASd6oxvcp")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <AnimatedPage>
      <div className="contactUs">
        <div className="title">
          <h2>Get In Touch</h2>
        </div>
        <div className="box">
          {/* form */}
          <div className="contact form">
            <h3>Send A Message</h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className="formBox">
                <div className="row50">
                  <div className="inputBox">
                    <span>First Name</span>
                    <input
                      type="text"
                      placeholder="input here"
                      name="firstname"
                    ></input>
                  </div>
                  <div className="inputBox">
                    <span>Last Name</span>
                    <input
                      type="text"
                      placeholder="input here"
                      name="lastname"
                    ></input>
                  </div>
                </div>
                <div className="row50">
                  <div className="inputBox">
                    <span>Email</span>
                    <input
                      type="text"
                      placeholder="input here"
                      name="email"
                    ></input>
                  </div>
                  <div className="inputBox">
                    <span>Phone Number</span>
                    <input
                      type="text"
                      placeholder="input here"
                      name="phonenumber"
                    ></input>
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <span>Message</span>
                    <textarea
                      name="message"
                      placeholder="Write your message here.."
                    ></textarea>
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <input type="submit" value="Send"></input>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* info box */}
          <div className="contact info">
            <h3>Contact Info</h3>
            <div className="infoBox">
              <div>
                <span>
                  <FaSearchLocation size={20} style={{ color: "#ffffff" }} />
                </span>
                <p>
                  No 5 Akinola Adedeji street <br /> Igando bustop Lasu isheri
                  road Lagos, Nigeria
                </p>
              </div>
              <div>
                <span>
                  <FaMailBulk size={20} style={{ color: "#ffffff" }} />
                </span>
                <a href="mailto:Rawmodelsafrica@gmail.com">
                  Rawmodelsafrica@gmail.com
                </a>
              </div>
              <div>
                <span>
                  <FaPhone size={20} style={{ color: "#00000" }} />
                </span>
                <a href="+2348171993275">+2348171993275</a>
              </div>
            </div>
          </div>
          <div className="contact map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63420.55076587043!2d3.2858319!3d6.548881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1689623086726!5m2!1sen!2sus"
              width="600"
              height="450"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
