import React, { useRef } from "react";
import "./Joinus.css";
import girl from "../assets/8.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "emailjs-com";
import AnimatedPage from "../AnimatedPage";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_j824rzb", e.target, "z07kVYSnASd6oxvcp")
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
      <div className="content-div">
        <div className="left-photo-box">
          <img className="left-photo" src={girl} />
        </div>

        <div className="apply-now">
          <span>APPLY NOW</span>
          <div className="line-6" />
        </div>

        <form className="apply-form" ref={form} onSubmit={sendEmail}>
          <div className="name-box">
            <span>Name</span>
            <input className="name" type="text" name="name" required></input>
          </div>
          <div className="phone-box">
            <span>Phone</span>
            <input
              className="number"
              type="number"
              name="phone"
              required
            ></input>
          </div>
          <div className="email-box">
            <span>Email</span>
            <input
              className="email-1"
              type="email"
              name="email"
              required
            ></input>
          </div>
          <div className="ig-box">
            <span>IG</span>
            <input className="ig" type="text" name="ig" required></input>
          </div>
          <div className="tarea-box ">
            <span>Why do you want to join RAW Management?</span>
            <textarea
              className="tarea"
              type="text"
              name="tarea"
              rows="6"
              cols="30"
            ></textarea>
          </div>
          <div className="sub-cel-box">
            <input className="sub" type="submit" value="Submit" />
            <input className="cel" type="reset" value="Clear" />
          </div>
        </form>
      </div>
    </AnimatedPage>
  );
};

export default Join;
