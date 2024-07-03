"use client";
import { FC } from "react";
import Image from "next/image";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import givbg from "../img/giveimg.jpg";


const Page: FC = () => {
 

 

   
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
       <section className="bg-purple-200 from-indigo-300 flex flex-col items-center h-[50svh]">
       <h2 className="text-white font-semibold 2xl:text-[1.9rem] text-[1.5rem] relative inline-block my-[3%]">
       Teen and Youth Spotlights
            <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-[3px] bg-white "></span>
          </h2>
          <article className="flex justify-center gap-5">
            <Image src={givbg.src} width={1000} height={500} alt="" className="w-[25%] h-[150%]"/>
            <Image src={givbg.src} width={1000} height={500} alt="" className="w-[25%] h-[150%]"/>
            <Image src={givbg.src} width={1000} height={500} alt="" className="w-[25%] h-[150%]"/>
            
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
