"use client";

import { FC } from "react";

interface YouTubePlayerProps {
  videoId: string;
}

const YouTubePlayer: FC<YouTubePlayerProps> = ({ videoId }) => {
  return (
    <div className="w-full bg-zinc-950 py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Dynamic Aspect-Ratio Wrapper Container */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-800/60 bg-zinc-900 ring-1 ring-white/5">
          
          {/* Subtle Ambient Vignette Overlay Rim */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent pointer-events-none z-10" />

          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title="YouTube Video Player Stream"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0 object-cover z-0"
          />
          
        </div>

        {/* Minimalist Subtext Note */}
        <div className="mt-4 flex items-center justify-between px-2 text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
          <span>Media Broadcast Network</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            ON DEMAND
          </span>
        </div>

      </div>
    </div>
  );
};

export default YouTubePlayer;