import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="overflow-hidden relative flex justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-4 w-full absolute z-20 text-white backdrop-blur-xl p-4">
        <h2 className="lg:text-[2rem]">FOLLOW US HERE</h2>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>
        </div>
      </div>
      <div className="flex overflow-hidden justify-center items-start h-[12rem]">
        <img
          alt=""
          src="/GoodEatsFolder/3.png"
          className="relative md:max-w-full md:h-auto"
        />
      </div>
    </footer>
  );
};

export default Footer;
