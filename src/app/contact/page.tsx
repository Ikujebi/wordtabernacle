"use client"
import { FC } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { FaMapMarkerAlt,FaPhoneAlt } from "react-icons/fa";
import givbg from '../img/giveimg.jpg'
import {MdEmail} from 'react-icons/md';



const Page: FC = () => {

 

 
  return (
    <div className='font-satoshi '>
      <header >
        <Header />
      </header>
      <main className='pt-[10rem]'>
      <div className="content  h-[6rem] 2xl:h-[8rem]  relative flex justify-center items-center" style={{ backgroundImage: `url(${givbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h2 className='text-white font-semibold 2xl:text-[1.9rem] text-[1.5rem] relative inline-block'>
          Contact Us
            <span className='block absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100%] h-[4px] bg-white'></span>
          </h2>
        </div>
        <section className='flex  gap-[3rem] justify-center bg-red-300 h-[60svh]'>
          <div className='flex w-[80%] '>
         <section className='bg-white mt-[-1rem] relative z-100 flex h-[30%]  justify-center w-full gap-10'>
<article className='flex flex-col items-center pt-[3%]'>
  <div>
  <FaPhoneAlt className='text-[2rem]'/>

  </div>
  <div>
    <h2>Phone</h2>
  </div>
  <div className='flex flex-col items-center'>
    <p>(252) 442-2925</p>
    <p>(877) 465-9673</p>
    <p>(252) 442-3894 Fax</p>
  </div>
</article>
<article className='flex flex-col items-center pt-[3%]'>
  <div >
  <FaMapMarkerAlt  className='text-[2rem]'/>

  </div>
  <div>
    <h2>Address</h2>
  </div>
  <div className='flex flex-col items-center'>
    <p>Word Tabernacle Church</p>
    <p>2, Ajetunmobi street</p>
    <p>ibeshe,ikorodu,LG</p>
  </div>
</article>
<article className='flex flex-col items-center pt-[3%]'>
<div>
  <MdEmail className='text-[2rem]'/>

  </div>
  <div>
    <h2>Email

</h2>
  </div>
  <div className='flex flex-col items-center'>
    <p>wordtabernaclebc@gmail.com</p>
  </div>
</article>
<article>

</article>
         </section>
          </div>
        </section>
      </main>
      <footer className=' w-full'>
        <Footer />
      </footer>
    </div>
  )
}

export default Page
