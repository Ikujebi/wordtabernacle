"use client"
import { FC } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Image from 'next/image'
import givbg from '../img/giveimg.jpg'
import pastor from '../img/pastor.webp'
import pastorMrs from '../img/msg-1001955056097-3253.webp'
import ministerAbraham from '../img/minab.jpg'
import ministerjames from '../img/minjames.jpg'




const Page: FC = () => {

 

 
  return (
    <div className='font-satoshi '>
      <header >
        <Header />
      </header>
      <main className='pt-[10rem]'>
      <div className="content  h-[6rem] 2xl:h-[8rem]  relative flex justify-center items-center" style={{ backgroundImage: `url(${givbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h2 className='text-white font-semibold 2xl:text-[1.9rem] text-[1.5rem] relative inline-block'>
          Executive Leadership Team
            <span className='block absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100%] h-[4px] bg-white'></span>
          </h2>
        </div>
        <section className='flex  gap-[3rem] justify-center mt-[4rem]'>
          <div className='md:flex lg:flex xl:flex 2xl:flex w-[80%] gap-[3rem] '>
          <article className=' md:w-[30%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%] '>
            <Image width={1000} height={500} src={pastor.src} alt="pastor" className='w-full h-[35svh]' />
          </article>
         
          <article className='md:w-[60%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%]'>
          <article>
            <h1>
            Ayodeji D. Ayorinde  |  Senior Pastor
            </h1>
            <p className='flex gap-5 text-[.8rem] underline'><a href="">Download Bio</a>
            <a href="">Download Press Photos</a>
            </p>
          </article>
            <p className='mt-5'>
            Pastor James David Gailliard is the Organizing and 
            Senior Pastor of Word Tabernacle Church located in
             Rocky Mount, North Carolina. At the intersection of
              pastoral ministry and public policy he has formed 
              a collaborative model of human, socio-political- 
              economic and community development,
               another avenue by which he has accomplished
                this was by serving two consecutive terms 
                in the North Carolina General Assembly, 
                becoming “living history” as the only person 
                of color to be elected to represent House District 25 
                (Nash-Rocky Mount). As a Commissioner of MyFutureNC, 
                he is one of the architects of the
                 statewide educational attainment goal.
            </p>
            <p className='mt-8'>
            Visionary, pioneer, leader, humanitarian,
             and philanthropist, Pastor Gailliard was
              named the 2016 Distinguished Citizen by the Rocky Mount Chamber of Commerce, and most recently recognized for making an impact within his community as the recipient of the 2023 President Joseph R. Biden, Jr. Lifetime Achievement Award. He is the Founder-Chairman of The REACH Center, Inc, a member of the Board of Trustees, Elizabeth City State University as well as the Board of Preachers, Morehouse College, his alma mater, and he is the former Chairman of the Board for the North Carolina Legislative Black Caucus Foundation. His academic background is an unusual combination
             of theology, counseling, and business administration.
            </p>
            <p className='mt-8'>
            Pastor Gailliard is a proud husband to Angela, with whom he shares a blended family of seven children and three grandchildren. Affectionately known as Pastor G, he is a spiritual father, son, and brother to many. To unwind, he can be found on his Harley Davidson or shooting a game of pool.
            </p>
          </article>
          </div>
        </section>
        <section className='flex  gap-[3rem] justify-center mt-[4rem]'>
          <div className='md:flex lg:flex xl:flex 2xl:flex w-[80%] gap-[3rem] '>
          <article className=' md:w-[30%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%] '>
            <Image width={1000} height={500} src={pastorMrs.src} alt="pastor" className='w-full h-[35svh]' />
          </article>
         
          <article className='md:w-[60%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%]'>
          <article>
            <h1>
            Ayodeji D. Ayorinde  |  Senior Pastor
            </h1>
            <p className='flex gap-5 text-[.8rem] underline'><a href="">Download Bio</a>
            <a href="">Download Press Photos</a>
            </p>
          </article>
            <p className='mt-5'>
            Pastor James David Gailliard is the Organizing and 
            Senior Pastor of Word Tabernacle Church located in
             Rocky Mount, North Carolina. At the intersection of
              pastoral ministry and public policy he has formed 
              a collaborative model of human, socio-political- 
              economic and community development,
               another avenue by which he has accomplished
                this was by serving two consecutive terms 
                in the North Carolina General Assembly, 
                becoming “living history” as the only person 
                of color to be elected to represent House District 25 
                (Nash-Rocky Mount). As a Commissioner of MyFutureNC, 
                he is one of the architects of the
                 statewide educational attainment goal.
            </p>
            <p className='mt-8'>
            Visionary, pioneer, leader, humanitarian,
             and philanthropist, Pastor Gailliard was
              named the 2016 Distinguished Citizen by the Rocky Mount Chamber of Commerce, and most recently recognized for making an impact within his community as the recipient of the 2023 President Joseph R. Biden, Jr. Lifetime Achievement Award. He is the Founder-Chairman of The REACH Center, Inc, a member of the Board of Trustees, Elizabeth City State University as well as the Board of Preachers, Morehouse College, his alma mater, and he is the former Chairman of the Board for the North Carolina Legislative Black Caucus Foundation. His academic background is an unusual combination
             of theology, counseling, and business administration.
            </p>
            <p className='mt-8'>
            Pastor Gailliard is a proud husband to Angela, with whom he shares a blended family of seven children and three grandchildren. Affectionately known as Pastor G, he is a spiritual father, son, and brother to many. To unwind, he can be found on his Harley Davidson or shooting a game of pool.
            </p>
          </article>
          </div>
        </section>
        <section className='flex  gap-[3rem] justify-center mt-[4rem]'>
          <div className='md:flex lg:flex xl:flex 2xl:flex w-[80%] gap-[3rem] '>
          <article className=' md:w-[30%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%] '>
            <Image width={1000} height={500} src={ministerAbraham.src} alt="pastor" className='w-full h-[35svh]' />
          </article>
         
          <article className='md:w-[60%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%]'>
          <article>
            <h1>
            Ayodeji D. Ayorinde  |  Senior Pastor
            </h1>
            <p className='flex gap-5 text-[.8rem] underline'><a href="">Download Bio</a>
            <a href="">Download Press Photos</a>
            </p>
          </article>
            <p className='mt-5'>
            Pastor James David Gailliard is the Organizing and 
            Senior Pastor of Word Tabernacle Church located in
             Rocky Mount, North Carolina. At the intersection of
              pastoral ministry and public policy he has formed 
              a collaborative model of human, socio-political- 
              economic and community development,
               another avenue by which he has accomplished
                this was by serving two consecutive terms 
                in the North Carolina General Assembly, 
                becoming “living history” as the only person 
                of color to be elected to represent House District 25 
                (Nash-Rocky Mount). As a Commissioner of MyFutureNC, 
                he is one of the architects of the
                 statewide educational attainment goal.
            </p>
            <p className='mt-8'>
            Visionary, pioneer, leader, humanitarian,
             and philanthropist, Pastor Gailliard was
              named the 2016 Distinguished Citizen by the Rocky Mount Chamber of Commerce, and most recently recognized for making an impact within his community as the recipient of the 2023 President Joseph R. Biden, Jr. Lifetime Achievement Award. He is the Founder-Chairman of The REACH Center, Inc, a member of the Board of Trustees, Elizabeth City State University as well as the Board of Preachers, Morehouse College, his alma mater, and he is the former Chairman of the Board for the North Carolina Legislative Black Caucus Foundation. His academic background is an unusual combination
             of theology, counseling, and business administration.
            </p>
            <p className='mt-8'>
            Pastor Gailliard is a proud husband to Angela, with whom he shares a blended family of seven children and three grandchildren. Affectionately known as Pastor G, he is a spiritual father, son, and brother to many. To unwind, he can be found on his Harley Davidson or shooting a game of pool.
            </p>
          </article>
          </div>
        </section>
        <section className='flex  gap-[3rem] justify-center mt-[4rem]'>
          <div className='md:flex lg:flex xl:flex 2xl:flex w-[80%] gap-[3rem] '>
          <article className=' md:w-[30%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%] '>
            <Image width={1000} height={500} src={ministerjames.src} alt="pastor" className='w-full h-[35svh]' />
          </article>
         
          <article className='md:w-[60%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%]'>
          <article>
            <h1>
            Ayodeji D. Ayorinde  |  Senior Pastor
            </h1>
            <p className='flex gap-5 text-[.8rem] underline'><a href="">Download Bio</a>
            <a href="">Download Press Photos</a>
            </p>
          </article>
            <p className='mt-5'>
            Pastor James David Gailliard is the Organizing and 
            Senior Pastor of Word Tabernacle Church located in
             Rocky Mount, North Carolina. At the intersection of
              pastoral ministry and public policy he has formed 
              a collaborative model of human, socio-political- 
              economic and community development,
               another avenue by which he has accomplished
                this was by serving two consecutive terms 
                in the North Carolina General Assembly, 
                becoming “living history” as the only person 
                of color to be elected to represent House District 25 
                (Nash-Rocky Mount). As a Commissioner of MyFutureNC, 
                he is one of the architects of the
                 statewide educational attainment goal.
            </p>
            <p className='mt-8'>
            Visionary, pioneer, leader, humanitarian,
             and philanthropist, Pastor Gailliard was
              named the 2016 Distinguished Citizen by the Rocky Mount Chamber of Commerce, and most recently recognized for making an impact within his community as the recipient of the 2023 President Joseph R. Biden, Jr. Lifetime Achievement Award. He is the Founder-Chairman of The REACH Center, Inc, a member of the Board of Trustees, Elizabeth City State University as well as the Board of Preachers, Morehouse College, his alma mater, and he is the former Chairman of the Board for the North Carolina Legislative Black Caucus Foundation. His academic background is an unusual combination
             of theology, counseling, and business administration.
            </p>
            <p className='mt-8'>
            Pastor Gailliard is a proud husband to Angela, with whom he shares a blended family of seven children and three grandchildren. Affectionately known as Pastor G, he is a spiritual father, son, and brother to many. To unwind, he can be found on his Harley Davidson or shooting a game of pool.
            </p>
          </article>
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
