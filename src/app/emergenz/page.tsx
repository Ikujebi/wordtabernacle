"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaPlus,
  FaMinus,
  FaQuoteLeft,
} from "react-icons/fa";

import givbg from "../img/giveimg.jpg";

interface YouthMediaItem {
  image: string;
  caption?: string;
}

const INITIAL_VISIBLE_COUNT = 6;

const Page: FC = () => {
  const youthpic: YouthMediaItem[] = [
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1725101517/choir7_umfdyb.webp",
      caption: "Sanctuary Choir",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1726579634/word14_apmp4h.jpg",
      caption: "Youth Gathering",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1726579602/word_mrsJJ4_uerkqo.jpg",
      caption: "Midweek Fellowship",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1725356890/5933838834204786631_hg4uhx.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1725129876/photo_5933838834204786583_y_ivyxxk.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1726579602/word5_l7jfsl.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1726579603/word6_dojbxq.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1726579634/word15_ctucr4.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1726579626/word013_ktwgaa.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1726579603/word10_xclcex.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1726579604/word11_omyh9y.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1726579603/word010_iirv1t.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1725102028/youth1_jqttiv.webp",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1726579603/word8_zg3qwb.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1726579602/word06_mzxdqf.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1744039980/6001458593154582620_ilsqx9.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1727168960/photo_6019429698393719060_y_s4icix.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1727168947/photo_6019429698393719056_y_m3vakz.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1727168969/photo_6019429698393719042_y_mj1qhe.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1727168835/photo_6019429698393719085_y_kk7p7y.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1727168912/photo_6019429698393719052_y_nnhf8g.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1728399270/photo_5773882741589395450_y_wcbs2a.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1728399269/photo_5773882741589395446_y_tkv1ro.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1744040171/6001458593154582629_gyhfmg.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dalylashp/image/upload/v1744040164/6001458593154582634_pjutzn.jpg",
    },
  ];

  const highlights = youthpic.slice(0, 3);
  const coreArchive = youthpic.slice(3);

  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_VISIBLE_COUNT);

  const displayedArchive = coreArchive.slice(0, visibleCount);
  const hasMoreToRender = visibleCount < coreArchive.length;
  const isExpanded = visibleCount > INITIAL_VISIBLE_COUNT;

  const handleToggleMedia = () => {
    if (hasMoreToRender) {
      setVisibleCount((prev) => Math.min(prev + 6, coreArchive.length));
    } else {
      setVisibleCount(INITIAL_VISIBLE_COUNT);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#fafafa] font-sans text-zinc-900 antialiased">

      <main className="pt-20 lg:pt-24">

        {/* =========================================================
            HERO
        ========================================================== */}

        <section className="relative min-h-[620px] overflow-hidden bg-zinc-950">

          <Image
            src={givbg}
            alt="WTBC Youth Ministry"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

          {/* Red ambient glow */}
          <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[120px]" />

          <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">

            <div className="max-w-4xl">

              {/* Eyebrow */}
              <div className="mb-6 flex items-center gap-3">

                <span className="h-px w-10 bg-red-500" />

                <span className="text-xs font-black uppercase tracking-[0.35em] text-red-500">
                  WTBC Youth
                </span>

              </div>


              {/* Main heading */}
              <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-7xl md:text-8xl lg:text-[7.5rem]">

                Built for
                <br />

                <span className="text-red-500">
                  purpose.
                </span>

              </h1>


              <p className="mt-8 max-w-xl text-base font-medium leading-7 text-zinc-300 sm:text-lg">
                A generation discovering identity, building authentic
                relationships, growing in faith, and making an impact
                wherever God has placed them.
              </p>


              {/* Hero buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="#community"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-7 py-4 text-sm font-black text-white transition hover:bg-red-500"
                >
                  Discover Youth Ministry

                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#archive"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  Explore the Archive
                </Link>

              </div>

            </div>

          </div>


          {/* Hero bottom information */}
          <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/30 backdrop-blur-md">

            <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-6 py-5 sm:grid-cols-4 lg:px-12">

              <div className="px-4 first:pl-0">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  Focus
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  Identity
                </p>
              </div>

              <div className="px-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  Community
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  Fellowship
                </p>
              </div>

              <div className="hidden px-4 sm:block">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  Growth
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  Discipleship
                </p>
              </div>

              <div className="hidden px-4 sm:block">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  Mission
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  Impact
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            INTRO / MISSION
        ========================================================== */}

        <section
          id="community"
          className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28 lg:px-12"
        >

          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">

            {/* Left */}
            <div className="lg:col-span-5">

              <div className="sticky top-28">

                <span className="text-xs font-black uppercase tracking-[0.3em] text-red-600">
                  Who We Are
                </span>

                <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight text-zinc-950 sm:text-5xl md:text-6xl">

                  More than
                  <br />

                  <span className="text-red-600">
                    a gathering.
                  </span>

                </h2>

                <div className="mt-7 h-1 w-12 bg-red-600" />

              </div>

            </div>


            {/* Right */}
            <div className="lg:col-span-7">

              <p className="text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
                WTBC Youth Ministry is a community designed to help young
                people become who God has called them to be.
              </p>

              <div className="mt-8 space-y-5 text-base leading-8 text-zinc-600">

                <p>
                  We create a space where young people can worship,
                  fellowship, ask meaningful questions, discover their
                  gifts, and build friendships that extend beyond church
                  services.
                </p>

                <p>
                  Through intentional small groups, retreats, outreach,
                  midweek gatherings, worship, and service opportunities,
                  we encourage young people to live out their faith in
                  everyday life.
                </p>

              </div>


              {/* Mission points */}
              <div className="mt-10 grid gap-3 sm:grid-cols-3">

                <div className="rounded-2xl bg-zinc-100 p-5">
                  <span className="text-2xl font-black text-red-600">
                    01
                  </span>
                  <h3 className="mt-4 text-sm font-black uppercase">
                    Belong
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">
                    Find community and authentic friendships.
                  </p>
                </div>

                <div className="rounded-2xl bg-zinc-100 p-5">
                  <span className="text-2xl font-black text-red-600">
                    02
                  </span>
                  <h3 className="mt-4 text-sm font-black uppercase">
                    Become
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">
                    Grow in faith, character, and purpose.
                  </p>
                </div>

                <div className="rounded-2xl bg-zinc-100 p-5">
                  <span className="text-2xl font-black text-red-600">
                    03
                  </span>
                  <h3 className="mt-4 text-sm font-black uppercase">
                    Impact
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">
                    Use your gifts to make a difference.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            FEATURED STORIES
        ========================================================== */}

        <section className="bg-zinc-950 px-6 py-20 sm:px-8 md:py-28 lg:px-12">

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

              <div>

                <div className="mb-3 flex items-center gap-3">

                  <span className="h-px w-8 bg-red-500" />

                  <span className="text-xs font-black uppercase tracking-[0.3em] text-red-500">
                    Ministry Life
                  </span>

                </div>

                <h2 className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
                  What we&apos;re about
                </h2>

              </div>

              <p className="max-w-sm text-sm leading-6 text-zinc-500">
                Worship, fellowship, creativity, service, and the moments
                that bring our community together.
              </p>

            </div>


            {/* Featured cards */}
            <div className="grid gap-5 md:grid-cols-3">

              {highlights.map((item, index) => (

                <article
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl bg-zinc-900 ${
                    index === 0
                      ? "md:col-span-1 md:h-[520px]"
                      : "md:h-[520px]"
                  }`}
                >

                  <Image
                    src={item.image}
                    alt={item.caption || "Youth Ministry"}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />


                  <div className="absolute bottom-0 left-0 right-0 p-6">

                    <div className="mb-3 flex items-center gap-2">

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-[10px] font-black text-white">
                        0{index + 1}
                      </span>

                      <span className="text-[9px] font-black uppercase tracking-[0.25em] text-zinc-300">
                        Spotlight
                      </span>

                    </div>

                    <h3 className="text-xl font-black text-white">
                      {item.caption || "Community Life"}
                    </h3>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =========================================================
            VALUES / QUOTE
        ========================================================== */}

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28 lg:px-12">

          <div className="grid items-center gap-12 md:grid-cols-2">

            <div className="relative overflow-hidden rounded-[2rem] bg-red-600 p-8 sm:p-12">

              <FaQuoteLeft className="text-4xl text-red-300/60" />

              <p className="mt-8 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
                &quot;Your generation has a voice, a purpose, and a
                place in what God is doing.&quot;
              </p>

              <div className="mt-8 h-1 w-10 bg-white" />

              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-red-100">
                WTBC Youth Ministry
              </p>

            </div>


            <div>

              <span className="text-xs font-black uppercase tracking-[0.3em] text-red-600">
                Our Culture
              </span>

              <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl">
                Faith that
                <br />
                meets real life.
              </h2>

              <p className="mt-6 leading-7 text-zinc-600">
                We want faith to be more than something that happens
                inside a church building. Our goal is to equip young
                people to carry their faith into their schools,
                universities, workplaces, families, friendships, and
                communities.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Authentic relationships",
                  "Intentional discipleship",
                  "Creative expression",
                  "Leadership & service",
                ].map((item, index) => (

                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-zinc-200 pb-4"
                  >

                    <span className="text-xs font-black text-red-600">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-bold text-zinc-800">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            ARCHIVE
        ========================================================== */}

        <section
          id="archive"
          className="border-t border-zinc-200 bg-zinc-100 px-6 py-20 sm:px-8 md:py-28 lg:px-12"
        >

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

              <div>

                <span className="text-xs font-black uppercase tracking-[0.35em] text-red-600">
                  The Archive
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-zinc-950 sm:text-5xl">
                  Moments
                  <br />
                  <span className="text-red-600">together.</span>
                </h2>

              </div>

              <p className="max-w-md text-sm leading-6 text-zinc-500">
                A collection of memories from gatherings, fellowships,
                worship moments, outreach, and life in the WTBC Youth
                community.
              </p>

            </div>


            {/* Media grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {displayedArchive.map((item, index) => (

                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl bg-zinc-200 ${
                    index === 0 || index === 5
                      ? "sm:row-span-2 sm:h-[500px]"
                      : "h-[300px]"
                  }`}
                >

                  <Image
                    fill
                    src={item.image}
                    alt={
                      item.caption ||
                      `WTBC Youth Ministry archive photo ${index + 1}`
                    }
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                  />

                  {/* Hover layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute bottom-5 left-5 opacity-0 transition duration-500 group-hover:opacity-100">

                    <span className="rounded-full bg-white px-3 py-1 text-[9px] font-black uppercase tracking-widest text-zinc-900">
                      WTBC Youth
                    </span>

                  </div>

                </div>

              ))}

            </div>


            {/* Load More / Show Less Toggle Button */}
            {(hasMoreToRender || isExpanded) && (

              <div className="mt-12 flex justify-center">

                <button
                  type="button"
                  onClick={handleToggleMedia}
                  className="group inline-flex items-center gap-3 rounded-full bg-zinc-950 px-8 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-red-600 active:scale-95"
                >

                  {hasMoreToRender ? (
                    <>
                      <FaPlus className="text-[10px] transition-transform group-hover:rotate-90" />
                      Load More Media
                    </>
                  ) : (
                    <>
                      <FaMinus className="text-[10px]" />
                      Show Less
                    </>
                  )}

                </button>

              </div>

            )}

          </div>

        </section>


        {/* =========================================================
            FINAL CTA
        ========================================================== */}

        <section className="bg-red-600 px-6 py-20 sm:px-8 md:py-28 lg:px-12">

          <div className="mx-auto max-w-5xl text-center">

            <span className="text-xs font-black uppercase tracking-[0.35em] text-red-200">
              Your next chapter
            </span>

            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl">

              There&apos;s room
              <br />
              <span className="text-red-200">
                for you here.
              </span>

            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-red-100 sm:text-base">
              Whether you&apos;re looking for community, wanting to grow
              spiritually, or ready to serve and make an impact, there&apos;s
              a place for you in the WTBC Youth community.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-black text-red-600 transition hover:-translate-y-1 hover:bg-red-50"
            >
              Get Connected

              <FaArrowRight className="text-xs" />
            </Link>

          </div>

        </section>

      </main>

    </div>
  );
};

export default Page;