
import { useState } from "react";
import {FC} from 'react'
interface YouTubePlayerProps {
    videoId: string;
    
  }

const YouTubePlayer: FC<YouTubePlayerProps> = ({ videoId }) => {
    const [_isPlaying, setIsPlaying] = useState(false);

  

  const handlePause = () => {
    setIsPlaying(false);
  };

    return (
    <div className="relative w-[100svw]">
      <iframe 
        width="1000" 
        height="500" 
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
        title="YouTube video player" 
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="w-[100%]"
        onPause={handlePause}
      ></iframe>
      
    </div>
  );
};

export default YouTubePlayer;
