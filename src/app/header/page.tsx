"use client"
import { FC } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Image from 'next/image'
import givbg from '../img/giveimg.jpg'
import giving from '../img/Giving-Online-updated.webp'
import { Select, Input } from 'antd'
import { useState } from 'react'


const page: FC = () => {

  const [value, setValue] = useState('');

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
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
        <div className='max-w-[67%]  text-[.83rem] xl:text-[.83rem] 2xl:text-[1.1rem] xl:w-[50%] 2xl:w-[40%]  mx-auto'>
          <section className='mx-auto my-6 flex mb-[5rem]'>
            <article>
            <h2 className='text-[155%] font-semibold'>
OUR VISION</h2>
            <h3 className='text-[135%] font-semibold'>"Everyone Thriving"</h3>
            <p className=''>
              Word Tabernacle Church is more than a building consisting of four walls.
               It is a spiritual vehicle for socio-economic,
               system-level change committed to the Vision of “Everyone Thriving”.</p>

            <p className='text-center font-semibold xl:text-[1rem] 2xl:text-[1rem] text-[.97rem] mt-3'>Complete the form below to give online.</p>
           
            </article>

            <article>
              <Image width={1000} height={600} src={giving.src} alt="" />
            </article>
          </section>
          <section className='mx-auto my-6 flex mb-[5rem] gap-3 '>
          <article>
              <Image className='max-w-[96%]' width={1000} height={600} src={giving.src} alt="" />
            </article>
           
            <article className='max-w-[46%]'>
            <h2 className='text-[155%] font-semibold'>
OUR OUR MISSION</h2>
            <h3 className='text-[135%] font-semibold'>"People empowering people and communities in every area of life to the glory of God."</h3>
            <p className=''>
              Word Tabernacle Church is more than a building consisting of four walls.
               It is a spiritual vehicle for socio-economic,
               system-level change committed to the Vision of “Everyone Thriving”.</p>

            <p className='text-center font-semibold xl:text-[1rem] 2xl:text-[1rem] text-[.97rem] mt-3'>Complete the form below to give online.</p>
           
            </article>

            
          </section>
          
          
        
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default page
