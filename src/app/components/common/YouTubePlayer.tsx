import { BiLogoYoutube } from "react-icons/bi";
import {FC} from 'react'
interface YouTubePlayerProps {
    videoId: string;
    posterImageSrc: string;
  }

const YouTubePlayer: FC<YouTubePlayerProps> = ({ videoId, posterImageSrc }) => {
  return (
    <div className="relative">
      <iframe 
        width="1000" 
        height="500" 
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
      <img 
        className="absolute inset-0 object-cover w-full h-full"
        src={posterImageSrc} 
        alt="Poster Image"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <BiLogoYoutube color="red" size={128} />
      </div>
    </div>
  );
};

export default YouTubePlayer;
