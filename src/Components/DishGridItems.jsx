import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BoyIcon from "@mui/icons-material/Boy";
import * as DOMPurify from "dompurify";
import { Link } from "react-router-dom";

const DishGridItems = ({ dish }) => {
  let cleanDescriptionHTML = DOMPurify.sanitize(dish.summary);

  return (
    <Link to={`/instructions/${dish.id}`}>
      <div className="p-4 gap-2 flex flex-col w-full shadow-md h-[24rem] justify-center">
        <div className="rounded-md overflow-hidden relative left-0 object-cover w-full">
          <img alt="" src={dish.image} className="rounded-md" />
        </div>
        <div className="flex flex-col gap-[.5rem] justify-between h-[80%]">
          <h2 className="text-red-pink font-semibold text-4">{dish.title}</h2>
          <div
            className="leading-5"
            dangerouslySetInnerHTML={{
              __html: `${cleanDescriptionHTML.substring(0, 60)} ...`,
            }}
          />
          <div className="flex justify-between text-gray-dark">
            <p>
              <span className="font-bold">Serves </span>
              {dish.servings}
            </p>
            <BoyIcon />
          </div>
          <div className="flex justify-between text-gray-dark">
            <p>
              <span className="font-bold ">Cook Time </span>
              {dish.readyInMinutes}
              <span className=""> Minutes</span>
            </p>
            <AccessTimeIcon />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DishGridItems;
