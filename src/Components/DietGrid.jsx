import React, { useState, useEffect } from "react";
import DishGridItems from "./DishGridItems";
import classNames from "classnames";
import DishCardComp from "./DishCardComp";
import { dishes } from "../utils/dishesInfo";
import {
  fetchFromAPIGetMexicanFood,
  fetchFromAPIGetAsianFood,
  fetchFromAPIGetItalianFood,
  fetchFromAPIGetKoreanFood,
  fetchFromAPIGetSpanishFood,
  fetchFromAPIGetThaiFood,
} from "../utils/fetchFromAPIDietGrid";

const DietGrid = () => {
  const [selected, setSelected] = useState("Mexican");
  // const [dishes, setDishes] = useState([]);

  // The cuisineSelector is an array of the top cuisines
  const cuisineSelector = [
    {
      id: 1,
      name: "Mexican",
      title: "MEXICAN",
    },
    {
      id: 2,
      name: "Italian",
      title: "ITALIAN",
    },
    {
      id: 3,
      name: "Asian",
      title: "ASIAN",
    },
    {
      id: 4,
      name: "Thai",
      title: "THAI",
    },
    {
      id: 5,
      name: "Spanish",
      title: "SPANISH",
    },
    {
      id: 6,
      name: "Korean",
      title: "KOREAN",
    },
  ];

  // useEffect(() => {
  //   fetchFromAPIGetAsianFood().then((data) => setDishes(data.recipes));
  //   fetchFromAPIGetItalianFood().then((data) =>
  //     setDishes((prev) => [...prev, data.recipes])
  //   );
  //   fetchFromAPIGetThaiFood().then((data) =>
  //     setDishes((prev) => [...prev, data.recipes])
  //   );
  //   fetchFromAPIGetMexicanFood().then((data) =>
  //     setDishes((prev) => [...prev, data.recipes])
  //   );
  //   fetchFromAPIGetKoreanFood().then((data) =>
  //     setDishes((prev) => [...prev, data.recipes])
  //   );
  //   fetchFromAPIGetSpanishFood().then((data) =>
  //     setDishes((prev) => [...prev, data.recipes])
  //   );
  // }, []);

  // variable that flattens the multi call state, there are two arrays inside two array
  const totalDishes = dishes.flat();

  console.log(totalDishes);
  return (
    <div className="flex flex-col gap-4">
      <div className="p-4">
        <div className="flex flex-col items-center justify-center p-[1rem] bg-gray-dark rounded">
          <h2 className="font-bold text-[2rem] text-white">Top Cuisines</h2>
          <h2 className="text-red-pink font-medium">
            Choose your favorite Cuisine
          </h2>
        </div>
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-[.5rem] items-center justify-center">
        {cuisineSelector.map((cuisine) => {
          return (
            <button
              key={cuisine.id}
              onClick={() => setSelected(cuisine.name)}
              className={classNames(
                "p-[.5rem] rounded-[10rem] bg-gray-default font-small text-[.7rem] w-[5rem]",
                {
                  "bg-red-pink text-white": selected === cuisine.name,
                  "bg-gray-dark": selected === !cuisine.name,
                }
              )}
            >
              {cuisine.title}
            </button>
          );
        })}
      </div>
      <div className="grid auto-rows-auto grid-cols-2 gap-[.5rem]">
        {/* Displays the dishes and information on each card */}
        {totalDishes
          .filter((dish) => dish.cuisines.includes(selected))
          .slice(0, 6)
          .map((dish) => {
            return (
              <div key={dish.id} className="w-full h-full">
                <DishGridItems dish={dish} selected={selected} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DietGrid;
