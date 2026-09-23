"use client";

import { useEffect, useState, useCallback, FC } from "react";
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
  HiSparkles,
  HiArrowUpRight,
  HiHeart,
  HiUsers,
} from "react-icons/hi2";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import givbg from "../img/giveimg.jpg";
import grid from "../img/grid.svg";

interface WomenMediaItem {
  id: string;
  src: string;
  alt: string;
  subtitle: string;
}

const WOMEN_GALLERY: WomenMediaItem[] = [
  {
    id: "women-1",
    src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101924/women1_yi6bxl.webp",
    alt: "Women that love God",
    subtitle: "Grace & Leadership",
  },
  {
    id: "women-2",
    src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101937/women2_nk682e.webp",
    alt: "Women's Choir",
    subtitle: "Harmonious Praise",
  },
  {
    id: "women-3",
    src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101958/women3_ps8rop.webp",
    alt: "Family Service",
    subtitle: "Undignified Worship",
  },
  {
    id: "women-4",
    src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101970/women4_jrezw9.webp",
    alt: "Women's Choir",
    subtitle: "Melodic Devotion",
  },
  {
    id: "women-5",
    src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101977/women5_hzw0rr.webp",
    alt: "Worship Ministry Choir",
    subtitle: "Sacred Harmonies",
  },
  {
    id: "women-6",
    src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101987/women6_yjmiat.webp",
    alt: "Intercessory Study Team",
    subtitle: "Word & Wisdom",
  },
  {
    id: "women-7",
    src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101997/women7_fwqwl3.jpg",
    alt: "Regional Fellowship Assembly",
    subtitle: "Covenant Connection",
  },
  {
    id: "women-8",
    src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101777/pactitioners_jepeb3.webp",
    alt: "Ministry Planning Counsel",
    subtitle: "Visionaries",
  },
  {
    id: "women-9",
    src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399272/photo_5773882741589395449_y_gl78fh.jpg",
    alt: "Sunday Celebration Service",
    subtitle: "Divine Worship",
  },
  {
    id: "women-10",
    src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101777/pactitioners_jepeb3.webp",
    alt: "Community Outreach Group",
    subtitle: "Generations Sharing",
  },
  {
    id: "women-11",
    src: "https://res.cloudinary.com/dalylashp/image/upload/v1741170863/woman_wt_4_cqpu2n.jpg",
    alt: "Grace and Truth Devotional",
    subtitle: "Reflections",
  },
  {
    id: "women-12",
    src: "https://res.cloudinary.com/dalylashp/image/upload/v1741170863/woman_wt_8_tun9s4.jpg",
    alt: "Faith Sharing Panels",
    subtitle: "Shared Testimony",
  },
  {
    id: "women-13",
    src: "https://res.cloudinary.com/dalylashp/image/upload/v1728400222/wordwoman5000_vpdxa7.jpg",
    alt: "Special Sanctuary Celebration",
    subtitle: "Legacy Gala",
  },
  {
    id: "women-14",
    src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399260/photo_5773882741589395443_y_sextth.jpg",
    alt: "Women of Purpose Brunch",
    subtitle: "Honor & Joy",
  },
  {
    id: "women-15",
    src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399259/photo_5773882741589395469_y_sf1lzt.jpg",
    alt: "Weekend Retreat Group",
    subtitle: "Sacred Sanctuary",
  },
  {
    id: "women-16",
    src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399249/photo_5773882741589395473_y_whjwsi.jpg",
    alt: "Sacred Praise Team",
    subtitle: "Heart & Soul",
  },
  {
    id: "women-17",
    src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399231/photo_5773882741589395504_y_yckiol.jpg",
    alt: "Evening Covenant Prayer",
    subtitle: "Spiritual Depth",
  },
  {
    id: "women-18",
    src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399228/photo_5773882741589395455_y_lbfnwy.jpg",
    alt: "Ministry Archive Session",
    subtitle: "Sisterhood Ties",
  },
];

