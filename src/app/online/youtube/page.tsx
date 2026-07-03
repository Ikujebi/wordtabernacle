"use client";

import { FC, useEffect, useState } from "react";
import YouTubePlayer from "../../components/common/YouTubePlayer";
import YouTubeLiveChat from "../../components/common/YouTubeLiveChat";

type LiveResponse = {
  isLive: boolean;
  videoId: string | null;
  title: string | null;
  error?: string;
};

const YouTubePage: FC = () => {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [isLive, setIsLive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLiveStream = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/youtube/live");

        if (!response.ok) {
          throw new Error("Failed to fetch live stream");
        }

        const data: LiveResponse = await response.json();

        if (data.isLive && data.videoId) {
          setVideoId(data.videoId);
          setIsLive(true);
        } else {
          setVideoId(null);
          setIsLive(false);
        }
      } catch (error) {
        console.error("Live stream fetch error:", error);
        setVideoId(null);
        setIsLive(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLiveStream();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      
      {/* Deep Sanctuary Red Ambient Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/15 rounded-full blur-[180px] pointer-events-none" />

      {/* Adjust container width profile depending on active layouts */}
      <div className={`w-full mx-auto z-10 space-y-6 ${videoId && isLive ? "max-w-[1600px]" : "max-w-5xl"}`}>

        {isLoading ? (
          /* Premium Loading Skeleton */
          <div className="w-full aspect-video bg-zinc-900/40 rounded-2xl animate-pulse border border-zinc-900 flex items-center justify-center shadow-2xl">
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-red-600/20 border-t-red-500 animate-spin" />
              <span className="text-[11px] font-mono tracking-[0.3em] text-zinc-400 uppercase">
                Verifying Broadcast Feed...
              </span>
            </div>
          </div>
        ) : videoId && isLive ? (
          /* ACTIVE LIVE BROADCAST STATE */
          <div className="space-y-4 animate-fade-in w-full">

            {/* Stream Header Dashboard Status Ribbon */}
            <div className="flex items-center justify-between px-2 max-w-[1600px] mx-auto w-full">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                </span>
                <span className="text-xs font-black font-mono tracking-[0.2em] text-white uppercase">
                  WORD TABERNACLE <span className="text-red-500">LIVE</span>
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                BROADCAST ACTIVE
              </span>
            </div>

            {/* Premium Cinematic Video & Live Chat Grid Container */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_400px] gap-6 max-w-[1600px] mx-auto w-full items-stretch">
              
              {/* 1. ULTRA-RESPONSIVE VIDEO CANVAS FRAME */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/[0.06] bg-black shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] group">
                {/* Ambient Glow Background Layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#5F021F]/10 via-transparent to-transparent pointer-events-none mix-blend-screen opacity-50" />
                
                {/* Core Player Integration Component */}
                <YouTubePlayer videoId={videoId} />
              </div>

              {/* 2. INTELLIGENT STREAM INTEGRATION CHAT PANEL */}
              <div className="flex flex-col h-[450px] sm:h-[550px] lg:h-auto lg:min-h-full rounded-2xl overflow-hidden border border-white/[0.08] bg-zinc-950/80 backdrop-blur-md shadow-2xl">
                {/* Premium Panel Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/40 border-b border-white/[0.06] shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                    </span>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 select-none">
                      Live Discussion
                    </h3>
                  </div>
                  
                  <span className="text-[10px] font-semibold text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-white/[0.04]">
                    Synchronized
                  </span>
                </div>

                {/* Live Chat Iframe Slot Container */}
                <div className="flex-1 min-h-0 w-full relative bg-zinc-950">
                  <YouTubeLiveChat videoId={videoId} />
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* HIGH-FIDELITY OFFLINE STATE (RED & WHITE BRANDING) */
          <div className="w-full max-w-3xl mx-auto aspect-video bg-zinc-900/30 backdrop-blur-md border border-zinc-900 rounded-2xl flex flex-col items-center justify-center p-8 text-center shadow-2xl relative overflow-hidden group">

            {/* Top Minimalist Red Accent Border */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent" />

            {/* Icon housing */}
            <div className="w-14 h-14 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center mb-6 shadow-inner transition-transform group-hover:scale-105 duration-300">
              <span className="text-red-500 text-xl font-light tracking-tight">⛪</span>
            </div>

            {/* Heading Context */}
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase mb-2">
              No Live Service <span className="text-red-500">In Progress</span>
            </h2>

            {/* Informational Subtext */}
            <p className="text-sm text-zinc-400 font-light max-w-md leading-relaxed mb-6">
              We aren&apos;t broadcasting live at this exact moment. Join us online during our scheduled service times, or browse through our media library catalog to catch up on recent words.
            </p>

            {/* Bottom Graphic Anchor Frame Tag */}
            <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono tracking-[0.25em] uppercase border-t border-zinc-900 pt-5 w-40 justify-center">
              <span>W T</span>
              <span className="w-1 h-1 bg-red-600 rounded-full" />
              <span>MEDIA</span>
            </div>

          </div>
        )}
      </div>
    </main>
  );
};

export default YouTubePage;