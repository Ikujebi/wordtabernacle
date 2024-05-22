"use client"
import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cert1 from '../img/pst1.jpg'
import cert2 from '../img/pst2.jpg'
import cert3 from '../img/choir.jpeg'
import cert4 from '../img/aerial.jpeg'
import certa1 from '../img/serious.jpg'
import Image from 'next/image';

const FreeStyle = () => {
  const pic1 = certa1;
  const pic2 = cert1;
  const pic3 = cert3;
  const pic4 = cert2;
  const pic5 = cert3;
  const pic6 = cert3;
  const pic7 = cert2;
  const pic8 = cert4;
  const pic9 = cert1;
  const pic10 = certa1;

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
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
    autoplaySpeed: 5000,
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="container my-[9rem] w-full">
        <Slider {...sliderSettings}>
          {slides.map((item, itemIndex) => (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              key={itemIndex}
              className="flex justify-center items-center" // Center items in motion.div
            >
              <div id='main' className="relative  flex flex-col items-center justify-center w-full ">
                <Image
                  width={1000}
                  height={600}
                  src={item.image}
                  alt="service"
                  className="w-full mb-4 xl:h-[40rem] 2xl:h-[40rem] lg:h-[30rem] md:h-[33rem] h-[17rem]"
                />
                <div id='imgtext' className='absolute font-bold top-0 left-0 w-full h-full  text-white text-[2.9rem] m-[5rem]'>
                  <h2>The Word</h2>
                  <h2>Tabernacle</h2>
                  <p className='text-[1.1rem] font-normal'>Building word practitioners...</p>
                  <div>
                    <button className='text-[1.1rem] font-normal mt-5 bg-red-500 hover:bg-red-700 w-[8rem] h-[3rem] text-white ml-3'>JOIN US</button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default FreeStyle
