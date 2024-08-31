"use client";
import { FC, useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import givbg from "../img/giveimg.jpg";
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
          Next Generation
            <span className="block absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100%] h-[4px] bg-white"></span>
          </h2>
        </div>
        
       <section className="flex flex-col items-center">
        <article className="w-[65%]">
        WTC Youth Ministries are where 4th-13th Grade students can grow, worship, fellowship, serve, and discover their identity and purpose in Christ in a fun and safe environment.
        </article>
        <article className=" bg-gradient-to-r  from-indigo-300 mt-[5%] flex justify-center">
          <p className="w-[65%]">
        We break out into small groups and studies, go on retreats, have awesome events, gather during the week, and serve as a team — all to empower people in every area of life to the glory of God.
        
        </p></article>
       </section>
       <section>

       </section>
      </main>
      <footer className=" w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
