import { useState } from "react";
import { BiLogoYoutube } from "react-icons/bi";

interface YouTubePlayerProps {
  videoId: string;
  posterImageSrc: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId, posterImageSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="relative">
      {!isPlaying && (
        <>
          <img 
            className="absolute inset-0 object-cover w-full h-full"
            src={posterImageSrc} 
            alt="Poster Image"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <BiLogoYoutube color="red" size={48} onClick={handlePlay} />
          </div>
        </>
      )}
      <iframe 
        width="1000" 
        height="500" 
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        style={{ display: isPlaying ? "block" : "none" }}
        onPause={handlePause} // Add onPause event handler
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;
