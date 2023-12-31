import React, { useState, useEffect } from "react";
import DishCardComp from "../DishCardComp";
import {
  fetchFromAPIBreakfast,
  fetchFromAPILunch,
  fetchFromAPIDinner,
} from "../../utils/fetchFromAPI";
import DishGridItems from "../DishGridItems";
import { dishes } from "../../utils/boilerInfo";
import RelatedRecipes from "../RelatedRecipes";
import LoadingScreen from "../../LoadingScreen";

const MealsMainGrid = () => {
  // const [dishes, setDishes] = useState([]);
  // useEffect(() => {
  //   fetchFromAPIBreakfast().then((data) => setDishes(data.recipes));
  //   fetchFromAPILunch().then((data) =>
  //     setDishes((prev) => [...prev, data.recipes])
  //   );
  //   fetchFromAPIDinner().then((data) =>
  //     setDishes((prev) => [...prev, data.recipes])
  //   );
  // }, []);

  const totalDishes = dishes.flat();
  if (totalDishes.length < 15) {
    return <LoadingScreen />;
  } else {
    return (
      <div className="mt-[6rem] grid gap-4">
        <div className="flex flex-col items-center justify-center p-[1rem] bg-gray-dark rounded lg:p-[3rem]">
          <h2 className="font-bold text-[2rem] text-white lg:text-[4rem]">
            Breakfast
          </h2>
        </div>
        <div className="grid auto-rows-auto grid-cols-2 lg:grid-cols-3">
          {totalDishes
            .filter((dish) => dish.dishTypes.includes("breakfast"))
            .map((dish) => (
              <div
                key={dish.id}
                className="w-full h-full lg:hover:bg-gray-light hover:drop-shadow-2xl"
              >
                <DishGridItems dish={dish} />
              </div>
            ))}
        </div>
        <div className="flex flex-col items-center justify-center p-[1rem] bg-gray-dark rounded lg:p-[3rem]">
          <h2 className="font-bold text-[2rem] text-white lg:text-[4rem]">
            Lunch
          </h2>
        </div>
        <div className="grid auto-rows-auto grid-cols-2 lg:grid-cols-3">
          {totalDishes
            .filter((dish) => dish.dishTypes.includes("lunch"))
            .map((dish) => (
              <div
                key={dish.id}
                className="w-full h-full lg:hover:bg-gray-light hover:drop-shadow-2xl"
              >
                <DishGridItems dish={dish} />
              </div>
            ))}
        </div>
        <div className="flex flex-col items-center justify-center p-[1rem] bg-gray-dark rounded lg:p-[3rem]">
          <h2 className="font-bold text-[2rem] text-white lg:text-[4rem]">
            Dinner
          </h2>
        </div>
        <div className="grid auto-rows-auto grid-cols-2  lg:grid-cols-3">
          {totalDishes
            .filter((dish) => dish.dishTypes.includes("dinner"))
            .map((dish) => (
              <div
                key={dish.id}
                className="w-full h-full lg:hover:bg-gray-light hover:drop-shadow-2xl"
              >
                <DishGridItems dish={dish} />
              </div>
            ))}
        </div>
      </div>
    );
  }
};

export default MealsMainGrid;
