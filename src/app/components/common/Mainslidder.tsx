"use client"
import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pastor1 from '../../img/pastor.webp'
import pastor2 from '../../img/pastor2.webp'
import choir from '../../img/choir.webp'
import drama from '../../img/drama.webp'
import certa1 from '../../img/serious.jpg'
import ayanfe from '../../img/ayanfe.webp'
import kenny from '../../img/kenny.webp'
import yportal from '../../img/yoth1.webp'
import testimony from '../../img/testimony.webp'
import Image from 'next/image';
import { FaUserAlt, FaChalkboardTeacher, FaChurch } from 'react-icons/fa';
import { MdCardGiftcard } from 'react-icons/md';

const FreeStyle = () => {
  const pic1 = pastor1;
  const pic2 = certa1;
  const pic3 = choir;
  const pic4 = pastor2;
  const pic5 = choir;
  const pic6 = testimony;
  const pic7 = ayanfe;
  const pic8 = drama;
  const pic9 = yportal;
  const pic10 = kenny;

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
    autoplaySpeed: 4000,
    length: 10
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen">
  <div className="container my-[9rem] w-full relative">
    <div className="absolute inset-0 bg-black opacity-50 pointer-events-none z-10 h-[97%] 2xl:h-[98.3%]"></div> {/* New div for shadow */}
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
          <div className="relative flex flex-col items-center justify-center w-full">
            <Image
              width={2000}
              height={600}
              src={item.image}
              alt="service"
              className="w-full  object-cover mb-4 xl:h-[40rem] 2xl:h-[40rem] lg:h-[30rem] md:h-[33rem] h-[17rem]"
            />
            <div id='imgtext' className='absolute font-bold top-0 left-0 w-full h-full text-white text-[2.9rem] m-[5rem] 2xl:text-[5rem] 2xl:m-[10rem] md:mt-[4rem] xl:mt-[5rem] lg:mt-[4rem] 2xl:mt-[10rem] mt-[3.4rem]'>
              <h2>The Word</h2>
              <h2>Tabernacle</h2>
              <p className='text-[1.1rem] font-normal'>Building word practitioners...</p>
              <div>
                <button className='text-[1.1rem] font-normal mt-5 bg-red-500 hover:bg-red-700 md:w-[8rem] lg:w-[8rem] xl:w-[8rem] 2xl:w-[8rem] h-[2rem] md:h-[3rem] lg:h-[3rem] xl:h-[3rem] 2xl:h-[3rem] w-[5rem] text-white ml-3'>JOIN US</button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </Slider>
  </div>
      <div id='imgnav' className="absolute shadow-sm rounded-md lg:mt-[36rem] xl:mt-[36rem] 2xl:mt-[43rem] z-30 mt-[27rem] md:mt-[36rem] lg:w-[70%] xl:w-[70%] md:w-[70%] mx-auto 2xl:w-3/5   pt-[1.25rem]  lg:pt-[2.125rem] px-[1.25rem] lg:pl-[2.5rem] lg:pr-[1.25rem] md:pb-[2.375rem] lg:pb-[2.375rem] xl:pb-[2.375rem] 2xl:pb-[2.375rem] bg-white   mb-[2.5rem]">
      <div className="ml-[1.25rem] lg:ml-0">
        QUICK LINKS
      </div>
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
  )
}

export default FreeStyle
