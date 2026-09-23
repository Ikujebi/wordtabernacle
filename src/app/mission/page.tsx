"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HiArrowUpRight,
  HiSparkles,
  HiHeart,
  HiLightBulb,
  HiUserGroup,
} from "react-icons/hi2";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import givbg from "../img/giveimg.jpg";
import redbg from "../img/redbgi.webp";

interface ValueItem {
  title: string;
  message: string;
  scripture?: string;
}

const VALUES: ValueItem[] = [
  {
    title: "Excellence",
    message:
      "We strive for excellence in all we do, honoring God with our best efforts and continuously improving in our service, ministry, and personal growth.",
    scripture: "Colossians 3:23; Proverbs 22:29",
  },
  {
    title: "Love",
    message:
      "We are committed to loving God and people unconditionally, demonstrating Christ-like compassion, kindness, and selflessness in our relationships and service.",
    scripture: "John 13:34-35; 1 Corinthians 13:4-7",
  },
  {
    title: "Integrity",
    message:
      "We uphold truth and honesty in all aspects of life, ensuring that our words, actions, and decisions align with God's principles.",
    scripture: "Proverbs 11:3; 2 Corinthians 8:21",
  },
  {
    title: "Accountability",
    message:
      "We are personally responsible and accountable to one another for our attitude, actions, and integrity as a means of accomplishing vision, building character, ensuring sound decision-making, and growing as balanced disciples.",
    scripture: "Acts 15:4; Job 31:6",
  },
  {
    title: "Creativity",
    message:
      "We embrace God-given creativity in expressing our faith, solving problems, and advancing His Kingdom in innovative and impactful ways.",
    scripture: "Exodus 35:31-32; Proverbs 8:12",
  },
];

const MSGG_IMAGE_1 =
  "https://res.cloudinary.com/dalylashp/image/upload/v1741177452/WhatsApp_Image_2025-03-05_at_12.17.13_PM_peifwo.jpg";

const MSGG_IMAGE_2 =
  "https://res.cloudinary.com/dalylashp/image/upload/v1725101712/msg-1001955056097-3260_qxe986.webp";

