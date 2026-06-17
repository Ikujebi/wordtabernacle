"use client";

import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaUserAlt, FaChalkboardTeacher, FaChurch } from "react-icons/fa";
import { MdCardGiftcard } from "react-icons/md";
import Link from "next/link";

const FreeStyle = () => {
  const pic1 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101809/pastor_ypsalo.webp";
  const pic2 = "https://res.cloudinary.com/dalylashp/image/upload/v1742208049/4B3A0086_bceoyc.jpg";
  const pic3 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101517/choir7_umfdyb.webp";
  const pic4 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101508/choir_ekkuf6.webp";
  const pic5 = "https://res.cloudinary.com/dalylashp/image/upload/v1742208222/4B3A0582_jjz3l6.jpg";
  const pic6 = "https://res.cloudinary.com/dalylashp/image/upload/v1742204404/IMG_9136_d3n52q.webp";
  const pic7 = "https://res.cloudinary.com/dalylashp/image/upload/v1726579634/word014_mzx1rz.jpg";
  const pic8 = "https://res.cloudinary.com/dalylashp/image/upload/v1741170862/pastor_wt_2_rmubmv.jpg";
  const pic9 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101584/drama_bnrzlz.webp";
  const pic10 = "https://res.cloudinary.com/dalylashp/image/upload/v1742206454/4B3A0551_-_Copy_lil8ib.jpg";
  const pic11 = "https://res.cloudinary.com/dalylashp/image/upload/v1725356885/5933838834204786673_a2ehgl.jpg";
  const pic12 = "https://res.cloudinary.com/dalylashp/image/upload/v1742206453/IMG_0228_-_Copy_tkj88y.jpg";
  const pic13 = "https://res.cloudinary.com/dalylashp/image/upload/v1725356883/5954255936203899439_foslh0.jpg";
  const pic14 = "https://res.cloudinary.com/dalylashp/image/upload/v1742206436/IMG_9649_-_Copy_nagdeo.jpg";
  const pic15 = "https://res.cloudinary.com/dalylashp/image/upload/v1741170792/5917919615231575331_f5inmd.jpg";
  const pic16 = "https://res.cloudinary.com/dalylashp/image/upload/v1742206437/IMG_9224_-_Copy_aido05.jpg";
  const pic17 = "https://res.cloudinary.com/dalylashp/image/upload/v1725356882/5954255936203899432_oht64e.jpg";

  const slides = [
    { image: pic1 }, { image: pic2 }, { image: pic3 }, { image: pic4 },
    { image: pic5 }, { image: pic6 }, { image: pic7 }, { image: pic8 },
    { image: pic9 }, { image: pic10 }, { image: pic11 }, { image: pic12 },
    { image: pic13 }, { image: pic14 }, { image: pic15 }, { image: pic16 },
    { image: pic17 },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };

  const textVariants = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="w-full bg-zinc-950 relative overflow-hidden flex flex-col items-center justify-center mt-[7.55rem]">
      {/* Decorative background radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-20">
        
        {/* Left Side: Modern Asymmetric Typography Blocks */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={textVariants}
          className="col-span-1 lg:col-span-5 text-white space-y-6 order-2 lg:order-1 mt-6 lg:mt-0"
        >
          <div className="space-y-2">
            <span className="text-red-500 font-mono text-xs uppercase tracking-[0.3em] block">
              Welcome to Word Tabernacle
            </span>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05]">
              Building word <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                practitioners.
              </span>
            </h1>
          </div>
          
          <p className="text-zinc-400 font-light text-base sm:text-lg leading-relaxed max-w-md">
            Discover a community dedicated to spiritual growth, deep biblical foundations, 
            and vibrant, family-style worship encounters.
          </p>

          <div className="pt-4">
            <button className="group relative px-8 h-14 bg-red-600 hover:bg-red-700 text-white text-sm font-bold tracking-widest rounded-lg transition-all duration-300 shadow-lg shadow-red-900/30 overflow-hidden">
              <Link href="/contact" className="relative z-10 flex items-center gap-2">
                JOIN US THIS SUNDAY <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </motion.div>

        {/* Right Side: High-End Framed Media Showreel */}
        <div className="col-span-1 lg:col-span-7 order-1 lg:order-2 w-full">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-zinc-800/50 bg-zinc-900 ring-1 ring-white/5">
            
            {/* Cinematic Gradient Vignette Over Slider Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-black/20 z-10 pointer-events-none" />
            
            <Slider {...sliderSettings}>
              {slides.map((item, itemIndex) => (
                <div key={itemIndex} className="relative outline-none h-full">
                  <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[480px]">
                    <Image
                      fill
                      quality={90}
                      src={item.image}
                      alt="Church service lifecycle slide"
                      priority={itemIndex === 0}
                      sizes="(max-w-1024px) 100vw, 800px"
                      className="object-cover object-top filter contrast-[1.02] brightness-[0.95]"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

      </div>

      {/* Overlapping Quick Links Floating Navigation Strip */}
      <div className="w-full max-w-[1200px] mx-auto px-4 mt-12 lg:mt-20 relative z-30">
        <div className="w-full bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y-0 divide-x-0 sm:grid-cols-4">
            
            {/* Card item 1 */}
            <Link href="/contact" className="flex items-center gap-4 cursor-pointer group w-full">
              <div className="flex shrink-0 w-12 h-12 bg-zinc-800 text-zinc-400 group-hover:bg-red-600 group-hover:text-white rounded-xl justify-center items-center shadow-inner transition-all duration-300 group-hover:scale-105">
                <FaUserAlt className="text-base" />
              </div>
              <div className="space-y-0.5">
                <p className="font-mono text-[0.65rem] text-red-500 tracking-wider font-semibold uppercase">Fellowship</p>
                <h3 className="font-bold text-sm sm:text-base text-zinc-100 group-hover:text-white transition-colors">
                 BECOME A MEMBER 
                </h3>
              </div>
            </Link>

            {/* Card item 2 */}
            <Link href="/giving" className="flex items-center gap-4 cursor-pointer group w-full">
              <div className="flex shrink-0 w-12 h-12 bg-zinc-800 text-zinc-400 group-hover:bg-red-600 group-hover:text-white rounded-xl justify-center items-center shadow-inner transition-all duration-300 group-hover:scale-105">
                <FaChalkboardTeacher className="text-base" />
              </div>
              <div className="space-y-0.5">
                <p className="font-mono text-[0.65rem] text-red-500 tracking-wider font-semibold uppercase">Ministries</p>
                <h3 className="font-bold text-sm sm:text-base text-zinc-100 group-hover:text-white transition-colors">
                  GET INVOLVED
                </h3>
              </div>
            </Link>

            {/* Card item 3 */}
            <Link href="/workforce" className="flex items-center gap-4 cursor-pointer group w-full">
              <div className="flex shrink-0 w-12 h-12 bg-zinc-800 text-zinc-400 group-hover:bg-red-600 group-hover:text-white rounded-xl justify-center items-center shadow-inner transition-all duration-300 group-hover:scale-105">
                <MdCardGiftcard className="text-lg" />
              </div>
              <div className="space-y-0.5">
                <p className="font-mono text-[0.65rem] text-red-500 tracking-wider font-semibold uppercase">Generosity</p>
                <h3 className="font-bold text-sm sm:text-base text-zinc-100 group-hover:text-white transition-colors">
                  ONLINE GIVING
                </h3>
              </div>
            </Link>

            {/* Card item 4 */}
            <Link href="/contact#map" className="flex items-center gap-4 cursor-pointer group w-full">
              <div className="flex shrink-0 w-12 h-12 bg-zinc-800 text-zinc-400 group-hover:bg-red-600 group-hover:text-white rounded-xl justify-center items-center shadow-inner transition-all duration-300 group-hover:scale-105">
                <FaChurch className="text-base" />
              </div>
              <div className="space-y-0.5">
                <p className="font-mono text-[0.65rem] text-red-500 tracking-wider font-semibold uppercase">Visit Us</p>
                <h3 className="font-bold text-sm sm:text-base text-zinc-100 group-hover:text-white transition-colors">
                  OUR LOCATION
                </h3>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeStyle;