"use client";

import { FC } from "react";
import Image from "next/image";
import givbg from "../img/giveimg.jpg";
import redbg from "../img/redbgi.webp";

interface ValueItem {
  title: string;
  message: string;
  scripture?: string;
}

const Page: FC = () => {
  const values: ValueItem[] = [
    {
      title: "Excellence",
      message: "We strive for excellence in all we do, honoring God with our best efforts and continuously improving in our service, ministry, and personal growth.",
      scripture: "Colossians 3:23; Proverbs 22:29"
    },
    {
      title: "Love",
      message: "We are committed to loving God and people unconditionally, demonstrating Christ-like compassion, kindness, and selflessness in our relationships and service.",
      scripture: "John 13:34-35; 1 Corinthians 13:4-7"
    },
    {
      title: "Integrity",
      message: "We uphold truth and honesty in all aspects of life, ensuring that our words, actions, and decisions align with God’s principles.",
      scripture: "Proverbs 11:3; 2 Corinthians 8:21"
    },
    {
      title: "Accountability",
      message: "We are personally responsible and accountable to one another for our attitude, actions, and integrity as a means of accomplishing vision, building character, ensuring sound decision-making, and growing as balanced disciples.",
      scripture: "Acts 15:4; Job 31:6"
    },
    {
      title: "Creativity",
      message: "We embrace God-given creativity in expressing our faith, solving problems, and advancing His Kingdom in innovative and impactful ways.",
      scripture: "Exodus 35:31-32; Proverbs 8:12"
    },
  ];

  const msgg = "https://res.cloudinary.com/dalylashp/image/upload/v1741177452/WhatsApp_Image_2025-03-05_at_12.17.13_PM_peifwo.jpg";
  const msgg2 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101712/msg-1001955056097-3260_qxe986.webp";

  return (
    <div className="w-full bg-white min-h-screen overflow-hidden antialiased font-sans">
      <main className="pt-20 lg:pt-24">
        
        {/* Dynamic Hero Banner Deck */}
        <div
          className="relative h-[26rem] flex items-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${givbg.src})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/40 to-transparent z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
            <div className="max-w-2xl space-y-3">
              <span className="inline-block text-xs font-black tracking-[0.3em] text-red-500 uppercase">
                Foundations of Faith
              </span>
              <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-none">
                Vision, Mission <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-red-400">&amp; Core Values</span>
              </h1>
              <div className="w-16 h-1 bg-red-600 rounded-full mt-6" />
            </div>
          </div>
        </div>

        {/* Core Pillars Array Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 space-y-32">
          
          {/* Block 1: Vision Statement */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6 order-1">
              <div className="flex items-center gap-3">
                <span className="w-12 h-[1px] bg-red-600" />
                <h2 className="text-xs font-black tracking-[0.25em] text-red-600 uppercase">
                  Our Vision
                </h2>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight leading-snug">
                &ldquo;Empowering Lives, Raising Word Practitioners.&rdquo;
              </h3>
              
              {/* Isolated Scripture Framing Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-50 border border-zinc-100 text-zinc-500 font-mono text-[11px] font-bold">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
                JOHN 1:12-14
              </div>

              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed pt-2 border-t border-zinc-100">
                Word Tabernacle Church is more than a building consisting of
                four walls. It is a spiritual vehicle for socio-economic,
                system-level change committed to the Vision of &ldquo;Everyone
                Thriving&rdquo;.
              </p>
            </div>
            
            <div className="lg:col-span-7 relative order-2 group">
              <div className="absolute -inset-4 bg-zinc-50 rounded-2xl -z-10 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative h-72 sm:h-[28rem] w-full overflow-hidden rounded-xl shadow-xl shadow-zinc-100 border border-zinc-100">
                <Image
                  fill
                  src={msgg2}
                  alt="Word Tabernacle Sanctuary Community"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-w-1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Block 2: Mission Statement (Alternating Matrix Layout Orientation) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 relative order-2 lg:order-1 group">
              <div className="absolute -inset-4 bg-zinc-50 rounded-2xl -z-10 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative h-72 sm:h-[28rem] w-full overflow-hidden rounded-xl shadow-xl shadow-zinc-100 border border-zinc-100">
                <Image
                  fill
                  src={msgg}
                  alt="Word Tabernacle Ministries Outreach"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-w-1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <span className="w-12 h-[1px] bg-red-600" />
                <h2 className="text-xs font-black tracking-[0.25em] text-red-600 uppercase">
                  Our Mission
                </h2>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight leading-snug">
                &ldquo;To see everyone in connection with us become who God designed them to be.&rdquo;
              </h3>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed pt-2 border-t border-zinc-100">
                Word Tabernacle Church is more than a building consisting of
                four walls. It is a spiritual vehicle for socio-economic,
                system-level change committed to the Vision of &ldquo;Empowering Lives&rdquo;.
              </p>
            </div>
          </section>

        </div>

        {/* Dynamic Values Visual Canvas Accent Separator */}
        <div
          className="relative h-64 flex items-center justify-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${redbg.src})` }}
        >
          <div className="absolute inset-0 bg-zinc-950/85 backdrop-blur-[1px]" />
          <div className="relative text-center max-w-xl px-4 space-y-2">
            <span className="text-[10px] font-black tracking-[0.4em] text-red-500 uppercase">
              The Framework of Our Culture
            </span>
            <h2 className="text-white font-black text-3xl sm:text-4xl tracking-tight uppercase">
              Our Values
            </h2>
            <div className="w-12 h-[2px] bg-white mx-auto mt-4" />
          </div>
        </div>

        {/* Dynamic Pillar Layout Structure */}
        <section className="bg-zinc-50/60 py-20 sm:py-32 border-t border-b border-zinc-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6">
              
              {values.map((value, index) => (
                <article 
                  key={index} 
                  className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-12 p-6 sm:p-8 bg-white border border-zinc-100/80 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-zinc-200/60 group overflow-hidden"
                >
                  {/* Active Highlight Pillar Bar Anchor */}
                  <div className="absolute left-0 inset-y-0 w-1 bg-red-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r-md" />
                  
                  <div className="w-full md:w-44 shrink-0 space-y-1">
                    <h3 className="font-black text-lg text-zinc-900 group-hover:text-red-700 transition-colors uppercase tracking-wider">
                      {value.title}
                    </h3>
                  </div>

                  <div className="w-full space-y-3">
                    <p className="text-zinc-600 text-sm sm:text-[15px] leading-relaxed font-medium">
                      {value.message.split(". (")[0]}.
                    </p>
                    
                    {value.scripture && (
                      <div className="inline-block text-[11px] font-bold font-mono tracking-wide text-red-700 bg-red-50/60 rounded px-2.5 py-1 border border-red-100/40">
                        {value.scripture}
                      </div>
                    )}
                  </div>
                </article>
              ))}

            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Page;