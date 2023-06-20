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
// import { dishInfo } from "../utils/dishInfo";
// import { dishes } from "../utils/boilerInfo";
import Footer from "./Footer";

const Instructions = () => {
  const [checked, setChecked] = useState([]);
  const [dish, setDish] = useState();
  const [dishInfo, setDishInfo] = useState();

  const [showIngredients, setShowIngredients] = useState(false);
  const showIngredientsHandler = () => {
    setShowIngredients((prev) => !prev);
  };

  // using the useParams hook in order to fetch the parameters specified from the all the card comps <Link to={`/instructions/${dish.id}`} This is also linked through the app.js on the route

  const idTag = useParams();

  // created a useEffect to receive the information from two API calls, first one receives the instructions/ingredients, second one receives the photo and title. Used the ID tag as the id holder to complete the url query.

  useEffect(() => {
    fetchFromAPIoptionsGetAnalyzedRecipeInstructions(
      `${idTag.id}/analyzedInstructions`
    ).then((data) => setDish(data));
    fetchFromAPIGetRecipeInformation(`${idTag.id}/information`).then((data) =>
      setDishInfo(data)
    );
  }, [idTag.id]);

  console.log(dish);

  return (
    <div className="relative top-[6rem]">
      <DishInstructionsCard dish={dishInfo} />
      <IngredientsAccordian
        dishes={dishInfo}
        showIngredientsHandler={showIngredientsHandler}
        showIngredients={showIngredients}
      />
      <div className="p-4 flex flex-col gap-[2rem] justify-center">
        {/* Checks if the dish && steps loaded then will return the rest of the page */}
        {dish &&
          // dish.extendedIngredients.map((step, index) => {
          dish[0].steps.map((step, index) => {
            const checkHandler = () => {
              if (!checked.includes(index)) {
                setChecked((prev) => [...prev, index]);
              } else {
                setChecked((prev) => prev.filter((value) => value !== index));
              }
            };

            return (
              <div key={step.number} className="flex gap-4 items-center">
                <button
                  onClick={checkHandler}
                  className={classNames(
                    "rounded-full max-w-[2rem] h-full block items-center justify-center",
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
                {index + 1}.<p className="w-[75rem] leading-3 ">{step.step}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Instructions;
