import React, { useEffect, useState } from "react";
import { fetchFromAPIGeRelatedRecipes } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
// import { related } from "../utils/relatedInfo";
import { Link } from "react-router-dom";

const RelatedRecipes = () => {
  const [related, setRelated] = useState();
  const dish = useParams();

  useEffect(() => {
    fetchFromAPIGeRelatedRecipes(`${dish.id}/similar`).then((data) =>
      setRelated(data)
    );
  }, [dish]);

  if (related) {
    return (
      <div
        className="flex
            flex-col md:grid md:grid-cols-2 md:auto-rows-auto w-full lg:flex lg:flex-col lg:w-[30%] gap-[1rem] bg-gray-default p-4 items-center justify-center rounded-md"
      >
        <h2 className="text-[2rem] font-semibold md:text-[3rem] md:text-center">
          Related Recipes
        </h2>
        {related.slice(0, 5).map((dish) => {
          return (
            <Link
              to={`/instructions/${dish.id}`}
              className="bg-white w-full p-[1rem] md:w-[16rem] md:h-[8rem] md:justify-items-center rounded-md lg:w-full hover:bg-gray-light cursor-pointer hover:drop-shadow-2xl"
            >
              <h2 className="font-semibold text-[1rem]">{dish.title}</h2>
              <p className="font-light text-[.9rem]">
                Ready in: {dish.readyInMinutes}
              </p>
              <p className="font-light text-[.9rem]">
                {dish.servings} Servings
              </p>
            </Link>
          );
        })}
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default RelatedRecipes;
