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
  const [showMore, setShowMore] = useState(false);

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
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399272/photo_5773882741589395449_y_gl78fh.jpg", alt: "Photo 9" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101777/pactitioners_jepeb3.webp", alt: "Photo 10" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399270/photo_5773882741589395450_y_wcbs2a.jpg", alt: "Photo 11" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399269/photo_5773882741589395446_y_tkv1ro.jpg", alt: "Photo 12" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399264/photo_5773882741589395505_y_ltpsfa.jpg", alt: "Photo 13" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399260/photo_5773882741589395443_y_sextth.jpg", alt: "Photo 14" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399259/photo_5773882741589395469_y_sf1lzt.jpg", alt: "Photo 15" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399249/photo_5773882741589395473_y_whjwsi.jpg", alt: "Photo 16" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399231/photo_5773882741589395504_y_yckiol.jpg", alt: "Photo 17" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399228/photo_5773882741589395455_y_lbfnwy.jpg", alt: "Photo 8" },
  ];

  const initialImages = women.slice(0, 13);

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };

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

        <section className="flex flex-col md:flex-row justify-center items-center mt-[3%] mb-[5%]">
          <div id="word" className="flex flex-col items-center w-full md:w-[50%] text-[1.17rem] md:text-[1.2rem] xl:text-[1.5rem]">
            <article className="w-[90%] md:w-[70%] lg:w-[60%] text-center">
              The WTC Women's ministry provides a regional gathering for women who have determined there is no greater goal than to ensure they have become the person God has intended them to be.
            </article>
            <div className="flex md:hidden my-4 flex-col items-center w-full  m-auto">
              <Image src={grid.src} alt="" width={200} height={120} className="ml-[45%] md:ml-[25%] xl:ml-[25%] md:w-[50%] md:h-[15rem]" />
              <div className="mt-[-8rem] mx-auto rounded-xl overflow-hidden md:w-[50%] md:h-[14rem]">
  <Image src={women[6].src} alt={women[6].alt} width={200} height={110} />
</div>

            </div>
            <article className="bg-gradient-to-r from-indigo-300 to-purple-400 mt-[5%] flex justify-center rounded-3xl mx-[.4rem] 2xl:mx-[5rem]">
              <p className="w-[90%] md:w-[70%] lg:w-[60%] text-center">
                For more details, contact the church administration offices via phone or email at wordtabernacle@gmail.com.
              </p>
            </article>
          </div>

          <div id="image" className="hidden md:flex flex-col items-center w-full md:w-[50%] 2xl:w-[40rem] lg:w-[50%] m-auto">
            <Image src={grid.src} alt="" width={200} height={120} className="ml-0 md:ml-[-10%] 2xl:ml-[-20%] md:w-[50%] md:h-[13rem] 2xl:w-[15rem]" />
           
            <div className="mt-[-8rem] ml-[1rem]  mx-auto rounded-2xl overflow-hidden md:w-[50%] md:h-[15rem] 2xl:w-[60%]">
  <Image className="rounded-xl 2xl:w-[15rem]" src={women[6].src} alt={women[6].alt} width={200} height={110}/>
</div>

          </div>
        </section>

        <section className="bg-purple-200 from-indigo-300 flex flex-col items-center pb-[2rem]">
          <h2 className="text-white font-semibold 2xl:text-[1.9rem] text-[1.5rem] relative inline-block my-[3%]">
            Women's Gallery
            <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-[3px] bg-white"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {initialImages.slice(0,13).map((image, index) => (
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
