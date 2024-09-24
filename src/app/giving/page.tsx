"use client"
import { FC } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Image from 'next/image'
import givbg from '../img/giveimg.jpg'
import { useState } from 'react'


const Page: FC = () => {

    const [formData, setFormData] = useState({
        fund: '',
        note: '',
        amount: ''
    });

    const giving = "https://res.cloudinary.com/dalylashp/image/upload/v1726922487/WhatsApp_Image_2024-09-21_at_1.40.43_PM_uykcnw.jpg"

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevData =>({
            ...prevData,
            [name]: value
        }))
    };
    return (
        <div className='font-satoshi '>
            <header >
                <Header />
            </header>
            <main className='pt-[10rem]'>
                <div className="content  h-[6rem] relative flex justify-center items-center" style={{ backgroundImage: `url(${givbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h2 className='text-white font-semibold text-[1.9rem] relative inline-block'>
                        Giving
                        <span className='block absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[120%] h-[3px] bg-white'></span>
                    </h2>
                </div>
                <div className='max-w-[67%] text-red-700 text-[.83rem] xl:text-[.83rem] 2xl:text-[1.1rem] xl:w-[50%] 2xl:w-[40%]  mx-auto'>
                <section className='mx-auto my-6 '>
                    <p className='text-center'>
                        We encourage all of those who are part of our Church family 
                        to give—not out of obligation but out of a spirit of worship.
                         Your gifts allow God’s work to be done in our midst, 
                         in our community, and in the world around us.</p>
                        
                         <p className='text-center font-semibold xl:text-[1rem] 2xl:text-[1rem] text-[.97rem] mt-3'>Complete the form below to give online.</p>
                </section>
                <section className='mx-auto my-6 mt-6  '>
                        <h2 className='text-[1.35rem] font-semibold'>
                            Give 
                            
                        </h2>
                        <h2 className='text-[1rem] my-[2rem] text-center font-semibold relative'>
                            Give now
                            <span className='block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[12%] h-[3px] bg-red-400'></span>
                        </h2>
                        <Image width={1000} height={500} src={giving} alt="" className='md:h-[25rem] lg:h-[25rem] xl:h-[25rem] 2xl:h-[25rem]'/>

                </section>
                <section>

                </section>

                <section >
                    <h2 className='text-[1.25rem] font-semibold'>My Donation</h2>
                    <article className="flex items-center justify-center text-center ">
      <div className="relative my-8">
        <h2 className="text-base font-semibold relative inline-block bg-white px-2">
          <span>Recurring</span>
        </h2>
        <span className="block shadow-md absolute left-1/2 transform -translate-x-1/2 w-[120%] h-[3px] bg-red-400 bottom-0"></span>
      </div>
      <div className="relative my-8">
        <h2 className="text-base font-semibold relative inline-block bg-white px-2">
          <span>One-time</span>
        </h2>
        <span className="block shadow-md absolute left-1/2 transform -translate-x-1/2 w-[120%] h-[3px] bg-gray-200 bottom-0"></span>
      </div>
    </article>


                </section>
                <section>
                    <article>
                    <select id="funds" 
                    name="fund" 
                    value={formData.fund}
                    onChange={handleChange}
                    className='w-full h-[3rem] border-[1px] border-gray-400 focus:border-red-400 focus:outline-red-400 outline-[1px] mb-[3rem] pl-2 text-[1.3rem] text-red-400 mb-[3rem]'>
    <option value="" disabled  hidden>Fund</option>
    <option value="tithe">Tithe</option>
    <option value="pastor">Pastoral Support</option>
    <option value="thrive">Thrive Fund</option>
    <option value="offering">Offering</option>
    <option value="missions">Missions</option>
    <option value="others">Other-Please Specify</option>
</select>
    <input
        type="text"
        className={`w-full h-[3rem] border-[1px] border-gray-400 outline-[1px] mb-[3rem] pl-4 text-[1.3rem] placeholder-red-400 focus:outline-red-400 transition-colors duration-300 ${formData.note.trim() ? 'placeholder-to-border' : ''}`}
        placeholder="Note"
        name='note'
        value={formData.note}
        onChange={handleChange}
      />
    <input
        type="text"
        className={`w-full h-[3rem] border-[1px] border-gray-400 outline-[1px] mb-[3rem] pl-4 text-[1.3rem] placeholder-red-400 focus:outline-red-400 transition-colors duration-300 ${formData.amount.trim() ? 'placeholder-to-border' : ''}`}
        placeholder="Amount"
        name='anount'
        value={formData.amount}
        onChange={handleChange}
      />

      
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

export default Page
