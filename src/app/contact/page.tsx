"use client";

import { FC, useState, ChangeEvent, FormEvent } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useRouter } from "next/navigation";
import { submitContactMessage } from "@/lib/api";
import { message as antMessage } from "antd";
import givbg from "../img/giveimg.jpg";
import styles from "../CustomMessage.module.css";

interface FormDataState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const Page: FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (
  e: FormEvent<HTMLFormElement>
) => {

  e.preventDefault();


  if (
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.message
  ) {

    antMessage.warning(
      "Please fill in all required fields."
    );

    return;
  }


  const loadingMessageKey =
    "contactFormLoading";


  try {

    antMessage.loading({
      content:
        "Submitting your message...",
      key:
        loadingMessageKey,
      className:
        styles.loader,
    });


    const response =
      await submitContactMessage({
        firstName:
          formData.firstName,

        lastName:
          formData.lastName,

        email:
          formData.email,

        phone:
          formData.phone,

        message:
          formData.message,
      });



    antMessage.success({

      content:
        response.message ||
        "Message sent successfully!",

      key:
        loadingMessageKey,

      duration:
        3,
    });



    setFormData({

      firstName:"",
      lastName:"",
      email:"",
      phone:"",
      message:"",
    });



    router.push("/");


  } catch(error:any){


    console.error(
      "Contact submission error:",
      error
    );


    antMessage.error({

      content:
        error.message ||
        "Unable to send message. Try again.",

      key:
        loadingMessageKey,
    });

  }

};

  return (
    <div className="w-full bg-zinc-50 min-h-screen overflow-hidden antialiased font-sans">
      <main className="pt-20 lg:pt-24">
        
        {/* Editorial Sub-Page Header Hero */}
        <div
          className="relative h-48 sm:h-64 flex justify-center items-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${givbg.src})` }}
        >
          <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-[2px]" />
          <div className="relative text-center px-4 z-10">
            <h1 className="text-white font-black text-3xl sm:text-4xl tracking-tight uppercase">
              Contact Us
            </h1>
            <div className="w-12 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
          </div>
        </div>

        {/* Info Blocks Grid & Service Times Section */}
        <div className="bg-zinc-100/80 pb-16 relative">
          
          {/* Asymmetric Overlapping Action Hub Grid */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative -translate-y-8 z-20">
            <div className="bg-white rounded-2xl border border-zinc-200/50 shadow-xl shadow-zinc-200/40 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-100 overflow-hidden">
              
              {/* Pillar Block: Voice Call channels */}
              <div className="p-6 sm:p-8 flex flex-col items-center text-center space-y-3 group">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white duration-300">
                  <FaPhoneAlt className="text-lg" />
                </div>
                <h3 className="font-black text-xs uppercase tracking-widest text-zinc-400">Phone</h3>
                <div className="flex flex-col text-sm font-semibold text-zinc-800 space-y-1">
                  <a href="tel:+2348073180186" className="hover:text-red-600 transition-colors">+234 (0) 807 318 0186</a>
                  <a href="tel:+2348020523796" className="hover:text-red-600 transition-colors">+234 (0) 802 052 3796</a>
                </div>
              </div>

              {/* Pillar Block: Physical Location Map Coordinates */}
              <div className="p-6 sm:p-8 flex flex-col items-center text-center space-y-3 group">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white duration-300">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <h3 className="font-black text-xs uppercase tracking-widest text-zinc-400">Address</h3>
                <div className="text-sm font-medium text-zinc-600 leading-relaxed">
                  <p className="font-bold text-zinc-800">Word Tabernacle Bible Church</p>
                  <p>2, Ajetunmobi Street, Ibeshe</p>
                  <p>Ikorodu, Lagos, Nigeria</p>
                </div>
              </div>

              {/* Pillar Block: Digital Mailing Coordinates */}
              <div className="p-6 sm:p-8 flex flex-col items-center text-center space-y-3 group">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white duration-300">
                  <MdEmail className="text-xl" />
                </div>
                <h3 className="font-black text-xs uppercase tracking-widest text-zinc-400">Email</h3>
                <div className="text-sm font-semibold text-zinc-800">
                  <a href="mailto:wordtabernaclebcng@gmail.com" className="hover:text-red-600 transition-colors break-all">
                    wordtabernaclebcng@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Liturgical Gatherings / Assembly Schedule Grid Layout */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 mt-4">
            <div className="space-y-2">
              <span className="text-[10px] font-black tracking-[0.3em] text-red-600 uppercase">Weekly Assemblies</span>
              <h2 className="font-black text-2xl sm:text-3xl text-zinc-900 tracking-tight">SERVICE TIMES</h2>
              <div className="w-8 h-[2px] bg-zinc-300 mx-auto mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-zinc-200/40 shadow-sm space-y-2">
                <h3 className="font-black text-sm text-red-700 uppercase tracking-wide">GenZ Service</h3>
                <p className="text-xs font-semibold text-zinc-500 font-mono">SUNDAYS</p>
                <p className="text-sm font-medium text-zinc-700">8:00 AM &amp; 9:30 AM</p>
                <span className="inline-block text-[10px] font-bold text-zinc-400 uppercase bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100">Main Auditorium</span>
              </div>

              <div className="bg-white p-6 rounded-xl border border-zinc-200/40 shadow-sm space-y-2">
                <h3 className="font-black text-sm text-red-700 uppercase tracking-wide">Worship Service</h3>
                <p className="text-xs font-semibold text-zinc-500 font-mono">SUNDAYS</p>
                <p className="text-sm font-medium text-zinc-700">10:00 AM &amp; 12:00 PM</p>
                <span className="inline-block text-[10px] font-bold text-zinc-400 uppercase bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100">Main Auditorium</span>
              </div>

              <div className="bg-white p-6 rounded-xl border border-zinc-200/40 shadow-sm space-y-2">
                <h3 className="font-black text-sm text-red-700 uppercase tracking-wide">Equip Service</h3>
                <p className="text-xs font-semibold text-zinc-500 font-mono">WEDNESDAYS</p>
                <p className="text-sm font-medium text-zinc-700">6:30 PM</p>
                <span className="inline-block text-[10px] font-bold text-zinc-400 uppercase bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100">Main Auditorium</span>
              </div>
            </div>
          </section>
        </div>

        {/* Premium Interactive Secure Messaging Form Array Layout */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white border border-zinc-200/60 rounded-2xl shadow-xl shadow-zinc-100 p-6 sm:p-10">
            <div className="text-center space-y-2 mb-10">
              <h2 className="text-2xl font-black text-zinc-900 tracking-tight uppercase">Send A Message</h2>
              <p className="text-sm text-zinc-500 font-medium max-w-sm mx-auto">Have questions or want to partner with us? Fill out the fields securely down below.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-wider text-zinc-500">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 font-medium outline-none transition-all focus:bg-white focus:border-red-600 focus:ring-4 focus:ring-red-600/5"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-wider text-zinc-500">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 font-medium outline-none transition-all focus:bg-white focus:border-red-600 focus:ring-4 focus:ring-red-600/5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-500">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 font-medium outline-none transition-all focus:bg-white focus:border-red-600 focus:ring-4 focus:ring-red-600/5"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-zinc-500">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 ..."
                    className="w-full bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 font-medium outline-none transition-all focus:bg-white focus:border-red-600 focus:ring-4 focus:ring-red-600/5"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-500">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message details safely here..."
                  rows={5}
                  className="w-full bg-zinc-50/50 border border-zinc-200 rounded-xl p-4 text-sm text-zinc-800 placeholder-zinc-400 font-medium outline-none resize-none transition-all focus:bg-white focus:border-red-600 focus:ring-4 focus:ring-red-600/5"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-xs uppercase tracking-widest px-10 py-4 rounded-xl shadow-lg shadow-red-600/10 transition-all duration-200"
                >
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* High Definition Geospatial Navigation Embed Canvas Frame */}
        <section 
         id="map"
        className="w-full h-96 sm:h-[28rem] relative border-t border-zinc-200/60 bg-zinc-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.711954552398!2d3.474328075840481!3d6.557999393435149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf2726b345a27%3A0xeb8c1cd955070248!2sWord%20Tabernacle%20Bible%20Church!5e0!3m2!1sen!2sng!4v1718294118256!5m2!1sen!2sng"
            className="w-full h-full filter grayscale opacity-90 contrast-125 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen={false}
          />
        </section>

      </main>
    </div>
  );
};

export default Page;