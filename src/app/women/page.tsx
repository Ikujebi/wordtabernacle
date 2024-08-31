"use client";
import { useState, FC } from "react";
import Image from "next/image";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import givbg from "../img/giveimg.jpg";

import grid from "../img/grid.svg";

const Page: FC = () => {
  const [showFullGallery, setShowFullGallery] = useState(false);

  const openGallery = () => {
    console.log("Opening gallery");
    setShowFullGallery(true);
  };

  const closeGallery = () => setShowFullGallery(false);

  const women1 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101924/women1_yi6bxl.webp"
  const women2 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101937/women2_nk682e.webp"
const women3 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101958/women3_ps8rop.webp"
const women4 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101970/women4_jrezw9.webp"
const women5 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101977/women5_hzw0rr.webp"
const women6 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101987/women6_yjmiat.webp"
const women7 ="https://res.cloudinary.com/dalylashp/image/upload/v1725101997/women7_fwqwl3.jpg"
const women8 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101777/pactitioners_jepeb3.webp"

  const women = [
    { src: women1, alt: "Photo 1" },
    { src: women2, alt: "Photo 2" },
    { src: women3, alt: "Photo 3" },
    { src: women4, alt: "Photo 4" },
    { src: women5, alt: "Photo 5" },
    { src: women6, alt: "Photo 6" },
    { src: women7, alt: "Photo 7" },
    { src: women8, alt: "Photo 7" },
    // Add more images as needed
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

        <section className="flex flex-col md:flex-row justify-center items-center mt-[3%] mb-[5%]">
          <div id="word" className="flex flex-col items-center w-full md:w-[50%] text-[1.17rem] md:text-[1.2rem] xl:text-[1.5rem]">
            <article className="w-[90%] md:w-[70%] lg:w-[60%] text-center">
              The WTC Women's ministry provides a regional gathering for women who have determined there is no greater goal than to ensure they have become the person God has intended them to be.
            </article>
            <div className="flex md:hidden my-4 flex-col items-center w-full  m-auto">
              <Image src={grid.src} alt="" width={200} height={120} className="ml-[35%] md:ml-[25%] xl:ml-[25%] md:w-[50%] md:h-[15rem]" />
              <Image src={women7} alt="" width={200} height={110} className="mt-[-4rem] mx-auto" />
            </div>
            <article className="bg-gradient-to-r from-indigo-100 mt-[5%] flex justify-center rounded-3xl">
              <p className="w-[90%] md:w-[70%] lg:w-[60%] text-center">
                For more details, contact the church administration offices via phone or email at wordtabernacle@gmail.com.
              </p>
            </article>
          </div>

          <div id="image" className="hidden md:flex flex-col items-center w-full md:w-[50%] 2xl:w-[40%] lg:w-[50%] m-auto">
            <Image src={grid.src} alt="" width={200} height={120} className="ml-0 md:ml-[-10%] xl:ml-[-10%] md:w-[50%] md:h-[13rem]" />
            <Image src={women7} alt="" width={200} height={110} className="mt-[-6rem] ml-[-.2rem] mx-auto md:w-[50%] md:h-[15rem]" />
          </div>
        </section>

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
              />
            ))}
          </div>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            onClick={openGallery}
          >
            View Full Gallery
          </button>
          {showFullGallery && (
            <div className="fixed inset-0 bg-white bg-opacity-25 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg">
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {women.map((image, index) => (
                    <Image
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={200}
                      priority
                    />
                  ))}
                </div>
                <div className="flex justify-center">
                  <button
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
                    onClick={closeGallery}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Page;