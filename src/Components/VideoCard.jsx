import React from "react";

const VideoCard = ({ video }) => {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.youTubeId}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="p-4 gap-4 flex flex-col w-[16rem] shadow-md bg-[#F5F5F4]rounded lg:w-full hover:drop-shadow-2xl hover:bg-white cursor-pointer">
        <div className="rounded-md overflow-hidden bg-gray-default relative left-0 object-cover w-[14rem] xl:w-[30rem]">
          <img
            alt=""
            src={video.thumbnail}
            className="rounded-md h-[10rem] lg:h-full object-fill"
          />
        </div>
        <div className="flex flex-col gap-[.5rem]">
          <h2 className="text-red-pink font-semibold text-4 lg:text-[1.5rem] lg:font-bold">
            {video.title}
          </h2>
        </div>
      </div>
    </a>
  );
};

export default VideoCard;
