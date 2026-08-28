"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { Spin } from "antd";
import { 
  ArrowLeft, 
  ExternalLink, 
  MessageSquare, 
  Share2, 
  Video,
  Radio
} from "lucide-react";

const FacebookPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  // 1. UPDATE THIS with your actual Facebook Page username, slug, or full URL
  // Example: "wordtabernacle" or "WordTabernacleChurch"
  const facebookPageSlug = "wordtabernacle"; 
  const facebookPageUrl = `https://www.facebook.com/${facebookPageSlug}`;
  
  // 2. Direct link to your church's live video stream URL on Facebook
  const liveVideoUrl = `${facebookPageUrl}/live`;

  // 3. Official Facebook Live Embedded Video Player URL
  // Enables live video rendering, comments panel overlay, and full control bar
  const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    liveVideoUrl
  )}&show_text=true&width=1280&autoplay=true`;

  return (
    <div className="relative min-h-[100svh] w-full bg-zinc-950 text-white flex flex-col items-center justify-between pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Navigation & Header */}
      <header className="relative z-10 w-full max-w-5xl flex items-center justify-between mb-6">
        <Link
          href="/online"
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white transition-colors bg-zinc-900/90 px-4 py-2 rounded-xl border border-zinc-800 shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Channels</span>
        </Link>

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-wider animate-pulse">
            <Radio className="h-3.5 w-3.5" />
            <span>Live Broadcast</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Video className="h-3.5 w-3.5" />
            <span>Facebook Stream</span>
          </div>
        </div>
      </header>

      {/* Main Video & Interactive Container */}
      <main className="relative z-10 w-full max-w-5xl flex-1 flex flex-col items-center justify-center space-y-6">
        
        {/* Frame Wrapper */}
        <div className="relative w-full aspect-video max-h-[650px] bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl flex items-center justify-center">
          
          {/* Loading Overlay */}
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-zinc-950 z-20">
              <Spin size="large" />
              <p className="text-xs text-zinc-400 font-mono tracking-wide">
                Connecting to Facebook Live stream...
              </p>
            </div>
          )}

          {/* Facebook Video Player Embed */}
          <iframe
            src={embedUrl}
            className="w-full h-full border-none overflow-hidden"
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Word Tabernacle Church Facebook Live Stream"
            onLoad={() => setLoading(false)}
          />
        </div>

        {/* Live Interaction & Action Panel */}
        <div className="w-full bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-4 sm:p-6 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <span>Join the Live Worship Experience</span>
            </h2>
            <p className="text-xs text-zinc-400 max-w-lg">
              To leave comments, post prayer requests, or react to the live service, open the broadcast directly in Facebook.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={liveVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/20 transition-all"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Comment on Facebook</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "Word Tabernacle Facebook Live Stream",
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }
              }}
              className="inline-flex items-center justify-center p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors border border-zinc-700/60"
              title="Share Stream"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>

      {/* Footer Info */}
      <footer className="relative z-10 text-center mt-8">
        <p className="text-xs text-zinc-500">
          Word Tabernacle Bible Church Digital Ministry Platform
        </p>
      </footer>
    </div>
  );
};

export default FacebookPage;