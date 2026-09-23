"use client";

import { useEffect, useState, FC } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import {
  HiArrowUpRight,
  HiEnvelope,
  HiShieldCheck,
  HiUsers,
  HiSparkles,
  HiBolt,
} from "react-icons/hi2";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
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
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1744040525/6021491372890113638_w0hlb6.jpg",
      alt: "Men's Leadership Discussion",
      label: "Brotherhood Assembly",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1744040522/6001458593154582797_w3mfsq.jpg",
      alt: "Community Prayer Circle",
      label: "Intercession & Power",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1725129856/photo_5933838834204786597_y_zm9hpb.jpg",
      alt: "Roundtable Fellowship Lecture",
      label: "Iron Sharpens Iron",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101602/femiblur_xwz9xr.jpg",
      alt: "Discipleship Study Focus",
      label: "Word Foundations",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1741256207/men_wt_3_x2l3iq.jpg",
      alt: "Morning Grace Communion",
      label: "Sacred Covenant",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1741256207/men_wt_4_jl6pmt.jpg",
      alt: "Annual Men's Keynote Address",
      label: "Vision & Purpose",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101371/youthpreacher_ucoete.webp",
      alt: "Youth Mentorship Forum",
      label: "Generational Impact",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1741256207/men_wt_1_kan4k2.jpg",
      alt: "Ministry Strategy Meeting",
      label: "Stewardship Councils",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1727168938/photo_6019429698393719062_y_ijgaz6.jpg",
      alt: "Sanctuary Dedication Service",
      label: "Praise & Honor",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1727168955/photo_6019429698393719061_y_qiqjqg.jpg",
      alt: "Midweek Fellowship Assembly",
      label: "Truth Bearers",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1727168967/photo_6019429698393719049_y_f3hugc.jpg",
      alt: "Weekend Devotional Retreat",
      label: "Sacred Rest",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1741256207/men_wt_2_egf1rh.jpg",
      alt: "Prayer Breakfast Briefing",
      label: "Devoted Hearts",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1727168960/photo_6019429698393719060_y_s4icix.jpg",
      alt: "Community Outreach Project",
      label: "Faith In Action",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399273/photo_5773882741589395498_y_icg2je.jpg",
      alt: "Men's Worship Collective",
      label: "Sovereign Glory",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399270/photo_5773882741589395440_y_pfcer7.jpg",
      alt: "Evening Covenant Groups",
      label: "Accountability Ties",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399262/photo_5773882741589395485_y_itiwh5.jpg",
      alt: "Leadership Summit Panel",
      label: "Wisdom Councils",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399250/photo_5773882741589395480_y_ebc0sn.jpg",
      alt: "Men's Fellowship Luncheon",
      label: "Kingdom Alliances",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399237/photo_5773882741589395438_y_c6aays.jpg",
      alt: "Discipleship Lecture Review",
      label: "Scripture Insight",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399231/photo_5773882741589395456_y_syv4l8.jpg",
      alt: "Ministry Closeout Prayer",
      label: "Final Benediction",
    },
  ];

  const visibleImages = showMore ? menImages : menImages.slice(0, 12);

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setShowFullGallery(true);
  };

  const closeGallery = () => {
    setShowFullGallery(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % menImages.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + menImages.length) % menImages.length
    );
  };

  const handleToggleMore = () => {
    setShowMore((prev) => !prev);
  };

  // Keyboard controls for gallery
  useEffect(() => {
    if (!showFullGallery) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }

      if (event.key === "ArrowLeft") {
        goToPrev();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showFullGallery]);

  return (
    <div className="min-h-screen w-full font-sans antialiased bg-[#f8f7f4] text-zinc-900 overflow-x-hidden selection:bg-zinc-900 selection:text-white">
      <Header />

      <main className="pt-20 lg:pt-24">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section
          className="relative min-h-[32rem] sm:min-h-[38rem] bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${givbg.src})` }}
        >
          {/* Dark masculine overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/40" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-zinc-950/80 to-transparent" />

          {/* Decorative light */}
          <div className="absolute top-10 -right-20 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-zinc-500/10 blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 min-h-[32rem] sm:min-h-[38rem] flex items-center py-16">
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                <HiShieldCheck className="text-amber-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">
                  WTBC Men&apos;s Ministry
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase tracking-[-0.04em] leading-[0.92] text-white">
                Men of
                <span className="block text-amber-400 mt-2">
                  Faith &amp; Purpose
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-sm sm:text-base font-medium leading-7 text-zinc-300">
                A brotherhood committed to growing in Christ, strengthening one
                another, serving faithfully, and becoming the men God has called
                us to be.
              </p>

              {/* Accent */}
              <div className="mt-8 flex items-center gap-2">
                <span className="h-1 w-14 rounded-full bg-amber-400" />
                <span className="h-1 w-7 rounded-full bg-amber-500/50" />
                <span className="h-1 w-3 rounded-full bg-white/30" />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRODUCTION
        ===================================================== */}
        <section className="relative bg-[#f8f7f4] px-5 sm:px-8 lg:px-10 py-20 sm:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
              {/* Main statement */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-[2px] w-10 bg-zinc-900" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
                    The Brotherhood
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-zinc-950 max-w-3xl">
                  Becoming the men God has called us to be.
                </h2>

                <p className="mt-6 text-base sm:text-lg font-medium leading-8 text-zinc-600 max-w-2xl">
                  The WTBC Men&apos;s Ministry provides a space for men to
                  connect, learn, pray, serve, and challenge one another to live
                  out their faith in everyday life.
                </p>

                <p className="mt-5 text-sm font-medium leading-7 text-zinc-500 max-w-2xl">
                  Through fellowship, discipleship, prayer, leadership,
                  mentorship, outreach, and honest conversations, we seek to
                  build men who are grounded in Scripture and committed to
                  their families, church, work, and community.
                </p>

                {/* Three focus areas */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-5 bg-white rounded-2xl border border-zinc-200 shadow-sm">
                    <HiShieldCheck className="text-xl text-zinc-800 mb-3" />
                    <h3 className="text-xs font-black uppercase tracking-wider text-zinc-900">
                      Discipleship
                    </h3>
                    <p className="mt-2 text-xs font-medium leading-5 text-zinc-500">
                      Building lives on the Word of God.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-zinc-200 shadow-sm">
                    <HiUsers className="text-xl text-zinc-800 mb-3" />
                    <h3 className="text-xs font-black uppercase tracking-wider text-zinc-900">
                      Brotherhood
                    </h3>
                    <p className="mt-2 text-xs font-medium leading-5 text-zinc-500">
                      Growing stronger together.
                    </p>
                  </div>

                  <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200 shadow-sm">
                    <HiBolt className="text-xl text-amber-600 mb-3" />
                    <h3 className="text-xs font-black uppercase tracking-wider text-zinc-900">
                      Leadership
                    </h3>
                    <p className="mt-2 text-xs font-medium leading-5 text-zinc-600">
                      Serving with purpose and integrity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual statement */}
              <div className="lg:col-span-5">
                <div className="relative max-w-md mx-auto">
                  {/* Large number */}
                  <div className="absolute -top-12 -right-2 text-[9rem] sm:text-[11rem] font-black text-zinc-200 leading-none select-none z-0">
                    01
                  </div>

                  {/* Card */}
                  <div className="relative z-10 p-7 sm:p-9 bg-zinc-950 rounded-[2rem] shadow-2xl shadow-zinc-900/20 text-white">
                    <div className="flex items-center justify-between mb-12">
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-amber-400">
                        Our Mandate
                      </span>
                      <HiSparkles className="text-amber-400" />
                    </div>

                    <blockquote className="text-2xl sm:text-3xl font-black tracking-tight leading-tight text-white">
                      &ldquo;Iron sharpens iron, and one man sharpens
                      another.&rdquo;
                    </blockquote>

                    <div className="my-8 h-px bg-white/10" />

                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                        Proverbs 27:17
                      </span>
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT CTA
        ===================================================== */}
        <section className="px-5 sm:px-8 lg:px-10 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="relative p-7 sm:p-10 lg:p-12 bg-zinc-950 rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-900/10">
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-zinc-500/10 blur-3xl" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <HiEnvelope className="text-amber-400" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">
                      Connect With Us
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                    Find your place in the brotherhood.
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-zinc-400">
                    For information about men&apos;s gatherings, discipleship
                    groups, prayer meetings, mentorship, outreach, or upcoming
                    ministry activities, get in touch with us.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="group shrink-0 inline-flex items-center justify-center gap-3 px-7 py-4 bg-amber-400 hover:bg-white text-zinc-950 text-xs font-black uppercase tracking-[0.15em] rounded-xl shadow-lg transition-all duration-300 active:scale-95"
                >
                  <span>Contact the Ministry</span>
                  <HiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MINISTRY FOCUS
        ===================================================== */}
        <section className="px-5 sm:px-8 lg:px-10 py-20 sm:py-24 bg-white border-y border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
                What We Value
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-zinc-950">
                Faith that moves beyond the room.
              </h2>
              <p className="mt-4 text-sm font-medium leading-7 text-zinc-500">
                Our ministry is about more than meetings. It is about helping men
                live out their faith wherever God has placed them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Card 1 */}
              <div className="group p-7 bg-[#f8f7f4] rounded-[1.75rem] border border-zinc-200 hover:border-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="h-12 w-12 rounded-xl bg-zinc-950 text-amber-400 flex items-center justify-center">
                  <HiShieldCheck className="text-xl" />
                </div>
                <h3 className="mt-7 text-xl font-black tracking-tight">
                  Rooted in the Word
                </h3>
                <p className="mt-3 text-sm font-medium leading-6 text-zinc-500">
                  We create opportunities for men to study Scripture, ask
                  meaningful questions, and grow in spiritual maturity.
                </p>
                <div className="mt-7 h-1 w-8 bg-amber-400 rounded-full transition-all duration-300 group-hover:w-16" />
              </div>

              {/* Card 2 */}
              <div className="group p-7 bg-[#f8f7f4] rounded-[1.75rem] border border-zinc-200 hover:border-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="h-12 w-12 rounded-xl bg-zinc-950 text-amber-400 flex items-center justify-center">
                  <HiUsers className="text-xl" />
                </div>
                <h3 className="mt-7 text-xl font-black tracking-tight">
                  Built Through Brotherhood
                </h3>
                <p className="mt-3 text-sm font-medium leading-6 text-zinc-500">
                  Honest conversations, prayer, fellowship, and accountability
                  help us encourage one another through every season.
                </p>
                <div className="mt-7 h-1 w-8 bg-amber-400 rounded-full transition-all duration-300 group-hover:w-16" />
              </div>

              {/* Card 3 */}
              <div className="group p-7 bg-[#f8f7f4] rounded-[1.75rem] border border-zinc-200 hover:border-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="h-12 w-12 rounded-xl bg-zinc-950 text-amber-400 flex items-center justify-center">
                  <HiBolt className="text-xl" />
                </div>
                <h3 className="mt-7 text-xl font-black tracking-tight">
                  Sent to Serve
                </h3>
                <p className="mt-3 text-sm font-medium leading-6 text-zinc-500">
                  We encourage men to use their gifts and influence to serve
                  their families, church, workplaces, and communities.
                </p>
                <div className="mt-7 h-1 w-8 bg-amber-400 rounded-full transition-all duration-300 group-hover:w-16" />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            GALLERY
        ===================================================== */}
        <section className="px-5 sm:px-8 lg:px-10 py-20 sm:py-24 bg-zinc-950 text-white">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-flex px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 text-[9px] font-black uppercase tracking-[0.3em] text-amber-400">
                Brotherhood in Action
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl font-black uppercase tracking-tight">
                Men&apos;s Ministry Gallery
              </h2>

              <p className="mt-4 text-sm font-medium leading-6 text-zinc-500 max-w-xl mx-auto">
                A look at the fellowship, worship, learning, prayer, service,
                and conversations that shape our brotherhood.
              </p>

              <div className="mt-5 flex justify-center gap-1.5 mx-auto">
                <span className="h-1 w-10 rounded-full bg-amber-400" />
                <span className="h-1 w-5 rounded-full bg-zinc-700" />
                <span className="h-1 w-2 rounded-full bg-zinc-800" />
              </div>
            </div>

            {/* Gallery grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {visibleImages.map((image, index) => (
                <button
                  key={`${image.src}-${index}`}
                  type="button"
                  onClick={() => openGallery(index)}
                  aria-label={`Open ${image.alt}`}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 text-left outline-none transition-all duration-500 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/40 focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <Image
                    fill
                    src={image.src}
                    alt={image.alt}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Label */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-amber-400">
                      {image.label}
                    </span>
                    <p className="mt-1 text-sm font-bold leading-snug text-white">
                      {image.alt}
                    </p>
                  </div>

                  {/* Number */}
                  <div className="absolute top-3 right-3 h-7 w-7 rounded-full bg-black/30 border border-white/10 backdrop-blur-md flex items-center justify-center text-[8px] font-black text-white/70">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </button>
              ))}
            </div>

            {/* Show more */}
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={handleToggleMore}
                className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-amber-400 hover:bg-amber-400 hover:text-zinc-950 text-zinc-300 text-xs font-black uppercase tracking-[0.15em] rounded-xl transition-all duration-300 active:scale-95"
              >
                {showMore ? (
                  <>
                    <FaMinus className="text-[10px]" />
                    Show Fewer Photos
                  </>
                ) : (
                  <>
                    <FaPlus className="text-[10px]" />
                    View More Moments
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* =====================================================
            LIGHTBOX
        ===================================================== */}
        {showFullGallery && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/98 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Men's Ministry photo gallery"
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeGallery}
              aria-label="Close Gallery"
              className="absolute top-5 right-5 sm:top-7 sm:right-7 z-50 h-11 w-11 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-300 hover:bg-white hover:text-zinc-950 flex items-center justify-center transition-all"
            >
              <FaTimes />
            </button>

            {/* Previous */}
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous Image"
              className="absolute top-1/2 left-3 sm:left-7 z-50 -translate-y-1/2 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-300 hover:bg-amber-400 hover:text-zinc-950 flex items-center justify-center transition-all"
            >
              <FaChevronLeft />
            </button>

            {/* Main image */}
            <div className="relative w-full max-w-6xl h-full max-h-[85vh] flex flex-col items-center justify-center">
              <div className="relative w-full h-[70vh]">
                <Image
                  fill
                  src={menImages[currentImageIndex].src}
                  alt={menImages[currentImageIndex].alt}
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Image information */}
              <div className="mt-5 text-center">
                <span className="inline-flex px-3 py-1 rounded-full bg-amber-400 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-950">
                  {currentImageIndex + 1} / {menImages.length}
                </span>

                <p className="mt-2 text-sm sm:text-base font-bold text-white">
                  {menImages[currentImageIndex].alt}
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                  {menImages[currentImageIndex].label}
                </p>
              </div>
            </div>

            {/* Next */}
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next Image"
              className="absolute top-1/2 right-3 sm:right-7 z-50 -translate-y-1/2 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-300 hover:bg-amber-400 hover:text-zinc-950 flex items-center justify-center transition-all"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Page;