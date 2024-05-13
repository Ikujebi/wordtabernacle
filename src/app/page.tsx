"use client"
import Link from 'next/link';
import { Button } from 'antd'
import { FaChalkboardTeacher, FaChurch, FaUserAlt } from 'react-icons/fa';
import { MdCardGiftcard } from 'react-icons/md';
import pastor2 from './img/pst2.jpg'
import pastor1 from './img/pst1.jpg'
import choir from './img/choirblur.png'
import femi from './img/femiblur.jpeg'
import ruth from './img/ruthblur.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { motion } from "framer-motion";
import Slider from "react-slick";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import {useState,useEffect} from 'react'
import Image from 'next/image';

export default function home() {
  
const pic2 =pastor1
const pic3 =pastor2


    const [_index, setIndex] = useState(0);
  const slides = [
    
    {
      image: pic2,
    },
    {
      image: pic3,
    },
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

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

  console.log(pic2.src);
  return (
    <div className=' flex flex-col items-center justify-center h-[100svh]'>
      <div className='text-black'>
        <p>dgcgcftgfdudvagvucdvbhbvhbhbvhcbhbshbv</p>
        <div>
          <Header />

          <div className="relative mb-[1.5rem] sm:mb-[1.75rem] md:mb-[2.25rem] lg:mb-[2.5rem] pt-[1.5rem] sm:pt-[1.75rem] md:pt-[3rem] lg:pt-[3rem]">
            <div className="px-0 sm:px-0 md:px-3 lg:px-3 mt-3">
            <div className="relative mb-[1.5rem] sm:mb-[1.75rem] md:mb-[2.25rem] lg:mb-[2.5rem] pt-[1.5rem] sm:pt-[1.75rem] md:pt-[3rem] lg:pt-[3rem]">
 
</div>


<Slider {...sliderSettings}>
      {slides.map((item, itemIndex) => (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          key={itemIndex}
        >
          <img
            src={item.image.src}
            width={200}
            height={100}
            alt="service"
            className="w-full flex justify-center mx-auto md:w-[60%] xl:w-[70%] 2xl:w-[70%]   mb-4  xl:h-[40rem] 2xl:h-[40rem] lg:h-[30rem] md:h-[33rem] h-[17rem]"
          />
        </motion.div>
      ))}
    </Slider>
    <p>dgcgcftgfdudvagvucdvbhbvhbhbvhcbhbshbv</p>

{/* Quick links section */}
<div className="flex justify-center w-[100%]">
  <div className="w-full md:w-80 absolute mx-auto mt-[-100px] pt-[1.25rem] sm:pt-[1.25rem] md:pt-[2rem] lg:pt-[2.125rem] pl-[1.25rem] sm:pl-[1.25rem] md:pl-[2.5rem] lg:pl-[2.5rem] pr-[1.25rem] pb-[2.375rem] bg-white zind relative z-100 mb-[2.5rem]">
    {/* Quick links content */}
  </div>
</div>
            </div>
            <div className="flex justify-center w-[100%]"

            >
              <div className="w-full md:w-80 absolute mx-auto mt-[-100px] pt-[1.25rem] sm:pt-[1.25rem] md:pt-[2rem] lg:pt-[2.125rem] pl-[1.25rem] sm:pl-[1.25rem] md:pl-[2.5rem] lg:pl-[2.5rem] pr-[1.25rem] pb-[2.375rem] bg-white zind relative z-100 mb-[2.5rem]">
                <div className="ml-[1.25rem] sm:ml-[1.25rem] md:ml-0 lg:ml-0">
                  QUICK LINKS
                </div>
                <div className="flex justify-between flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap">
                  <div >
                    <div className=" w-[1.875rem] h-[1.875rem] sm:w-[1.875rem] sm:h-[1.875rem] md:w-[2.813rem] md:h-[2.813rem] lg:w-[2.813rem] lg:h-[2.813rem] bg-FFF0F0 rounded-[0.3125rem]">
                      <FaUserAlt />
                    </div>
                    <div className="font-semibold text-[0.75rem] sm:text-[0.8125rem] md:text-[0.9375rem] lg:text-[1rem]">
                      BECOME A <br />
                      MEMBER
                    </div>
                  </div>

                  <div className="cursor-pointer">
                    <div className="flex justify-center items-center w-[1.875rem] h-[1.875rem] sm:w-[1.875rem] sm:h-[1.875rem] md:w-[2.813rem] md:h-[2.813rem] lg:w-[2.813rem] lg:h-[2.813rem] bg-FFF0F0 rounded-[0.3125rem]">
                      <FaChalkboardTeacher />
                    </div>
                    <Link href={""} className='font-[600] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl' >
                      GET <br></br>
                      INVOLVED
                    </Link>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <div className="flex items-center justify-center w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] md:w-[45px] md:h-[45px] lg:w-[45px] lg:h-[45px] bg-FFF0F0 rounded-[5px]">
                      <MdCardGiftcard />
                    </div>
                    <div className="font-semibold text-[12px] sm:text-[13px] md:text-[15px] lg:text-[16px]">
                      GIVING <br />
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <div className="flex items-center justify-center w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] md:w-[45px] md:h-[45px] lg:w-[45px] lg:h-[45px] bg-FFF0F0 rounded-[5px]">
                      <FaChurch />
                    </div>
                    <div className="font-semibold text-[12px] sm:text-[13px] md:text-[15px] lg:text-[16px]">
                      LOCATIONS<br />
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-black py-12 md:py-16">
  <div className="mx-auto text-red-600 font-bold uppercase text-center">
    <div className="text-4xl sm:text-5xl md:text-6xl">Your worship experience</div>
    <div className="text-4xl sm:text-5xl md:text-6xl">at Word Tabernacle</div>
  </div>
  <div className="mx-auto w-90 sm:w-90 md:w-60 lg:w-60 p-4">
    <div className="text-white font-medium text-base sm:text-lg md:text-xl">
      If you are searching for people who are committed to growing spiritually, worshipping as family, and enjoying fellowship, then we are the place for you. There is powerful worship, an inspiring message, and your kids will learn so much as they worship with other vibrant kids each week! (We worship family style!). We'd love to get to know you. We want to see lives changed here by the power of Jesus Christ, and we see that happen every week when someone steps through our doors. We look forward to meeting you this Sunday! God bless.
    </div>
    <div className="text-white mt-4 text-right font-medium text-base sm:text-lg md:text-xl">
      - Pastor Ayorinde Ayodeji
    </div>
  </div>




          </div>
          <div className="flex flex-wrap">
  <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 h-80 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${ruth})`}}>
    <div className="flex flex-col justify-center items-center h-full text-white">
      <div className="font-semibold text-sm md:text-lg">We're Joyful</div>
      <div className="font-semibold text-lg md:text-2xl">BECOME <br /> A <br /> MEMBER</div>
      <div className="mt-4">
        <Button className="py-2 px-4 text-sm md:text-base lg:text-lg bg-red-500 text-white ">JOIN US</Button>
      </div>
    </div>
  </div>
  <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 h-80 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${femi})`}}>
    <div className="flex flex-col justify-center items-center h-full text-white">
      <div className="font-semibold text-sm md:text-lg">Build Capacity</div>
      <div className="font-semibold text-lg md:text-2xl">JOIN OUR <br /> LEADERSHIP <br /> CLASS </div>
      <div className="mt-4">
        <Button className="py-2 px-4 text-sm md:text-base lg:text-lg bg-red-500 text-white ">START HERE</Button>
      </div>
    </div>
  </div>
  <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 h-80 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${choir})`}}>
    <div className="flex flex-col justify-center items-center h-full text-white">
      <div className="font-semibold text-sm md:text-lg">Prophetic session</div>
      <div className="font-semibold text-lg md:text-2xl">REQUEST <br /> A <br /> PRAYER SESSION</div>
      <div className="mt-4">
        <Button className="py-2 px-4 text-sm md:text-base lg:text-lg bg-red-500 text-white ">LETS PRAY</Button>
      </div>
    </div>
  </div>
</div>
<div className="flex flex-wrap mt-0 sm:mt-0 md:mt-20 lg:mt-20">
  <div className="p-6 shadow-md w-full sm:w-full md:w-1/4 lg:w-1/4 text-gray-800">
    <div className="font-bold text-gray-900 mb-4 text-lg md:text-xl">Qualified of  the lord</div>
    <div className="font-normal mb-4 text-sm md:text-base">Obedience to God qualifies one for His blessings. God does not solely uses the qualified. He qualifies those who make themselves available for His work. And strict obedience to His injunctions attracts being qualifies by Him. Check and do the needful. </div>
    <div className="font-normal text-sm md:text-base">READ MORE</div>
    <div className="mt-4">
      <Button className="py-2 px-4 text-sm md:text-base lg:text-lg bg-red-500 text-white ">Oct 19, 2022</Button>
    </div>
  </div>
  <div className="p-6 shadow-md w-full sm:w-full md:w-1/4 lg:w-1/4 text-gray-800">
    <div className="font-bold text-gray-900 mb-4 text-lg md:text-xl">My refuge and fortress</div>
    <div className="font-normal mb-4 text-sm md:text-base">A refuge guards things within it and a fortress shields its contents from external intrusion. God is our refuge and fortress connote that challenges might be happening around us but God will protect us from them all, never to be affected by any. She/he who has God has his/her refuge and fortress enjoys peace of mind, even in trying times.</div>
    <div className="font-normal mb-4 text-sm md:text-base">READ MORE</div>
    <div className="mt-4">
      <Button className="py-2 px-4 text-sm md:text-base lg:text-lg bg-red-500 text-white ">Oct 19, 2022</Button>
    </div>
  </div>
  <div className="p-6 shadow-md w-full sm:w-full md:w-1/4 lg:w-1/4 text-gray-800">
    <div className="font-bold text-gray-900 mb-4 text-lg md:text-xl">Power and Wisdom</div>
    <div className="font-normal mb-4 text-sm md:text-base">To say God is All-knowing and most powerful is not an understatement. He reigns supreme as the most wise of all and the most powerful. Hence, He is Omnipotent and Omniscient. Do you seek wisdom and power (which I enjoin you to passionately seek)? Come to God who gives liberally and without recounting. </div>
    <div className="font-normal text-sm md:text-base">READ MORE</div>
    <div className="mt-4">
      <Button className="py-2 px-4 text-sm md:text-base lg:text-lg bg-red-500 text-white ">Oct 19, 2022</Button>
    </div>
  </div>
  <div className="w-full md:w-1/4 lg:w-1/4 relative h-80 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${pastor1})`}}>
    <div className="absolute bottom-0 left-0 right-0 mx-auto pb-24">
      <Button className="py-2 px-4 text-sm md:text-base lg:text-lg bg-red-500 text-white ">WATCH SERMON</Button>
    </div>
  </div>
</div>
<div className="w-full bg-black py-8 md:py-12 mt-16 lg:mt-24">
  <div className="mx-auto">
    <div className="text-white text-center font-bold text-3xl md:text-5xl md:leading-tight">"A church you can <span className="brand">believe</span>  in."</div>
    <div className="text-white text-center font-bold text-3xl md:text-5xl md:leading-tight">"A place you can <span className="brand">belong</span> ."</div>
  </div>


          </div>


          <Footer />



        </div>
      </div>

      <Link className="bg-green-500 hover:bg-green-700 div-white py-2 px-4 mt-15 font-bold rounded" href={"/profile"}>
        PROFILE
      </Link >

      <Link href={"/login"}>LOGIN</Link>
    </div>
  )
}