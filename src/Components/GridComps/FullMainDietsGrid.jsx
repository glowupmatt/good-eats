import React, { useState, useEffect } from "react";
import DishGridItems from "../DishGridItems";
import { dishes } from "../../utils/MainDietsInfo";
import {
  fetchFromAPIGetVegetarian,
  fetchFromAPIGetPescatarian,
  fetchFromAPIGetKeto,
} from "../../utils/fetchFromAPIMainDietsGrid";

const MainCuisinesGrid = () => {
  // const [dishes, setDishes] = useState([]);
  // useEffect(() => {
  //   fetchFromAPIGetVegetarian().then((data) => setDishes(data.recipes));
  //   fetchFromAPIGetPescatarian().then((data) =>
  //     setDishes((prev) => [...prev, data.recipes])
  //   );
  //   fetchFromAPIGetKeto().then((data) =>
  //     setDishes((prev) => [...prev, data.recipes])
  //   );
  // }, []);

  const totalDishes = dishes.flat();

  console.log(totalDishes);
  return (
    <div className="flex justify-center items-center">
      <div className="mt-[6rem] grid gap-4 items-center justify-center">
        <div className="flex flex-col items-center justify-center p-[1rem] bg-gray-dark rounded lg:p-[3rem]">
          <h2 className="font-bold text-[2rem] text-white lg:text-[4rem]">
            Vegetarian
          </h2>
        </div>

        <div className="grid auto-rows-auto grid-cols-2 lg:grid-cols-3">
          {totalDishes
            .filter((dish) => dish.vegetarian === true)
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
            Vegan
          </h2>
        </div>
        <div className="grid auto-rows-auto grid-cols-2 lg:grid-cols-3">
          {totalDishes
            .filter((dish) => dish.vegan === true)
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
            Ketogenic
          </h2>
        </div>
        <div className="grid auto-rows-auto grid-cols-2  lg:grid-cols-3">
          {totalDishes
            .filter((dish) => dish.diets.includes("ketogenic"))
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
    </div>
  );
};

export default MainCuisinesGrid;
