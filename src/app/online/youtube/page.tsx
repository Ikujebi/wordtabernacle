"use client"
import { FC } from "react";
import YouTubePlayer from "../../components/common/YouTubePlayer";

const YouTubePage: FC = () => {
  const videoId = "U2c6EMa9NJY?si"; // Replace with the actual video ID

  return (
    <div className="h-[100svh] flex items-center justify-center">
      <YouTubePlayer videoId={videoId} />
    </div>
  );
};

export default YouTubePage;