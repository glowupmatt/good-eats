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
import SearchGrid from "./Components/GridComps/SearchGrid";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [getDishes, setGetDishes] = useState(null);

  return (
    <div className=" lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-full">
      <div className="w-full z-20">
        <Header
          showNav={showNav}
          setShowNav={setShowNav}
          getDishes={getDishes}
          setGetDishes={setGetDishes}
        />
      </div>
      <div className="lg:max-w-full">
        <div className="relative lg:mt-[2rem] p-[.5rem] bg-gray-light">
          {/* Wrapped the Comps with routes hook in order to create the route for each page */}
          <Routes>
            <Route>
              <Route
                path="/"
                element={
                  <HomePage getDishes={getDishes} setGetDishes={setGetDishes} />
                }
              />
              <Route path="instructions/:id" element={<Instructions />} />
              <Route path="meals/" element={<MealsMainGrid />} />
              <Route path="diets/" element={<FullMainDietsGrid />} />
              <Route path="cuisine/" element={<CuisineMainGrid />} />
              <Route path="videos/" element={<VideosMainGrid />} />
              <Route path="search/" element={<SearchGrid />} />
            </Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
