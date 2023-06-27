import React, { useState, useEffect } from "react";
import DishInstructionsCard from "./DishInstructionsCard";
import { IngredientsAccordian } from "./IngredientsAccordian";
import { useParams } from "react-router-dom";
import {
  fetchFromAPIoptionsGetAnalyzedRecipeInstructions,
  fetchFromAPIGetRecipeInformation,
} from "../utils/fetchFromAPI";
import InstructionsBody from "./InstructionsBody";
import RelatedRecipes from "./RelatedRecipes";
import LoadingScreen from "../LoadingScreen";

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

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="flex flex-col justify-center relative mt-[5rem] items-center">
      <DishInstructionsCard dish={dishInfo} />
      <IngredientsAccordian
        dishes={dishInfo}
        showIngredientsHandler={showIngredientsHandler}
        showIngredients={showIngredients}
      />
      <div className="flex flex-col lg:flex-row justify-between md:p-4 md:w-[80%] gap-[2rem] lg:w-full">
        <div className="flex w-full flex-col gap-[2rem] justify-center lg:justify-normal p-0 lg:p-4 lg:w-full">
          {/* Checks if the dish && steps loaded then will return the rest of the page */}

          {!dish ? (
            <div className="h-screen">
              <LoadingScreen />
            </div>
          ) : dish.length === 0 ? (
            <div className="flex justify-center items-center text-center">
              Information not found please select another tasty dish
            </div>
          ) : (
            <div>
              <h2 className="font-bold text-[2rem] lg:text-[5rem] text-center bg-gray-light rounded-md p-4 lg:w-full mb-4">
                Instructions
              </h2>
              {dish[0].steps.map((step, index) => (
                <InstructionsBody
                  key={index}
                  step={step}
                  index={index}
                  checked={checked}
                  setChecked={setChecked}
                />
              ))}
              s
            </div>
          )}
        </div>
        <div onClick={scrollToTop} className="lg:w-[30%]">
          <RelatedRecipes />
        </div>
      </div>
    </div>
  );
};

export default Instructions;
