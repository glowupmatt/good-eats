import React, { useState, useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ScaleIcon from "@mui/icons-material/Scale";
import * as DOMPurify from "dompurify";
import { Link } from "react-router-dom";

const DishGridItems = ({ dish }) => {
  let cleanDescriptionHTML = DOMPurify.sanitize(dish.summary);

  const [isTablet, setIsTablet] = useState(window.innerWidth > 760);

  const updateMedia = () => {
    setIsTablet(window.innerWidth > 760);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <Link to={`/instructions/${dish.id}`}>
      <div className="p-4 gap-2 flex flex-col w-full shadow-md h-[24rem] justify-center md:h-[31rem]">
        <div className="rounded-md overflow-hidden relative left-0 object-cover w-full lg:h-[20rem]">
          <img alt="" src={dish.image} className="rounded-md" />
        </div>
        <div className="flex flex-col gap-[.5rem] justify-between h-[80%]">
          <h2 className="text-red-pink font-semibold text-4 md:text-[1.5rem] md:font-bold">
            {dish.title}
          </h2>
          <div
            className="leading-5"
            dangerouslySetInnerHTML={{
              __html: `${
                isTablet
                  ? cleanDescriptionHTML.substring(0, 200)
                  : cleanDescriptionHTML.substring(0, 60)
              } ...`,
            }}
          />
          <div className="flex justify-between text-gray-dark">
            <p>
              {dish.servings} <span className="font-bold"> Servings</span>
            </p>
            <ScaleIcon />
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
