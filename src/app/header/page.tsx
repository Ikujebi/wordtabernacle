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
        <div className='bg-gray-300 h-[47svh] 2xl:h-[50svh]'>
        <section className='flex    justify-center  '>
          <div className='flex w-[75%] '>
         <section className='bg-white mt-[-1.5rem]  relative z-100 flex h-[125%]  justify-center w-full  '>
<article className='flex flex-col items-center pt-[1.5%] w-[33.3%]'>
  <div>
  <FaPhoneAlt className='text-[2rem]'/>

  </div>
  <div>
    <h2>Phone</h2>
  </div>
  <div className='flex flex-col items-center'>
    <a href='call:+2348073180186'>(234) 807-318-0186</a>
    <a href='call:+2348020523796'>(234) 802-052-3796</a>
    <a href='whatsApp:+2348073180186'>(252) 442-3894 Fax</a>
  </div>
</article>
<article className='flex flex-col items-center pt-[1.5%] w-[33.3%]'>
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
<article className='flex flex-col items-center pt-[1.5%] w-[33.3%]'>
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
        <section className='mt-[5%] 2xl:mt-[2.7%] flex flex-col items-center text-gray-800 text-[1.1rem]'>
            
          <h2 className='font-bold text-[150%]'>SERVICE TIMES</h2>
          <article className='flex flex-col items-center'>
          <h3>GenZ Service:</h3>
          <p className='mb-[5%]'>Sundays at 8:00AM & 09:30AM - main auditorium</p>
          
          <h3 >Worship Service:</h3>
          <p className='mb-[5%]'>Sundays at 10:00AM & 12:00AM - main auditorium</p>
          
          </article>

          <article className='flex flex-col items-center'>
            <h3>
            Wednesday Equip Service:
            </h3>
            <p>
            Wednesdays at 12:00PM - Rocky Mount & Online/E-City Campus
            </p>
          </article>
          </section>
          </div>
          <section className='flex justify-center my-8 '><iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.711954552398!2d3.474328075840481!3d6.557999393435149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf2726b345a27%3A0xeb8c1cd955070248!2sWord%20Tabernacle%20Bible%20Church!5e0!3m2!1sen!2sng!4v1718294118256!5m2!1sen!2sng" 
          width="700"
           height="450" 
           className='w-[65%] 2xl:h-[40rem]'
             loading="lazy" 
             style={{ border: 0 }}
            allowFullScreen={false}
          >
            </iframe>
            </section>
      </main>
      <footer className=' w-full'>
        <Footer />
      </footer>
    </div>
  )
}

export default Page
