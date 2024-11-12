"use client";
import { XCircle } from "@phosphor-icons/react";
import React from "react";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const option = {
    width: "300",
    height: "250",
  };

  return (
    <div className="fixed bottom-0 right-0">
      <div>
        <button>
          <XCircle size={32} />
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

export default VideoPlayer;
