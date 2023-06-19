import React, { useState, useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ScaleIcon from "@mui/icons-material/Scale";
import * as DOMPurify from "dompurify";
import { Link } from "react-router-dom";

const DishCardComp = ({ dish }) => {
  let cleanDescriptionHTML = DOMPurify.sanitize(dish.summary);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 760);

  const updateMedia = () => {
    setIsTablet(window.innerWidth > 760);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <Link
      to={`/instructions/${dish.id}`}
      className="p-4 gap-4 flex flex-col w-[16rem] shadow-md bg-[#F5F5F4]rounded lg:w-full hover:drop-shadow-2xl hover:bg-white"
    >
      <div className="rounded-md overflow-hidden relative left-0 object-cover w-[14rem] xl:w-[30rem]">
        <img alt="" src={dish.image} className="rounded-md" />
      </div>
      <div className="flex flex-col gap-[.5rem]">
        <h2 className="text-red-pink font-semibold text-4">{dish.title}</h2>
        <div
          className="leading-5"
          dangerouslySetInnerHTML={{
            __html: `${
              isTablet
                ? cleanDescriptionHTML.substring(0, 70)
                : cleanDescriptionHTML.substring(0, 60)
            } ...`,
          }}
        />
        <div className="flex justify-between text-gray-dark">
          <p>
            {dish.servings} :<span className="font-bold"> Servings</span>
          </p>
          <ScaleIcon />
        </div>
        <div className="flex justify-between text-gray-dark">
          <p>
            <span className="font-bold ">Cook Time </span> {dish.readyInMinutes}
            <span className=""> Minutes</span>
          </p>
          <AccessTimeIcon />
        </div>
      </div>
    </Link>
  );
};

export default DishCardComp;
