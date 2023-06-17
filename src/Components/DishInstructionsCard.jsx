import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ScaleIcon from "@mui/icons-material/Scale";

const DishInstructionsCard = ({ dishes }) => {
  return (
    <div className="p-4 gap-2 flex flex-col ">
      <div className="rounded-md overflow-hidden relative left-0 object-cover w-full">
        <img
          alt={dishes[0].title}
          src={dishes[0].image}
          className="rounded-md"
        />
      </div>
      <div className="bg-gray-light grid gap-2 p-4 rounded-md  text-center drop-shadow-[5px_0px_5px_rgba(0,0,0,0.25)]">
        <h1 className="text-red-pink font-medium text-[2rem] leading-[2rem] drop-shadow-[0_.5rem_.5rem_rgba(242,135,114,0.25)]">
          {dishes[0].title}
        </h1>
        <div className="flex justify-between text-gray-dark">
          <p>
            {dishes[0].servings} <span className=""> Servings</span>
          </p>
          <ScaleIcon />
        </div>
        <div className="flex justify-between text-gray-dark">
          <p>
            <span className="font-bold ">Cook Time </span>
            {dishes[0].readyInMinutes}
            <span className=""> Minutes</span>
          </p>
          <AccessTimeIcon />
        </div>
      </div>
    </div>
  );
};

export default DishInstructionsCard;
