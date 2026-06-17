"use client";

import { FC, useState, ChangeEvent } from "react";
import Image from "next/image";
import { 
  HiHeart, 
  HiOutlineBuildingLibrary, 
  HiCheckCircle, 
  HiCreditCard, 
  HiDocumentDuplicate,
  HiCheck
} from "react-icons/hi2";
import givbg from "../img/giveimg.jpg";
import Safepay from "../components/common/Safepay";

interface FormDataState {
  fund: string;
  note: string;
  amount: string;
  frequency: "one-time" | "recurring";
}

const Page: FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    fund: "",
    note: "",
    amount: "",
    frequency: "one-time",
  });

  // State management to display visual inline indicators when account numbers are copied
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const givingImg = "https://res.cloudinary.com/dalylashp/image/upload/v1726922487/WhatsApp_Image_2024-09-21_at_1.40.43_PM_uykcnw.jpg";
  const predefinedAmounts = ["500", "1000", "5000", "10000"];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFrequencyChange = (type: "one-time" | "recurring") => {
    setFormData((prevData) => ({
      ...prevData,
      frequency: type,
    }));
  };

  const handleQuickAmountSelect = (val: string) => {
    setFormData((prevData) => ({
      ...prevData,
      amount: val,
    }));
  };

  const handleCopyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="w-full bg-zinc-50/60 min-h-screen font-sans antialiased selection:bg-rose-600 selection:text-white">
      
      <main className="pt-20 lg:pt-24">
        
        {/* Dynamic Minimal Hero Banner */}
        <div
          className="relative h-48 sm:h-56 flex justify-center items-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${givbg.src})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/40 z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
            <div className="max-w-xl space-y-2 text-center sm:text-left">
              <span className="inline-block text-[10px] font-black tracking-[0.35em] text-rose-400 uppercase">
                Stewardship &amp; Vision
              </span>
              <h1 className="text-white font-black text-4xl tracking-tight uppercase">
                Giving
              </h1>
              <div className="w-12 h-1 bg-rose-500 rounded-full mt-3 mx-auto sm:mx-0" />
            </div>
          </div>
        </div>

        {/* Informative Introduction Segment */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center space-y-4">
          <p className="text-zinc-600 text-base sm:text-lg font-medium leading-relaxed">
            We encourage all of those who are part of our Church family to give—not out of obligation but out of a spirit of worship. Your gifts allow God’s work to be done in our midst, in our community, and in the world around us.
          </p>
          <p className="text-zinc-900 font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-1.5">
            <HiHeart className="text-rose-500 text-xs animate-pulse" /> Complete the form below to give online.
          </p>
        </section>

        {/* Split Operational Architecture Layout Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
            
            {/* Left Column: Traditional Banking Nodes & Ministry Graphic */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="relative w-full aspect-[4/3] bg-zinc-100">
                  <Image 
                    fill 
                    src={givingImg} 
                    alt="WTBC Ministry Worship Giving" 
                    className="object-cover object-center"
                    priority
                  />
                </div>
                <div className="p-4 bg-zinc-50 border-t border-zinc-100 text-center">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                    Word Tabernacle Baptist Church
                  </span>
                </div>
              </div>

              {/* Secure Banking Remittance Matrix */}
              <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm space-y-6">
                <div className="flex items-center gap-2 pb-3 border-b border-zinc-100">
                  <HiOutlineBuildingLibrary className="text-zinc-400 text-lg" />
                  <h3 className="text-xs font-black tracking-widest text-zinc-900 uppercase">
                    Direct Bank Wire Details
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Account Block: USDT */}
                  <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200 flex justify-between items-center group transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50/40">
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-zinc-400 uppercase block mb-0.5">
                        USDT Account
                      </span>
                      <p className="text-xs font-bold text-zinc-700">Access Bank</p>
                      <p className="text-base font-mono font-bold tracking-tight text-rose-600 mt-0.5">
                        1854926739
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyToClipboard("1854926739", "usdt")}
                      className="p-2 rounded-lg bg-white border border-zinc-200 text-zinc-400 hover:text-zinc-800 hover:border-zinc-300 shadow-sm active:scale-95 transition-all outline-none"
                      title="Copy Account Number"
                    >
                      {copiedText === "usdt" ? (
                        <HiCheck className="text-sm text-emerald-600" />
                      ) : (
                        <HiDocumentDuplicate className="text-sm" />
                      )}
                    </button>
                  </div>

                  {/* Account Block: Pounds */}
                  <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200 flex justify-between items-center group transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50/40">
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-zinc-400 uppercase block mb-0.5">
                        Pounds Account
                      </span>
                      <p className="text-xs font-bold text-zinc-700">Access Bank</p>
                      <p className="text-base font-mono font-bold tracking-tight text-rose-600 mt-0.5">
                        1854925543
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyToClipboard("1854925543", "pounds")}
                      className="p-2 rounded-lg bg-white border border-zinc-200 text-zinc-400 hover:text-zinc-800 hover:border-zinc-300 shadow-sm active:scale-95 transition-all outline-none"
                      title="Copy Account Number"
                    >
                      {copiedText === "pounds" ? (
                        <HiCheck className="text-sm text-emerald-600" />
                      ) : (
                        <HiDocumentDuplicate className="text-sm" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: High-End Interactive Form Gateway */}
            <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
              
              <div className="space-y-1">
                <h2 className="text-xl font-black text-zinc-900 uppercase tracking-tight">
                  My Donation
                </h2>
                <p className="text-xs text-zinc-400 font-medium">
                  Select your contribution strategy below to secure processing.
                </p>
              </div>

              {/* Dynamic Tab Switcher for Frequency State Selection */}
              <div className="grid grid-cols-2 p-1 bg-zinc-100 rounded-xl relative">
                <button
                  type="button"
                  onClick={() => handleFrequencyChange("recurring")}
                  className={`py-3 text-xs font-black uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 ${
                    formData.frequency === "recurring"
                      ? "bg-white text-rose-600 shadow-sm"
                      : "text-zinc-500 hover:text-zinc-800"
                  }`}
                >
                  {formData.frequency === "recurring" && <HiCheckCircle className="text-sm" />}
                  Recurring
                </button>

                <button
                  type="button"
                  onClick={() => handleFrequencyChange("one-time")}
                  className={`py-3 text-xs font-black uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 ${
                    formData.frequency === "one-time"
                      ? "bg-white text-rose-600 shadow-sm"
                      : "text-zinc-500 hover:text-zinc-800"
                  }`}
                >
                  {formData.frequency === "one-time" && <HiCheckCircle className="text-sm" />}
                  One-time
                </button>
              </div>

              {/* Form Input Container Framework */}
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="fund" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Allocated Designation Fund
                  </label>
                  <select
                    id="fund"
                    name="fund"
                    value={formData.fund}
                    onChange={handleChange}
                    className="w-full h-12 px-4 border border-zinc-200 rounded-xl bg-zinc-50 text-sm font-semibold text-zinc-800 focus:bg-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all cursor-pointer"
                  >
                    <option value="" disabled hidden>Choose Fund Target</option>
                    <option value="tithe">Tithe</option>
                    <option value="pastor">Pastoral Support</option>
                    <option value="thrive">Thrive Fund</option>
                    <option value="offering">Offering</option>
                    <option value="missions">Missions</option>
                    <option value="others">Other - Please Specify</option>
                  </select>
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="note" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Additional Specification Note
                  </label>
                  <input
                    id="note"
                    type="text"
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    placeholder="E.g., Special remembrance, targeted development"
                    className="w-full h-12 px-4 border border-zinc-200 rounded-xl bg-zinc-50 text-sm font-medium text-zinc-800 placeholder-zinc-400 focus:bg-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="amount" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Donation Amount
                  </label>
                  
                  {/* Quick-select Value Presets Array Row */}
                  <div className="grid grid-cols-4 gap-2 mb-1">
                    {predefinedAmounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => handleQuickAmountSelect(amt)}
                        className={`py-2 text-xs font-mono font-bold border rounded-lg transition-all active:scale-95 ${
                          formData.amount === amt
                            ? "border-rose-500 bg-rose-50 text-rose-600"
                            : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 hover:border-zinc-300"
                        }`}
                      >
                        ₦{amt}
                      </button>
                    ))}
                  </div>

                  <div className="relative flex items-center">
                    <span className="absolute left-4 font-mono font-bold text-zinc-400 text-sm select-none">
                      ₦
                    </span>
                    <input
                      id="amount"
                      type="text"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      placeholder="0.00"
                      className="w-full h-12 pl-8 pr-4 border border-zinc-200 rounded-xl bg-zinc-50 text-sm font-mono font-bold text-zinc-800 placeholder-zinc-400 focus:bg-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Simulated Payment Trigger Interface */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full h-14 bg-zinc-950 hover:bg-rose-600 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-colors duration-300 shadow-md shadow-zinc-950/10 flex items-center justify-center gap-2"
                  >
                    <HiCreditCard className="text-base" />
                    Proceed To Secure Payment
                  </button>
                </div>

              </form>

            </div>

          </div>
        </section>
        <Safepay/>
      </main>
      
    </div>
  );
};

export default Page;