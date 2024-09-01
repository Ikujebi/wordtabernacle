"use client"
import {FC} from 'react'


const Community:FC = () => {
  const choir = "https://res.cloudinary.com/dalylashp/image/upload/v1725101790/part_nbo4ux.webp"
  const cardimg = "https://res.cloudinary.com/dalylashp/image/upload/v1725101790/part_nbo4ux.webp"
  const cardimg2 = "https://res.cloudinary.com/dalylashp/image/upload/v1725129876/photo_5933838834204786583_y_ivyxxk.jpg"
  return (
    <div className="flex w-full h- items-center">
      <section className="w-[33.3%]">
        <div className="content h-[30rem] relative" style={{ backgroundImage: `url(${choir})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="p-4 absolute bottom-0 left-0 right-0 text-center pb-[5rem]">
            <h2 className="text-white text-center font-semibold">We&apos;re Joyful</h2>
            <p className="text-white text-center font-semibold text-sm md:text-base">BECOME<br />A<br />MEMBER</p>
            <button className="bg-red-600 text-white md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-3 mt-5 ">JOIN US</button>
          </div>
        </div>
      </section>
      <section className="w-[33.3%]">
        <div className="content h-[30rem] relative" style={{ backgroundImage: `url(${cardimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="p-4 absolute bottom-0 left-0 right-0 text-center pb-[5rem]">
            <h2 className="text-white text-center font-semibold">Build Capacity</h2>
            <p className="text-white text-center font-semibold text-lg md:text-xl">JOIN OUR<br />LEADERSHIP<br />CLASS</p>
            <button className="bg-red-600 text-white  md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-3 mt-5">START HERE</button>
          </div>
        </div>
      </section>
      <section className="w-[33.3%]">
        <div className="content h-[30rem] relative" style={{ backgroundImage: `url(${cardimg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="p-4 absolute bottom-0 left-0 right-0 text-center pb-[5rem]">
            <h2 className="text-white text-center font-semibold">Prophetic session</h2>
            <p className="text-white text-center font-semibold text-lg md:text-xl">REQUEST<br />A<br />PRAYER SESSION</p>
            <button className="bg-red-600 text-white  md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] sm:p-0 p-3 mt-5 ">LETS PRAY</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Community