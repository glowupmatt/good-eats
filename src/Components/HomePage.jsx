import React, { useState } from "react";
import Search from "./Search";
import MealsSlider from "./MealsSlider";
import DietGrid from "./DietGrid";
import VideoSlider from "./VideoSlider";
import Footer from "./Footer";
import SearchGrid from "./GridComps/SearchGrid";
import SearchHomeComp from "./SearchHomeComp";

const HomePage = ({ getDishes, setGetDishes }) => {
  return (
    <div>
      {getDishes !== null ? (
        <SearchGrid getDishes={getDishes} />
      ) : (
        <SearchHomeComp getDishes={getDishes} setGetDishes={setGetDishes} />
      )}
    </div>
  );
};

export default HomePage;
