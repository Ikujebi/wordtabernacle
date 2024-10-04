"use client";
import { useState, FC } from "react";
import Image from "next/image";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import givbg from "../img/giveimg.jpg";

import grid from "../img/grid.svg";

const Page: FC = () => {
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setShowFullGallery(true);
  };

  const closeGallery = () => setShowFullGallery(false);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % women.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + women.length) % women.length);
  };

  const women = [
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101924/women1_yi6bxl.webp", alt: "Photo 1" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101937/women2_nk682e.webp", alt: "Photo 2" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101958/women3_ps8rop.webp", alt: "Photo 3" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101970/women4_jrezw9.webp", alt: "Photo 4" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101977/women5_hzw0rr.webp", alt: "Photo 5" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101987/women6_yjmiat.webp", alt: "Photo 6" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101997/women7_fwqwl3.jpg", alt: "Photo 7" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101777/pactitioners_jepeb3.webp", alt: "Photo 8" },
  ];

  const initialImages = women.slice(0, 9);

  return (
    <div className="font-satoshi relative">
      <header>
        <Header />
      </header>
      <main className="md:pt-[10rem] lg:pt-[10rem] xl:pt-[10rem] 2xl:pt-[10rem] pt-[6.77rem] font-semibold">
        <div
          className="content h-[6rem] 2xl:h-[8rem] relative flex justify-center items-center"
          style={{
            backgroundImage: `url(${givbg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-white font-semibold 2xl:text-[1.9rem] text-[1.5rem] relative inline-block">
            Women's Ministry
            <span className="block absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100%] h-[4px] bg-white"></span>
          </h2>
        </div>

        <section className="bg-purple-200 from-indigo-300 flex flex-col items-center pb-[2rem]">
          <h2 className="text-white font-semibold 2xl:text-[1.9rem] text-[1.5rem] relative inline-block my-[3%]">
            Women's Gallery
            <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-[3px] bg-white"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {initialImages.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                priority
                onClick={() => openGallery(index)}
                className="cursor-pointer"
              />
            ))}
          </div>
        </section>

        {showFullGallery && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
            {/* Close button */}
            <button
              className="absolute top-5 right-5 bg-white text-black p-2 rounded-full z-50"
              onClick={closeGallery}
            >
              ✕
            </button>

            {/* Previous button */}
            <button
              className="absolute left-10 text-white text-4xl z-50 p-4 bg-gray-600 bg-opacity-50 rounded-full hover:bg-opacity-100"
              onClick={goToPrev}
              aria-label="Previous"
            >
              ‹
            </button>

            {/* Image display */}
            <div className="flex justify-center items-center">
              <Image
                src={women[currentImageIndex].src}
                alt={women[currentImageIndex].alt}
                width={800}
                height={600}
                className="rounded-lg"
              />
            </div>

            {/* Next button */}
            <button
              className="absolute right-10 text-white text-4xl z-50 p-4 bg-gray-600 bg-opacity-50 rounded-full hover:bg-opacity-100"
              onClick={goToNext}
              aria-label="Next"
            >
              ›
            </button>
          </div>
        )}
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
