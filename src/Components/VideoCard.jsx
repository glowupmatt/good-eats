import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div className="p-4 gap-4 flex flex-col w-[16rem] shadow-md  ">
      <div className="rounded-md overflow-hidden relative left-0 object-cover w-[14rem]">
        <img alt="" src={video.thumbnail} className="rounded-md h-[11rem]" />
      </div>
      <div className="flex flex-col gap-[.5rem]">
        <h2 className="text-red font-semibold text-4">{video.title}</h2>
      </div>
    </div>
  );
};

export default VideoCard;
