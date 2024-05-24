import { BiLogoYoutube } from "react-icons/bi";
import { useState } from "react";
import {FC} from 'react'
interface YouTubePlayerProps {
    videoId: string;
    posterImageSrc: string;
  }

const YouTubePlayer: FC<YouTubePlayerProps> = ({ videoId, posterImageSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

    return (
    <div className="relative">
      <iframe 
        width="1000" 
        height="500" 
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
        title="YouTube video player" 
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        onPause={handlePause}
      ></iframe>
      <img 
        className="absolute inset-0 object-cover w-full h-full"
        src={posterImageSrc} 
        alt="Poster Image"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <BiLogoYoutube color="red" size={128}  onClick={handlePlay}/>
      </div>
    </div>
  );
};

export default YouTubePlayer;
