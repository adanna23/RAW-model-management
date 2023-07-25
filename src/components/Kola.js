import pic1 from "../assets/kola/o1.JPG";
import pic2 from "../assets/kola/o2.JPG";
import pic3 from "../assets/kola/o3.JPG";
import pic4 from "../assets/kola/o4.jpg";
import pic5 from "../assets/kola/o5.jpg";
import pic6 from "../assets/kola/o6.JPG";
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

const Kola = () => {
  return (
    <AnimatedPage>
      <div className="model-content">
        <div>
          <h1>OPEYEMI KOLAWOLE</h1>
          <Link
            className="ig-model"
            to="https://www.instagram.com/_opeyemikolawole/?igshid=MzRlODBiNWFlZA%3D%3D"
          >
            <FaInstagram
              size={30}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
          </Link>
          <p>
            <b>
              {" "}
              HEIGHT: 190.5 CM COLOR: NOIR EYES: BLACK WAIST: 30 CM CHEST: 36 CM
              SHOES: 45{" "}
            </b>
          </p>
          <div className="Model-container">
            <img src={pic1} />
            <img src={pic2} />
            <img src={pic3} />
            <img src={pic4} />
            <img src={pic5} />
            <img src={pic6} />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Kola;
