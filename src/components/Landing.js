// import React from "react";
// import "./Landing.css";
// import { Link } from "react-router-dom";
// import Girl from "../assets/girl.JPG";
// import Guy from "../assets/guy.jpeg";

// const Landing = () => {
//   return (
//     <div class="placement-container">
//       <div class="grid-container">
//         <div class="grid-container--element">
//           <img src={Girl} alt="GirlImg" />
//           <Link to="/WomanHome" className="btn btn-wmn">
//             <b>WOMEN</b>
//           </Link>
//         </div>
//         <div class="grid-container--element">
//           <img src={Guy} alt="Guy Img" />
//           <Link to="Landing" className="btn btn-men">
//             <b>MEN</b>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Landing;

import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import Girl from "../assets/girl.JPG";
import Guy from "../assets/guy.jpeg";
// import { transition } from "../transition";

const Landing = () => {
  return (
    <div className="placement-container-2">
      <div className="grid-container">
        <div
          className="grid-container--element"
          style={{ backgroundImage: `url(${Girl})` }}
        >
          <Link to="/WomanHome" className="btn btn-wmn">
            <b>WOMEN</b>
          </Link>
        </div>
        <div
          className="grid-container--element"
          style={{ backgroundImage: `url(${Guy})` }}
        >
          <Link to="/MenHome" className="btn btn-men">
            <b>MEN</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
