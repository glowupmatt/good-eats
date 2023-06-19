import React, { useEffect, useState } from "react";
import { dishes } from "../utils/boilerInfo";
import {
  fetchFromAPIBreakfast,
  fetchFromAPILunch,
  fetchFromAPIDinner,
} from "../utils/fetchFromAPI";
import DishCardComp from "./DishCardComp";
import classNames from "classnames";

// the categories for the meal slider under the search tab

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

  //calling the api Function for the dish information

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

  // variable that flattens the multi call state, there are two arrays inside two array
  const totalDishes = dishes.flat();

  return (
    <div className="">
      <div>
        <ul className="flex items-center justify-center gap-[2rem] px-[2rem] pt-[2rem] w-full text-[.8rem] font-semibold lg:gap-[6rem]">
          {/* This maps over mealSelector array and allows you to select the filter that the end user wants */}
          {mealSelector.map((meal) => {
            return (
              <div key={meal.id} className="flex flex-col gap-4">
                <li
                  onClick={() => setSelected(meal.name)}
                  className={classNames(
                    " cursor-pointer hover:text-red-pink lg:text-[1.5rem] ",
                    {
                      "text-red-pink ": selected === meal.name,
                      "text-gray-dark ": selected === !meal.name,
                    }
                  )}
                >
                  {meal.title}
                </li>
                <div
                  className={classNames("border-solid border-b-[.1rem]", {
                    " border-red-pink": selected === meal.name,
                    " border-gray-dark ": selected === !meal.name,
                  })}
                ></div>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-row overflow-scroll gap-4 ">
        {/* filters through the api's information using the above 'selected' state then returns a mapped array that holds that filtered information */}
        {totalDishes
          .filter((dish) => dish.dishTypes.includes(selected))
          .map((dish) => {
            return (
              <div className="lg:hover:bg-gray-light hover:drop-shadow-2xl">
                <DishCardComp key={dish.id} dish={dish} selected={selected} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MealsSlider;
