import React from "react";
import Search from "./Search";
import MealsSlider from "./MealsSlider";
import DietGrid from "./DietGrid";
import VideoSlider from "./VideoSlider";
import Header from "./Header";
import { useState } from "react";
import Footer from "./Footer";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div>
      <div className="absolute w-full z-20">
        <Header showNav={showNav} setShowNav={setShowNav} />
      </div>
      <Search />
      <MealsSlider />
      <DietGrid />
      <VideoSlider />
      <Footer />
    </div>
  );
};

export default HomePage;
