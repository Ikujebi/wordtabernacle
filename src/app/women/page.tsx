"use client";
import { useState, FC } from "react";
import Image from "next/image";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import givbg from "../img/giveimg.jpg";
import women1 from "../img/women1.webp";
import women2 from "../img/women2.webp";
import women3 from "../img/women3.webp";
import women4 from "../img/women4.webp";
import women5 from "../img/women5.webp";
import women6 from "../img/women6.webp";
import women7 from "../img/women7.jpg";
import grid from "../img/grid.svg";

const Page: FC = () => {
  const [showFullGallery, setShowFullGallery] = useState(false);

  const openGallery = () => setShowFullGallery(true);
  const closeGallery = () => setShowFullGallery(false);

  const women = [
    { src: women1, alt: "Photo 1" },
    { src: women2, alt: "Photo 2" },
    { src: women3, alt: "Photo 3" },
    { src: women4, alt: "Photo 3" },
    { src: women5, alt: "Photo 3" },
    { src: women6, alt: "Photo 3" },
    { src: women6, alt: "Photo 3" },
    { src: women6, alt: "Photo 3" },
    { src: women6, alt: "Photo 3" },
    { src: women6, alt: "Photo 3" },
    // Add more images as needed
  ];

  const initialImages = women.slice(0, 9);

  return (
    <div className="font-satoshi">
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
    
    {/* The image is placed here and shown only on mobile */}
    <div className="flex md:hidden my-4 flex-col items-center w-full  m-auto">
    <Image src={grid.src} alt="" width={200} height={120} className="ml-[35%] md:ml-[25%] xl:ml-[25%] text-red-500 " />
    <Image src={women7.src} alt="" width={200} height={110} className="mt-[-4rem] mx-auto" />
    </div>

    <article className="bg-gradient-to-r from-indigo-100 mt-[5%] flex justify-center rounded-3xl">
      <p className="w-[90%] md:w-[70%] lg:w-[60%] text-center">
        For more details, contact the church administration offices via phone or email at wordtabernacle@gmail.com.
      </p>
    </article>
  </div>

  {/* This image block will only show on larger screens */}
  <div id="image" className="hidden md:flex flex-col items-center w-full md:w-[50%] m-auto">
    <Image src={grid.src} alt="" width={200} height={120} className="ml-0 md:ml-[25%] xl:ml-[25%] text-red-500" />
    <Image src={women7.src} alt="" width={200} height={110} className="mt-[-4rem] mx-auto" />
  </div>
</section>




        <section
          onClick={closeGallery}
          className="bg-purple-200 from-indigo-300 flex flex-col items-center pb-[2rem]"
        >
          <h2 className="text-white font-semibold 2xl:text-[1.9rem] text-[1.5rem] relative inline-block my-[3%]">
            Women's Gallery
            <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-[3px] bg-white "></span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {initialImages.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
              />
            ))}
          </div>

          {/* Open Full Gallery Button */}
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            onClick={openGallery}
          >
            View Full Gallery
          </button>

          {/* Full Gallery Modal */}
          {showFullGallery && (
            <div className="absolute inset-0 bg-black bg-opacity-75 flex justify-center items-center mt-[25rem]">
              <div className="bg-white p-6 rounded-lg">
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {women.map((image, index) => (
                    <Image
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={200}
                    />
                  ))}
                </div>
                <div className=" flex items-center">
                  <button
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded "
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
