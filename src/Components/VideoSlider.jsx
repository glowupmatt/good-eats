import React, { useEffect, useState } from "react";
import { videos } from "../utils/videosInfo";
import VideoCard from "./VideoCard";
import { fetchFromAPIVideoSearch } from "../utils/fetchFromAPIVideos";

const VideoSlider = () => {
  //   const [videos, setVideos] = useState([]);

  //   useEffect(() => {
  //     fetchFromAPIVideoSearch().then((data) => setVideos(data.videos));
  //   }, []);

  return (
    <div className="">
      <div className="p-4">
        <div className="flex flex-col items-center justify-center p-[2rem] bg-gray-dark rounded lg:p-[3rem]">
          <h2 className="font-bold text-[2rem] text-white lg:text-[4rem]">
            Video Recipes
          </h2>
          <h2 className="text-red-pink font-medium lg:text-[2rem]">
            Great Dishes With Simple Steps
          </h2>
        </div>
      </div>
      <div className="flex flex-row overflow-scroll gap-4 height-full">
        {videos.map((video) => {
          return <VideoCard key={video.title} video={video} />;
        })}
      </div>
    </div>
  );
};

export default VideoSlider;
