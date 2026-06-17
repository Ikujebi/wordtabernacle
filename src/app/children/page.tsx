"use client";

import { useState, FC } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import { HiSparkles, HiHeart } from "react-icons/hi";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import givbg from "../img/giveimg.jpg";
import grid from "../img/grid.svg";

interface ChildMediaItem {
  src: string;
  alt: string;
  colorTag: string; // Dynamic fun border color matching the playful palette
}

const Page: FC = () => {
  const [showFullGallery, setShowFullGallery] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showMore, setShowMore] = useState<boolean>(false);

  const children: ChildMediaItem[] = [
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203350/IMG_7567_kqoock.jpg", alt: "Children's Church Service", colorTag: "hover:border-amber-400" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1741170865/children_wt_1_kolmi1.jpg", alt: "Youth Learning Group", colorTag: "hover:border-rose-400" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203383/IMG_7590_rgebic.jpg", alt: "Creative Faith Activities", colorTag: "hover:border-sky-400" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1741179426/wt_child_3_pvddyo.jpg", alt: "Sunday School Class", colorTag: "hover:border-emerald-400" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1741179423/wt_child_5_almhqo.jpg", alt: "Praise and Worship", colorTag: "hover:border-purple-400" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203384/IMG_7570_ib6kd8.jpg", alt: "Interactive Bible Lessons", colorTag: "hover:border-orange-400" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203352/IMG_7551_sqpvdb.jpg", alt: "Children's Fellowship", colorTag: "hover:border-amber-400" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203139/IMG_4570_enhokc.jpg", alt: "Fun Activities", colorTag: "hover:border-rose-400" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1741179412/wt_child_7_cgfuqi.jpg", alt: "Group Learning", colorTag: "hover:border-sky-400" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203323/IMG_7541_dgo944.jpg", alt: "Scripture Recitation", colorTag: "hover:border-emerald-400" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1741170864/baby_wt_1_dbvwtw.jpg", alt: "Toddler Care Ministry", colorTag: "hover:border-purple-400" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203324/IMG_7550_mal0si.jpg", alt: "Youth Prayer Circle", colorTag: "hover:border-orange-400" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1741179395/wt_child_2_ntxwdt.jpg", alt: "Creative Arts and Crafts", colorTag: "hover:border-amber-400" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203314/IMG_7536_g2mnl0.jpg", alt: "Bible Story Time", colorTag: "hover:border-rose-400" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203273/IMG_7498_ukhckc.jpg", alt: "Holiday Presentation", colorTag: "hover:border-sky-400" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203270/IMG_7520_ke1nkj.jpg", alt: "Ministry Gathering", colorTag: "hover:border-emerald-400" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203263/IMG_7502_sjddsv.jpg", alt: "Outdoor Ministry Event", colorTag: "hover:border-purple-400" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203227/IMG_7442_af0cse.jpg", alt: "Class Celebration", colorTag: "hover:border-orange-400" },
  ];

  const initialImages = children.slice(0, 12);
  const visibleImages = showMore ? children : initialImages;

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setShowFullGallery(true);
  };

  const closeGallery = () => setShowFullGallery(false);
  const goToNext = () => setCurrentImageIndex((prev) => (prev + 1) % children.length);
  const goToPrev = () => setCurrentImageIndex((prev) => (prev - 1 + children.length) % children.length);
  const handleShowMore = () => setShowMore((prev) => !prev);

  return (
    <div className="w-full bg-orange-50/30 min-h-screen overflow-hidden antialiased font-sans">
      <Header />

      <main className="pt-20 lg:pt-24">
        
        {/* Playful & Soft Editorial Hero Banner */}
        <div
          className="relative h-64 sm:h-72 flex justify-center items-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${givbg.src})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/50 via-zinc-950/70 to-amber-950/50 backdrop-blur-[2px]" />
          <div className="relative text-center px-4 z-10 space-y-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-[0.3em] text-amber-400 uppercase bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
              <HiSparkles className="text-amber-300 text-xs animate-pulse" /> WTBC Kids Kingdom
            </span>
            <h1 className="text-white font-black text-4xl sm:text-5xl tracking-tight uppercase drop-shadow-md">
              Children's Ministry
            </h1>
            <div className="w-16 h-1.5 bg-gradient-to-r from-amber-400 via-rose-400 to-sky-400 mx-auto mt-3 rounded-full" />
          </div>
        </div>

        {/* Playful Core Mission Array Layout */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          
          {/* Decorative floating blurred background shapes to add soft playfulness */}
          <div className="absolute top-10 left-10 w-48 h-48 bg-amber-200/40 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-sky-200/30 rounded-full blur-3xl -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Welcoming Message Container */}
            <div className="md:col-span-7 space-y-6 order-2 md:order-1">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 rounded-lg px-3 py-1">
                  <HiHeart className="text-rose-500 text-xs" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600">Growing In Faith</span>
                </div>
                <h2 className="text-zinc-900 text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                  Nurturing young hearts in a warm community, helping them grow into who God created them to be!
                </h2>
              </div>

              {/* Colorful & Friendly Notice Callout Card */}
              <div className="bg-white border-2 border-dashed border-amber-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-amber-100/40 rounded-bl-full -z-10" />
                <h4 className="text-xs font-black tracking-widest text-amber-600 uppercase flex items-center gap-1.5">
                  ✨ Parents &amp; Visitors Info
                </h4>
                <p className="text-sm text-zinc-600 font-medium leading-relaxed">
                  For service outlines, classroom safety protocols, or special partnership coordination, please contact our administrative team via:
                </p>
                <div className="pt-2">
                  <a 
                    href="mailto:wordtabernaclebc@gmail.com" 
                    className="inline-flex items-center bg-zinc-900 hover:bg-amber-500 text-white font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-xl transition-all shadow-md shadow-zinc-900/10 hover:shadow-amber-500/10"
                  >
                    wordtabernaclebc@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Whimsical Layered Geometry Floating Frame */}
            <div className="md:col-span-5 order-1 md:order-2 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[20rem] aspect-square flex items-center justify-center">
                
                {/* Playful Vector Dots Background */}
                <div 
                  className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-40 filter scale-110"
                  style={{ backgroundImage: `url(${grid.src})` }}
                />

                {/* Asymmetric Bouncy Photo Layer */}
                <div className="relative w-4/5 h-4/5 rounded-[2rem] overflow-hidden shadow-2xl shadow-amber-900/10 border-8 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-500 bg-zinc-100 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <Image
                    fill
                    src={children[2].src}
                    alt="Happy Kids Ministry Gathering"
                    className="object-cover object-center scale-102 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-768px) 80vw, 30vw"
                    priority
                  />
                </div>

                {/* Playful corner floating badge decoration */}
                <div className="absolute -bottom-2 -right-2 bg-sky-400 border-4 border-white text-white p-3 rounded-full shadow-lg transform rotate-12 animate-bounce">
                  <HiSparkles className="text-lg" />
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Interactive Playful Media Grid Matrix */}
        <section className="bg-gradient-to-b from-amber-50 to-white border-t border-amber-100/70 py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Gallery Dynamic Colorful Header */}
            <div className="text-center space-y-2">
              <span className="text-[10px] font-black tracking-[0.4em] text-rose-500 uppercase bg-rose-50 px-3 py-1 rounded-full inline-block">
                Captured Moments
              </span>
              <h2 className="text-zinc-900 font-black text-3xl sm:text-4xl tracking-tight uppercase">
                Children's Gallery
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-rose-400 mx-auto mt-2 rounded-full" />
            </div>

            {/* Bouncy Media Image Matrix Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {visibleImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => openGallery(index)}
                  className={`group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white border-4 border-white shadow-md shadow-zinc-200/60 cursor-pointer transition-all duration-500 hover:scale-103 hover:shadow-xl hover:rotate-1 ${image.colorTag}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <Image
                    fill
                    src={image.src}
                    alt={image.alt}
                    className="object-cover object-center transition-transform duration-700 scale-100 group-hover:scale-103 group-hover:-rotate-1"
                    sizes="(max-w-640px) 50vw, (max-w-1024px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>

            {/* Playful Interactive Pagination Call-to-Action Control */}
            <div className="pt-6 text-center">
              <button
                onClick={handleShowMore}
                className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-2xl shadow-lg shadow-zinc-900/10 hover:shadow-rose-500/20 transition-all duration-300 active:scale-95"
              >
                {showMore ? (
                  <>
                    <FaMinus className="text-[10px]" /> Show Less Photos
                  </>
                ) : (
                  <>
                    <FaPlus className="text-[10px]" /> Show More Photos
                  </>
                )}
              </button>
            </div>

          </div>
        </section>

        {/* High Definition Immersive Modal Lightbox Frame */}
        {showFullGallery && (
          <div className="fixed inset-0 bg-zinc-950/95 backdrop-blur-xl flex justify-center items-center z-50 p-4 select-none animate-fadeIn">
            
            {/* Close Button Top Right */}
            <button
              onClick={closeGallery}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white bg-zinc-900/80 p-3 rounded-full border border-zinc-800 transition-colors z-50 outline-none"
              aria-label="Close Gallery"
            >
              <FaTimes className="text-base" />
            </button>

            {/* Step Backward Action Array Link */}
            <button
              onClick={goToPrev}
              className="absolute left-4 sm:left-6 text-zinc-400 hover:text-white bg-zinc-900/60 p-4 rounded-full border border-zinc-800/50 hover:bg-zinc-900 transition-all z-50 outline-none"
              aria-label="Previous Slide"
            >
              <FaChevronLeft className="text-lg" />
            </button>

            {/* Full Canvas Frame Projections */}
            <div className="relative w-full max-w-4xl h-full max-h-[75vh] flex flex-col items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  fill
                  src={children[currentImageIndex].src}
                  alt={children[currentImageIndex].alt}
                  className="object-contain rounded-2xl transition-all duration-300"
                  sizes="100vw"
                />
              </div>
              
              {/* Dynamic Information Display Tracker footer */}
              <div className="mt-4 text-center space-y-1">
                <span className="inline-block text-[9px] font-mono font-bold bg-amber-500 text-zinc-950 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Photo {currentImageIndex + 1} of {children.length}
                </span>
                <p className="text-zinc-200 font-bold text-sm tracking-tight">
                  {children[currentImageIndex].alt}
                </p>
              </div>
            </div>

            {/* Step Forward Action Array Link */}
            <button
              onClick={goToNext}
              className="absolute right-4 sm:right-6 text-zinc-400 hover:text-white bg-zinc-900/60 p-4 rounded-full border border-zinc-800/50 hover:bg-zinc-900 transition-all z-50 outline-none"
              aria-label="Next Slide"
            >
              <FaChevronRight className="text-lg" />
            </button>

          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Page;