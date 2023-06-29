import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchGrid = ({ getDishes }) => {
  console.log(getDishes);
  if (getDishes && getDishes.totalResults !== 0) {
    return (
      <div className="mt-[6rem] grid gap-4 items-center justify-center">
        <div className="grid auto-rows-auto grid-cols-2 lg:grid-cols-3">
          {getDishes.results &&
            getDishes.results.map((dish) => (
              <Link
                to={`/instructions/${dish.id}`}
                className="p-4 gap-4 flex flex-col shadow-md bg-[#F5F5F4]rounded lg:w-full hover:drop-shadow-2xl hover:bg-white"
              >
                <div className="rounded-md overflow-hidden bg-gray-default relative left-0 object-cover w-full ">
                  <img
                    alt=""
                    src={dish.image}
                    className="rounded-md  lg:h-full w-full"
                  />
                </div>
                <div className="flex flex-col gap-[.5rem]">
                  <h2 className="text-red-pink font-semibold text-4 lg:text-[1.5rem] lg:font-bold">
                    {dish.title}
                  </h2>
                </div>
              </Link>
            ))}
        </div>
      </div>
    );
  } else if (getDishes.totalResults === 0) {
    return (
      <div className="mt-[6rem] grid gap-4 items-center justify-center h-screen w-screen">
        <p>Can not find search. Try another one</p>
      </div>
    );
  }
};

export default SearchGrid;
