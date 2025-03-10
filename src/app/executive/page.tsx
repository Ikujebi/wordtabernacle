"use client";
import logo from "../img/wordlogo.png"
import commingSoon from "@/../public/bunch_of_nice_people.svg"
import Image from "next/image"
import { useState } from "react"


    const ComingSoon = () => {
      const [email, setEmail] = useState<string>("")
    
      return (
        <div>
          <div>
          <Image 
              src={logo}
              width={100} 
              height={300} 
              className="ml-12 mt-5 w-[4rem] md:w-[10rem] lg:w-[10rem] xl:w-[10rem] 2xl:w-[10rem]" 
              alt="Group of people illustration" 
            />
          </div> 
        <div className="flex items-center justify-center h-[90vh]">
          
          <div className="max-w-[500px] text-center">
            {/* Optimized Image with next/image */}
            <Image 
              src={commingSoon}
              width={300} 
              height={300} 
              className="mx-auto md:mt-[-10rem] lg:mt-[-12rem] xl:mt-[-13rem] 2xl:mt-[-15rem] w-[15rem] md:w-[30rem] lg:w-[30rem] xl:w-[30rem] 2xl:w-[50rem]" 
              alt="Group of people illustration" 
            />
            <h2 className="font-generalSansBold md:text-[1.125rem] lg:text-[1.125rem] xl:text-[1.125rem] 2xl:text-[1.125rem] font-semibold mt-4">
              Hey there 👋🏽
            </h2>
            <p className="text-[.8rem]  md:text-[1rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem] font-medium mt-2">
              It seems this page is still under construction, but leave your email with us and we will notify you when we fully launch.
            </p>
    
            <div className="flex items-center gap-2 mt-6">
              <input
                type="email"
                name="coming-soon"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full md:w-4/5 border border-gray-300 rounded-xl p-4 outline-none"
              />
              <button className="py-4 px-10 rounded-xl border bg-red-500 text-white">Submit</button>
            </div>
          </div>
        </div>
        </div>
  )
}
export default ComingSoon