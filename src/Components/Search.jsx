import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { data } from "autoprefixer";

const Search = ({ setGetDishes, getDishes }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [search, setSearch] = useState("");

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const BASE_URL_Search =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch";
  //Get Mexican Food

  const optionsGetMexicanFood = {
    url: BASE_URL_Search,
    params: {
      query: `${search}`,
      number: "16",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  const fetchFromAPIGetSearch = async () => {
    const { data } = await axios.get(
      `${BASE_URL_Search}`,
      optionsGetMexicanFood
    );
    return data;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchFromAPIGetSearch().then((data) => setGetDishes(data));
  };

  return (
    <div className="flex items-center justify-center">
      <header className="w-full h-full">
        <div className="searchBar flex flex-col items-center overflow-hidden  w-full h-[27rem] xl:h-[36rem]">
          <div className="z-10 relative top-[10rem] flex flex-col items-center justify-center xl:top-[14rem]">
            {isDesktop ? (
              <h2 className="relative text-white font-bold lg:text-[3rem] text-center">
                WHATS GOOD TODAY
              </h2>
            ) : (
              <h2 className="relative  text-white font-bold text-[2rem] text-center">
                WHATS GOOD <br></br>TODAY
              </h2>
            )}
            <form
              className=" w-full h-[4rem] flex items-center justify-center relative pl-[0.2rem] bg-white rounded md:w-[30rem] lg:w-[40rem]"
              onSubmit={onSubmitHandler}
            >
              <input
                type="text"
                value={search}
                placeholder="Search For Whats Good"
                className="w-full h-full p-4 focus:outline-none"
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="pr-[.3rem] py-2">
                <button
                  type="submit"
                  className="w-[3.5rem] h-[3.5rem] bg-red-pink flex items-center justify-center rounded"
                >
                  <SearchIcon />
                </button>
              </div>
            </form>
          </div>
          <img
            alt=""
            src="/GoodEatsFolder/HeroImg.png"
            className="max-w-[40rem] relative bottom-[5rem] md:max-w-[50rem] lg:max-w-[74rem] xl:max-w-[120rem]"
          />
        </div>
      </header>
    </div>
  );
};

export default Search;
