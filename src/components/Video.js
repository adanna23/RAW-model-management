import React from "react";
import { Link } from "react-router-dom";
import "./VideoStyles.css";
import AnimatedPage from "../AnimatedPage";

import HomeVideo from "../assets/landing.mp4";

const Video = () => {
  return (
    <AnimatedPage>
      <div className="hero">
        <video playsInline autoPlay loop muted id="video" control={false}>
          <source src={HomeVideo} type="video/mp4" />
        </video>
        <div className="content">
          <h1>RAW</h1>
          <p>Model Management</p>
          <div>
            <Link to="Landing" className="btn btn-light">
              Enter
            </Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Video;
