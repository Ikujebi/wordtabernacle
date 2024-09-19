"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaUserAlt, FaChalkboardTeacher, FaChurch } from "react-icons/fa";
import { MdCardGiftcard } from "react-icons/md";

const FreeStyle = () => {
  const pic1 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101809/pastor_ypsalo.webp";
  const pic2 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101517/choir7_umfdyb.webp";
  const pic3 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101508/choir_ekkuf6.webp";
  const pic4 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101899/ruth_vn60xa.jpg";
  const pic5 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101435/chil_h7ppg5.webp";
  const pic6 = "https://res.cloudinary.com/dalylashp/image/upload/v1726579634/word014_mzx1rz.jpg";
  const pic7 = "https://res.cloudinary.com/dalylashp/image/upload/v1726579603/word10_xclcex.jpg";
  const pic8 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101584/drama_bnrzlz.webp";
  const pic9 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101572/dance_r0rtdv.webp";
  const pic10 = "https://res.cloudinary.com/dalylashp/image/upload/v1725356885/5933838834204786673_a2ehgl.jpg";
  const pic11 = "https://res.cloudinary.com/dalylashp/image/upload/v1725356883/5954255936203899439_foslh0.jpg"
const pic12 = "https://res.cloudinary.com/dalylashp/image/upload/v1726579634/word15_ctucr4.jpg"
const pic13 = "https://res.cloudinary.com/dalylashp/image/upload/v1725356891/5933838834204786637_esw96j.jpg"
const pic14 = "https://res.cloudinary.com/dalylashp/image/upload/v1725356890/5933838834204786640_r1lu2y.jpg"
const pic15 = "https://res.cloudinary.com/dalylashp/image/upload/v1725356882/5954255936203899432_oht64e.jpg"
  const [_index, setIndex] = useState(0);
  const slides = [
    { image: pic1 },
    { image: pic2 },
    { image: pic3 },
    { image: pic4 },
    { image: pic5 },
    { image: pic6 },
    { image: pic7 },
    { image: pic8 },
    { image: pic9 },
    { image: pic10 },
    { image: pic11 },
    { image: pic12 },
    { image: pic13 },
    { image: pic14 },
    { image: pic15 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  const cardVariants = {
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "-100%" },
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    length: 10,
    arrows: false,
    
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen xl:mt-[-10rem] w-screen  2xl:mt-[1rem] md:px-[2rem]  2xl:px-[4rem]">
      <div className="container  my-[9rem] md:my-[8.3rem] lg:my-[8.3rem] xl:px-[3rem] 2xl:px-[0]  w-full relative ">

        <div className="absolute inset-0  bg-black opacity-10 pointer-events-none z-10 h-[95%] md:h-[97%] lg:h-[97%] xl:h-[97%]  2xl:h-[97.92%] "></div>{" "}

        {/* New div for shadow */}
        <Slider {...sliderSettings}>
          {slides.map((item, itemIndex) => (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              key={itemIndex}
              className="flex justify-center items-center relative z-20"
            >
              <div className="relative flex flex-col  items-center justify-center w-full">
                <Image
                  width={2000}
                  height={100}
                  quality={90}
                  src={item.image}
                  alt="service"
                  className="w-full mb-4  xl:h-[40rem]  2xl:h-[70svh] lg:h-[30rem] md:h-[33rem] h-[17rem] object-cover object-top"
                />
                <div
                  id="imgtext"
                  className="absolute font-bold top-0 left-0 w-full h-full text-white text-[2.9rem] m-[5rem] 2xl:text-[5rem] 2xl:m-[10rem] md:mt-[4rem] xl:mt-[5rem] lg:mt-[4rem] 2xl:mt-[10rem] mt-[3.4rem]"
                >
                  <h2>Word</h2>
                  <h2>Tabernacle</h2>
                  <p className="text-[1.1rem] font-normal">
                    Building word practitioners...
                  </p>
                  <div className="relative">
                    <button className="absolute  text-[1.1rem] font-normal md:mt-5 lg:mt-5 xl:mt-5 2xl:mt-5 mt-[.8rem] bg-red-500 hover:bg-red-700 md:w-[8rem] lg:w-[8rem] xl:w-[8rem] 2xl:w-[8rem] h-[2rem] md:h-[3rem] lg:h-[3rem] xl:h-[3rem] 2xl:h-[3rem] w-[5rem] text-white ml-3">
                      JOIN US
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
      <div
        id="imgnav"
        className="absolute shadow-sm rounded-md lg:mt-[36rem] xl:mt-[36rem] 2xl:mt-[43rem] z-30 mt-[27rem] md:mt-[36rem] lg:w-[70%] xl:w-[70%] md:w-[70%] mx-auto 2xl:w-3/5   pt-[1.25rem]  lg:pt-[2.125rem] px-[1.25rem] lg:pl-[2.5rem] lg:pr-[1.25rem] md:pb-[2.375rem] lg:pb-[2.375rem] xl:pb-[2.375rem] 2xl:pb-[2.375rem] bg-white   mb-[2.5rem]"
      >
        <h2 className="ml-[1.25rem] lg:ml-0 pb-3">QUICK LINKS</h2>
        <div className="flex justify-between flex-wrap gap1">
          <div className="flex items-center">
            <div className="flex w-5 lg:w-[2.8125rem] xl:w-[2.8125rem] 2xl:w-[2.8125rem] md:w-[2.8125rem] h-6 lg:h-[2.8125rem] xl:h-[2.8125rem] 2xl:h-[2.8125rem] md:h-[2.8125rem] bg-[#FFF0F0] rounded-[0.3125rem] justify-center items-center">
              <FaUserAlt />
            </div>
            <div className="font-semibold text-[0.55rem] md:text-[0.9375rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem] ml-2">
              BECOME A <br />
              MEMBER
            </div>
          </div>
          <div className="flex items-center cursor-pointer">
            <div className="flex w-5 lg:w-[2.8125rem] xl:w-[2.8125rem] 2xl:w-[2.8125rem] md:w-[2.8125rem] h-6 lg:h-[2.8125rem] xl:h-[2.8125rem] 2xl:h-[2.8125rem] md:h-[2.8125rem] bg-[#FFF0F0] rounded-[0.3125rem] justify-center items-center">
              <FaChalkboardTeacher />
            </div>
            <div className="font-semibold text-[0.55rem] md:text-[0.9375rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem] ml-2">
              GET <br />
              INVOLVED
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex w-5 lg:w-[2.8125rem] xl:w-[2.8125rem] 2xl:w-[2.8125rem] md:w-[2.8125rem] h-6 lg:h-[2.8125rem] xl:h-[2.8125rem] 2xl:h-[2.8125rem] md:h-[2.8125rem] bg-[#FFF0F0] rounded-[0.3125rem] justify-center items-center">
              <MdCardGiftcard />
            </div>
            <div className="font-semibold text-[0.55rem] md:text-[0.9375rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem] ml-2">
              GIVING <br />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex w-5 lg:w-[2.8125rem] xl:w-[2.8125rem] 2xl:w-[2.8125rem] md:w-[2.8125rem] h-6 lg:h-[2.8125rem] xl:h-[2.8125rem] 2xl:h-[2.8125rem] md:h-[2.8125rem] bg-[#FFF0F0] rounded-[0.3125rem] justify-center items-center">
              <FaChurch />
            </div>
            <div className="font-semibold text-[0.55rem] md:text-[0.9375rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem] ml-2">
              LOCATIONS <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeStyle;
