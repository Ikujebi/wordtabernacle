"use client"
import Link from 'next/link';
import { Button } from 'antd'
import { FaChalkboardTeacher, FaChurch, FaUserAlt } from 'react-icons/fa';
import { MdCardGiftcard } from 'react-icons/md';
import pastor2 from './img/pastor.webp'
import pastor1 from './img/pst1.jpg'
import choir from './img/choirblur.png'
import femi from './img/femiblur.jpeg'
import ruth from './img/ruthblur.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { motion } from "framer-motion";
import Slider from "react-slick";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { useState, useEffect } from 'react'
import Image from 'next/image';
import Mainpic from './components/common/Mainslidder'
import Head from 'next/head';
import logo from '../app/img/wordlogo.png'
import Community from './components/common/Community';
import BlogMain from './components/common/BlogMain'
import YouTubePlayer from './components/common/YouTubePlayer';

export default function Home() {

  const pic2 = pastor1
  const pic3 = pastor2


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
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoIds = [
{videoId :"JcnaXJftxaU"},
{videoId :"WzGJFZ_Ta7g"},
{videoId :"m3G4gNBxWhs"},
{videoId :"qQwOOPC2wbQ"},
{videoId :"riA-6duFCGQ"},
{videoId :"G8-Mg4Agz4w"},
{videoId :"JRreFjk6nZs"},

  ]

  
  const handleNextVideo = () => {

    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
 console.log("handleNextVideo clicked!!!");
 
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videoIds.length) % videoIds.length);
  };

  return (
    <div className='w-screen flex flex-col items-center justify-center font-satoshi'>
      <Head>
        <link rel="shortcut icon" href='../app/img/wordlogo.png' />
      </Head>
      <div className='w-full'>
        <Header />
      </div>
      <div>
        <Mainpic />
      </div>
      <div>
        <div className="w-full bg-black py-12 md:py-16">
          <div className="mx-auto text-red-600 font-bold text-center">
            <div className="text-2xl sm:text-5xl md:text-3xl">Your worship experience</div>
            <div className="text-2xl sm:text-5xl md:text-3xl text-white">at Word Tabernacle</div>
          </div>
          <div className="mx-auto w-90 w-90 md:w-90 lg:w-90 xl:w-65 2xl:w-65 p-4 ">
            <div className="text-white font-medium text-base sm:text-sm xl:text-md 2xl:text-xl  px-[10%] md:text-[1.05rem] md:mx-[2rem]">
              If you are searching for people who are committed to growing spiritually, worshipping as family, and enjoying fellowship, then we are the place for you. There is powerful worship, an inspiring message, and your kids will learn so much as they worship with other vibrant kids each week! (We worship family style!). We'd love to get to know you. We want to see lives changed here by the power of Jesus Christ, and we see that happen every week when someone steps through our doors. We look forward to meeting you this Sunday! God bless.
            </div>
            <div className="text-white mt-4 text-right font-medium text-base sm:text-sm xl:text-md 2xl:text-xl  px-[10%] md:text-[1.05rem]">
              - Pastor Ayorinde Ayodeji
            </div>
          </div>
        </div>
        <div>
          <Community />
        </div>
        <div>
          <BlogMain />
        </div>
        <div className="flex flex-wrap">
          {/* Your other code goes here */}
        </div>
        <div className="flex flex-wrap mt-0 sm:mt-0 md:mt-20 lg:mt-20">
          {/* Your other code goes here */}
        </div>
        <div className="w-full bg-black py-8 md:py-12 mt-16 lg:mt-24">
          <div className="mx-auto">
            <div className="text-white text-center font-bold text-3xl md:text-5xl md:leading-tight">"A church you can <span className="brand">believe</span>  in."</div>
            <div className="text-white text-center font-bold text-3xl md:text-5xl md:leading-tight">"A place you can <span className="brand">belong</span> ."</div>
          </div>
        </div>
        <div className="">
          <YouTubePlayer
            videoId= {videoIds[currentVideoIndex].videoId}
            
          />
             <div className="flex justify-center my-4">
          <Button onClick={handlePrevVideo} className="mr-2 bg-red-400 w-[6rem]">Previous</Button>
          <Button onClick={handleNextVideo} className='bg-green-400 w-[6rem]'>Next</Button>
        </div>
        </div>
        <div >
          <Footer />
        </div>


      </div>





      <Link className="bg-green-500 hover:bg-green-700 div-white py-2 px-4 mt-15 font-bold rounded" href={"/profile"}>
        PROFILE
      </Link >

    </div>
  )
}