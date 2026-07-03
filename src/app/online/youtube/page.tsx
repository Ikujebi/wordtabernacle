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

      <div className="w-full max-w-5xl mx-auto z-10 space-y-6">

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
          <div className="space-y-4 animate-fade-in">

            {/* Stream Header Dashboard Status Ribbon */}
            <div className="flex items-center justify-between px-2">
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

            {/* Video Player Frame Integration */}
            <div className="grid lg:grid-cols-[2fr_380px] gap-6">
              <div className="relative shadow-2xl rounded-2xl overflow-hidden border border-zinc-900">
                <YouTubePlayer videoId={videoId} />
              </div>

              <div className="h-[650px] rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-900">
                <YouTubeLiveChat videoId={videoId} />
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