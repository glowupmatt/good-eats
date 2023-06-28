import React from "react";
import { dishes } from "../../utils/dishesInfo";
import LoadingScreen from "../../LoadingScreen";
import DishGridItems from "../DishGridItems";

const CuisineMainGrid = () => {
  // const [dishes, setDishes] = useState([]);
  // useEffect(() => {
  //   fetchFromAPIBreakfast().then((data) => setDishes(data.recipes));
  //   fetchFromAPILunch().then((data) =>
  //     setDishes((prev) => [...prev, data.recipes])
  //   );
  //   fetchFromAPIDinner().then((data) =>
  //     setDishes((prev) => [...prev, data.recipes])
  //   );
  // }, []);

  const totalDishes = dishes.flat();

  if (totalDishes.length < 15) {
    return <LoadingScreen />;
  } else {
    return (
      <div className="mt-[6rem] gap-[1rem] grid">
        {/* Displays the dishes and information on each card */}
        <div className="flex flex-col items-center justify-center p-[1rem] bg-gray-dark rounded lg:p-[3rem]">
          <h2 className="font-bold text-[2rem] text-white lg:text-[4rem]">
            Mexican
          </h2>
        </div>
        <div className="grid auto-rows-auto grid-cols-2 gap-[.5rem] lg:grid-cols-3">
          {totalDishes
            .filter((dish) => dish.cuisines.includes("Mexican"))
            .slice(0, 6)
            .map((dish) => {
              return (
                <div
                  key={dish.id}
                  className="w-full h-full lg:hover:bg-gray-light hover:drop-shadow-2xl"
                >
                  <DishGridItems dish={dish} />
                </div>
              );
            })}
        </div>

        <div className="flex flex-col items-center justify-center p-[1rem] bg-gray-dark rounded lg:p-[3rem]">
          <h2 className="font-bold text-[2rem] text-white lg:text-[4rem]">
            Asian
          </h2>
        </div>
        <div className="grid auto-rows-auto grid-cols-2 gap-[.5rem] lg:grid-cols-3">
          {totalDishes
            .filter((dish) => dish.cuisines.includes("Asian"))
            .slice(0, 6)
            .map((dish) => {
              return (
                <div
                  key={dish.id}
                  className="w-full h-full lg:hover:bg-gray-light hover:drop-shadow-2xl"
                >
                  <DishGridItems dish={dish} />
                </div>
              );
            })}
        </div>
        <div className="flex flex-col items-center justify-center p-[1rem] bg-gray-dark rounded lg:p-[3rem]">
          <h2 className="font-bold text-[2rem] text-white lg:text-[4rem]">
            Spanish
          </h2>
        </div>
        <div className="grid auto-rows-auto grid-cols-2 gap-[.5rem] lg:grid-cols-3">
          {totalDishes
            .filter((dish) => dish.cuisines.includes("Spanish"))
            .slice(0, 6)
            .map((dish) => {
              return (
                <div
                  key={dish.id}
                  className="w-full h-full lg:hover:bg-gray-light hover:drop-shadow-2xl"
                >
                  <DishGridItems dish={dish} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
};

export default CuisineMainGrid;
