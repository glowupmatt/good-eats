import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Header = ({ showNav, setShowNav }) => {
  const showNavHandler = () => {
    setShowNav((prev) => !prev);
  };

  return (
    // This is for the header, only contains the hamburger, cross, logo, and the desktop nav bar
    <header className="w-full">
      <div className="flex justify-center">
        <div className="flex items-center justify-between p-4  backdrop-blur-xl bg-gray-default lg:bg-gray-light lg:backdrop-blur-0 z-[200] fixed w-full md:px-[2rem] md:py-[1rem] xl:px-[8rem] lg:absolute lg:w-full">
          <nav className="hidden lg:flex lg:z-[100] lg:h-[79%] lg:text-start lg:gap-[4rem] lg:justify-center xl:text-[1.8rem] xl:items-center">
            <Link to="meals/" className="hover:text-red-pink">
              MEALS
            </Link>
            <Link to="/" className="hover:text-red-pink">
              DIETS
            </Link>
          </nav>
          {!showNav ? (
            <img
              alt=""
              src="/bars-solid.svg"
              className="w-[20px] md:w-[2.5rem] lg:hidden"
              onClick={showNavHandler}
            />
          ) : (
            <img
              alt=""
              src="/GoodEatsFolder/xmark-solid (1).svg"
              className="w-[20px] md:w-[2.5rem] lg:hidden"
              onClick={showNavHandler}
            />
          )}

          {/* Logo for Website */}

          <div className="flex items-center justify-center">
            <p className="md:text-[1.6rem]">GOOD</p>
            <Link to="/">
              <img
                alt="logo"
                src="/GoodEatsFolder/logo.png"
                className="w-[50px] md:w-[5rem]"
              />
            </Link>
            <p className="md:text-[1.6rem]">EATS</p>
          </div>
          <nav className="hidden lg:flex lg:z-[100] lg:h-[79%] lg:text-start lg:gap-[4rem] lg:justify-center  xl:text-[1.8rem] xl:items-center">
            <Link to="/" className="hover:text-red-pink">
              CUISINE
            </Link>
            <Link to="/" className="hover:text-red-pink">
              VIDEOS
            </Link>
          </nav>
        </div>
      </div>
      {/* This is the mobile nav */}
      <div
        className={classNames(
          "right-0 top-0 p-[5rem] backdrop-blur-xl fixed flex z-[150] bg-gray-default",
          {
            "h-full w-[79%]": showNav === true,
            "h-0 w-0 hidden": showNav === false,
          }
        )}
      >
        <nav
          className={classNames(
            "flex flex-col z-[100] h-[79%] text-start gap-[4rem] justify-center",
            {
              "w-0 hidden": showNav === false,
              "w-full": showNav === true,
            }
          )}
        >
          <Link to="meals/">MEALS</Link>
          <Link to="/">DIETS</Link>
          <Link to="/">CUISINE</Link>
          <Link to="/">VIDEOS</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
