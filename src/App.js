import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Landing from "./routes/Landing";
import WhoWeAre from "./routes/WhoWeAre";
import WomanHome from "./routes/WomanHome";
import MenHome from "./routes/MenHome";
import EdithA from "./routes/EdithA";
import EzeAdaMary from "./routes/EzeAdaMary";
import ObiakwalaChidalu from "./routes/ObiakwalaChidalu";
import OkonkwoChidinma from "./routes/OkonkwoChidinma";
import OnonyeJanelle from "./routes/OnonyeJanelle";
import UzuJane from "./routes/UzuJane";
import SikiruAyomide from "./routes/SikiruAyomide";
import OpeyemiKolawole from "./routes/OpeyemiKolawole";
import JacobJoseph from "./routes/JacobJoseph";
import JoinUs from "./routes/JoinUs";
import ContactUs from "./routes/ContactUs";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

// import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  // const location = useLocation();
  return (
    <>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/WomanHome" element={<WomanHome />} />
            <Route path="/MenHome" element={<MenHome />} />
            <Route path="/WhoWeAre" element={<WhoWeAre />} />
            <Route path="/SikiruAyomide" element={<SikiruAyomide />} />
            <Route path="/OpeyemiKolawole" element={<OpeyemiKolawole />} />
            <Route path="/JacobJoseph" element={<JacobJoseph />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/JoinUs" element={<JoinUs />} />
            <Route path="/EdithA" element={<EdithA />} />
            <Route path="/EzeAdaMary" element={<EzeAdaMary />} />
            <Route path="/ObiakwalaChidalu" element={<ObiakwalaChidalu />} />
            <Route path="/OkonkwoChidinma" element={<OkonkwoChidinma />} />
            <Route path="/OnonyeJanelle" element={<OnonyeJanelle />} />
            <Route path="/UzuJane" element={<UzuJane />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
