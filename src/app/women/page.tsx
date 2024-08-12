"use client";
import { useState,FC } from "react";
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


const Page:FC = () => {
  
  
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
    
    <div className="font-satoshi" >
      
      <header>
        <Header />
      </header>
      <main className="md:pt-[10rem] lg:pt-[10rem] xl:pt-[10rem] 2xl:pt-[10rem] pt-[6.77rem]">
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

        <section className="flex flex-col items-center mt-[3%]">
          <article className="w-[45%] text-center">
            The WTC Women's ministry provides a regional gathering for women who
            have determined there is no greater goal than to ensure they have
            become the man God has intended them to be.
          </article>
          <article className="bg-gradient-to-r from-indigo-300 mt-[5%] flex justify-center">
            <p className="w-[45%] text-center">
              For more details contact the church administration offices via
              phone at 252-442-2925 or email at wordtabernacle.gmail.com.
            </p>
          </article>
        </section>
        
        <section onClick={closeGallery} className="bg-purple-200 from-indigo-300 flex flex-col items-center pb-[2rem]">
          <h2 className="text-white font-semibold 2xl:text-[1.9rem] text-[1.5rem] relative inline-block my-[3%]">
            Women's Gallery
            <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-[3px] bg-white "></span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4" >
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
                <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded " onClick={closeGallery}>
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
