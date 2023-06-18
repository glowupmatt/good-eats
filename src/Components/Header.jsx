import React from "react";
import classNames from "classnames";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Header = ({ showNav, setShowNav }) => {
  const showNavHandler = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <header>
      <div className="flex items-center justify-between p-4 backdrop-blur-xl bg-gray-default z-[200] relative">
        {!showNav ? (
          <img
            alt=""
            src="/bars-solid.svg"
            className="w-[20px]"
            onClick={showNavHandler}
          />
        ) : (
          <CloseIcon onClick={showNavHandler} />
        )}

        <div className="flex items-center justify-center">
          <p>GOOD</p>
          <Link to="/">
            <img
              alt="logo"
              src="/GoodEatsFolder/logo.png"
              className="w-[50px]"
            />
          </Link>
          <p>EATS</p>
        </div>
      </div>
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
          <Link to="/">MEALS</Link>
          <Link to="/">DIETS</Link>
          <Link to="/">CUISINE</Link>
          <Link to="/">VIDEOS</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
