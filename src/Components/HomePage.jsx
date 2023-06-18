import React from "react";
import Search from "./Search";
import MealsSlider from "./MealsSlider";
import DietGrid from "./DietGrid";
import VideoSlider from "./VideoSlider";

const HomePage = () => {
  return (
    <div>
      <Search />
      <MealsSlider />
      <DietGrid />
      <VideoSlider />
    </div>
  );
};

export default HomePage;
