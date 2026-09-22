"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import givbg from "../img/giveimg.jpg";
import grid from "../img/grid.svg";

const Page: FC = () => {
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const children = [
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204409/IMG_9075_kj7z0o.webp",
      alt: "Teen ministry gathering",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204406/IMG_9087_ceb1ur.webp",
      alt: "Teen ministry community",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204406/IMG_9102_irjtny.webp",
      alt: "Teens worshipping together",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204406/IMG_9081_uxxzdz.webp",
      alt: "Teen ministry event",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204404/IMG_9136_d3n52q.webp",
      alt: "Teens enjoying fellowship",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204389/IMG_9135_nwxly3.webp",
      alt: "Teen community gathering",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204388/IMG_9085_igjvhn.webp",
      alt: "Teens at ministry",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204388/IMG_9100_clix4f.webp",
      alt: "Teen ministry activity",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204387/IMG_9080_n5hxsp.webp",
      alt: "Teen fellowship",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204386/IMG_9079_tpmmds.webp",
      alt: "Teen ministry gathering",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204386/IMG_9075_1_g7xfwe.webp",
      alt: "Teen church community",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203565/IMG_9090_ioxchv.jpg",
      alt: "Teen ministry moment",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203385/IMG_7596_ygyfkh.jpg",
      alt: "Teen ministry event",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203208/IMG_7476_umnpod.jpg",
      alt: "Teens together",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203412/IMG_9050_l5kp1y.jpg",
      alt: "Teen ministry gathering",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203406/IMG_9053_tknnt6.jpg",
      alt: "Teen fellowship event",
    },
    {
      src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203234/IMG_7448_az20lf.jpg",
      alt: "Teen church community",
    },
  ];

  const initialImages = children.slice(0, 9);

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setShowFullGallery(true);
  };

  const closeGallery = () => {
    setShowFullGallery(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + children.length) % children.length
    );
  };

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  useEffect(() => {
    if (!showFullGallery) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowRight") goToNext();
      if (event.key === "ArrowLeft") goToPrev();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [showFullGallery]);

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a0507] butterfly-kids-regular">
      {/* =========================================================
          HERO
      ========================================================== */}
      <main className="pt-[6.77rem] md:pt-[7rem]">
        <section className="relative min-h-[520px] overflow-hidden md:min-h-[620px]">
          {/* Background image */}
          <Image
            src={givbg}
            alt="WTBC Teens Ministry"
            fill
            priority
            className="object-cover"
          />

          {/* Red-dominant overlay blending into deep burgundy and purple */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/90 via-red-900/75 to-purple-950/80" />

          {/* Decorative glowing blobs blending Red and Purple */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-600/35 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-purple-600/30 blur-3xl" />

          <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-16 md:min-h-[620px] md:px-10 lg:px-16">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                WTBC Teens
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                FAITH.
                <br />
                FRIENDSHIP.
                <br />
                <span className="bg-gradient-to-r from-red-400 to-purple-300 bg-clip-text text-transparent">
                  PURPOSE.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/90 sm:text-lg md:text-xl">
                A place to ask questions, build real friendships, grow in faith,
                and discover the person God created you to be.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#connect"
                  className="rounded-full bg-red-600 px-7 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-red-900/50 transition hover:-translate-y-0.5 hover:bg-red-500"
                >
                  Get Connected →
                </Link>

                <Link
                  href="#gallery"
                  className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-center text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  See Our Community
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom curved edge */}
          <div className="absolute bottom-0 left-0 right-0 h-12 rounded-t-[50%] bg-[#fafafa]" />
        </section>

        {/* =========================================================
            INTRODUCTION
        ========================================================== */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-16">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
                More than a Sunday thing
              </span>

              <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                You&apos;ve got a
                <span className="text-red-600"> place here.</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
                The WTBC Teens Church is a faith-filled community where young
                people can connect, ask honest questions, discover their gifts,
                and grow together.
              </p>

              <p className="mt-4 text-base leading-8 text-gray-600 md:text-lg">
                We believe your teenage years can be full of purpose, meaningful
                friendships, and a genuine relationship with God.
              </p>
            </div>

            {/* Image composition */}
            <div className="relative mx-auto w-full max-w-lg">
              <Image
                src={grid}
                alt=""
                width={400}
                height={250}
                className="absolute -right-3 -top-8 w-40 opacity-60 md:-right-8 md:-top-10 md:w-52"
              />

              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src={children[2].src}
                  alt={children[2].alt}
                  width={700}
                  height={500}
                  className="h-[320px] w-full object-cover transition duration-700 hover:scale-105 md:h-[400px]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-red-950/80 to-transparent p-6 pt-20">
                  <p className="text-sm font-semibold text-white">
                    Growing together. Laughing together. Learning together.
                  </p>
                </div>
              </div>

              {/* Red-to-Purple accent badge */}
              <div className="absolute -bottom-5 -left-4 rounded-2xl bg-gradient-to-br from-red-600 to-purple-700 px-5 py-4 text-white shadow-xl md:-left-8">
                <p className="text-2xl font-black">100%</p>
                <p className="text-xs font-medium text-red-100">community</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            QUICK ACTIONS
        ========================================================== */}
        <section
          id="connect"
          className="bg-[#120305] px-6 py-16 md:px-10 md:py-20 lg:px-16"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
                Find your space
              </span>

              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl md:text-5xl">
                There&apos;s something
                <span className="text-purple-400"> for you.</span>
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Connect */}
              <Link
                href="/contact"
                className="group rounded-3xl bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-2xl">
                  👋
                </div>

                <h3 className="text-xl font-black">Connect</h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Meet people, make friends, and become part of the community.
                </p>

                <span className="mt-6 inline-block text-sm font-bold text-red-600 transition group-hover:translate-x-1">
                  Get in touch →
                </span>
              </Link>

              {/* Events - Red hero card with purple accents */}
              <div className="group rounded-3xl bg-gradient-to-br from-red-600 to-red-800 p-7 text-white shadow-lg shadow-red-900/30 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                  📅
                </div>

                <h3 className="text-xl font-black">Events</h3>

                <p className="mt-2 text-sm leading-6 text-red-100">
                  Stay connected with what&apos;s happening around the Teens
                  Ministry.
                </p>

                <span className="mt-6 inline-block text-sm font-bold">
                  Coming up soon →
                </span>
              </div>

              {/* Grow */}
              <Link
                href="/blog"
                className="group rounded-3xl bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                  📖
                </div>

                <h3 className="text-xl font-black">Grow</h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Explore your faith and learn how it connects to everyday life.
                </p>

                <span className="mt-6 inline-block text-sm font-bold text-purple-600 transition group-hover:translate-x-1">
                  Start growing →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            FEATURED / COMMUNITY SECTION
        ========================================================== */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-16">
          <div className="grid overflow-hidden rounded-[2rem] bg-gradient-to-br from-red-700 via-red-800 to-purple-900 md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 sm:p-10 md:p-14">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-red-200">
                Our community
              </span>

              <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
                Come as you are.
                <br />
                Grow from there.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-red-100">
                You don&apos;t have to have everything figured out. This is a
                space where you can learn, ask questions, worship, laugh, and
                grow alongside other teenagers.
              </p>

              <Link
                href="/contact"
                className="mt-8 w-fit rounded-full bg-white px-6 py-3 text-sm font-bold text-red-900 transition hover:bg-red-50"
              >
                Talk to us
              </Link>
            </div>

            <div className="relative min-h-[350px] md:min-h-[500px]">
              <Image
                src={children[7].src}
                alt={children[7].alt}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-red-800/80 via-transparent to-transparent md:bg-gradient-to-r" />
            </div>
          </div>
        </section>

        {/* =========================================================
            GALLERY
        ========================================================== */}
        <section
          id="gallery"
          className="bg-[#f7f2f3] px-6 py-16 md:px-10 md:py-24 lg:px-16"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
                  Life at WTBC
                </span>

                <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                  Moments worth
                  <span className="text-red-600"> remembering.</span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-6 text-gray-500">
                A glimpse into the people, moments, and memories that make our
                community special.
              </p>
            </div>

            {/* Masonry-style responsive gallery */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
              {(showMore ? children : initialImages).map((image, index) => {
                const featured =
                  index === 0 || index === 4 || index === 7;

                return (
                  <button
                    key={`${image.src}-${index}`}
                    type="button"
                    onClick={() => openGallery(index)}
                    className={`group relative overflow-hidden rounded-2xl bg-gray-200 text-left ${
                      featured
                        ? "col-span-2 row-span-2 min-h-[260px] sm:min-h-[320px]"
                        : "min-h-[180px] sm:min-h-[220px]"
                    }`}
                    aria-label={`Open ${image.alt}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* Hover overlay with a red highlight tint */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-950/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                    <div className="absolute bottom-4 left-4 right-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-red-950 backdrop-blur">
                        View photo →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Show more */}
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={handleShowMore}
                className="rounded-full border-2 border-red-600 px-7 py-3 text-sm font-bold text-red-600 transition hover:bg-red-600 hover:text-white"
              >
                {showMore ? "Show Less ↑" : "View More Photos ↓"}
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTACT CTA
        ========================================================== */}
        <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#120305] px-6 py-16 text-center sm:px-10 md:px-20">
            {/* Red and purple background glows */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-red-600/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-purple-600/25 blur-3xl" />

            <div className="relative z-10">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
                Ready?
              </span>

              <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl md:text-6xl">
                You belong
                <span className="text-purple-300"> here.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-300 md:text-base">
                Want to know more about the WTBC Teens Ministry? Reach out to
                the church administration and we&apos;ll be happy to help.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-red-600 px-8 py-4 text-sm font-black text-white shadow-lg shadow-red-900/50 transition hover:-translate-y-1 hover:bg-red-500"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            FULLSCREEN GALLERY
        ========================================================== */}
        {showFullGallery && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Photo gallery"
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeGallery}
              aria-label="Close gallery"
              className="absolute right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/20 md:right-7 md:top-7"
            >
              ✕
            </button>

            {/* Counter */}
            <div className="absolute left-5 top-5 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md md:left-7 md:top-7">
              {currentImageIndex + 1} / {children.length}
            </div>

            {/* Previous */}
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous image"
              className="absolute left-3 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white backdrop-blur-md transition hover:bg-white/20 md:left-8 md:h-14 md:w-14"
            >
              ‹
            </button>

            {/* Main image */}
            <div className="relative h-[75vh] w-[85vw] max-w-5xl">
              <Image
                src={children[currentImageIndex].src}
                alt={children[currentImageIndex].alt}
                fill
                sizes="90vw"
                className="rounded-2xl object-contain"
                priority
              />
            </div>

            {/* Next */}
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next image"
              className="absolute right-3 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white backdrop-blur-md transition hover:bg-white/20 md:right-8 md:h-14 md:w-14"
            >
              ›
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Page;