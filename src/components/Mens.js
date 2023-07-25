import "./MensHome.css";
import man1 from "../assets/ayo-home.jpeg";
import man2 from "../assets/jacob-home.JPG";
import man3 from "../assets/ope-home.JPG";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import Line from "../assets/Line.png";
import AnimatedPage from "../AnimatedPage";

const images = [man1, man2, man3, man1, man2, man3];
const names = [
  "SIKIRU AYOMIDE",
  "JACOB JOSEPH",
  "OPEYEMI KOLAWOLE",
  "SIKIRU AYOMIDE",
  "JACOB JOSEPH",
  "OPEYEMI KOLAWOLE",
];

const links = [
  "/SikiruAyomide",
  "/JacobJoseph",
  "/OpeyemiKolawole",
  "/SikiruAyomide",
  "/JacobJoseph",
  "/OpeyemiKolawole",
];

function Mens() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next-1" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev-1" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const small = window.matchMedia("(max-width:600px)");

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (small.matches) {
    settings.slidesToShow = 1;
  }

  return (
    <AnimatedPage>
      <div className="placement-container-1">
        <div className="content-1">
          <h1>RAW</h1>
          {/* <img className="line" src={Line} /> */}
          <p>Model Management</p>
          <div></div>
        </div>
        <div className="App-head-1">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div
                className={
                  idx === imageIndex ? "slide activeSlide-1" : "slide-1"
                }
                key={idx}
              >
                <Link to={links[idx]}>
                  <img src={img} alt={`Image ${idx + 1}`} />
                  <p>
                    <b>{names[idx]}</b>{" "}
                  </p>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Mens;

// {
//   /* //notes mobile mode and macbook screen mode
// //names appear
// //scrolling up so it doesnt enter the navbar//landing page media mode
// //video qualtiy */
// }
