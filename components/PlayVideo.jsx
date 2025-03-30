import React from "react";

const PlayVideo = ({ url }) => {
  return (
    <div className="fixed">
      <iframe
        width="560"
        height="315"
        className="w-[60vw] h-full aspect-video"
        src={`https://www.youtube.com/embed/${url}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PlayVideo;
