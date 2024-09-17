"use client";
import { FC } from "react";
import Image from "next/image";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import givbg from "../img/giveimg.jpg";


const Page: FC = () => {
 
  const pic2 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101517/choir7_umfdyb.webp";
  const pic3 = "https://res.cloudinary.com/dalylashp/image/upload/v1726579634/word14_apmp4h.jpg";
  const pic4 = "https://res.cloudinary.com/dalylashp/image/upload/v1726579602/word_mrsJJ4_uerkqo.jpg";
  const pic5 = "https://res.cloudinary.com/dalylashp/image/upload/v1725356890/5933838834204786631_hg4uhx.jpg";
  const pic6 = "https://res.cloudinary.com/dalylashp/image/upload/v1726579602/word05_a4mu7h.jpg";
  const pic7 = "https://res.cloudinary.com/dalylashp/image/upload/v1726579602/word5_l7jfsl.jpg"
  const pic8 =  "https://res.cloudinary.com/dalylashp/image/upload/v1726579603/word6_dojbxq.jpg"
  
  const youthpic = [
    {image : pic2},
    {image : pic3},
    {image : pic4},
    {image : pic5},
    {image : pic6},
    {image : pic7},
    {image : pic8},
  ]

   
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
          Next Generation
            <span className="block absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100%] h-[4px] bg-white"></span>
          </h2>
        </div>
        
       <section className="flex flex-col items-center mt-[3%]">
        <article className="w-[45%]  text-center">
        WTC Youth Ministries are where young adults can grow, 
        worship, fellowship, serve, and discover their identity and 
        purpose in Christ in a fun and safe environment.
        </article>
        <article className=" bg-gradient-to-r  from-indigo-300 mt-[5%] flex justify-center">
          <p className="w-[45%] text-center">
        We break out into small groups and studies, go on retreats,
         have awesome events, gather during the week,
          and serve as a team — all to empower people
           in every area of life to the glory of God.
        
        </p></article>
       </section >
       <section className="bg-purple-200 from-indigo-300 flex flex-col items-center h-full pb-[2rem]">
       <h2 className="text-white font-semibold 2xl:text-[1.9rem] text-[1.5rem] relative inline-block my-[3%]">
       Teen and Youth Spotlights
            <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-[3px] bg-white "></span>
          </h2>
          <article className="flex justify-center gap-5">
            <Image src={givbg.src} width={1000} height={500} alt="" className="w-[25%] h-[150%]"/>
            <Image src={givbg.src} width={1000} height={500} alt="" className="w-[25%] h-[150%]"/>
            <Image src={givbg.src} width={1000} height={500} alt="" className="w-[25%] h-[150%]"/>
            
          </article>
          <article className="flex justify-center gap-5 mt-[5rem]">
          <div  className="grid grid-cols-12 gap-4">
            {youthpic.map((item,i)=>(
              
              <div key={i} className="col-span-3 ">
              <Image  src={item.image} width={1000} height={500} alt="" className=" "/>
              </div> ))} 
              </div>
          </article>
       </section>
      </main>
      <footer className=" w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
