"use client";

import { useState, FC } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import { HiSparkles, HiArrowUpRight } from "react-icons/hi2";
import givbg from "../img/giveimg.jpg";
import grid from "../img/grid.svg";

interface WomenMediaItem {
  src: string;
  alt: string;
  subtitle: string;
}

const Page: FC = () => {
  const [showFullGallery, setShowFullGallery] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showMore, setShowMore] = useState<boolean>(false);

  const women: WomenMediaItem[] = [
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101924/women1_yi6bxl.webp", alt: "Women's Ministry Conference Opening", subtitle: "Grace & Leadership" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101937/women2_nk682e.webp", alt: "Community Prayer Circle", subtitle: "Intercessory Assembly" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101958/women3_ps8rop.webp", alt: "Midweek Grace Fellowship", subtitle: "Faith Foundations" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101970/women4_jrezw9.webp", alt: "Annual Leadership Summit", subtitle: "Empowerment Panels" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101977/women5_hzw0rr.webp", alt: "Worship Ministry Choir", subtitle: "Sacred Harmonies" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101987/women6_yjmiat.webp", alt: "Intercessory Study Team", subtitle: "Word & Wisdom" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101997/women7_fwqwl3.jpg", alt: "Regional Fellowship Assembly", subtitle: "Covenant Connection" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101777/pactitioners_jepeb3.webp", alt: "Ministry Planning Counsel", subtitle: "Visionaries" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399272/photo_5773882741589395449_y_gl78fh.jpg", alt: "Sunday Celebration Service", subtitle: "Divine Worship" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101777/pactitioners_jepeb3.webp", alt: "Community Outreach Group", subtitle: "Generations Sharing" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1741170863/woman_wt_4_cqpu2n.jpg", alt: "Grace and Truth Devotional", subtitle: "Reflections" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1741170863/woman_wt_8_tun9s4.jpg", alt: "Faith Sharing Panels", subtitle: "Shared Testimony" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728400222/wordwoman5000_vpdxa7.jpg", alt: "Special Sanctuary Celebration", subtitle: "Legacy Gala" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399260/photo_5773882741589395443_y_sextth.jpg", alt: "Women of Purpose Brunch", subtitle: "Honor & Joy" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399259/photo_5773882741589395469_y_sf1lzt.jpg", alt: "Weekend Retreat Group", subtitle: "Sacred Sanctuary" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399249/photo_5773882741589395473_y_whjwsi.jpg", alt: "Sacred Praise Team", subtitle: "Heart & Soul" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399231/photo_5773882741589395504_y_yckiol.jpg", alt: "Evening Covenant Prayer", subtitle: "Spiritual Depth" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399228/photo_5773882741589395455_y_lbfnwy.jpg", alt: "Ministry Archive Session", subtitle: "Sisterhood Ties" },
  ];

  const initialImages = women.slice(0, 12);
  const visibleImages = showMore ? women : initialImages;

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setShowFullGallery(true);
  };

  const closeGallery = () => setShowFullGallery(false);
  const goToNext = () => setCurrentImageIndex((prev) => (prev + 1) % women.length);
  const goToPrev = () => setCurrentImageIndex((prev) => (prev - 1 + women.length) % women.length);
  const handleShowMore = () => setShowMore((prev) => !prev);

  return (
    <div className="w-full bg-zinc-50/50 min-h-screen overflow-hidden antialiased font-sans select-none">
      
      <main className="pt-20 lg:pt-24">
        
        {/* Editorial Immersive Magazine-Style Hero */}
        <section 
          className="relative h-[28rem] sm:h-[32rem] flex items-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${givbg.src})` }}
        >
          {/* Elite Layer Gradient Mesh */}
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-950/95 via-purple-950/80 to-zinc-950/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent z-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-400/10 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/20">
                <HiSparkles className="text-amber-400 text-xs" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-300">
                  WTBC Sacred Fellowships
                </span>
              </div>
              <h1 className="text-white font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight uppercase leading-none">
                Women of <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-rose-300">Grace &amp; Truth</span>
              </h1>
              <p className="text-purple-100/80 text-sm sm:text-base max-w-md font-medium tracking-wide">
                A regional standard for covenant women pursuing transformation, spiritual wisdom, and divine purpose.
              </p>
              <div className="pt-2">
                <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Split Editorial Layout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Frame: Sophisticated Typography Array */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-[2px] bg-purple-900" />
                  <h2 className="text-xs font-black tracking-[0.3em] text-purple-900 uppercase">
                    The Sanctuary Mission
                  </h2>
                </div>
                <h3 className="text-zinc-900 text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                  We believe there is no greater calling than to become the complete person God designed you to be.
                </h3>
              </div>

              <p className="text-zinc-600 text-base sm:text-lg font-medium leading-relaxed max-w-xl">
                Our ministry serves as a beacon of empowerment, scriptural foundation, and continuous grace. We welcome women from all walks of life into intentional sisterhood, focused on cultivating spiritual growth and community legacy.
              </p>

              {/* High-End Architectural Callout Panel */}
              <div className="bg-gradient-to-br from-purple-950 to-indigo-950 rounded-3xl p-8 text-white shadow-xl shadow-purple-950/10 space-y-4 relative overflow-hidden group">
                <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl group-hover:bg-amber-400/10 transition-colors" />
                
                <h4 className="text-xs font-black tracking-widest text-amber-400 uppercase flex items-center gap-2">
                  <span>✦</span> Ministry Liaison &amp; Coordination
                </h4>
                <p className="text-zinc-300 text-sm font-medium leading-relaxed max-w-lg">
                  For details on regular gatherings, specialized leadership modules, or pastoral council partnership, kindly reach out directly via:
                </p>
                <div className="pt-2">
                  <a 
                    href="mailto:wordtabernaclebc@gmail.com" 
                    className="inline-flex items-center gap-2 group/btn bg-white/10 hover:bg-white text-white hover:text-purple-950 font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-xl transition-all duration-300 border border-white/10 hover:border-white"
                  >
                    <span>wordtabernaclebc@gmail.com</span>
                    <HiArrowUpRight className="text-xs transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Frame: Floating Editorial Collage */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[24rem] aspect-square">
                
                {/* Structural Graphic Grid Background */}
                <div 
                  className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-30 filter scale-110 grayscale brightness-95"
                  style={{ backgroundImage: `url(${grid.src})` }}
                />

                {/* Layer Base Matte Silhouette Card */}
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-purple-100 rounded-[2.5rem] -z-10 transform -rotate-6" />

                {/* Core Floating Master Artwork Framed Canvas */}
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-purple-950/10 border-[10px] border-white transform hover:rotate-2 transition-transform duration-700 bg-zinc-100 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <Image
                    fill
                    src={women[6].src}
                    alt="Women's Ministry Assembly Portrait Portfolio"
                    className="object-cover object-center scale-100 group-hover:scale-103 transition-transform duration-700"
                    sizes="(max-w-1024px) 90vw, 40vw"
                    priority
                  />
                </div>

                {/* Floating Absolute Premium Overlay Ribbon Tag */}
                <div className="absolute -bottom-4 right-4 bg-amber-400 border-[4px] border-white text-purple-950 px-5 py-2 rounded-full shadow-lg transform rotate-3 text-[10px] font-black tracking-widest uppercase">
                  Est. Fellowship
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Fine-Art Curated Media Portfolio Exhibition Matrix */}
        <section className="bg-gradient-to-b from-zinc-100 to-zinc-50 border-t border-zinc-200/60 py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-16">
            
            {/* Fine Art Grid Typography Title */}
            <div className="text-center space-y-3">
              <span className="text-[10px] font-black tracking-[0.4em] text-purple-900 uppercase block">
                The Media Archive
              </span>
              <h2 className="text-zinc-900 font-black text-3xl sm:text-4xl tracking-tight uppercase">
                Visual Testimonies
              </h2>
              <div className="w-10 h-0.5 bg-purple-900 mx-auto mt-2" />
            </div>

            {/* Curated Grid Box Frame Setup */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
              {visibleImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => openGallery(index)}
                  className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white border border-zinc-200 shadow-sm cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Cinematic Mask Cover Interaction Elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col justify-end p-6" />
                  
                  {/* Hover Meta Slide Caption Panel */}
                  <div className="absolute inset-x-0 bottom-0 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 p-6 flex flex-col space-y-0.5 text-white">
                    <span className="text-[9px] font-bold font-mono tracking-widest text-amber-300 uppercase">
                      {image.subtitle}
                    </span>
                    <p className="font-bold text-sm leading-tight text-zinc-100">
                      {image.alt}
                    </p>
                  </div>

                  <Image
                    fill
                    src={image.src}
                    alt={image.alt}
                    className="object-cover object-center transition-transform duration-700 scale-100 group-hover:scale-105"
                    sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>

            {/* Pagination Controls Frame */}
            <div className="pt-4 text-center">
              <button
                onClick={handleShowMore}
                className="inline-flex items-center gap-2 bg-purple-950 hover:bg-amber-400 text-white hover:text-purple-950 font-bold text-xs uppercase tracking-widest px-10 py-4 rounded-xl shadow-lg shadow-purple-950/10 transition-all duration-300 active:scale-95"
              >
                {showMore ? (
                  <>
                    <FaMinus className="text-[10px]" /> Compress Archive
                  </>
                ) : (
                  <>
                    <FaPlus className="text-[10px]" /> Expand Full Archive
                  </>
                )}
              </button>
            </div>

          </div>
        </section>

        {/* Production Tier Immersive Modal Lightbox Frame */}
        {showFullGallery && (
          <div className="fixed inset-0 bg-zinc-950/98 backdrop-blur-xl flex justify-center items-center z-50 p-4 select-none animate-fadeIn">
            
            {/* Top Right Floating Close Button Trigger */}
            <button
              onClick={closeGallery}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white bg-zinc-900/80 p-3 rounded-full border border-zinc-800 transition-all z-50 outline-none hover:rotate-90"
              aria-label="Close Gallery"
            >
              <FaTimes className="text-base" />
            </button>

            {/* Left Nav Arrow */}
            <button
              onClick={goToPrev}
              className="absolute left-4 sm:left-6 text-zinc-400 hover:text-white bg-zinc-900/60 p-4 rounded-full border border-zinc-800/50 hover:bg-zinc-900 transition-all z-50 outline-none"
              aria-label="Previous Slide"
            >
              <FaChevronLeft className="text-lg" />
            </button>

            {/* Interior Main Stage View Frame */}
            <div className="relative w-full max-w-5xl h-full max-h-[80vh] flex flex-col items-center justify-center">
              <div className="relative w-full h-full transition-transform duration-500">
                <Image
                  fill
                  src={women[currentImageIndex].src}
                  alt={women[currentImageIndex].alt}
                  className="object-contain rounded-xl"
                  sizes="100vw"
                />
              </div>
              
              {/* Context Meta Text Overlay Tracker */}
              <div className="mt-6 text-center space-y-1">
                <span className="inline-block text-[9px] font-mono font-bold bg-amber-400 text-purple-950 px-2.5 py-0.5 rounded-full uppercase tracking-widest">
                  Archive Frame {currentImageIndex + 1} of {women.length}
                </span>
                <p className="text-zinc-200 font-bold text-base tracking-tight">
                  {women[currentImageIndex].alt}
                </p>
              </div>
            </div>

            {/* Right Nav Arrow */}
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
      
    </div>
  );
};

export default Page;