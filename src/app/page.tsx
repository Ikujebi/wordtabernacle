"use client"
import Link from 'next/link';

export default function home (){
  return(
    <div className=' flex flex-col items-center justify-center my-auto'>
      <div className=''>
        HOME PAGE
      </div>
      

<Link href={"/login"}>LOGIN</Link>
    </div>
  )
}