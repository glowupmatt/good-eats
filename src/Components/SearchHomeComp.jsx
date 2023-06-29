import React from "react";
import Search from "./Search";
import MealsSlider from "./MealsSlider";
import DietGrid from "./DietGrid";
import VideoSlider from "./VideoSlider";

const SearchHomeComp = ({ getDishes, setGetDishes }) => {
  return (
    <div>
      <Search getDishes={getDishes} setGetDishes={setGetDishes} />
      <MealsSlider />
      <DietGrid />
      <VideoSlider />
    </div>
  );
};

export default SearchHomeComp;
