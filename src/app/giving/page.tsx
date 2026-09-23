"use client";

import { FC, useState, ChangeEvent } from "react";
import Image from "next/image";
import {
  HiHeart,
  HiOutlineBuildingLibrary,
  HiCheckCircle,
  HiCreditCard,
  HiDocumentDuplicate,
  HiCheck,
  HiShieldCheck,
  HiSparkles,
  HiArrowUpRight,
} from "react-icons/hi2";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
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

  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [isPayModalOpen, setIsPayModalOpen] = useState<boolean>(false);

  const givingImg =
    "https://res.cloudinary.com/dalylashp/image/upload/v1726922487/WhatsApp_Image_2024-09-21_at_1.40.43_PM_uykcnw.jpg";

  const predefinedAmounts = ["500", "1000", "5000", "10000"];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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

    setTimeout(() => {
      setCopiedText(null);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fund) {
      alert("Please select a fund to contribute to.");
      return;
    }
    if (!formData.amount || Number(formData.amount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    setIsPayModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#faf9f7] font-sans antialiased selection:bg-rose-600 selection:text-white">
      <Header />

      <main className="pt-20 lg:pt-24">
        {/* HERO */}
        <section
          className="relative min-h-[30rem] overflow-hidden bg-cover bg-center sm:min-h-[34rem]"
          style={{ backgroundImage: `url(${givbg.src})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/80 to-zinc-950/40" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-zinc-950/70 to-transparent" />
          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-rose-500/10 blur-3xl" />

          <div className="relative z-10 mx-auto flex min-h-[30rem] max-w-7xl items-center px-5 py-16 sm:min-h-[34rem] sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
                <HiHeart className="text-rose-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">
                  Worship Through Giving
                </span>
              </div>

              <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
                Give
                <span className="block text-rose-500">Generously.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm font-medium leading-7 text-zinc-300 sm:text-base">
                Giving is one of the ways we worship, serve, and participate in
                what God is doing through Word Tabernacle Bible Church.
              </p>

              <div className="mt-8 flex items-center gap-2">
                <span className="h-1 w-16 rounded-full bg-rose-500" />
                <span className="h-1 w-8 rounded-full bg-rose-500/50" />
                <span className="h-1 w-3 rounded-full bg-white/30" />
              </div>
            </div>
          </div>
        </section>

       {/* INTRO */}
<section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
  <div className="mx-auto max-w-6xl">
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
      {/* LEFT COLUMN: TEXT */}
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-[2px] w-10 bg-rose-600" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-600">
            Why We Give
          </span>
        </div>

        <h2 className="text-3xl font-black leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
          Giving is an act of
          <span className="text-rose-600"> worship.</span>
        </h2>

        <p className="mt-6 text-base font-medium leading-8 text-zinc-600 sm:text-lg">
          We encourage everyone who is part of our church family to
          give—not out of obligation, but from a heart of worship,
          gratitude, and generosity.
        </p>

        <p className="mt-5 text-sm font-medium leading-7 text-zinc-500">
          Your generosity helps support ministry, serve our community,
          strengthen people, and contribute to the work God is doing
          through WTBC.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-50 text-rose-600">
            <HiHeart className="text-lg" />
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-wider text-zinc-900">
              Give with purpose
            </p>
            <p className="mt-1 text-xs font-medium text-zinc-500">
              Every gift contributes to the mission.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: WIDER IMAGE CONTAINER */}
      <div>
        {/* Changed max-w-md to max-w-none or max-w-xl so it spreads wider */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-[2rem] bg-rose-50" />

          <div className="relative overflow-hidden rounded-[2rem] border-[8px] border-white bg-zinc-100 shadow-2xl shadow-zinc-900/10">
            {/* 
              Aspect ratio changed to aspect-[16/10] or aspect-[4/3] 
              if you want it wider and slightly shorter.
            */}
            <div className="relative aspect-[16/11] w-full sm:aspect-[16/10]">
              <Image
                fill
                src={givingImg}
                alt="WTBC worship and giving"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/85 to-transparent p-6 pt-20">
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-rose-300">
                Word Tabernacle Bible Church
              </span>
              <p className="mt-1 text-lg font-black text-white">
                Give. Serve. Impact.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 rounded-full border-4 border-white bg-rose-600 px-5 py-3 text-[9px] font-black uppercase tracking-[0.2em] text-white shadow-xl">
            Faith in Action
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* GIVING FORM */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-rose-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-600">
                  Make a Contribution
                </span>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
                Give online securely.
              </h2>

              <p className="mt-4 text-sm font-medium leading-7 text-zinc-500">
                Choose where you would like your gift to go, select your
                preferred giving frequency, and enter your contribution below.
              </p>
            </div>

            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
              {/* BANK DETAILS */}
              <div className="space-y-6 lg:col-span-5">
                <div className="overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-[#faf9f7]">
                  <div className="border-b border-zinc-200 bg-white p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-950 text-white">
                        <HiOutlineBuildingLibrary className="text-lg" />
                      </div>

                      <div>
                        <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900">
                          Direct Bank Giving
                        </h3>
                        <p className="mt-1 text-xs font-medium text-zinc-400">
                          You can also give directly through our bank accounts.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 p-5">
                    {/* USDT */}
                    <div className="rounded-2xl border border-zinc-200 bg-white p-5 transition-all hover:border-zinc-300 hover:shadow-md">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">
                            USDT Account
                          </span>
                          <p className="mt-2 text-xs font-bold text-zinc-700">
                            Access Bank
                          </p>
                          <p className="mt-1 font-mono text-lg font-bold tracking-tight text-rose-600">
                            1854926739
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            handleCopyToClipboard("1854926739", "usdt")
                          }
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-400 transition-all hover:border-zinc-300 hover:bg-white hover:text-zinc-800 active:scale-95"
                          title="Copy account number"
                          aria-label="Copy USDT account number"
                        >
                          {copiedText === "usdt" ? (
                            <HiCheck className="text-emerald-600" />
                          ) : (
                            <HiDocumentDuplicate />
                          )}
                        </button>
                      </div>

                      {copiedText === "usdt" && (
                        <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                          Account number copied
                        </p>
                      )}
                    </div>

                    {/* POUNDS */}
                    <div className="rounded-2xl border border-zinc-200 bg-white p-5 transition-all hover:border-zinc-300 hover:shadow-md">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">
                            Pounds Account
                          </span>
                          <p className="mt-2 text-xs font-bold text-zinc-700">
                            Access Bank
                          </p>
                          <p className="mt-1 font-mono text-lg font-bold tracking-tight text-rose-600">
                            1854925543
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            handleCopyToClipboard("1854925543", "pounds")
                          }
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-400 transition-all hover:border-zinc-300 hover:bg-white hover:text-zinc-800 active:scale-95"
                          title="Copy account number"
                          aria-label="Copy Pounds account number"
                        >
                          {copiedText === "pounds" ? (
                            <HiCheck className="text-emerald-600" />
                          ) : (
                            <HiDocumentDuplicate />
                          )}
                        </button>
                      </div>

                      {copiedText === "pounds" && (
                        <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                          Account number copied
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* TRUST CARD */}
                <div className="rounded-[1.75rem] bg-zinc-950 p-6 text-white">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <HiShieldCheck className="text-xl text-rose-400" />
                    </div>

                    <div>
                      <h3 className="text-sm font-black uppercase tracking-wider">
                        Give with confidence
                      </h3>
                      <p className="mt-2 text-xs font-medium leading-6 text-zinc-400">
                        Your giving information is handled through our secure
                        payment process.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5">
                    <HiCheckCircle className="text-rose-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      Secure online giving
                    </span>
                  </div>
                </div>
              </div>

              {/* ONLINE GIVING FORM */}
              <div className="lg:col-span-7">
                <div className="rounded-[2rem] border border-zinc-200 bg-[#faf9f7] p-5 shadow-sm sm:p-8 lg:p-10">
                  {/* FORM HEADER */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-[0.25em] text-rose-600">
                        Online Giving
                      </span>
                      <h3 className="mt-2 text-2xl font-black tracking-tight text-zinc-950">
                        My Donation
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2">
                      <HiShieldCheck className="text-sm text-emerald-600" />
                      <span className="text-[9px] font-black uppercase tracking-wider text-zinc-500">
                        Secure
                      </span>
                    </div>
                  </div>

                  {/* FREQUENCY */}
                  <div className="mt-8">
                    <label className="mb-3 block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                      Giving Frequency
                    </label>

                    <div className="grid grid-cols-2 gap-2 rounded-2xl border border-zinc-200 bg-white p-1.5">
                      <button
                        type="button"
                        aria-pressed={formData.frequency === "one-time"}
                        onClick={() => handleFrequencyChange("one-time")}
                        className={`flex items-center justify-center gap-2 rounded-xl py-3.5 text-[10px] font-black uppercase tracking-wider transition-all ${
                          formData.frequency === "one-time"
                            ? "bg-zinc-950 text-white shadow-md"
                            : "text-zinc-500 hover:text-zinc-900"
                        }`}
                      >
                        {formData.frequency === "one-time" && <HiCheckCircle />}
                        One-time
                      </button>

                      <button
                        type="button"
                        aria-pressed={formData.frequency === "recurring"}
                        onClick={() => handleFrequencyChange("recurring")}
                        className={`flex items-center justify-center gap-2 rounded-xl py-3.5 text-[10px] font-black uppercase tracking-wider transition-all ${
                          formData.frequency === "recurring"
                            ? "bg-zinc-950 text-white shadow-md"
                            : "text-zinc-500 hover:text-zinc-900"
                        }`}
                      >
                        {formData.frequency === "recurring" && (
                          <HiCheckCircle />
                        )}
                        Recurring
                      </button>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {/* FUND */}
                    <div>
                      <label
                        htmlFor="fund"
                        className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                      >
                        Where would you like to give?
                      </label>

                      <select
                        id="fund"
                        name="fund"
                        value={formData.fund}
                        onChange={handleChange}
                        className="h-14 w-full cursor-pointer rounded-xl border border-zinc-200 bg-white px-4 text-sm font-semibold text-zinc-800 outline-none transition-all focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10"
                      >
                        <option value="" disabled hidden>
                          Choose a fund
                        </option>
                        <option value="tithe">Tithe</option>
                        <option value="pastor">Pastoral Support</option>
                        <option value="thrive">Thrive Fund</option>
                        <option value="offering">Offering</option>
                        <option value="missions">Missions</option>
                        <option value="others">Other - Please Specify</option>
                      </select>
                    </div>

                    {/* NOTE */}
                    <div>
                      <label
                        htmlFor="note"
                        className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                      >
                        Additional Note
                      </label>

                      <input
                        id="note"
                        type="text"
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        placeholder="Optional"
                        className="h-14 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-800 outline-none transition-all placeholder:text-zinc-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10"
                      />
                    </div>

                    {/* AMOUNT */}
                    <div>
                      <label
                        htmlFor="amount"
                        className="mb-3 block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                      >
                        Donation Amount
                      </label>

                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {predefinedAmounts.map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            aria-pressed={formData.amount === amt}
                            onClick={() => handleQuickAmountSelect(amt)}
                            className={`rounded-xl border py-3 text-xs font-mono font-bold transition-all active:scale-95 ${
                              formData.amount === amt
                                ? "border-rose-500 bg-rose-50 text-rose-600"
                                : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50"
                            }`}
                          >
                            ₦{amt}
                          </button>
                        ))}
                      </div>

                      <div className="relative mt-3">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-sm font-bold text-zinc-400">
                          ₦
                        </span>

                        <input
                          id="amount"
                          type="number"
                          inputMode="decimal"
                          name="amount"
                          value={formData.amount}
                          onChange={handleChange}
                          placeholder="Enter amount"
                          className="h-16 w-full rounded-xl border border-zinc-200 bg-white pl-9 pr-4 font-mono text-lg font-bold text-zinc-900 outline-none transition-all placeholder:text-sm placeholder:font-medium placeholder:text-zinc-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10"
                        />
                      </div>
                    </div>

                    {/* SUBMIT */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="group flex h-16 w-full items-center justify-center gap-3 rounded-xl bg-zinc-950 text-xs font-black uppercase tracking-[0.15em] text-white shadow-xl shadow-zinc-950/10 transition-all duration-300 hover:bg-rose-600 active:scale-[0.99]"
                      >
                        <HiCreditCard className="text-lg" />
                        <span>Proceed to Secure Payment</span>
                        <HiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 pt-1">
                      <HiShieldCheck className="text-sm text-emerald-600" />
                      <p className="text-center text-[9px] font-bold uppercase tracking-wider text-zinc-400">
                        Your contribution is processed securely
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING STATEMENT */}
        <section className="bg-zinc-950 px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/10 text-rose-400">
              <HiSparkles className="text-xl" />
            </div>

            <p className="mt-6 text-[10px] font-black uppercase tracking-[0.35em] text-rose-400">
              Thank You For Your Generosity
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Together, we can make an impact.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-zinc-400">
              Thank you for partnering with Word Tabernacle Bible Church
              through your generosity. Every gift helps us continue serving
              people, strengthening families, and advancing the work of the
              Kingdom.
            </p>

            <div className="mx-auto mt-8 flex justify-center gap-1.5">
              <span className="h-1 w-10 rounded-full bg-rose-500" />
              <span className="h-1 w-5 rounded-full bg-white/30" />
              <span className="h-1 w-2 rounded-full bg-white/20" />
            </div>
          </div>
        </section>

        {/* SAFEPAY MODAL PASS-THROUGH */}
        <Safepay
          isOpen={isPayModalOpen}
          onClose={() => setIsPayModalOpen(false)}
          amount={formData.amount}
          fund={formData.fund}
          note={formData.note}
        />
      </main>

     
    </div>
  );
};

export default Page;