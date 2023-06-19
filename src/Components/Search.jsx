import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className="flex items-center justify-center">
      <header className="w-full h-full">
        <div className="searchBar flex flex-col items-center overflow-hidden  w-full h-[27rem] xl:h-[36rem]">
          <div className="z-10 relative top-[10rem] flex flex-col items-center justify-center xl:top-[14rem]">
            <h2 className="relative  text-white font-bold text-[2rem] text-center">
              WHATS GOOD <br></br>TODAY
            </h2>
            <div className=" w-full h-[4rem] flex items-center justify-center relative pl-[0.2rem] bg-white rounded md:w-[30rem]">
              <input
                type="text"
                placeholder="Search For Whats Good"
                className="w-full h-full p-4 focus:outline-none"
              />
              <div className="pr-[.3rem] py-2">
                <button className="w-[3.5rem] h-[3.5rem] bg-red-pink flex items-center justify-center rounded">
                  <SearchIcon />
                </button>
              </div>
            </div>
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
