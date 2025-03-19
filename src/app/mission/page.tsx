"use client";
import { FC } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Image from "next/image";
import givbg from "../img/giveimg.jpg";

import redbg from "../img/redbgi.webp";

const Page: FC = () => {

  const values = [
    {
      title: 'Excellence',
      message: "We strive for excellence in all we do, honoring God with our best efforts and continuously improving in our service, ministry, and personal growth.(Colossians 3:23; Proverbs 22:29)"
    },
    {
      title: 'Love',
      message: 'We are committed to loving God and people unconditionally, demonstrating Christ-like compassion, kindness, and selflessness in our relationships and service.(John 13:34-35; 1 Corinthians 13:4-7)'
    },
    {
      title: 'Integrity',
      message: 'We uphold truth and honesty in all aspects of life, ensuring that our words, actions, and decisions align with God’s principles.(Proverbs 11:3; 2 Corinthians 8:21)'
    },
    {
      title: 'Accountability',
      message: 'We are personally responsible and accountable to one another for our attitude, actions, and integrity as a means of accomplishing vision, building character, ensuring sound decision-making, and growing as balanced disciples.(Acts 15:4; Job 31:6)'
    },
    {
      title: 'Creativity',
      message: 'We embrace God-given creativity in expressing our faith, solving problems, and advancing His Kingdom in innovative and impactful ways.(Exodus 35:31-32; Proverbs 8:12)'
    },
  ]
  const msgg =
    "https://res.cloudinary.com/dalylashp/image/upload/v1741177452/WhatsApp_Image_2025-03-05_at_12.17.13_PM_peifwo.jpg";
  const msgg2 =
    "https://res.cloudinary.com/dalylashp/image/upload/v1725101712/msg-1001955056097-3260_qxe986.webp";
  return (
    <div className="font-satoshi ">
      <header>
        <Header />
      </header>
      <main className="pt-[6.6rem]  w-[100svw]">
        <div
          className="content  h-[6rem] relative flex justify-center items-center"
          style={{
            backgroundImage: `url(${givbg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-white font-semibold text-[1.9rem] relative inline-block">
            Vision, Mission, & Values
            <span className="block absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100%] h-[4px] bg-white"></span>
          </h2>
        </div>
        <div
          id="mobile"
          className="  text-[.83rem]  mx-auto  p-[1rem]  md:hidden lg:hidden xl:hidden 2xl:hidden"
        >
          <section className="mx-auto my-6 md:flex lg:flex xl:flex 2xl:flex mb-[5rem] mt-[5.5%] gap-[3%]">
            <article>
              <h2 className="text-[155%] font-semibold text-red-600">
                OUR VISION
              </h2>
              <h3 className="text-[135%] font-semibold">"..Empowering Lives, Raising Word Practitioners.. <span>John 1: 12-14</span>"</h3>
              <p className="text-[.96rem]">
                Word Tabernacle Church is more than a building consisting of
                four walls. It is a spiritual vehicle for socio-economic,
                system-level change committed to the Vision of “Everyone
                Thriving”.
              </p>
            </article>

            <article>
              <Image
                width={1000}
                height={600}
                src={msgg2}
                alt=""
                className="rounded-md object-cover object-top   mt-[3%] md:w-[60rem] lg:w-[60rem] xl:w-[60rem] 2xl:w-[80rem] h-[13rem]"
              />
            </article>
          </section>
          <section className="mx-auto my-6 md:flex lg:flex xl:flex 2xl:flex mb-[5rem] gap-3">
            <article className="md:order-1 xl:order-1 lg:order-1 2xl:order-1 order-0">
              <h2 className="text-[155%] font-semibold text-red-600">
                OUR MISSION
              </h2>
              <h3 className="text-[135%] font-semibold">
                "People empowering people and communities in every area of life
                to the glory of God."
              </h3>
              <p className=" xl:text-[1rem] 2xl:text-[1rem] text-[.96rem] mt-3">
                Word Tabernacle Church is more than a building consisting of
                four walls. It is a spiritual vehicle for socio-economic,
                system-level change committed to the Vision of “Everyone
                Thriving”.
              </p>
            </article>

            <article className="md:order-0 lg:order-0 xl:order-0 2xl:order-0 order-1">
              <Image
                className="mt-[3%] rounded-md md:w-[60rem] lg:w-[60rem] xl:w-[60rem] 2xl:w-[80rem] h-[15rem] object-cover object-top"
                width={1000}
                height={600}
                src={msgg}
                alt=""
              />
            </article>
          </section>
        </div>

        <div
          id="laptop"
          className="md:max-w-[67%] lg:w-full xl:w-full 2xl:max-w-[87%] text-[.83rem] xl:text-[.83rem] 2xl:text-[1.1rem]  2xl:w-[40%] mx-auto md:p-0 lg:p-0 xl:p-0 2xl:p-0 p-[1rem] hidden md:block lg:block xl:block 2xl:block"
        >
          <section className="mx-auto my-6 md:flex lg:flex xl:flex 2xl:flex mb-[5rem] mt-[5.5%] gap-[3%]">
            <article className="order-0 md:order-0">
              <h2 className="text-[155%] font-semibold text-red-600">
                OUR VISION
              </h2>
              <h3 className="text-[135%] font-semibold">"..Empowering Lives, Raising Word Practitioners.. <span className="text-[.81rem]">John 1: 12-14</span>"</h3>
              <p className="text-[.96rem]">
                Word Tabernacle Church is more than a building consisting of
                four walls. It is a spiritual vehicle for socio-economic,
                system-level change committed to the Vision of “..Empowering Lives,”.
              </p>
            </article>

            <article className="order-1 md:order-1">
              <Image
                width={1000}
                height={600}
                src={msgg2}
                alt=""
                className="rounded-md object-cover object-top mt-[3%] md:w-[60rem] lg:w-[60rem] xl:w-[60rem] 2xl:w-[80rem] h-[13rem]"
              />
            </article>
          </section>

          <section className="mx-auto my-6 md:flex lg:flex xl:flex 2xl:flex mb-[5rem] gap-3">
            <article className="order-1 md:order-0 lg:order-0 xl:order-0 2xl:order-0">
              <Image
                className="mt-[3%] rounded-md md:w-[60rem] lg:w-[60rem] xl:w-[60rem] 2xl:w-[80rem] h-[18rem] object-cover object-top"
                width={1000}
                height={600}
                src={msgg}
                alt=""
              />
            </article>

            <article className="order-1 md:order-1 lg:order-1 xl:order-1 2xl:order-1">
              <h2 className="text-[155%] font-semibold text-red-600">
                OUR MISSION
              </h2>
              <h3 className="text-[135%] font-semibold">
                "People empowering people and communities in every area of life
                to the glory of God."
              </h3>
              <p className="xl:text-[1rem] 2xl:text-[1rem] text-[.96rem] mt-3">
                Word Tabernacle Church is more than a building consisting of
                four walls. It is a spiritual vehicle for socio-economic,
                system-level change committed to the Vision of “..Empowering Lives,”.
              </p>
            </article>
          </section>
        </div>

        <div
          className="content  h-[6rem] relative flex justify-center items-center"
          style={{
            backgroundImage: `url(${redbg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-white font-semibold text-[1.9rem] relative inline-block">
            Our Values
            <span className="block absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100%] h-[4px] bg-white"></span>
          </h2>
        </div>
        <section className="flex flex-col    justify-center items-center text-gray-600 mt-[3rem]  md:p-0 lg:p-0 xl:p-0 2xl:p-0 p-[1rem]">
          
          {values.map((value,index)=>(
            <article key={index} className="md:flex lg:flex xl:flex 2xl:flex  md:w-[50rem] lg:w-[50rem] xl:w-[50rem] 2xl:w-[50rem] mb-[3rem]">
            <h2 className="font-semibold w-[13rem] text-[1.1rem] text-red-800">
            {value.title} 
            </h2>
            <div className="md:w-[30rem] lg:w-w-[30rem] xl:w-[30rem] 2xl:w-[30rem]">
              <p>
                {value.message}
              </p>
              
            </div>
          </article>
          ))}
          
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
