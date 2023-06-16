import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const Search = () => {
  return (
    <div className="flex items-center justify-center">
      <header className="w-full h-full">
        <div className="searchBar flex flex-col items-center overflow-hidden  w-full h-[27rem]">
          <div className="z-10 relative top-[10rem] flex flex-col items-center justify-center">
            <h2 className="relative  text-white font-bold text-[2rem] text-center">
              WHATS GOOD <br></br>TODAY
            </h2>
            <div className=" w-full h-[4rem] flex items-center justify-center relative pl-[0.2rem] bg-white rounded">
              {/* <RestaurantIcon /> */}
              <input
                type="text"
                placeholder="Search For Whats Good"
                className="w-full h-full p-4 focus:outline-none"
              />
              <div className="pr-[.3rem] py-2">
                <button className="w-[3.5rem] h-[3.5rem] bg-red flex items-center justify-center rounded">
                  <SearchIcon />
                </button>
              </div>
            </div>
          </div>
          <img
            alt=""
            src="/GoodEatsFolder/HeroImg.png"
            className="max-w-[40rem] relative bottom-[5rem]"
          />
        </div>
      </header>
    </div>
  );
};

export default Search;
