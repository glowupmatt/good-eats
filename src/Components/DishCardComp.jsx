import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BoyIcon from "@mui/icons-material/Boy";
import * as DOMPurify from "dompurify";

const DishCardComp = ({ dish }) => {
  let cleanDescriptionHTML = DOMPurify.sanitize(dish.summary);

  return (
    <div className="p-4 gap-4 flex flex-col w-[16rem] shadow-md bg-[#F5F5F4]rounded">
      <div className="rounded-md overflow-hidden relative left-0 object-cover w-[14rem]">
        <img alt="" src={dish.image} className="rounded-md" />
      </div>
      <div className="flex flex-col gap-[.5rem]">
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
            <span className="font-bold ">Cook Time </span> {dish.readyInMinutes}
            <span className="">Minutes</span>
          </p>
          <AccessTimeIcon />
        </div>
      </div>
    </div>
  );
};

export default DishCardComp;
