import React, { useEffect, useState } from "react";
import { dishes } from "../utils/boilerInfo";
import {
  fetchFromAPIBreakfast,
  fetchFromAPILunch,
  fetchFromAPIDinner,
} from "../utils/fetchFromAPI";
import DishCardComp from "./DishCardComp";
import classNames from "classnames";

const MealsSlider = () => {
  const [selected, setSelected] = useState("breakfast");

  const mealSelector = [
    {
      id: 1,
      name: "breakfast",
      title: "BREAKFAST",
    },
    {
      id: 2,
      name: "lunch",
      title: "LUNCH",
    },
    {
      id: 3,
      name: "dinner",
      title: "DINNER",
    },
  ];

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
  return (
    <div className="">
      <div>
        <ul className="flex items-center justify-center gap-[2rem] px-[2rem] pt-[2rem] w-full text-[.8rem] font-semibold">
          {mealSelector.map((meal) => {
            return (
              <div className="flex flex-col gap-4">
                <li
                  key={meal.id}
                  onClick={() => setSelected(meal.name)}
                  className={classNames(" cursor-pointer", {
                    "text-red": selected === meal.name,
                    "text-gray-dark": selected === !meal.name,
                  })}
                >
                  {meal.title}
                </li>
                <div
                  className={classNames("border-solid border-b-[.1rem]", {
                    " border-red": selected === meal.name,
                    " border-gray-dark ": selected === !meal.name,
                  })}
                ></div>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-row overflow-scroll gap-4">
        {totalDishes
          .filter((dish) => dish.dishTypes.includes(selected))
          .map((dish) => {
            return <DishCardComp dish={dish} selected={selected} />;
          })}
      </div>
    </div>
  );
};

export default MealsSlider;
