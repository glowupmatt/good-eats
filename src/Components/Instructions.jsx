import React, { useState } from "react";
import Header from "./Header";
import DishInstructionsCard from "./DishInstructionsCard";
import classNames from "classnames";
import { dishes } from "../utils/boilerInfo";
import CheckIcon from "@mui/icons-material/Check";
import { IngredientsAccordian } from "./IngredientsAccordian";
import Recomended from "./Recomended";
import { Link } from "react-router-dom";

const Instructions = () => {
  const [showNav, setShowNav] = useState(false);
  const [checked, setChecked] = useState([]);

  const [showIngredients, setShowIngredients] = useState(false);
  const showIngredientsHandler = () => {
    setShowIngredients((prev) => !prev);
  };
  return (
    <div className="">
      <div className="relative w-full z-20">
        <Header showNav={showNav} setShowNav={setShowNav} />
      </div>
      <DishInstructionsCard dishes={dishes} />
      <IngredientsAccordian
        dishes={dishes}
        showIngredientsHandler={showIngredientsHandler}
        showIngredients={showIngredients}
      />
      {dishes[0].analyzedInstructions.map((instruction) => {
        return (
          <div className="p-4">
            {instruction.steps.map((steps, index) => {
              const checkHandler = () => {
                if (!checked.includes(index)) {
                  setChecked((prev) => [...prev, index]);
                } else {
                  setChecked((prev) => prev.filter((value) => value !== index));
                }
              };
              return (
                <div className="flex gap-4">
                  <button
                    onClick={checkHandler}
                    className={classNames(
                      "rounded-full w-[11rem] h-[2rem] grid items-center justify-center",
                      {
                        "border-none bg-red-pink text-white":
                          checked.includes(index),
                        "border-gray-default border-solid border text-red-pink":
                          !checked.includes(index),
                      }
                    )}
                  >
                    <CheckIcon />
                  </button>
                  {index + 1}.<p className="w-[75rem]">{steps.step}</p>
                </div>
              );
            })}
          </div>
        );
      })}
      <Recomended />
    </div>
  );
};

export default Instructions;
