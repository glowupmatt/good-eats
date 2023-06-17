import React from "react";
import Search from "./Search";
import MealsSlider from "./MealsSlider";
import DietGrid from "./DietGrid";
import VideoSlider from "./VideoSlider";
import Header from "./Header";
import { useState } from "react";
import { dishes } from "../utils/boilerInfo";
import Footer from "./Footer";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);
  const [dishSelect, setDisSelect] = useState(dishes.filter((dish) => dish.id));
  return (
    <div>
      <div className="absolute w-full z-20">
        <Header showNav={showNav} setShowNav={setShowNav} />
      </div>
      <Search />
      <MealsSlider dishSelect={dishSelect} setDisSelect={setDisSelect} />
      <DietGrid />
      <VideoSlider />
      <Footer />
    </div>
  );
};

export default HomePage;