const Page: FC = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#faf9f7] font-sans text-zinc-900 antialiased">
      <Header />

      <main className="pt-20 lg:pt-24">
        {/* HERO SECTION */}
        <section
          className="relative min-h-[34rem] overflow-hidden bg-cover bg-center sm:min-h-[40rem]"
          style={{ backgroundImage: `url(${givbg.src})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/80 to-zinc-950/35" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-zinc-950/80 to-transparent" />

          {/* Decorative Glows */}
          <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-400/5 blur-3xl" />

          <div className="relative z-10 mx-auto flex min-h-[34rem] max-w-7xl items-center px-5 py-16 sm:min-h-[40rem] sm:px-8 lg:px-10">
            <div className="max-w-4xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
                <HiSparkles className="text-red-400" aria-hidden="true" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">
                  The Heart of WTBC
                </span>
              </div>

              <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
                Who{" "}
                <span className="block text-red-500">
                  We Are
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm font-medium leading-7 text-zinc-300 sm:text-base">
                Our vision, mission, and values define the culture we are
                building and the kind of people we desire to become as a
                church community.
              </p>

              <div className="mt-8 flex items-center gap-2" aria-hidden="true">
                <span className="h-1 w-16 rounded-full bg-red-500" />
                <span className="h-1 w-8 rounded-full bg-red-500/50" />
                <span className="h-1 w-3 rounded-full bg-white/30" />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO / IDENTITY */}
        <section className="relative px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-red-600" aria-hidden="true" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600">
                    Our Foundation
                  </span>
                </div>

                <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
                  More than a building. A people with a purpose.
                </h2>

                <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-zinc-600 sm:text-lg">
                  Word Tabernacle Church is more than a building consisting
                  of four walls. It is a spiritual vehicle for socio-economic
                  and system-level change committed to seeing lives transformed
                  and people thrive.
                </p>

                <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-zinc-500">
                  Everything we do flows from our desire to help people
                  encounter God, grow in His Word, discover their purpose,
                  and make a meaningful difference in the world around them.
                </p>

                {/* Mini Pillars */}
                <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-red-100 bg-red-50/60 p-5">
                    <HiHeart className="mb-3 text-xl text-red-600" aria-hidden="true" />
                    <h3 className="text-xs font-black uppercase tracking-wider">
                      Faith
                    </h3>
                    <p className="mt-2 text-xs font-medium leading-5 text-zinc-500">
                      Grounded in Christ and His Word.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                    <HiUserGroup className="mb-3 text-xl text-zinc-800" aria-hidden="true" />
                    <h3 className="text-xs font-black uppercase tracking-wider">
                      People
                    </h3>
                    <p className="mt-2 text-xs font-medium leading-5 text-zinc-500">
                      Building lives and communities.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-5">
                    <HiLightBulb className="mb-3 text-xl text-amber-600" aria-hidden="true" />
                    <h3 className="text-xs font-black uppercase tracking-wider">
                      Impact
                    </h3>
                    <p className="mt-2 text-xs font-medium leading-5 text-zinc-500">
                      Creating meaningful change.
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md">
                  <div className="absolute -right-5 -top-5 h-32 w-32 rounded-[2rem] bg-red-50" aria-hidden="true" />

                  <div className="relative overflow-hidden rounded-[2rem] border-[8px] border-white bg-zinc-100 shadow-2xl shadow-zinc-900/10">
                    <div className="relative aspect-[4/5]">
                      <Image
                        fill
                        src={MSGG_IMAGE_2}
                        alt="Word Tabernacle Church community gathering"
                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 1024px) 90vw, 40vw"
                        priority
                      />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/80 to-transparent p-6 pt-20">
                      <span className="text-[9px] font-black uppercase tracking-[0.25em] text-red-300">
                        Word Tabernacle Church
                      </span>
                      <p className="mt-1 text-lg font-black text-white">
                        Everyone Thriving.
                      </p>
                    </div>
                  </div>

                  <div className="absolute -bottom-5 -left-4 rounded-full border-4 border-white bg-red-600 px-5 py-3 text-[9px] font-black uppercase tracking-[0.2em] text-white shadow-xl">
                    Faith in Action
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VISION SECTION */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
              <div className="order-2 lg:order-1 lg:col-span-7">
                <div className="group relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-100 shadow-xl shadow-zinc-900/5">
                  <div className="relative h-[22rem] sm:h-[32rem]">
                    <Image
                      fill
                      src={MSGG_IMAGE_2}
                      alt="Word Tabernacle Sanctuary Community"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6">
                    <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                      Our Vision
                    </span>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 lg:col-span-5">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-red-600" aria-hidden="true" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600">
                    01 / Vision
                  </span>
                </div>

                <h2 className="text-3xl font-black leading-tight tracking-tight text-zinc-950 sm:text-4xl">
                  Empowering Lives,
                  <span className="block text-red-600">
                    Raising Word Practitioners.
                  </span>
                </h2>

                <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-red-600" aria-hidden="true" />
                  <span className="font-mono text-[10px] font-bold tracking-wider text-zinc-600">
                    JOHN 1:12–14
                  </span>
                </div>

                <p className="mt-7 border-t border-zinc-100 pt-6 text-sm font-medium leading-7 text-zinc-600 sm:text-base">
                  Word Tabernacle Church is more than a building consisting
                  of four walls. It is a spiritual vehicle for socio-economic
                  and system-level change committed to the vision of{" "}
                  <strong className="text-zinc-900">
                    “Everyone Thriving.”
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section className="bg-[#f6f5f2] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
              <div className="order-1 lg:col-span-5">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-red-600" aria-hidden="true" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600">
                    02 / Mission
                  </span>
                </div>

                <h2 className="text-3xl font-black leading-tight tracking-tight text-zinc-950 sm:text-4xl">
                  To see everyone connected with us become who God designed
                  them to be.
                </h2>

                <p className="mt-7 border-t border-zinc-200 pt-6 text-sm font-medium leading-7 text-zinc-600 sm:text-base">
                  Our mission is expressed through intentional discipleship,
                  community, service, spiritual development, and practical
                  transformation.
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
                    <HiSparkles aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-zinc-900">
                      Purpose-driven community
                    </p>
                    <p className="mt-1 text-xs font-medium text-zinc-500">
                      Growing people. Strengthening families. Serving others.
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-2 lg:col-span-7">
                <div className="group relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-100 shadow-xl shadow-zinc-900/5">
                  <div className="relative h-[22rem] sm:h-[32rem]">
                    <Image
                      fill
                      src={MSGG_IMAGE_1}
                      alt="Word Tabernacle Ministries Outreach"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6">
                    <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                      Our Mission
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRANSITION BANNER */}
        <section
          className="relative flex min-h-[18rem] items-center justify-center overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${redbg.src})` }}
        >
          <div className="absolute inset-0 bg-zinc-950/85" />

          <div className="relative z-10 max-w-2xl px-5 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-400">
              The Framework of Our Culture
            </span>

            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
              Our Values
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm font-medium leading-6 text-zinc-400">
              These values shape how we serve, lead, grow, relate to one
              another, and represent Christ.
            </p>

            <div className="mx-auto mt-6 flex justify-center gap-1.5" aria-hidden="true">
              <span className="h-1 w-10 rounded-full bg-red-500" />
              <span className="h-1 w-5 rounded-full bg-white/40" />
              <span className="h-1 w-2 rounded-full bg-white/20" />
            </div>
          </div>
        </section>

        {/* VALUES LIST */}
        <section className="border-b border-zinc-200 bg-[#faf9f7] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full bg-red-50 px-4 py-2 text-[9px] font-black uppercase tracking-[0.3em] text-red-600">
                What Guides Us
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
                Values We Live By
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-6 text-zinc-500">
                Our values are not simply words on a page. They describe the
                culture we seek to cultivate every day.
              </p>
            </div>

            <div className="space-y-4">
              {VALUES.map((value, index) => (
                <article
                  key={value.title}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-xl sm:p-8"
                >
                  <div className="absolute bottom-0 left-0 top-0 w-1 origin-top scale-y-0 rounded-r-full bg-red-600 transition-transform duration-300 group-hover:scale-y-100" />

                  <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                    <div className="shrink-0">
                      <span className="font-mono text-[10px] font-bold tracking-widest text-zinc-400">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="shrink-0 sm:w-40">
                      <h3 className="text-lg font-black uppercase tracking-wider text-zinc-900 transition-colors group-hover:text-red-700">
                        {value.title}
                      </h3>
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-medium leading-7 text-zinc-600">
                        {value.message}
                      </p>

                      {value.scripture && (
                        <div className="mt-4 inline-flex rounded-lg border border-red-100 bg-red-50/70 px-3 py-2">
                          <span className="font-mono text-[10px] font-bold tracking-wide text-red-700">
                            {value.scripture}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="bg-zinc-950 px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 shadow-2xl sm:p-12 lg:p-14">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-600/10 blur-3xl" aria-hidden="true" />

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-3 flex items-center gap-2">
                    <HiSparkles className="text-red-400" aria-hidden="true" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-400">
                      Take the Next Step
                    </span>
                  </div>

                  <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                    Want to connect with WTBC?
                  </h2>

                  <p className="mt-4 text-sm font-medium leading-7 text-zinc-400">
                    Whether you are new to the church, looking for a ministry
                    to connect with, or simply want to learn more about who
                    we are, we would love to hear from you.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-red-600 px-7 py-4 text-xs font-black uppercase tracking-[0.15em] text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-zinc-950 active:scale-95"
                >
                  <span>Contact Us</span>
                  <HiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default Page;