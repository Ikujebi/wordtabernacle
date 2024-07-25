"use client";
import { FC, useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import givbg from "../img/giveimg.jpg";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";

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

  return (
    <div className="font-satoshi ">
      <header>
        <Header />
      </header>
      <main className="pt-[10rem]">
        <div
          className="content  h-[6rem] 2xl:h-[8rem]  relative flex justify-center items-center"
          style={{
            backgroundImage: `url(${givbg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-white font-semibold 2xl:text-[1.9rem] text-[1.5rem] relative inline-block">
            Contact Us
            <span className="block absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100%] h-[4px] bg-white"></span>
          </h2>
        </div>
        <div className="bg-gray-300 md:h-[47svh] lg:h-[47svh] xl:h-[47svh] h-[55svh] 2xl:h-[50svh] ">
          <section className="flex    justify-center  ">
            <div className="flex w-[75%] ">
              <section className="bg-white mt-[-1.5rem]  relative z-100 flex h-[125%]  justify-center w-full  text-[.6rem] md:text-[1rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem]">
                <article className="flex flex-col items-center pt-[1.5%] w-[33.3%]">
                  <div>
                    <FaPhoneAlt className="text-[2rem]" />
                  </div>
                  <div>
                    <h2>Phone</h2>
                  </div>
                  <div className="flex flex-col items-center">
                    <a href="call:+2348073180186">(234) 807-318-0186</a>
                    <a href="call:+2348020523796">(234) 802-052-3796</a>
                    <a href="whatsApp:+2348073180186">(252) 442-3894 Fax</a>
                  </div>
                </article>
                <article className="flex flex-col items-center pt-[1.5%] w-[33.3%]">
                  <div>
                    <FaMapMarkerAlt className="text-[2rem]" />
                  </div>
                  <div>
                    <h2>Address</h2>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-center">Word Tabernacle Church</p>
                    <p>2, Ajetunmobi street</p>
                    <p>ibeshe,ikorodu,LG</p>
                  </div>
                </article>
                <article className="flex flex-col items-center pt-[1.5%] w-[33.3%]">
                  <div>
                    <MdEmail className="text-[2rem]" />
                  </div>
                  <div>
                    <h2>Email</h2>
                  </div>
                  <div className="flex flex-col items-center max-w-[100%]">
                    <p>wordtabernaclebc@gmail.com</p>
                  </div>
                </article>
                <article></article>
              </section>
            </div>
          </section>
          <section className="mt-[5%] 2xl:mt-[2.7%] flex flex-col items-center text-gray-800  text-[1.1rem]">
            <h2 className="font-bold text-[150%]">SERVICE TIMES</h2>
            <article className="flex flex-col items-center">
              <h3>GenZ Service:</h3>
              <p className="mb-[5%] text-[91%]">
                Sundays at 8:00AM & 09:30AM - main auditorium
              </p>

              <h3>Worship Service:</h3>
              <p className="mb-[5%] text-[91%]">
                Sundays at 10:00AM & 12:00AM - main auditorium
              </p>
            </article>

            <article className="flex flex-col items-center">
              <h3>Wednesday Equip Service:</h3>
              <p className=" text-[90%] ">
                Wednesdays at 06:30PM - main auditorium
              </p>
            </article>
          </section>
        </div>
        <section className="md:h-[60svh] lg:h-[60svh] xl:h-[60svh] h-[80svh] 2xl:h-[80svh] flex justify-center 2xl:mb-[5%]">
          <form
            onSubmit={handleSubmit}
            className="border-[2px] w-full border-gray-400 shadow-md md:w-[60%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%] shadow-xl pt-[2%] mt-[5%] 2xl:h-[70svh] 2xl:mb-[3%]"
          >
            <article>
              <h2 className="flex justify-center py-[3%]  text-2xl font-semibold">
                Contact us
              </h2>
              <article className="md:flex lg:flex xl:flex 2xl:flex mx-[2rem] justify-center gap-[3%]">
                <div className=" md:w-[45%] lg:w-[45%] xl:w-[45%] 2xl:w-[45%]  mt-2">
                  <label htmlFor="firstName" className="">
                    First name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    name="firstName"
                    onChange={handleChange}
                    placeholder="First name"
                    className="pl-1 block border-[1px] border-gray-500 outline-none w-[100%]"
                  />
                </div>
                <div className="md:w-[45%] lg:w-[45%] xl:w-[45%] 2xl:w-[45%] mt-2">
                  <label htmlFor="lastName" className=" mt-2 ">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="pl-1 block border-[1px] border-gray-500 outline-none w-[100%]"
                  />
                </div>
              </article>
              <article className="md:flex lg:flex xl:flex 2xl:flex mx-[2rem] mt-[5%] justify-center gap-[3%]">
                <div className="md:w-[45%] lg:w-[45%] xl:w-[45%] 2xl:w-[45%] mt-2">
                  <label htmlFor="email" className="w-[45%]">
                    Email *
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-1 block border-[1px] border-gray-500 outline-none w-[100%]"
                  />
                </div>
                <div className="md:w-[45%] lg:w-[45%] xl:w-[45%] 2xl:w-[45%] mt-2">
                  <label htmlFor="lastName" className="w-[45%] mt-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-1 block border-[1px] border-gray-500 outline-none w-[100%]"
                  />
                </div>
              </article>
              <article className=" mx-[2rem] mt-[5%] flex flex-col items-center">
               <div className="w-[94%]">
                <label htmlFor="message">Message *</label>
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
              <button
                type="submit"
                className="w-[30%] py-2 mt-1 bg-red-700 text-white ml-[10%] mt-[2.5%]"
              >
                Submit
              </button>
            </article>
          </form>
        </section>
        <section className="flex justify-center my-8 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.711954552398!2d3.474328075840481!3d6.557999393435149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf2726b345a27%3A0xeb8c1cd955070248!2sWord%20Tabernacle%20Bible%20Church!5e0!3m2!1sen!2sng!4v1718294118256!5m2!1sen!2sng"
            width="600"
            height="450"
            className="md:w-[65%] lg:w-[65%] xl:w-[65%] 2xl:w-[65%] w-[99%] 2xl:h-[40rem]"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen={false}
          ></iframe>
        </section>
      </main>
      <footer className=" w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
