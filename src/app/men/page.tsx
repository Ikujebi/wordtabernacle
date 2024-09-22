"use client";
import { FC } from "react";
import Image from "next/image";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import givbg from "../img/giveimg.jpg";


const Page: FC = () => {
 
  const men1 = "https://res.cloudinary.com/dalylashp/image/upload/v1725356886/5933838834204786686_dppko6.jpg"
  const men2 = "https://res.cloudinary.com/dalylashp/image/upload/v1725102055/youthpreacher_egmmcn.webp"
const men3 = "https://res.cloudinary.com/dalylashp/image/upload/v1725129856/photo_5933838834204786597_y_zm9hpb.jpg"
const men4 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101602/femiblur_xwz9xr.jpg"
const men5 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101977/women5_hzw0rr.webphttps://res.cloudinary.com/dalylashp/image/upload/v1725101594/emmasings_xitbgn.webp"
const men6 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101419/ayanfe_w7dp1v.webp"
const men7 ="https://res.cloudinary.com/dalylashp/image/upload/v1725101371/youthpreacher_ucoete.webp"
const men8 = "https://res.cloudinary.com/dalylashp/image/upload/v1725102045/youth3_m22wch.webp"

  const men = [
    { src: men1, alt: "Photo 1" },
    { src: men2, alt: "Photo 2" },
    { src: men3, alt: "Photo 3" },
    { src: men4, alt: "Photo 4" },
    { src: men5, alt: "Photo 5" },
    { src: men6, alt: "Photo 6" },
    { src: men7, alt: "Photo 7" },
    { src: men8, alt: "Photo 7" },
    // Add more images as needed
  ];

  const initialImages = men.slice(0, 9);

 

   
  return (
    <div className="font-satoshi ">
      <header>
        <Header /> 
      </header>
      <main className="pt-[10rem]">
        <div
          className="content  h-[6rem] 2xl:h-[8rem]  relative flex justify-center items-center"
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
        <article className="w-[45%]  text-center">
        The WTC Mens Roundtable provides a regional gathering
         for men who have determined there is no greater goal than
         to ensure they have become the man God has intended them to be.
        </article>
        <article className="bg-gradient-to-r from-indigo-100 mt-[5%] flex justify-center rounded-3xl">
              <p className="w-[90%] md:w-[70%] lg:w-[60%] text-center">
                For more details, contact the church administration offices via phone or email at wordtabernacle@gmail.com.
              </p>
            </article>
       </section >
       <section className="bg-purple-200 from-indigo-300 flex flex-col items-center h-[50svh]">
       <h2 className="text-white font-semibold 2xl:text-[1.9rem] text-[1.5rem] relative inline-block my-[3%]">
       
Men's Round Table
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
                priority
              />
            ))}
          </div>
       </section>
      </main>
      <footer className=" w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
