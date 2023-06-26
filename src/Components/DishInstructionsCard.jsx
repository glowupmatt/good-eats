import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ScaleIcon from "@mui/icons-material/Scale";
import { dishes } from "../utils/boilerInfo";
import { IngredientsAccordian } from "./IngredientsAccordian";

const DishInstructionsCard = ({ dish }) => {
  // check if the dish has loaded then returns the dish information

  if (dish) {
    return (
      <div className="p-4 gap-2 flex flex-col md:flex-col lg:flex-row justify-center lg:py-[1rem] bg-gray-light rounded-lg">
        <div className="rounded-md overflow-hidden relative left-0 object-cover w-full justify-center flex bg-gray-light">
          {!dish.image ? (
            <h1>Loading</h1>
          ) : (
            <img
              alt={dish.title}
              src={dish.image}
              className="rounded-md xl:h-[30rem] bg-gray-default"
            />
          )}
        </div>
        <div className="bg-gray-light flex flex-col justify-center gap-2 p-4 rounded-md  text-center drop-shadow-[5px_0px_5px_rgba(0,0,0,0.25)] lg:w-full lg:px-[5rem]">
          <h1 className="text-red-pink font-medium text-[2rem] leading-[2rem] drop-shadow-[0_.5rem_.5rem_rgba(242,135,114,0.25)]">
            {dish.title}
          </h1>
          <div className="flex justify-between text-gray-dark">
            <p>
              {dish.servings} <span className=""> Servings</span>
            </p>
            <ScaleIcon />
          </div>
          <div className="flex justify-between text-gray-dark ">
            <p>
              <span className="font-bold ">Cook Time </span>
              {dish.readyInMinutes}
              <span className=""> Minutes</span>
            </p>
            <AccessTimeIcon />
          </div>
          <div className="">
            <ul className="hidden  md:grid md:grid-cols-2 md:grid-flow-row md:justify-center md:items-center gap-x-[2rem] lg:flex lg:flex-col xl:grid xl:grid-cols-2 xl:grid-flow-row">
              {dish.extendedIngredients.map((ingredient) => {
                return (
                  <div
                    key={ingredient.name}
                    className="flex gap-2 justify-between md:flex-row md:w-[14rem] lg:w-full"
                  >
                    <li className="list-disc flex gap-[.5rem] font-bold md:w-[50%]">
                      {ingredient.measures.us.amount}
                      <span> {ingredient.measures.us.unitShort}</span>
                    </li>
                    <p className="w-[40%] grid items-end md:block md:text-end md:w-[50%]">
                      {ingredient.name}
                    </p>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default DishInstructionsCard;
