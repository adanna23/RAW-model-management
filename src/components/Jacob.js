import pic1 from "../assets/jacob/1.jpg";
import pic2 from "../assets/jacob/2.JPG";
import pic3 from "../assets/jacob/3.JPG";
import pic5 from "../assets/jacob/5.JPG";
import pic6 from "../assets/jacob/6.JPG";
import pic8 from "../assets/jacob/8.JPG";
import "./style1.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaSearchLocation,
} from "react-icons/fa";
import AnimatedPage from "../AnimatedPage";

const Jacob = () => {
  return (
    <AnimatedPage>
      <div className="model-content">
        <div>
          <h1>JACOB JOSEPH</h1>
          <Link
            className="ig-model"
            to="https://instagram.com/jacobjoseph05?igshid=MzRlODBiNWFlZA=="
          >
            <FaInstagram
              size={30}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
          </Link>
          <p>
            <b>
              {" "}
              HEIGHT: 190.5 CM COLOR: NOIR EYES: BLACK WAIST: 32 CM CHEST: 32 CM
              SHOES: 45
            </b>
          </p>
          <div className="Model-container">
            <img src={pic1} />
            <img src={pic2} />
            <img src={pic3} />
            <img src={pic5} />
            <img src={pic6} />
            <img src={pic8} />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Jacob;
