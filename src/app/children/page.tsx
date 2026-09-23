"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaPlus,
  FaMinus,
  FaArrowRight,
} from "react-icons/fa";
import { HiSparkles, HiHeart } from "react-icons/hi";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import givbg from "../img/giveimg.jpg";
import grid from "../img/grid.svg";

interface ChildMediaItem {
  src: string;
  alt: string;
  tag: string;
  rotation: string;
}

const Page: FC = () => {
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [isImageTransitioning, setIsImageTransitioning] = useState(false);

  const children: ChildMediaItem[] = [
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203350/IMG_7567_kqoock.jpg",
      alt: "Children's Church Service",
      tag: "Sunday Praise",
      rotation: "-rotate-2",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1741170865/children_wt_1_kolmi1.jpg",
      alt: "Children's Learning Group",
      tag: "Learning Time",
      rotation: "rotate-1",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203383/IMG_7590_rgebic.jpg",
      alt: "Creative Faith Activities",
      tag: "Arts & Crafts",
      rotation: "rotate-3",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1741179426/wt_child_3_pvddyo.jpg",
      alt: "Sunday School Class",
      tag: "Bible Stories",
      rotation: "-rotate-1",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1741179423/wt_child_5_almhqo.jpg",
      alt: "Praise and Worship",
      tag: "Joyful Noise",
      rotation: "rotate-2",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203384/IMG_7570_ib6kd8.jpg",
      alt: "Interactive Bible Lessons",
      tag: "Interactive Fun",
      rotation: "-rotate-3",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203352/IMG_7551_sqpvdb.jpg",
      alt: "Children's Fellowship",
      tag: "Friendship",
      rotation: "rotate-1",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203139/IMG_4570_enhokc.jpg",
      alt: "Fun Activities",
      tag: "Playtime",
      rotation: "-rotate-2",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1741179412/wt_child_7_cgfuqi.jpg",
      alt: "Group Learning",
      tag: "Teamwork",
      rotation: "rotate-2",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203323/IMG_7541_dgo944.jpg",
      alt: "Scripture Recitation",
      tag: "Memory Verse",
      rotation: "-rotate-1",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1741170864/baby_wt_1_dbvwtw.jpg",
      alt: "Toddler Care Ministry",
      tag: "Little Ones",
      rotation: "rotate-3",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203324/IMG_7550_mal0si.jpg",
      alt: "Children's Prayer Circle",
      tag: "Prayer Time",
      rotation: "-rotate-2",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1741179395/wt_child_2_ntxwdt.jpg",
      alt: "Creative Arts and Crafts",
      tag: "Hands-on",
      rotation: "rotate-1",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203314/IMG_7536_g2mnl0.jpg",
      alt: "Bible Story Time",
      tag: "Story Circle",
      rotation: "-rotate-3",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203273/IMG_7498_ukhckc.jpg",
      alt: "Holiday Presentation",
      tag: "Celebration",
      rotation: "rotate-2",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203270/IMG_7520_ke1nkj.jpg",
      alt: "Ministry Gathering",
      tag: "Community",
      rotation: "-rotate-1",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203263/IMG_7502_sjddsv.jpg",
      alt: "Outdoor Ministry Event",
      tag: "Outdoor Fun",
      rotation: "rotate-3",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203227/IMG_7442_af0cse.jpg",
      alt: "Class Celebration",
      tag: "Smiles Everywhere",
      rotation: "-rotate-2",
    },
  ];

  const initialImages = children.slice(0, 10);
  const visibleImages = showMore ? children : initialImages;

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setShowFullGallery(true);
  };

  const closeGallery = () => {
    setShowFullGallery(false);
  };

  const triggerImageChange = (newIndex: number) => {
    setIsImageTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setIsImageTransitioning(false);
    }, 150);
  };

  const goToNext = () => {
    const nextIndex = (currentImageIndex + 1) % children.length;
    triggerImageChange(nextIndex);
  };

  const goToPrev = () => {
    const prevIndex =
      (currentImageIndex - 1 + children.length) % children.length;
    triggerImageChange(prevIndex);
  };

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };

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
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [showFullGallery, currentImageIndex]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#fffaf8] font-sans text-zinc-900 antialiased">
      <Header />

      <main className="pt-20 lg:pt-24">
        {/* HERO */}
        <section className="relative min-h-[570px] overflow-hidden bg-[#4a0d0d]">
          <Image
            src={givbg}
            alt="WTBC Children's Ministry"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-red-950/90 via-red-900/75 to-zinc-950/80" />
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-red-500/20 blur-3xl" />

          <div className="relative z-10 mx-auto flex min-h-[570px] max-w-7xl items-center justify-center px-6 py-20 text-center sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200/30 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                <HiSparkles className="text-red-400" />
                WTBC Kids
              </div>

              <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Little hearts.
                <br />
                <span className="text-red-500">Big faith.</span>
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-base font-medium leading-7 text-white/90 sm:text-lg md:text-xl">
                A joyful place where children learn about God, make friends,
                discover their gifts, and grow in a loving community.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-4 text-sm font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-red-500"
                >
                  Get Started
                  <FaArrowRight className="text-xs" />
                </Link>

                <a
                  href="#gallery"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  See Our Moments
                </a>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-1 left-0 right-0 h-10 rounded-t-[50%] bg-[#fffaf8]" />
        </section>

        {/* WELCOME SECTION */}
        <section
          id="kids-community"
          className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-24 lg:px-12"
        >
          <div className="absolute left-0 top-20 h-48 w-48 rounded-full bg-red-200/20 blur-3xl" />
          <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-red-100/30 blur-3xl" />

          <div className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-red-600">
                <HiHeart />
                Growing in Faith
              </div>

              <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl">
                Helping little
                <br />
                hearts discover
                <br />
                <span className="text-red-600">big possibilities.</span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-zinc-600 md:text-lg">
                Our Children&apos;s Ministry is designed to give every child a
                safe, welcoming, and joyful environment where they can learn
                about God and develop meaningful friendships.
              </p>

              <p className="mt-4 max-w-xl text-base leading-8 text-zinc-600">
                Through Bible lessons, worship, creative activities, prayer,
                fellowship, and service, we help children build a foundation of
                faith that can grow with them.
              </p>

              <div className="mt-9 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-red-50 p-4 border border-red-100 text-center">
                  <div className="text-2xl">❤️</div>
                  <p className="mt-2 text-xs font-black uppercase text-red-800">
                    Love
                  </p>
                </div>

                <div className="rounded-2xl bg-red-50 p-4 border border-red-100 text-center">
                  <div className="text-2xl">📖</div>
                  <p className="mt-2 text-xs font-black uppercase text-red-800">
                    Learn
                  </p>
                </div>

                <div className="rounded-2xl bg-red-50 p-4 border border-red-100 text-center">
                  <div className="text-2xl">🌱</div>
                  <p className="mt-2 text-xs font-black uppercase text-red-800">
                    Grow
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <Image
                src={grid}
                alt=""
                width={400}
                height={250}
                className="absolute -right-8 -top-10 w-48 opacity-50 sm:w-56"
              />

              <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white bg-white shadow-2xl shadow-red-950/10">
                <Image
                  src={children[2].src}
                  alt={children[2].alt}
                  width={700}
                  height={700}
                  priority
                  className="h-[390px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[480px]"
                />
              </div>

              <div className="absolute -bottom-6 -left-4 rounded-3xl bg-white p-4 shadow-xl sm:-left-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-2xl">
                    ✨
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-zinc-400">
                      Our goal
                    </p>
                    <p className="text-sm font-black text-zinc-900">
                      Growing together
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARENTS / VISITORS */}
        <section className="bg-red-50/60 px-6 py-16 sm:px-8 md:py-20 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl border border-red-100">
              <div className="grid md:grid-cols-2">
                <div className="bg-red-700 p-8 sm:p-10 md:p-14">
                  <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-red-100">
                    Parents & Visitors
                  </span>
                  <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl">
                    We want you and your child to feel at home.
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-red-100">
                    Have questions about our children&apos;s services, classroom
                    arrangements, safety procedures, or special ministry
                    activities?
                  </p>
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-10 md:p-14">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-2xl">
                    💌
                  </div>
                  <h3 className="mt-6 text-xl font-black">Let&apos;s talk.</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    Our administrative team will be happy to provide more
                    information and answer your questions.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:bg-red-600"
                  >
                    Contact Us
                    <FaArrowRight className="text-[9px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PLAYFUL GALLERY SECTION */}
        <section
          id="gallery"
          className="relative overflow-hidden bg-[#fffaf8] px-6 py-20 sm:px-8 md:py-28 lg:px-12"
        >
          <div className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-red-200/30 blur-3xl" />
          <div className="absolute -right-32 bottom-40 h-72 w-72 rounded-full bg-red-200/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-xs font-black uppercase tracking-widest text-red-700 shadow-sm">
                <HiSparkles />
                Snapshots of Joy
              </span>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl">
                Life at <span className="text-red-600">WTBC Kids.</span> 🎈
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
                Click on any photo to open our full-screen memory scrapbook!
              </p>
            </div>

            {/* Photo Cards Grid with subtle polaroid angles & badges */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {visibleImages.map((image, index) => (
                <button
                  key={`${image.src}-${index}`}
                  type="button"
                  onClick={() => openGallery(index)}
                  aria-label={`View ${image.alt}`}
                  className={`group relative flex flex-col rounded-3xl border-4 border-white bg-white p-3 shadow-lg shadow-red-950/5 transition-all duration-300 hover:z-20 hover:scale-105 hover:rotate-0 hover:shadow-2xl hover:shadow-red-900/20 ${image.rotation}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-red-50">
                    <Image
                      fill
                      src={image.src}
                      alt={image.alt}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                    <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-red-600 backdrop-blur-md shadow-sm">
                      {image.tag}
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between px-1 pb-1">
                    <span className="text-xs font-black text-zinc-700 truncate max-w-[80%]">
                      {image.alt}
                    </span>
                    <span className="text-xs text-red-500 transition group-hover:scale-125">
                      ❤️
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-14 flex justify-center">
              <button
                type="button"
                onClick={handleShowMore}
                className="inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-red-600/30 transition hover:-translate-y-1 hover:bg-red-500 active:scale-95"
              >
                {showMore ? (
                  <>
                    <FaMinus className="text-[9px]" />
                    Show Fewer Photos
                  </>
                ) : (
                  <>
                    <FaPlus className="text-[9px]" />
                    Explore More Moments ({children.length - 10} More)
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-red-950 px-6 py-20 sm:px-8 md:py-28 lg:px-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-red-400/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <HiHeart className="mx-auto text-4xl text-red-300" />
            <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              Every child deserves
              <br />
              <span className="text-red-300">a place to belong.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-red-100 sm:text-base">
              We&apos;re passionate about creating an environment where
              children are loved, encouraged, taught, and given room to grow.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-black text-red-800 transition hover:-translate-y-1 hover:bg-red-100"
            >
              Get Started
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </section>

        {/* FULLSCREEN GALLERY MODAL */}
        {showFullGallery && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 transition-opacity duration-300 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="Children's Ministry photo gallery"
          >
            <button
              type="button"
              onClick={closeGallery}
              aria-label="Close gallery"
              className="absolute right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-7 md:top-7"
            >
              <FaTimes />
            </button>

            <div className="absolute left-5 top-5 rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md md:left-7 md:top-7">
              {currentImageIndex + 1} / {children.length}
            </div>

            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous image"
              className="absolute left-3 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl text-white backdrop-blur-md transition hover:bg-white/20 md:left-8 md:h-14 md:w-14"
            >
              <FaChevronLeft />
            </button>

            <div className="relative h-[72vh] w-[85vw] max-w-5xl">
              <Image
                fill
                src={children[currentImageIndex].src}
                alt={children[currentImageIndex].alt}
                sizes="90vw"
                className={`object-contain transition-all duration-300 ease-in-out ${
                  isImageTransitioning
                    ? "scale-95 opacity-0"
                    : "scale-100 opacity-100"
                }`}
                priority
              />
            </div>

            <div className="absolute bottom-7 left-1/2 max-w-[80%] -translate-x-1/2 rounded-full bg-black/50 px-5 py-3 text-center backdrop-blur-md">
              <p className="text-xs font-bold text-white sm:text-sm">
                {children[currentImageIndex].alt}
              </p>
            </div>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next image"
              className="absolute right-3 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl text-white backdrop-blur-md transition hover:bg-white/20 md:right-8 md:h-14 md:w-14"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </main>

     
    </div>
  );
};

export default Page;