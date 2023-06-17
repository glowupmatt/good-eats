import React, { useEffect, useState } from "react";
import { videos } from "../utils/videosInfo";
import VideoCard from "./VideoCard";
import { fetchFromAPIVideoSearch } from "../utils/fetchFromAPIVideos";

const VideoSlider = () => {
  //   const [videos, setVideos] = useState([]);

  //   useEffect(() => {
  //     fetchFromAPIVideoSearch().then((data) => setVideos(data.videos));
  //   }, []);

  console.log(videos);

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center p-[2rem]">
        <h2 className="font-bold text-[2rem]">Video Recipes</h2>
        <h2 className="text-red font-medium">Great Dishes With Simple Steps</h2>
      </div>
      <div className="flex flex-row overflow-scroll gap-4 height-full">
        {videos.map((video) => {
          return <VideoCard video={video} />;
        })}
      </div>
    </div>
  );
};

export default VideoSlider;
