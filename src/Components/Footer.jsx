import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <footer className="overflow-hidden relative flex justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-4 w-full absolute z-20 text-white backdrop-blur-xl p-4">
        <h2>FOLLOW US HERE</h2>
        <div className="flex gap-4">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </div>
      <div className="flex overflow-hidden justify-center items-start h-[12rem]">
        <img
          alt=""
          src="/GoodEatsFolder/3.png"
          className="max-w-[33rem] h-[14rem] relative md:max-w-full md:h-auto"
        />
      </div>
    </footer>
  );
};

export default Footer;
