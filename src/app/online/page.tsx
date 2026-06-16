"use client";

import { FC, useEffect, useState } from "react";
import Header from "../components/common/Header";
import online from "../img/online.webp";
import useSetField from "../../custom-hooks/useSetField";
import NextImage from "next/image";
import Link from "next/link";

interface PageState {
  programmeId: number;
  programme?: string;
}

const Page: FC = () => {
  const [state, setState] = useState<PageState>({ programmeId: 1 });

  const youtubeImage = "https://res.cloudinary.com/dalylashp/image/upload/v1726739640/word_youtube_xqdcku.png";
  const mixlr = "https://res.cloudinary.com/dalylashp/image/upload/v1726743756/wordmix_ssi1z9.webp";

  const data = [
    {
      img: youtubeImage,
      title: "WATCH ON YOUTUBE",
      subtitle: "Live Video Streams & Archive",
      link: "online/youtube",
    },
    {
      img: mixlr,
      title: "LISTEN ON MIXLR",
      subtitle: "Live Audio Broadcast",
      link: "online/mxlr",
    },
    {
      img: online.src,
      title: "LISTEN ON WORDLISTEN",
      subtitle: "Dedicated Audio Platform",
      link: "online/wordlisten",
    },
  ];

  const { setRequest } = useSetField(setState);

  const getProgrammeName = (programmeId: number): string => {
    switch (programmeId) {
      case 1:
        return "WATCH ON YOUTUBE";
      case 2:
        return "LISTEN ON MIXLR";
      default:
        return "LISTEN ON WORDLISTEN";
    }
  };

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      programme: getProgrammeName(state.programmeId),
    }));
  }, [state.programmeId]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col relative overflow-x-hidden">
      {/* Decorative Background Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none" />
      
      <Header />
      
      {/* Main Container Section */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Editorial Page Header */}
        <div className="text-center space-y-3 mb-12 max-w-md">
          <span className="text-red-500 font-mono text-xs uppercase tracking-[0.3em] block">
            Word Tabernacle Digital
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">
            Join Our Experience <span className="text-red-500">Online</span>
          </h1>
          <p className="text-zinc-500 font-light text-sm">
            Choose your preferred platform below to plug into our live streams, services, and audio messages.
          </p>
        </div>

        {/* Streaming Grid Interface Array */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {data.map((item, index) => {
            const currentId = index + 1;
            const isActive = state.programmeId === currentId;

            return (
              <div key={index} className="w-full">
                <Link
                  href={item.link}
                  onClick={() => setRequest("programmeId", currentId)}
                  className={`group block bg-zinc-900/40 backdrop-blur-md border rounded-2xl p-4 transition-all duration-300 relative overflow-hidden ${
                    isActive 
                      ? "border-red-600 shadow-2xl shadow-red-950/20 bg-zinc-900/80" 
                      : "border-zinc-800/80 hover:border-zinc-700/80 hover:bg-zinc-900/60"
                  }`}
                >
                  {/* Aspect Ratio Controlled Media Frame */}
                  <div className="relative aspect-[16/10] w-full bg-zinc-950 rounded-xl overflow-hidden shadow-inner border border-zinc-900">
                    <NextImage
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-w-768px) 100vw, 350px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-[0.9] contrast-[1.05]"
                    />
                    
                    {/* Active Indicator Glow Badge */}
                    {isActive && (
                      <div className="absolute top-3 right-3 bg-red-600 text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded shadow-md z-10">
                        Selected
                      </div>
                    )}
                  </div>

                  {/* Description Meta Card Frame */}
                  <div className="pt-5 pb-2 text-center space-y-1">
                    <h2 className="font-extrabold text-base sm:text-lg tracking-tight text-zinc-100 group-hover:text-red-500 transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs text-zinc-500 font-medium tracking-normal">
                      {item.subtitle}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Page;