import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import classNames from "classnames";
import { ClassNames } from "@emotion/react";

export const IngredientsAccordian = ({
  dishes,
  showIngredientsHandler,
  showIngredients,
}) => {
  if (dishes) {
    return (
      <div>
        <div className="flex items-center justify-center my-4">
          <div className="border-solid border-gray-default border-[1px] rounded-md h-full w-[80%]">
            <button
              onClick={showIngredientsHandler}
              className="flex items-center justify-between w-full p-[.7rem]"
            >
              <div className="flex items-center justify-center gap-4">
                <MenuBookIcon />
                <h2>INGREDIENTS</h2>
              </div>
              <div
                className={classNames({
                  "rotate-180": showIngredients === false,
                  "rotate-0": showIngredients === true,
                })}
              >
                <KeyboardArrowUpIcon />
              </div>
            </button>
            <ul
              className={classNames("p-4", {
                "h-full w-full grid grid-flow-row auto-cols-fr border-t-[1px] py-4 pr-4 pl-[2rem] border-gray-default":
                  showIngredients === true,
                "h-0 w-0 hidden": showIngredients === false,
              })}
            >
              {dishes.extendedIngredients.map((ingredient) => {
                console.log(ingredient);
                return (
                  <div className="flex gap-4 justify-between">
                    <li className="list-disc">
                      {ingredient.measures.us.amount}
                      <span> {ingredient.measures.us.unitShort}</span>
                    </li>
                    <p className="w-[40%] grid items-end">{ingredient.name}</p>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
