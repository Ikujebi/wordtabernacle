"use client"
import { FC } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Image from 'next/image'
import givbg from '../img/prayer2.webp'
import churchlogo from '../img/wordlogo.png'
import { useState } from 'react'
import Link from 'next/link'
import emailjs from "emailjs-com";
import { Radio } from 'antd'


const Page: FC = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    
      const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e: any) => {
        e.preventDefault();
    
        emailjs
          .send("your_service_id", "your_template_id", formData, "your_user_id")
          .then(
            (result) => {
              alert("Email sent successfully!");
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
              });
            },
            (error) => {
              alert("Failed to send email.");
              console.error("Error:", error.text);
            }
          );
      };
    

    const [valueRadio, setValueRadio] = useState(1);

  const onChange = (e:any) => {
    setValueRadio(e.target.value);
  };

    
    return (
        <div className='font-satoshi '>
            <header >
                <Header />
            </header>
            <main className='pt-[8.7rem]'>
                <div className="content  h-[7rem] relative flex justify-center items-center" style={{ backgroundImage: `url(${givbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h2 className='text-white font-semibold text-[1.9rem] relative inline-block'>
                    Prayer Requests
                        <span className='block absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[120%] h-[3px] bg-white'></span>
                    </h2>
                </div>
                <div className='md:max-w-[67%] lg:max-w-[67%] xl:max-w-[67%] 2xl:max-w-[67%] text-red-700 text-[.83rem] xl:text-[.83rem] 2xl:text-[1.1rem] xl:w-[50%] 2xl:w-[40%]  mx-auto'>
                <section className='mx-auto my-6 '>
                    <h2 className='text-center font-bold text-[1.5rem]'>NEED PRAYER?</h2>
                    <p className='text-center'>
                    We believe that God wants to meet the needs and reveal
                     His promises to His people. Since prayer is the way we
                      communicate with Him, we place a priority on it.
                      Let us pray for you. Submit your prayer request.</p>
                        
                         <p className='text-center font-semibold xl:text-[1rem] 2xl:text-[1rem] text-[.97rem] mt-3'>Complete the form below to give online.</p>
                </section>
                <section className='mx-auto my-6 mt-6  '>
                <Link href='#' className="flex justify-center gap-1">
                                    <Image alt="church logo" width={300} height={100} src={churchlogo.src} className="md:w-[15rem]  lg:w-[15rem] xl:w-[15rem] 2xl:w-[15rem] w-[4rem] md:h-[13rem] lg:h-[13rem] xl:h-[13rem] 2xl:h-[13rem] h-[4rem]" />
                                    <span className="font-semibold text-red-600 md:mt-[5rem] lg:mt-[5rem] xl:mt-[5rem] 2xl:mt-[5rem] mt-[1.5rem] md:text-[2rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[2rem]">WORD TABERNACLE</span>
                                </Link>
                       
                </section>
                <section>

                </section>

                <section >
                    <h2 className='text-[1.7rem] font-semibold md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0 ml-7'>Prayer Requests</h2>
                   


                </section>
                <section>
                <form
            onSubmit={handleSubmit}
            className="w-full 2xl:w-full  shadow-xl pt-[2%] mt-[5%] 2xl:h-[101svh] 2xl:mb-[3%] mb-[1rem] pb-2"
          >
            <article>
              <h2 className="flex justify-center py-[3%]  text-2xl font-semibold">
               
              </h2>
              <article className=" mx-[2rem] justify-center gap-[3%]">
                <div className=" w-[80%]  mt-2">
                  <label htmlFor="firstName" className="">
                    First name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    name="firstName"
                    onChange={handleChange}
                    placeholder="First name"
                    className="pl-1 block border-[1px] h-[2.6rem] border-gray-500 outline-none w-[100%]"
                  />
                </div>
                <div className="w-[80%] mt-2">
                  <label htmlFor="lastName" className=" mt-2 ">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="pl-1 block border-[1px] h-[2.6rem] border-gray-500 outline-none w-[100%]"
                  />
                </div>
              </article>
              <article className=" mx-[2rem] mt-[5%] justify-center gap-[3%]">
                <div className="w-[80%] mt-2">
                  <label htmlFor="email" className="w-[45%]">
                    Email *
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-1 block border-[1px] h-[2.6rem] border-gray-500 outline-none w-[100%]"
                  />
                </div>
                <div className="w-[80%] mt-2">
                  <label htmlFor="lastName" className="w-[45%] mt-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-1 block border-[1px] h-[2.6rem] border-gray-500 outline-none w-[100%]"
                  />
                </div>
              </article>
              
              <article className=" mx-[2rem] mt-[5%] flex flex-col ">
                <h3>Preferred Method of Contact (optional)
                </h3>
                <Radio.Group onChange={onChange} value={valueRadio}>
        <Radio className='text-[1rem]' value={1}>Email</Radio><br />
        <Radio className='text-[1rem]' value={2}>Phone</Radio>
        
      </Radio.Group>
              </article>
              <article className=" mx-[2rem] mt-[5%] flex flex-col items-center">
               <div className="w-[94%]">
                <label htmlFor="message">Let us know how we can pray for you?</label>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  id=""
                  className="p-2 h-[5rem] md:h-[10rem] lg:h-[10rem] xl:h-[10rem] 2xl:h-[10rem] mt-2 w-full block border-[1px] border-gray-500 outline-none"
                ></textarea>
                </div>
              </article>

              <article className=" mx-[2rem] mt-[5%] flex flex-col ">
                <h3>Are you a member of WTC (optional)

                </h3>
                <Radio.Group onChange={onChange} value={valueRadio}>
        <Radio className='text-[1rem]' value={1}>Yes</Radio><br />
        <Radio className='text-[1rem]' value={2}>No</Radio>
        
      </Radio.Group>
              </article>
              <article className='text-center'>
              <button
                type="submit"
                className="w-[60%] h-[4rem] rounded-3xl  py-2 mt-1 bg-red-700 text-white ml-[10%] mt-[2.5%] "
              >
                Submit
              </button>
              </article>
              
            </article>
          </form>
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
