"use client";
import { FC, useState } from "react";
import Image from "next/image";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import givbg from "../img/giveimg.jpg";

const Page: FC = () => {
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setShowFullGallery(true);
  };

  const closeGallery = () => setShowFullGallery(false);

  const menImages = [
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725356886/5933838834204786686_dppko6.jpg", alt: "Photo 1" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725102055/youthpreacher_egmmcn.webp", alt: "Photo 2" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725129856/photo_5933838834204786597_y_zm9hpb.jpg", alt: "Photo 3" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101602/femiblur_xwz9xr.jpg", alt: "Photo 4" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1726579601/word17_cvh62v.jpg", alt: "Photo 5" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101419/ayanfe_w7dp1v.webp", alt: "Photo 6" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725101371/youthpreacher_ucoete.webp", alt: "Photo 7" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1725102045/youth3_m22wch.webp", alt: "Photo 8" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1727168938/photo_6019429698393719062_y_ijgaz6.jpg", alt: "Photo 9" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1727168955/photo_6019429698393719061_y_qiqjqg.jpg", alt: "Photo 10" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1727168967/photo_6019429698393719049_y_f3hugc.jpg", alt: "Photo 11" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1727168960/photo_6019429698393719060_y_s4icix.jpg", alt: "Photo 12" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1727168960/photo_6019429698393719060_y_s4icix.jpg", alt: "Photo 13" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399273/photo_5773882741589395498_y_icg2je.jpg", alt: "Photo 14" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399270/photo_5773882741589395440_y_pfcer7.jpg", alt: "Photo 15" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399262/photo_5773882741589395485_y_itiwh5.jpg", alt: "Photo 16" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399250/photo_5773882741589395480_y_ebc0sn.jpg", alt: "Photo 17" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399237/photo_5773882741589395438_y_c6aays.jpg", alt: "Photo 18" },
    { src: "https://res.cloudinary.com/dalylashp/image/upload/v1728399231/photo_5773882741589395456_y_syv4l8.jpg", alt: "Photo 19" },
  ];

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % menImages.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + menImages.length) % menImages.length);
  };

  return (
    <div className="font-satoshi">
      <header>
        <Header />
      </header>
      <main className="pt-[10rem]">
        <div
          className="content h-[6rem] 2xl:h-[8rem] relative flex justify-center items-center"
          style={{
            backgroundImage: `url(${givbg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-white font-semibold 2xl:text-[1.9rem] text-[1.5rem] relative inline-block">
            Men's Ministry
            <span className="block absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100%] h-[4px] bg-white"></span>
          </h2>
        </div>

        <section className="flex flex-col items-center mt-[3%]">
          <article className="w-[45%] text-center">
            The WTC Mens Roundtable provides a regional gathering for men who have determined there is no greater goal than to ensure they have become the man God has intended them to be.
          </article>
          <article className="w-4/5 md:w-3/5 bg-gradient-to-r from-indigo-300 to-purple-400 text-center py-8 rounded-lg shadow-lg px-4">
            <p>
              For more details, contact the church administration offices via phone or email at wordtabernacle@gmail.com.
            </p>
          </article>
        </section>

        <section className="bg-purple-200 flex flex-col items-center mt-[1rem] pb-5">
          <h2 className="text-white font-semibold 2xl:text-[1.9rem] text-[1.5rem] relative inline-block my-[3%]">
            Men's Round Table
            <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-[3px] bg-white"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {menImages.slice(0,12).map((image, index) => (
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
            <button className="absolute top-5 right-5 bg-white text-black p-2 rounded-full" onClick={closeGallery}>
              ✕
            </button>
            <button className="absolute left-10 text-white text-4xl p-4 bg-gray-600 bg-opacity-50 rounded-full hover:bg-opacity-100" onClick={goToPrev}>
              ‹
            </button>
            <div className="flex justify-center items-center">
              <Image src={menImages[currentImageIndex].src} alt={menImages[currentImageIndex].alt} width={800} height={600} className="rounded-lg" />
            </div>
            <button className="absolute right-10 text-white text-4xl p-4 bg-gray-600 bg-opacity-50 rounded-full hover:bg-opacity-100" onClick={goToNext}>
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
