import React from "react";

const Video = ({ url }) => {
  return (
    <div className="w-[50vw]">
      <iframe
        width="560"
        height="315"
        className="w-full h-full aspect-video"
        src={`https://www.youtube.com/embed/${url}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
