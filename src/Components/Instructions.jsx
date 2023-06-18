import React, { useState, useEffect } from "react";
import DishInstructionsCard from "./DishInstructionsCard";
import classNames from "classnames";
import CheckIcon from "@mui/icons-material/Check";
import { IngredientsAccordian } from "./IngredientsAccordian";
import { useParams } from "react-router-dom";
import {
  fetchFromAPIoptionsGetAnalyzedRecipeInstructions,
  fetchFromAPIGetRecipeInformation,
} from "../utils/fetchFromAPI";
import DishCardComp from "./DishCardComp";

const Instructions = () => {
  const [checked, setChecked] = useState([]);
  const [dish, setDish] = useState();
  const [dishInfo, setDishInfo] = useState();

  const [showIngredients, setShowIngredients] = useState(false);
  const showIngredientsHandler = () => {
    setShowIngredients((prev) => !prev);
  };

  const idTag = useParams();

  useEffect(() => {
    fetchFromAPIoptionsGetAnalyzedRecipeInstructions(
      `${idTag.id}/analyzedInstructions`
    ).then((data) => setDish(data));
    fetchFromAPIGetRecipeInformation(`${idTag.id}/information`).then((data) =>
      setDishInfo(data)
    );
  }, [idTag.id]);

  return (
    <div className="">
      <DishInstructionsCard dish={dishInfo} />
      <IngredientsAccordian
        dishes={dishInfo}
        showIngredientsHandler={showIngredientsHandler}
        showIngredients={showIngredients}
      />
      <div className="p-4">
        {dish &&
          dish[0].steps.map((step, index) => {
            const checkHandler = () => {
              if (!checked.includes(index)) {
                setChecked((prev) => [...prev, index]);
              } else {
                setChecked((prev) => prev.filter((value) => value !== index));
              }
            };

            return (
              <div key={step.number} className="flex gap-4">
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
                {index + 1}.<p className="w-[75rem]">{step.step}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Instructions;
