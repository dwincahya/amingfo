"use client";
import React, { useState } from "react";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseButton = () => {
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
            onClick={handleCloseButton}
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

  return isOpen ? <Player /> : null;
};

export default VideoPlayer;
