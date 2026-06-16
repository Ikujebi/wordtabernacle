"use client";

import { Button } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { useState } from "react";
import Mainpic from "./components/common/Mainslidder";
import Head from "next/head";
import Community from "./components/common/Community";
import BlogMain from "./components/common/BlogMain";
import YouTubePlayer from "./components/common/YouTubePlayer";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoIds = [
    { videoId: "escj7P0cWO0" },
    { videoId: "oNUt9WAKq8Y" },
    { videoId: "WzGJFZ_Ta7g" },
    { videoId: "m3G4gNBxWhs" },
    { videoId: "qQwOOPC2wbQ" },
    { videoId: "riA-6duFCGQ" },
    { videoId: "G8-Mg4Agz4w" },
    { videoId: "JRreFjk6nZs" },
    { videoId: "iIOu9nboLek" }, 
  ];

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videoIds.length) % videoIds.length
    );
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-between font-satoshi bg-white selection:bg-red-600 selection:text-white antialiased">
      <Head>
        <link rel="shortcut icon" href="/img/wordlogo.png" />
      </Head>
      
      <Toaster position="top-right" />

      {/* Navigation Header */}
      <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <Header />
      </header>

      <main className="w-full flex-grow">
        {/* Hero Slider Section */}
        <section className="w-full relative overflow-hidden">
          <Mainpic />
        </section>

        {/* Pastor's Welcome Section */}
        <section className="w-full bg-zinc-950 text-white py-20 lg:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.08),transparent_50%)] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Split Title Layout */}
            <div className="lg:col-span-5 space-y-2 lg:sticky lg:top-28">
              <span className="text-red-500 font-bold uppercase tracking-widest text-xs lg:text-sm block mb-2">
                Welcome Home
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-red-600">
                Your worship <br className="hidden lg:block"/>experience
              </h2>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-300 tracking-tight">
                at Word Tabernacle.
              </p>
            </div>

            {/* Editorial Content Block */}
            <div className="lg:col-span-7 space-y-8 lg:border-l lg:border-zinc-800 lg:pl-12">
              <p className="text-zinc-300 text-lg sm:text-xl font-light leading-relaxed tracking-wide">
                If you are searching for people who are committed to growing
                spiritually, worshipping as family, and enjoying fellowship, then
                we are the place for you. There is powerful worship, an inspiring
                message, and your kids will learn so much as they worship with
                other vibrant kids each week! <span className="text-white font-medium">(We worship family style!)</span>. 
                We&apos;d love to get to know you. We want to see lives changed here by the
                power of Jesus Christ, and we see that happen every week when
                someone steps through our doors. We look forward to meeting you
                this Sunday! God bless.
              </p>
              
              <div className="pt-4 border-t border-zinc-900 flex justify-end">
                <div className="text-right">
                  <p className="text-red-500 font-bold text-lg tracking-wide">
                    - Pastor Ayodeji Ayorinde
                  </p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
                    Lead Pastor, Word Tabernacle
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Dynamic Context Modules */}
        <section className="w-full bg-zinc-50 py-4">
          <Community />
        </section>

        <section className="w-full py-4">
          <BlogMain />
        </section>

        {/* Reserved Dynamic Slots */}
        <div className="flex flex-wrap">{/* Your other code goes here */}</div>
        <div className="flex flex-wrap mt-0 sm:mt-0 ">{/* Your other code goes here */}</div>

        {/* Declaration Statement Banner */}
        <section className="w-full bg-zinc-950 py-24 relative overflow-hidden border-t border-zinc-900">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />
          <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
            <h3 className="text-zinc-100 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              &ldquo;A church you can <span className="text-red-600 bg-red-950/30 px-3 py-1 rounded-md border border-red-900/40">believe</span> in.&rdquo;
            </h3>
            <h3 className="text-zinc-400 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              &ldquo;A place you can <span className="text-white underline decoration-red-600 decoration-4 underline-offset-8">belong</span>.&rdquo;
            </h3>
          </div>
        </section>

        {/* Premium Media Jukebox Experience */}
        <section className="w-full bg-zinc-900 py-20 lg:py-28 px-4 flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl mx-auto space-y-8">
            
            <div className="text-center space-y-2">
              <span className="text-red-500 font-bold uppercase tracking-widest text-xs">Broadcast Archive</span>
              <h4 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">Catch Up On Recent Messages</h4>
            </div>

            {/* Immersive Video Deck Frame */}
            <div className="w-full bg-zinc-950 p-3 sm:p-4 rounded-2xl shadow-2xl border border-zinc-800/80 ring-1 ring-black/50 overflow-hidden">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
                <YouTubePlayer videoId={videoIds[currentVideoIndex].videoId} />
              </div>
              
              {/* Media Interface Controls */}
              <div className="flex items-center justify-between mt-4 px-2">
                <span className="text-xs text-zinc-500 font-mono tracking-widest">
                  SERMON {currentVideoIndex + 1} / {videoIds.length}
                </span>

                <div className="flex items-center gap-2">
                  <Button
                    onClick={handlePrevVideo}
                    className="h-9 px-4 !bg-zinc-900 !text-zinc-300 hover:!text-white !border-zinc-800 hover:!border-zinc-700 !rounded-lg text-xs font-medium tracking-wide transition-all"
                  >
                    ← Previous
                  </Button>
                  <Button
                    onClick={handleNextVideo}
                    className="h-9 px-5 !bg-red-600 !text-white hover:!bg-red-700 !border-transparent !rounded-lg text-xs font-bold tracking-wide shadow-md shadow-red-900/20 transition-all"
                  >
                    Next Video →
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Layout Footer */}
      <footer className="w-full bg-zinc-950 border-t border-zinc-900">
        <Footer />
      </footer>
    </div>
  );
}