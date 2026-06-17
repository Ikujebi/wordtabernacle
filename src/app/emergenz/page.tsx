"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { FaChevronRight, FaPlus } from "react-icons/fa";
import givbg from "../img/giveimg.jpg";

interface YouthMediaItem {
  image: string;
  caption?: string;
}

const Page: FC = () => {
  // Ordered gallery stream
  const youthpic: YouthMediaItem[] = [
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1725101517/choir7_umfdyb.webp", caption: "Sanctuary Choir" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579634/word14_apmp4h.jpg", caption: "Youth Gathering" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579602/word_mrsJJ4_uerkqo.jpg", caption: "Midweek Fellowship" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1725356890/5933838834204786631_hg4uhx.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1725129876/photo_5933838834204786583_y_ivyxxk.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579602/word5_l7jfsl.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579603/word6_dojbxq.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579634/word15_ctucr4.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579626/word013_ktwgaa.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579603/word10_xclcex.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579604/word11_omyh9y.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579603/word010_iirv1t.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1725102028/youth1_jqttiv.webp" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579603/word8_zg3qwb.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579602/word06_mzxdqf.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1744039980/6001458593154582620_ilsqx9.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1727168960/photo_6019429698393719060_y_s4icix.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1727168947/photo_6019429698393719056_y_m3vakz.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1727168969/photo_6019429698393719042_y_mj1qhe.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1727168835/photo_6019429698393719085_y_kk7p7y.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1727168912/photo_6019429698393719052_y_nnhf8g.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1728399270/photo_5773882741589395450_y_wcbs2a.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1728399269/photo_5773882741589395446_y_tkv1ro.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1744040171/6001458593154582629_gyhfmg.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1744040164/6001458593154582634_pjutzn.jpg" },
  ];

  // Separate signature highlights from main archive grid
  const highlights = youthpic.slice(0, 3);
  const coreArchive = youthpic.slice(3);

  // Pagination state layout configuration
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const displayedArchive = coreArchive.slice(0, visibleCount);
  const hasMoreToRender = visibleCount < coreArchive.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, coreArchive.length));
  };

  return (
    <div className="w-full bg-zinc-50 min-h-screen overflow-hidden antialiased font-sans">
      <main className="pt-20 lg:pt-24">
        
        {/* Cinematic Header Block */}
        <div
          className="relative h-[26rem] flex items-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${givbg.src})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-zinc-950/40 z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 mt-8">
            <div className="max-w-2xl space-y-3">
              <span className="inline-block text-xs font-black tracking-[0.4em] text-red-500 uppercase">
                WTBC Communities
              </span>
              <h1 className="text-white font-black text-4xl sm:text-6xl tracking-tight uppercase leading-none">
                Next Generation
              </h1>
              <p className="text-zinc-300 text-sm sm:text-base max-w-lg leading-relaxed font-medium pt-2">
                Empowering teenagers and young adults to discover their true kingdom identity, foster deep fellowship, and live passionately for Christ.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Context Card Layout Array */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative -translate-y-12 z-30">
          <div className="bg-white rounded-2xl border border-zinc-200/60 shadow-xl shadow-zinc-200/30 p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-3 text-center md:text-left">
              <h2 className="text-xs font-black tracking-[0.2em] text-red-600 uppercase">Our Core Mission</h2>
              <p className="text-xl font-black text-zinc-900 tracking-tight leading-tight">
                A vibrant community built for faith, purpose, and impact.
              </p>
              <div className="w-8 h-[2px] bg-red-600 mx-auto md:mx-0 mt-2" />
            </div>
            <div className="md:col-span-7 text-zinc-600 text-sm sm:text-base leading-relaxed font-medium space-y-4 md:border-l md:border-zinc-100 md:pl-8">
              <p>
                WTBC Youth Ministries are a dedicated space where young minds grow, worship, fellowship, and serve together in an authentic and safe environment.
              </p>
              <p className="text-zinc-500 text-xs sm:text-sm">
                Through intentional small groups, regional retreats, dynamic outreach, and midweek assemblies, we equip this generation to affect every sphere of society to the glory of God.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Highlights Showcase Rail */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black tracking-[0.3em] text-red-600 uppercase">Ministry Focus</span>
              <h2 className="text-zinc-900 font-black text-xl sm:text-2xl tracking-tight uppercase">Featured Snapshots</h2>
            </div>
            <span className="h-[1px] bg-zinc-200 flex-grow mx-4 hidden md:block mb-2" />
            <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
              Signature Pillars <FaChevronRight className="text-[10px] text-red-600" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <div key={i} className="group relative h-96 w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-200/40 shadow-md">
                <Image 
                  fill 
                  src={item.image} 
                  alt={item.caption || "Highlight card"} 
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  sizes="(max-w-768px) 100vw, 33vw"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10" />
                <div className="absolute bottom-5 left-5 z-20 space-y-1">
                  <span className="inline-block text-[9px] font-black bg-red-600 text-white tracking-widest uppercase px-2 py-0.5 rounded">0{i + 1} // SPOTLIGHT</span>
                  <h3 className="text-white font-bold text-base tracking-tight">{item.caption || "Community Life"}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Archive Portfolio Loop Container */}
        <section className="bg-zinc-100 border-t border-zinc-200/60 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="text-center space-y-1">
              <span className="text-[10px] font-black tracking-[0.4em] text-red-600 uppercase">The Archive</span>
              <h2 className="text-zinc-900 font-black text-2xl sm:text-3xl tracking-tight uppercase">Ministry Spotlights</h2>
              <div className="w-6 h-0.5 bg-zinc-400 mx-auto mt-2" />
            </div>

            {/* Pagination Media Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {displayedArchive.map((item, i) => (
                <div 
                  key={i} 
                  className="group relative h-72 sm:h-80 w-full overflow-hidden rounded-xl bg-white border border-zinc-200 shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <Image 
                    fill
                    src={item.image} 
                    alt={`WTBC Youth media collection photo index ${i + 4}`}
                    className="object-cover object-top transition-transform duration-700 scale-100 group-hover:scale-103"
                    sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Dynamic Load Control Action Hub Footer */}
            {hasMoreToRender && (
              <div className="pt-6 text-center">
                <button
                  onClick={handleLoadMore}
                  className="inline-flex items-center gap-2 bg-white hover:bg-zinc-900 text-zinc-900 hover:text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl border border-zinc-300 hover:border-zinc-900 shadow-sm transition-all duration-300 active:scale-95"
                >
                  <FaPlus className="text-[10px]" /> Load More Media
                </button>
              </div>
            )}

          </div>
        </section>

      </main>
    </div>
  );
};

export default Page;