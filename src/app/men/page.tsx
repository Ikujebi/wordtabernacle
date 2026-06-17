"use client";

import { useState, FC } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import { HiEnvelope, HiShieldCheck } from "react-icons/hi2";
import givbg from "../img/giveimg.jpg";

interface MenMediaItem {
  src: string;
  alt: string;
  label: string;
}

const Page: FC = () => {
  const [showFullGallery, setShowFullGallery] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const menImages: MenMediaItem[] = [
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1744040525/6021491372890113638_w0hlb6.jpg", alt: "Men's Leadership Discussion", label: "Brotherhood Assembly" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1744040522/6001458593154582797_w3mfsq.jpg", alt: "Community Prayer Circle", label: "Intercession & Power" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725129856/photo_5933838834204786597_y_zm9hpb.jpg", alt: "Roundtable Fellowship Lecture", label: "Iron Sharpens Iron" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101602/femiblur_xwz9xr.jpg", alt: "Discipleship Study Focus", label: "Word Foundations" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1741256207/men_wt_3_x2l3iq.jpg", alt: "Morning Grace Communion", label: "Sacred Covenant" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1741256207/men_wt_4_jl6pmt.jpg", alt: "Annual Men's Keynote Address", label: "Vision & Purpose" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101371/youthpreacher_ucoete.webp", alt: "Youth Mentorship Forum", label: "Generational Impact" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1741256207/men_wt_1_kan4k2.jpg", alt: "Ministry Strategy Meeting", label: "Stewardship Councils" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1727168938/photo_6019429698393719062_y_ijgaz6.jpg", alt: "Sanctuary Dedication Service", label: "Praise & Honor" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1727168955/photo_6019429698393719061_y_qiqjqg.jpg", alt: "Midweek Fellowship Assembly", label: "Truth Bearers" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1727168967/photo_6019429698393719049_y_f3hugc.jpg", alt: "Weekend Devotional Retreat", label: "Sacred Rest" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1741256207/men_wt_2_egf1rh.jpg", alt: "Prayer Breakfast Briefing", label: "Devoted Hearts" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1727168960/photo_6019429698393719060_y_s4icix.jpg", alt: "Community Outreach Project", label: "Faith In Action" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399273/photo_5773882741589395498_y_icg2je.jpg", alt: "Men's Worship Collective", label: "Sovereign Glory" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399270/photo_5773882741589395440_y_pfcer7.jpg", alt: "Evening Covenant Groups", label: "Accountability Ties" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399262/photo_5773882741589395485_y_itiwh5.jpg", alt: "Leadership Summit Panel", label: "Wisdom Councils" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399250/photo_5773882741589395480_y_ebc0sn.jpg", alt: "Men's Fellowship Luncheon", label: "Kingdom Alliances" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399237/photo_5773882741589395438_y_c6aays.jpg", alt: "Discipleship Lecture Review", label: "Scripture Insight" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399231/photo_5773882741589395456_y_syv4l8.jpg", alt: "Ministry Closeout Prayer", label: "Final Benediction" },
  ];

  const visibleImages = showMore ? menImages : menImages.slice(0, 12);

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setShowFullGallery(true);
  };

  const closeGallery = () => setShowFullGallery(false);
  const goToNext = () => setCurrentImageIndex((prev) => (prev + 1) % menImages.length);
  const goToPrev = () => setCurrentImageIndex((prev) => (prev - 1 + menImages.length) % menImages.length);
  const handleToggleMore = () => setShowMore((prev) => !prev);

  return (
    <div className="w-full bg-white min-h-screen font-sans antialiased selection:bg-zinc-800 selection:text-white">
      
      <main className="pt-20 lg:pt-24">
        
        {/* Editorial Title Header Panel Deck */}
        <div
          className="relative h-64 sm:h-72 flex justify-center items-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${givbg.src})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-zinc-950/40 z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
            <div className="max-w-xl space-y-2">
              <span className="inline-block text-[10px] font-black tracking-[0.35em] text-amber-500 uppercase">
                WTBC Brotherhood Covenant
              </span>
              <h1 className="text-white font-black text-4xl sm:text-5xl tracking-tight uppercase leading-none">
                Men's Ministry
              </h1>
              <div className="w-12 h-1 bg-amber-500 rounded-full mt-4" />
            </div>
          </div>
        </div>

        {/* Narrative Insight & Contact Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12 text-center">
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-zinc-400">
              <HiShieldCheck className="text-sm text-zinc-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase">The Mandate</span>
            </div>
            <p className="text-zinc-800 text-xl sm:text-2xl font-black tracking-tight leading-snug">
              The WTBC Men’s Roundtable provides a regional gathering for men who have determined there is no greater goal than to ensure they become the exact man God intended them to be.
            </p>
          </div>

          {/* Dynamic Fine-Art Info Callout Block */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8 max-w-xl mx-auto shadow-sm flex flex-col items-center space-y-3">
            <div className="flex items-center gap-2 text-zinc-400">
              <HiEnvelope className="text-base text-zinc-400" />
              <h4 className="text-xs font-black tracking-wider uppercase">Administrative Liaison</h4>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed">
              For session schedules, dynamic workbook access, or advisory assistance, communicate directly with our administration offices:
            </p>
            <div className="pt-1">
              <a 
                href="mailto:wordtabernaclebc@gmail.com" 
                className="inline-block font-black text-xs sm:text-sm text-zinc-900 hover:text-amber-600 tracking-wider underline underline-offset-4 transition-colors break-all"
              >
                wordtabernaclebc@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* Media Portfolio Gallery Grid Deck */}
        <section className="bg-zinc-950 text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="text-center space-y-2">
              <span className="text-[10px] font-black tracking-[0.4em] text-zinc-500 uppercase block">
                The Roundtable Witness
              </span>
              <h2 className="text-white font-black text-2xl sm:text-3xl tracking-tight uppercase">
                Men's Round Table Gallery
              </h2>
              <div className="w-8 h-[2px] bg-zinc-800 mx-auto mt-2" />
            </div>

            {/* Core Responsive Custom Portfolio Grid Matrix */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {visibleImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => openGallery(index)}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-0.5"
                >
                  <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  
                  {/* Subtle caption popover on desktop hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-zinc-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 hidden sm:block">
                    <p className="text-[10px] font-mono tracking-widest text-amber-500 uppercase font-bold">{image.label}</p>
                  </div>

                  <Image
                    fill
                    src={image.src}
                    alt={image.alt}
                    className="object-cover object-center transition-transform duration-700 scale-100 group-hover:scale-105"
                    sizes="(max-w-640px) 50vw, (max-w-1024px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>

            {/* Archive Expansion Button Node */}
            <div className="pt-6 text-center">
              <button
                onClick={handleToggleMore}
                className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-white text-zinc-300 hover:text-zinc-950 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl border border-zinc-800 hover:border-white shadow-md transition-all duration-300 active:scale-95"
              >
                {showMore ? (
                  <>
                    <FaMinus className="text-[10px]" /> Collapse Archive
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

        {/* Cinematic Immersive Media Projection Lightbox Frame */}
        {showFullGallery && (
          <div className="fixed inset-0 bg-zinc-950/98 backdrop-blur-md flex justify-center items-center z-50 p-4 select-none animate-fadeIn">
            
            {/* Absolute Top-Right Dismissal Triggers */}
            <button
              onClick={closeGallery}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white bg-zinc-900/80 p-3 rounded-full border border-zinc-800 transition-colors z-50 outline-none"
              aria-label="Close Lightbox"
            >
              <FaTimes className="text-base" />
            </button>

            {/* Left Nav Arrow Trigger */}
            <button
              onClick={goToPrev}
              className="absolute left-4 sm:left-6 text-zinc-400 hover:text-white bg-zinc-900/60 p-4 rounded-full border border-zinc-800/50 hover:bg-zinc-900 transition-all z-50 outline-none"
              aria-label="Previous Image"
            >
              <FaChevronLeft className="text-lg" />
            </button>

            {/* Core Medium Projection Screen Framework */}
            <div className="relative w-full max-w-4xl h-full max-h-[75vh] flex flex-col items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  fill
                  src={menImages[currentImageIndex].src}
                  alt={menImages[currentImageIndex].alt}
                  className="object-contain rounded-xl"
                  sizes="100vw"
                />
              </div>
              
              {/* Core Tracking Diagnostics Tag Panel */}
              <div className="mt-4 text-center space-y-0.5">
                <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                  Snapshot {currentImageIndex + 1} of {menImages.length}
                </p>
                <p className="text-zinc-300 font-bold text-sm tracking-tight">
                  {menImages[currentImageIndex].alt}
                </p>
              </div>
            </div>

            {/* Right Nav Arrow Trigger */}
            <button
              onClick={goToNext}
              className="absolute right-4 sm:right-6 text-zinc-400 hover:text-white bg-zinc-900/60 p-4 rounded-full border border-zinc-800/50 hover:bg-zinc-900 transition-all z-50 outline-none"
              aria-label="Next Image"
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