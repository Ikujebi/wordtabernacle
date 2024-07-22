"use client"
import { FC } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Image from 'next/image'
import givbg from '../img/giveimg.jpg'

import redbg from '../img/redbgi.webp'
import msgg from '../img/msg-1001955056097-3260.webp'
import msgg2 from '../img/msg-1001955056097-3253.webp'


const Page: FC = () => {

 

 
  return (
    <div className='font-satoshi '>
      <header >
        <Header />
      </header>
      <main className='pt-[10rem]'>
        <div className="content  h-[6rem] relative flex justify-center items-center" style={{ backgroundImage: `url(${givbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h2 className='text-white font-semibold text-[1.9rem] relative inline-block'>
            Vision, Mission, & Values
            <span className='block absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100%] h-[4px] bg-white'></span>
          </h2>
        </div>
        <div className='md:max-w-[67%] lg:max-w-[67%] xl:max-w-[67%] 2xl:max-w-[87%]  text-[.83rem] xl:text-[.83rem] 2xl:text-[1.1rem] xl:w-[50%] 2xl:w-[40%]  mx-auto md:p-0 lg:p-0 xl:p-0 2xl:p-0 p-[1rem]'>
          <section className='mx-auto my-6 md:flex lg:flex xl:flex 2xl:flex mb-[5rem] mt-[5.5%] gap-[3%]'>
            <article>
            <h2 className='text-[155%] font-semibold'>
OUR VISION</h2>
            <h3 className='text-[135%] font-semibold'>"Everyone Thriving"</h3>
            <p className='text-[.96rem]'>
              Word Tabernacle Church is more than a building consisting of four walls.
               It is a spiritual vehicle for socio-economic,
               system-level change committed to the Vision of “Everyone Thriving”.</p>

            
           
            </article>

            <article >
              <Image width={1000} height={600} src={msgg2.src} alt="" className='rounded-md object-cover  mt-[3%] md:w-[60rem] lg:w-[60rem] xl:w-[60rem] 2xl:w-[80rem] h-[13rem]' />
            </article>
          </section>
          <section className='mx-auto my-6 md:flex lg:flex xl:flex 2xl:flex mb-[5rem] gap-3'>
  <article className='md:order-1 xl:order-1 lg:order-1 2xl:order-1 order-0'>
    <h2 className='text-[155%] font-semibold'>OUR MISSION</h2>
    <h3 className='text-[135%] font-semibold'>"People empowering people and communities in every area of life to the glory of God."</h3>
    <p  className=' xl:text-[1rem] 2xl:text-[1rem] text-[.96rem] mt-3'>Word Tabernacle Church is more than a building consisting of four walls. It is a spiritual vehicle for socio-economic, system-level change committed to the Vision of “Everyone Thriving”.</p>

  </article>

  <article className='md:order-0 lg:order-0 xl:order-0 2xl:order-0 order-1'>
    <Image className='mt-[3%] rounded-md md:w-[60rem] lg:w-[60rem] xl:w-[60rem] 2xl:w-[80rem] h-[13rem] object-cover' width={1000} height={600} src={msgg.src} alt="" />
  </article>
</section>
          
          
        
        </div>
        <div className="content  h-[6rem] relative flex justify-center items-center" style={{ backgroundImage: `url(${redbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h2 className='text-white font-semibold text-[1.9rem] relative inline-block'>
          Our Values
            <span className='block absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100%] h-[4px] bg-white'></span>
          </h2>
        </div>
        <section className='flex flex-col    justify-center items-center text-gray-600 mt-[3rem]  md:p-0 lg:p-0 xl:p-0 2xl:p-0 p-[1rem]'>
          <article className='md:flex lg:flex xl:flex 2xl:flex  md:w-[50rem] lg:w-[50rem] xl:w-[50rem] 2xl:w-[50rem]'>
            <h2 className='font-semibold w-[13rem] text-[1.1rem] text-red-800'>
            Accountability
            </h2>
            <div className=' md:w-[30rem] lg:w-w-[30rem] xl:w-[30rem] 2xl:w-[30rem]'>
            <p >
We are personally responsible and accountable to one another
 for our attitude, actions, and integrity as a means of
  accomplishing vision, building character,
 ensuring sound decision making, and growing as balanced disciples.
            </p>
            <p className='my-[2rem] text-[1rem]' >
            (Acts 15:4; Job 31:6)
            </p>
            </div>
            
          </article>
          <article className='md:flex lg:flex xl:flex 2xl:flex  md:w-[50rem] lg:w-[50rem] xl:w-[50rem] 2xl:w-[50rem]'>
            <h2 className='font-semibold w-[13rem] text-[1.1rem] text-red-800'>
            Authority
            </h2>
            <div className='md:w-[30rem] lg:w-w-[30rem] xl:w-[30rem] 2xl:w-[30rem]'>
            <p>
            The Holy Bible is divinely inspired by God and is the inerrant
             authority by which God communicates, 
            instructs, reveals, and directs our growth and our goals
            </p>
            <p className='my-[2rem] text-[1rem]'>
            (2 Tim 3:16-17) 
            </p>
            </div>
            
          </article>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Page
