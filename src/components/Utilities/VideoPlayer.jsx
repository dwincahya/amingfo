"use client";
import React, { useState } from "react";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <div>
          <button
            className="text-color-primary float-right bg-color-dark px-3 mb-1"
            onClick={handleVideoPlayer}
          >
            X
          </button>
        </div>
        <Youtube
          videoId={youtubeId}
          onReady={(event) => event.target.pause()}
          opts={option}
        />
      </div>
    );
  };

  const ButtonOpenTrailer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="text-xl hover:bg-color-accent transition-all shadow-xl fixed bottom-5 right-5 w043 bg-color-primary text-color-dark"
      >
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenTrailer />;
};

export default VideoPlayer;