const Page: FC = () => {
  const [showFullGallery, setShowFullGallery] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showMore, setShowMore] = useState<boolean>(false);

  const initialImages = WOMEN_GALLERY.slice(0, 12);
  const visibleImages = showMore ? WOMEN_GALLERY : initialImages;

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setShowFullGallery(true);
  };

  const closeGallery = useCallback(() => {
    setShowFullGallery(false);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % WOMEN_GALLERY.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + WOMEN_GALLERY.length) % WOMEN_GALLERY.length
    );
  }, []);

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

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showFullGallery, closeGallery, goToNext, goToPrev]);

  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#fff5f6] font-sans text-zinc-900 antialiased">
      <Header />

      <main className="pt-20 lg:pt-24">
        {/* HERO SECTION - Crimson / Burgundy Red Palette */}
        <section
          className="relative min-h-[32rem] overflow-hidden bg-cover bg-center sm:min-h-[38rem]"
          style={{ backgroundImage: `url(${givbg.src})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#500c19]/95 via-[#7a1226]/85 to-[#2a050d]/80" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#500c19]/90 to-transparent" />

          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-rose-500/20 blur-3xl" />
          <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-red-600/15 blur-3xl" />

          <div className="relative z-10 mx-auto flex min-h-[32rem] max-w-7xl items-center px-5 py-16 sm:min-h-[38rem] sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-950/40 px-4 py-2 backdrop-blur-md">
                <HiSparkles className="text-rose-300" />
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-rose-200">
                  WTBC Women&apos;s Ministry
                </span>
              </div>

              <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
                Women of
                <span className="mt-2 block bg-gradient-to-r from-rose-200 via-red-300 to-rose-400 bg-clip-text text-transparent">
                  Grace &amp; Purpose
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-sm font-medium leading-7 text-rose-100/90 sm:text-base">
                A place where women grow in faith, build meaningful
                relationships, discover their purpose, and encourage one
                another through every season of life.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-1 w-14 rounded-full bg-rose-500" />
                <span className="h-1 w-6 rounded-full bg-red-400" />
                <span className="h-1 w-3 rounded-full bg-rose-300" />
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION SECTION */}
        <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-rose-200/50 blur-3xl" />
          <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-red-100/60 blur-3xl" />

          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-rose-700" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-800">
                    Our Sisterhood
                  </span>
                </div>

                <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
                  Growing together in faith, friendship, wisdom, and purpose.
                </h2>

                <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-zinc-700 sm:text-lg">
                  The Women&apos;s Ministry at WTBC is a community where women
                  can connect, learn, pray, serve, and grow. We believe every
                  woman has a story, a calling, and a unique contribution to
                  make within the family of God.
                </p>

                <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-zinc-600">
                  Through fellowship, Bible study, prayer, leadership
                  development, outreach, and special gatherings, we create
                  opportunities for women to strengthen their faith and
                  encourage one another.
                </p>

                <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-rose-200 bg-rose-50/80 p-5">
                    <HiHeart className="mb-3 text-xl text-rose-600" />
                    <h3 className="text-xs font-black uppercase tracking-wider text-rose-950">
                      Faith
                    </h3>
                    <p className="mt-2 text-xs font-medium leading-5 text-rose-800/80">
                      Deepening our walk with God.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-red-200 bg-red-50/80 p-5">
                    <HiUsers className="mb-3 text-xl text-red-600" />
                    <h3 className="text-xs font-black uppercase tracking-wider text-red-950">
                      Sisterhood
                    </h3>
                    <p className="mt-2 text-xs font-medium leading-5 text-red-800/80">
                      Building meaningful relationships.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-rose-200 bg-rose-50/80 p-5">
                    <HiSparkles className="mb-3 text-xl text-rose-600" />
                    <h3 className="text-xs font-black uppercase tracking-wider text-rose-950">
                      Purpose
                    </h3>
                    <p className="mt-2 text-xs font-medium leading-5 text-rose-800/80">
                      Living out our God-given calling.
                    </p>
                  </div>
                </div>
              </div>

              {/* IMAGE DISPLAY */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto aspect-square max-w-[25rem]">
                  <div
                    className="absolute inset-0 scale-110 bg-contain bg-center bg-no-repeat opacity-25"
                    style={{ backgroundImage: `url(${grid.src})` }}
                  />

                  <div className="absolute -left-5 -top-5 h-40 w-40 rounded-[2rem] bg-rose-200/60" />

                  <div className="group relative h-full w-full overflow-hidden rounded-[2.5rem] border-[8px] border-white bg-zinc-100 shadow-2xl shadow-rose-950/15">
                    <Image
                      fill
                      src={WOMEN_GALLERY[6].src}
                      alt={WOMEN_GALLERY[6].alt}
                      priority
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 90vw, 40vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#500c19]/60 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="inline-flex rounded-full border border-rose-300/30 bg-rose-950/40 px-4 py-2 backdrop-blur-md">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-rose-100">
                          Together in Grace
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-5 -right-3 rounded-full border-4 border-white bg-rose-600 px-5 py-3 text-[9px] font-black uppercase tracking-[0.2em] text-white shadow-xl sm:right-0">
                    Faith • Sisterhood • Purpose
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT / CALL TO ACTION (Links to /contact) */}
        <section className="px-5 pb-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#500c19] via-[#701024] to-[#380610] p-7 shadow-2xl shadow-rose-950/20 sm:p-10 lg:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-500/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-3 flex items-center gap-2">
                    <HiSparkles className="text-rose-300" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-300">
                      Connect With Us
                    </span>
                  </div>

                  <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                    There&apos;s a place for you here.
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-rose-100/80">
                    For information about women&apos;s gatherings, Bible
                    studies, special events, leadership opportunities, or
                    ministry coordination, reach out to our team.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-xs font-black uppercase tracking-wider text-rose-950 shadow-lg transition-all duration-300 hover:bg-rose-500 hover:text-white active:scale-95"
                >
                  <span>Contact the Ministry</span>
                  <HiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="border-t border-rose-200/60 bg-gradient-to-b from-rose-50/50 to-[#fff5f6] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center sm:mb-16">
              <span className="inline-flex rounded-full bg-rose-100/80 px-4 py-2 text-[9px] font-black uppercase tracking-[0.3em] text-rose-800">
                Moments Together
              </span>

              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
                Life in the Ministry
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-6 text-zinc-600">
                A glimpse into the worship, fellowship, learning, celebration,
                and sisterhood that make our women&apos;s ministry special.
              </p>

              <div className="mx-auto mt-5 flex justify-center gap-1.5">
                <span className="h-1 w-10 rounded-full bg-rose-700" />
                <span className="h-1 w-5 rounded-full bg-red-500" />
                <span className="h-1 w-2 rounded-full bg-rose-300" />
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
              {visibleImages.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => openGallery(index)}
                  aria-label={`Open photo of ${image.alt}`}
                  className="group relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] border border-rose-100 bg-white text-left shadow-sm outline-none transition-all duration-500 hover:-translate-y-1 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-rose-400"
                >
                  <Image
                    fill
                    src={image.src}
                    alt={image.alt}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#500c19]/95 via-[#500c19]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-rose-300">
                      {image.subtitle}
                    </span>

                    <p className="mt-1 text-sm font-bold leading-snug text-white">
                      {image.alt}
                    </p>
                  </div>

                  <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-rose-950/40 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                    <HiArrowUpRight className="text-sm text-white" />
                  </div>
                </button>
              ))}
            </div>

            {/* Show More/Less Button */}
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={handleShowMore}
                className="inline-flex items-center gap-2 rounded-xl bg-rose-800 px-8 py-4 text-xs font-black uppercase tracking-[0.15em] text-white shadow-lg shadow-rose-950/20 transition-all duration-300 hover:bg-rose-600 active:scale-95"
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

        {/* LIGHTBOX MODAL */}
        {showFullGallery && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-rose-950/95 p-4 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Women's Ministry photo gallery lightbox"
          >
            <button
              type="button"
              onClick={closeGallery}
              aria-label="Close Gallery"
              className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-rose-800/80 bg-rose-900/60 text-rose-200 transition-all hover:bg-rose-500 hover:text-white sm:right-7 sm:top-7"
            >
              <FaTimes />
            </button>

            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-rose-800/80 bg-rose-900/60 text-rose-200 transition-all hover:bg-rose-500 hover:text-white sm:left-7 sm:h-12 sm:w-12"
            >
              <FaChevronLeft />
            </button>

            <div className="relative flex h-full max-h-[85vh] w-full max-w-6xl flex-col items-center justify-center">
              <div className="relative h-[70vh] w-full">
                <Image
                  fill
                  src={WOMEN_GALLERY[currentImageIndex].src}
                  alt={WOMEN_GALLERY[currentImageIndex].alt}
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              <div className="mt-5 text-center">
                <span className="inline-flex rounded-full bg-rose-600 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-white">
                  {currentImageIndex + 1} / {WOMEN_GALLERY.length}
                </span>

                <p className="mt-2 text-sm font-bold text-white sm:text-base">
                  {WOMEN_GALLERY[currentImageIndex].alt}
                </p>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-rose-300">
                  {WOMEN_GALLERY[currentImageIndex].subtitle}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-rose-800/80 bg-rose-900/60 text-rose-200 transition-all hover:bg-rose-500 hover:text-white sm:right-7 sm:h-12 sm:w-12"
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