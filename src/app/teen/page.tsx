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
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
  };

  const children = [
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204409/IMG_9075_kj7z0o.webp", alt: "Photo 1" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204406/IMG_9087_ceb1ur.webp", alt: "Photo 2" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204406/IMG_9102_irjtny.webp", alt: "Photo 3" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204406/IMG_9081_uxxzdz.webp", alt: "Photo 4" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204404/IMG_9136_d3n52q.webp", alt: "Photo 5" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204389/IMG_9135_nwxly3.webp", alt: "Photo 6" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204388/IMG_9085_igjvhn.webp", alt: "Photo 7" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204388/IMG_9100_clix4f.webp", alt: "Photo 8" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204387/IMG_9080_n5hxsp.webp", alt: "Photo 9" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204386/IMG_9079_tpmmds.webp", alt: "Photo 10" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742204386/IMG_9075_1_g7xfwe.webp", alt: "Photo 11" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203565/IMG_9090_ioxchv.jpg", alt: "Photo 12" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203565/IMG_9090_ioxchv.jpg", alt: "Photo 13" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203385/IMG_7596_ygyfkh.jpg", alt: "Photo 14" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203208/IMG_7476_umnpod.jpg", alt: "Photo 15" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203412/IMG_9050_l5kp1y.jpg", alt: "Photo 16" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203406/IMG_9053_tknnt6.jpg", alt: "Photo 17" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1742203234/IMG_7448_az20lf.jpg", alt: "Photo 8" },
  ];

  const initialImages = children.slice(0, 13);

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="butterfly-kids-regular relative">
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
            children's Ministry
            <span className="block absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100%] h-[4px] bg-white"></span>
          </h2>
        </div>

        <section className="flex flex-col md:flex-row justify-center items-center mt-[3%] mb-[5%]">
          <div id="word" className="flex flex-col items-center w-full md:w-[50%] text-[1.17rem] md:text-[1.2rem] xl:text-[1.5rem]">
            <article className="w-[90%] md:w-[70%] lg:w-[60%] text-center butterfly-kids-regular">
            The WTC Teen's Church nurtures young hearts in a faith-filled community, guiding them to grow into who God created them to be.
            </article>
            <div className="flex md:hidden my-4 flex-col items-center w-full  m-auto ">
              <Image src={grid.src} alt="" width={200} height={120} className="ml-[45%] md:ml-[25%] xl:ml-[25%] md:w-[50%] md:h-[15rem]" />
              <div className="mt-[-8rem] mx-auto rounded-xl overflow-hidden md:w-[50%] md:h-[14rem]">
  <Image src={children[2].src} alt={children[6].alt} width={200} height={110} />
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
  <Image className="rounded-xl 2xl:w-[15rem]" src={children[8].src} alt={children[6].alt} width={200} height={110}/>
</div>

          </div>
        </section>

        <section className="bg-purple-200 from-indigo-300 flex flex-col items-center pb-[2rem]">
          <h2 className="text-white font-semibold 2xl:text-[1.9rem] text-[1.5rem] relative inline-block my-[3%]">
            children's Gallery
            <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-[3px] bg-white"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
    {(showMore ? children : initialImages).map((image, index) => (
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
          <b 
    onClick={handleShowMore} 
    className="text-white text-[1.2rem] cursor-pointer mt-4"
  >
    {showMore ? "Show Less" : "Show More"}
  </b>
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
                src={children[currentImageIndex].src}
                alt={children[currentImageIndex].alt}
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
