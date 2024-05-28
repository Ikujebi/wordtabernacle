import { FC } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Image from 'next/image'
import givbg from '../img/giveimg.jpg'
import testimony from '../img/testimony.webp'

const page: FC = () => {
        return (
                <div>
                        <header >
                                <Header />
                        </header>
                        <main className='pt-[10rem]'>
                                <div className="content h-[6rem] relative flex justify-center items-center" style={{ backgroundImage: `url(${givbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                        <h2 className='text-white font-semibold text-[1.9rem] underline underline:w-[3rem]'>Giving
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