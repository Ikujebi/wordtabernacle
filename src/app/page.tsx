"use client"
import Link from 'next/link';

export default function home (){
  return(
    <div className=' flex flex-col items-center justify-center h-[100svh]'>
      <div className=''>
        HOME PAGE
      </div>
      
      <Link className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 mt-15 font-bold rounded" href={"/profile"}>
        PROFILE
      </Link >

<Link href={"/login"}>LOGIN</Link>
    </div>
  )
}