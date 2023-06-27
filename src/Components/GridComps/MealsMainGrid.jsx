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

const MealsMainGrid = () => {
  //   const [dishes, setDishes] = useState([]);
  //   useEffect(() => {
  //     fetchFromAPIBreakfast().then((data) => setDishes(data.recipes));
  //     fetchFromAPILunch().then((data) =>
  //       setDishes((prev) => [...prev, data.recipes])
  //     );
  //     fetchFromAPIDinner().then((data) =>
  //       setDishes((prev) => [...prev, data.recipes])
  //     );
  //   }, []);

  const totalDishes = dishes.flat();
  return (
    <div className="mt-[3rem] lg:mt-[6rem] grid gap-4">
      <h2 className=" lg:text-[5.5rem] text-center bg-gray-default py-8 rounded-lg">
        Breakfast
      </h2>
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
      <h2 className=" lg:text-[5.5rem] text-center bg-gray-default py-8 rounded-lg">
        Lunch
      </h2>
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
      <h2 className=" lg:text-[5.5rem] text-center bg-gray-default py-8 rounded-lg">
        Dinner
      </h2>
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
};

export default MealsMainGrid;
