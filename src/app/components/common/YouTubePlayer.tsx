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
      console.log("handlePlay clicked!!");
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
        className="w-full"
        onPause={handlePause}
      ></iframe>
      
    </div>
  );
};

export default YouTubePlayer;
