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
        <article className=" bg-gradient-to-r  from-indigo-300 mt-[5%] flex justify-center">
          <p className="w-[45%] text-center">
          For more details contact the church administration offices
           via phone at 252-442-2925 or email at administration@wordtab.net.
        
        </p></article>
       </section >
       <section className="bg-purple-200 from-indigo-300 flex flex-col items-center h-[50svh]">
       <h2 className="text-white font-semibold 2xl:text-[1.9rem] text-[1.5rem] relative inline-block my-[3%]">
       
Men's Round Table
            <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-[3px] bg-white "></span>
          </h2>
         
       </section>
      </main>
      <footer className=" w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
