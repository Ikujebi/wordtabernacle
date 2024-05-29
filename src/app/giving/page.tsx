import { FC } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Image from 'next/image'
import givbg from '../img/giveimg.jpg'
import giving from '../img/Giving-Online-updated.webp'


const page: FC = () => {
    return (
        <div className='font-satoshi'>
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
                        <Image width={1000} height={500} src={giving.src} alt="" />

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
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default page
