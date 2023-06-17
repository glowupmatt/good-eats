import React from "react";
import { useState } from "react";
import Header from "./Header";

const FavoritedDishes = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="absolute w-full z-20">
      <Header showNav={showNav} setShowNav={setShowNav} />
    </div>
  );
};

export default FavoritedDishes;
