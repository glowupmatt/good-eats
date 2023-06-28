import "./App.css";
import Header from "./Components/Header";
import { useState } from "react";
import classNames from "classnames";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Instructions from "./Components/Instructions";
import MealsMainGrid from "./Components/GridComps/MealsMainGrid";
import FullMainDietsGrid from "./Components/GridComps/FullMainDietsGrid";
import CuisineMainGrid from "./Components/GridComps/CuisineMainGrid";
import VideosMainGrid from "./Components/GridComps/VideosMainGrid";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className=" lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-full">
      <div className="w-full z-20">
        <Header showNav={showNav} setShowNav={setShowNav} />
      </div>
      <div className="lg:max-w-full">
        <div className="relative lg:mt-[2rem] p-[.5rem] bg-gray-light">
          {/* Wrapped the Comps with routes hook in order to create the route for each page */}
          <Routes>
            <Route>
              <Route path="/" element={<HomePage />} />
              <Route path="instructions/:id" element={<Instructions />} />
              <Route path="meals/" element={<MealsMainGrid />} />
              <Route path="diets/" element={<FullMainDietsGrid />} />
              <Route path="cuisine/" element={<CuisineMainGrid />} />
              <Route path="videos/" element={<VideosMainGrid />} />
            </Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
