import React, { useState, useEffect } from "react";
import { videos } from "../../utils/videosInfo";
import VideoCardForGrid from "../VideoCardForGrid";
import { fetchFromAPIVideo } from "../../utils/fetchFromAPIVideos";

const VideosMainGrid = () => {
  //   const [videos, setVideos] = useState([]);

  //   useEffect(() => {
  //     fetchFromAPIVideo().then((data) => setVideos(data.videos));
  //   }, []);

  console.log(videos);

  return (
    <div className="mt-[6rem]">
      <div className="p-4">
        <div className="flex flex-col items-center justify-center p-[1rem] bg-gray-dark rounded lg:p-[3rem]">
          <h2 className="font-bold text-[2rem] text-white lg:text-[4rem]">
            Video Recipes
          </h2>
          <h2 className="text-red-pink font-medium lg:text-[2rem]">
            Great Dishes With Simple Steps
          </h2>
        </div>
      </div>
      <div className="grid auto-rows-auto grid-cols-2 gap-[.5rem] lg:grid-cols-3">
        {videos.map((video) => {
          return <VideoCardForGrid key={video.title} video={video} />;
        })}
      </div>
    </div>
  );
};

export default VideosMainGrid;
