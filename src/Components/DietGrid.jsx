import React, { useState } from "react";
import DishGridItems from "./DishGridItems";
import classNames from "classnames";
import DishCardComp from "./DishCardComp";
import { dishes } from "../utils/boilerInfo";

const DietGrid = () => {
  const [selected, setSelected] = useState("italian");
  const cuisineSelector = [
    {
      id: 1,
      name: "mexican",
      title: "MEXICAN",
    },
    {
      id: 2,
      name: "italian",
      title: "ITALIAN",
    },
    {
      id: 3,
      name: "asian",
      title: "ASIAN",
    },
    {
      id: 4,
      name: "thai",
      title: "THAI",
    },
    {
      id: 5,
      name: "spanish",
      title: "SPANISH",
    },
    {
      id: 6,
      name: "korean",
      title: "KOREAN",
    },
  ];

  const totalDishes = dishes.flat();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center justify-center p-[1rem]">
        <h2 className="font-bold text-[2rem]">Top Cuisines</h2>
        <h2 className="text-red font-medium">Choose your favorite Cuisine</h2>
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-[.5rem] items-center justify-center">
        {cuisineSelector.map((cuisine) => {
          return (
            <button
              onClick={() => setSelected(cuisine.name)}
              className={classNames(
                "p-[.5rem] rounded-[10rem] bg-gray-default font-small text-[.7rem] w-[5rem]",
                {
                  "bg-red text-white": selected === cuisine.name,
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
        {totalDishes
          //   .filter((dish) => dish.cuisines === selected)
          .slice(0, 6)
          .map((dish) => {
            return (
              <div className="w-full h-full">
                <DishGridItems dish={dish} selected={selected} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DietGrid;
