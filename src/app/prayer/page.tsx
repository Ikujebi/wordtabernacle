"use client";

import { FC, useState, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "emailjs-com";
import { Radio, RadioChangeEvent } from "antd";
import { HiSparkles, HiPaperAirplane } from "react-icons/hi2";
import givbg from "../img/prayer2.webp";
import churchlogo from "../img/wordlogo.png";

interface PrayerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  member: string;
  contactMethod: string;
}

const Page: FC = () => {
  const [formData, setFormData] = useState<PrayerFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    member: "",
    contactMethod: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e: RadioChangeEvent, fieldName: keyof PrayerFormData) => {
    setFormData((prev) => ({ ...prev, [fieldName]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email) {
      alert("Please provide an email address.");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        formData as unknown as Record<string, unknown>,
        "your_user_id"
      )
      .then(
        () => {
          alert("Your prayer request has been sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            member: "",
            contactMethod: "",
          });
        },
        (error) => {
          alert("Failed to submit prayer request. Please try again.");
          console.error("EmailJS Error:", error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="w-full bg-zinc-50/60 min-h-screen font-sans antialiased selection:bg-rose-600 selection:text-white">
      <main className="pt-20 lg:pt-24">
        <div
          className="relative h-48 sm:h-56 flex justify-center items-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${givbg.src})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/40 z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
            <div className="max-w-xl space-y-2 text-center sm:text-left">
              <span className="inline-block text-[10px] font-black tracking-[0.35em] text-rose-400 uppercase">
                Faith &amp; Community
              </span>
              <h1 className="text-white font-black text-4xl tracking-tight uppercase">
                Prayer Requests
              </h1>
              <div className="w-12 h-1 bg-rose-500 rounded-full mt-3 mx-auto sm:mx-0" />
            </div>
          </div>
        </div>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center space-y-4">
          <h2 className="text-zinc-900 font-black text-2xl uppercase tracking-tight">
            Need Prayer?
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg font-medium leading-relaxed">
            We believe that God wants to meet the needs and reveal His promises to His people. Since prayer is the way we communicate with Him, we place a priority on it. Let us pray for you.
          </p>
          <p className="text-zinc-900 font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-1.5 pt-2">
            <HiSparkles className="text-rose-500 text-xs animate-pulse" /> Complete the form below to share your heart.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="flex justify-center items-center mb-8 bg-white border border-zinc-200 rounded-2xl p-4 shadow-sm max-w-sm mx-auto">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12">
                <Image fill src={churchlogo} alt="WTBC Church Logo" className="object-contain transition-transform group-hover:scale-105" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-zinc-900 text-sm tracking-widest uppercase">
                  Word Tabernacle
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-600">
                  Baptist Church
                </span>
              </div>
            </Link>
          </div>

          <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full h-12 px-4 border border-zinc-200 rounded-xl bg-zinc-50 text-sm font-medium text-zinc-800 placeholder-zinc-400 focus:bg-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full h-12 px-4 border border-zinc-200 rounded-xl bg-zinc-50 text-sm font-medium text-zinc-800 placeholder-zinc-400 focus:bg-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="johndoe@example.com"
                    className="w-full h-12 px-4 border border-zinc-200 rounded-xl bg-zinc-50 text-sm font-medium text-zinc-800 placeholder-zinc-400 focus:bg-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full h-12 px-4 border border-zinc-200 rounded-xl bg-zinc-50 text-sm font-medium text-zinc-800 placeholder-zinc-400 focus:bg-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  How can we pray for you?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your prayer intentions, thanksgiving praise report, or guidance requests here..."
                  className="w-full p-4 border border-zinc-200 rounded-xl bg-zinc-50 text-sm font-medium text-zinc-800 placeholder-zinc-400 focus:bg-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all resize-none min-h-[120px]"
                />
              </div>

              {/* Ant Design Radio Section layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {/* Method of Contact Radio Group */}
                <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200/60 flex flex-col space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Preferred Contact Method (Optional)
                  </span>
                  <Radio.Group 
                    onChange={(e) => handleRadioChange(e, "contactMethod")} 
                    value={formData.contactMethod}
                    className="flex flex-col space-y-2"
                  >
                    <Radio value="email" className="text-sm font-medium text-zinc-700">Email</Radio>
                    <Radio value="phone" className="text-sm font-medium text-zinc-700">Phone</Radio>
                  </Radio.Group>
                </div>

                {/* Membership Status Radio Group */}
                <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200/60 flex flex-col space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Are you a member of WTBC? (Optional)
                  </span>
                  <Radio.Group 
                    onChange={(e) => handleRadioChange(e, "member")} 
                    value={formData.member}
                    className="flex flex-col space-y-2"
                  >
                    <Radio value="yes" className="text-sm font-medium text-zinc-700">Yes, I am a member</Radio>
                    <Radio value="no" className="text-sm font-medium text-zinc-700">No, I am a visitor</Radio>
                  </Radio.Group>
                </div>
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-2/3 h-14 font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 outline-none ${
                    isSubmitting
                      ? "bg-zinc-300 text-zinc-500 cursor-not-allowed shadow-none"
                      : "bg-zinc-950 hover:bg-rose-600 text-white shadow-zinc-950/10 active:scale-[0.99]"
                  }`}
                >
                  <HiPaperAirplane className={`text-base ${isSubmitting ? "animate-ping" : ""}`} />
                  {isSubmitting ? "Submitting Request..." : "Submit Prayer Request"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;