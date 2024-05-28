import { FC } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Image from 'next/image'
import givbg from '../img/giveimg.jpg'


const page: FC = () => {
    return (
        <div className='font'>
            <header >
                <Header />
            </header>
            <main className='pt-[10rem]'>
                <div className="content h-[6rem] relative flex justify-center items-center" style={{ backgroundImage: `url(${givbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h2 className='text-white font-semibold text-[1.9rem] relative inline-block'>
                        Giving
                        <span className='block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[120%] h-[3px] bg-yellow-500'></span>
                    </h2>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default page
