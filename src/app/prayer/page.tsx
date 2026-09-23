"use client";

import { FC, useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Radio, RadioChangeEvent } from "antd";
import {
  HiSparkles,
  HiPaperAirplane,
  HiHeart,
  HiShieldCheck,
  HiChatBubbleLeftRight,
  HiArrowUpRight,
  HiCheckCircle,
} from "react-icons/hi2";

import Header from "../components/common/Header";
import givbg from "../img/prayer2.webp";
import churchlogo from "../img/wordlogo.png";

import {
  submitPrayerRequest,
  type PublicPrayerRequestPayload,
} from "@/lib/prayer-requests";

type CategoryType = NonNullable<
  PublicPrayerRequestPayload["category"]
>;

interface PrayerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  category: CategoryType;
  message: string;
  contactMethod: string;
}

const INITIAL_FORM_DATA: PrayerFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  category: "OTHER",
  message: "",
  contactMethod: "",
};

const CATEGORY_OPTIONS: {
  label: string;
  value: CategoryType;
}[] = [
  { label: "Healing & Health", value: "HEALING" },
  { label: "Financial Provision", value: "FINANCIAL_PROVISION" },
  { label: "Family & Marriage", value: "FAMILY_MARRIAGE" },
  { label: "Salvation", value: "SALVATION" },
  { label: "Deliverance & Freedom", value: "DELIVERANCE" },
  { label: "Job & Career", value: "JOB" },
  { label: "School & Education", value: "SCHOOL" },
  { label: "Thanksgiving & Praise", value: "THANKSGIVING" },
  { label: "Other", value: "OTHER" },
];

const Page: FC = () => {
  const [formData, setFormData] = useState<PrayerFormData>(INITIAL_FORM_DATA);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: RadioChangeEvent) => {
    setFormData((prev) => ({
      ...prev,
      contactMethod: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const trimmedFirstName = formData.firstName?.trim();
      const trimmedLastName = formData.lastName?.trim();
      const trimmedPhone = formData.phone?.trim();
      const trimmedMessage = formData.message?.trim() || "";
      const trimmedContactMethod = formData.contactMethod?.trim();

      await submitPrayerRequest({
        firstName: trimmedFirstName || undefined,
        lastName: trimmedLastName || undefined,
        email: formData.email.trim(),
        phoneNumber: trimmedPhone || undefined,
        subject:
          trimmedMessage.slice(0, 80) ||
          "Prayer Request from Website",
        message: trimmedMessage,
        category: formData.category,
        isConfidential: true,
        allowFollowUp: Boolean(trimmedContactMethod),
        preferredContactMethod: trimmedContactMethod || undefined,
      });

      setFeedback({
        type: "success",
        text: "Your prayer request has been received. Our prayer team will pray with you.",
      });

      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      console.error("Prayer submission error:", error);

      setFeedback({
        type: "error",
        text: "Unable to submit your prayer request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#faf9f7] font-sans antialiased selection:bg-rose-600 selection:text-white">
      <Header />

      <main className="pt-20 lg:pt-24">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section
          className="relative min-h-[34rem] overflow-hidden bg-cover bg-center sm:min-h-[40rem]"
          style={{
            backgroundImage: `url(${givbg.src})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/75 to-zinc-950/30" />

          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-zinc-950/70 to-transparent" />

          <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl" />

          <div className="relative z-10 mx-auto flex min-h-[34rem] max-w-7xl items-center px-5 py-16 sm:min-h-[40rem] sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
                <HiHeart className="text-rose-400" />

                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">
                  Faith &amp; Community
                </span>
              </div>

              <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
                Let Us
                <span className="block text-rose-500">Pray.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm font-medium leading-7 text-zinc-300 sm:text-base">
                Whatever you are walking through, you do not have to carry it
                alone. Share your prayer request with us and let our prayer team
                stand with you in faith.
              </p>

              <div className="mt-8 flex items-center gap-2">
                <span className="h-1 w-16 rounded-full bg-rose-500" />
                <span className="h-1 w-8 rounded-full bg-rose-500/50" />
                <span className="h-1 w-3 rounded-full bg-white/30" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTRO / ENCOURAGEMENT
        ========================================================= */}
        <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* LEFT CONTENT */}
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-rose-600" />

                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-600">
                    Need Prayer?
                  </span>
                </div>

                <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
                  You can bring
                  <span className="text-rose-600"> anything to God.</span>
                </h2>

                <p className="mt-6 text-base font-medium leading-8 text-zinc-600 sm:text-lg">
                  We believe God cares about every part of our lives. Prayer is
                  how we communicate with Him, bring our burdens before Him,
                  celebrate His faithfulness, and seek His direction.
                </p>

                <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-zinc-500">
                  Whether you are asking for healing, provision, direction,
                  restoration, salvation, or simply want to give thanks, our
                  prayer team would be honored to pray with you.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-rose-100 bg-rose-50/70 p-5">
                    <HiHeart className="mb-3 text-xl text-rose-600" />

                    <h3 className="text-xs font-black uppercase tracking-wider text-zinc-900">
                      We Care
                    </h3>

                    <p className="mt-2 text-xs font-medium leading-5 text-zinc-500">
                      Your story matters to us.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                    <HiChatBubbleLeftRight className="mb-3 text-xl text-zinc-800" />

                    <h3 className="text-xs font-black uppercase tracking-wider text-zinc-900">
                      We Listen
                    </h3>

                    <p className="mt-2 text-xs font-medium leading-5 text-zinc-500">
                      Share what is on your heart.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-5">
                    <HiSparkles className="mb-3 text-xl text-amber-600" />

                    <h3 className="text-xs font-black uppercase tracking-wider text-zinc-900">
                      We Pray
                    </h3>

                    <p className="mt-2 text-xs font-medium leading-5 text-zinc-500">
                      We stand with you in faith.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT WIDER IMAGE CONTAINER */}
              <div>
                <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                  <div className="absolute -right-5 -top-5 h-32 w-32 rounded-[2rem] bg-rose-50" />

                  <div className="relative overflow-hidden rounded-[2rem] border-[8px] border-white bg-zinc-100 shadow-2xl shadow-zinc-900/10">
                    <div className="relative aspect-[16/11] w-full sm:aspect-[16/10]">
                      <Image
                        fill
                        src={givbg}
                        alt="WTBC Prayer Community"
                        className="object-cover object-center transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-transparent p-6 pt-20 sm:p-8">
                      <div className="flex items-center gap-2 text-rose-400">
                        <HiShieldCheck className="text-lg" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                          Confidential &amp; Caring
                        </span>
                      </div>
                      <p className="mt-2 text-xl font-black text-white sm:text-2xl">
                        Bring your heart. We will pray with you.
                      </p>
                      <p className="mt-1 text-xs font-medium text-zinc-300">
                        Requests are handled with care by our dedicated team.
                      </p>
                    </div>
                  </div>

                  <div className="absolute -bottom-5 -left-4 rounded-full border-4 border-white bg-rose-600 px-5 py-3 text-[9px] font-black uppercase tracking-[0.2em] text-white shadow-xl">
                    You Are Not Alone
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PRAYER FORM
        ========================================================= */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-[9px] font-black uppercase tracking-[0.3em] text-rose-600">
                <HiSparkles />
                Share Your Request
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
                How can we pray for you?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-zinc-500">
                Take your time. Share as much or as little as you are comfortable
                sharing.
              </p>
            </div>

            {/* Church Identity */}
            <div className="mx-auto mb-8 flex max-w-md items-center justify-center rounded-2xl border border-zinc-200 bg-[#faf9f7] p-4 shadow-sm">
              <Link href="/" className="group flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0">
                  <Image
                    fill
                    src={churchlogo}
                    alt="WTBC Church Logo"
                    className="object-contain transition-transform group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-black uppercase tracking-widest text-zinc-900">
                    Word Tabernacle
                  </span>

                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-rose-600">
                    Bible Church
                  </span>
                </div>
              </Link>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 bg-[#faf9f7] p-5 shadow-sm sm:p-8 lg:p-10">
              {/* FEEDBACK */}
              {feedback && (
                <div
                  role="alert"
                  className={`mb-8 rounded-2xl border p-5 ${
                    feedback.type === "success"
                      ? "border-emerald-200 bg-emerald-50"
                      : "border-rose-200 bg-rose-50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {feedback.type === "success" ? (
                      <HiCheckCircle className="mt-0.5 shrink-0 text-xl text-emerald-600" />
                    ) : (
                      <HiSparkles className="mt-0.5 shrink-0 text-xl text-rose-600" />
                    )}

                    <div>
                      <p
                        className={`text-xs font-black uppercase tracking-wider ${
                          feedback.type === "success"
                            ? "text-emerald-800"
                            : "text-rose-800"
                        }`}
                      >
                        {feedback.type === "success"
                          ? "Prayer Request Received"
                          : "Something Went Wrong"}
                      </p>

                      <p
                        className={`mt-1 text-sm font-medium leading-6 ${
                          feedback.type === "success"
                            ? "text-emerald-700"
                            : "text-rose-700"
                        }`}
                      >
                        {feedback.text}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-7">
                {/* PERSONAL DETAILS */}
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-950 text-[10px] font-black text-white">
                      01
                    </span>

                    <div>
                      <h3 className="text-xs font-black uppercase tracking-[0.15em] text-zinc-900">
                        About You
                      </h3>

                      <p className="mt-1 text-[10px] font-medium text-zinc-400">
                        Tell us how we can identify and reach you.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                      >
                        First Name
                      </label>

                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="h-14 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-800 outline-none transition-all placeholder:text-zinc-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                      >
                        Last Name
                      </label>

                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="h-14 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-800 outline-none transition-all placeholder:text-zinc-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10"
                      />
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                      >
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
                        className="h-14 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-800 outline-none transition-all placeholder:text-zinc-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 000 000 0000"
                        className="h-14 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-800 outline-none transition-all placeholder:text-zinc-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10"
                      />
                    </div>
                  </div>
                </div>

                <div className="h-px bg-zinc-200" />

                {/* PRAYER DETAILS */}
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-950 text-[10px] font-black text-white">
                      02
                    </span>

                    <div>
                      <h3 className="text-xs font-black uppercase tracking-[0.15em] text-zinc-900">
                        Your Prayer Request
                      </h3>

                      <p className="mt-1 text-[10px] font-medium text-zinc-400">
                        Share what is on your heart.
                      </p>
                    </div>
                  </div>

                  {/* CATEGORY */}
                  <div>
                    <label
                      htmlFor="category"
                      className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                    >
                      Prayer Category <span className="text-rose-500">*</span>
                    </label>

                    <select
                      id="category"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      className="h-14 w-full cursor-pointer rounded-xl border border-zinc-200 bg-white px-4 text-sm font-semibold text-zinc-800 outline-none transition-all focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10"
                    >
                      {CATEGORY_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div className="mt-5">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                    >
                      How can we pray for you?{" "}
                      <span className="text-rose-500">*</span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your prayer request, thanksgiving, praise report, or request for guidance..."
                      className="min-h-[160px] w-full resize-none rounded-xl border border-zinc-200 bg-white p-4 text-sm font-medium leading-7 text-zinc-800 outline-none transition-all placeholder:text-zinc-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10"
                    />
                  </div>
                </div>

                <div className="h-px bg-zinc-200" />

                {/* FOLLOW UP */}
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-950 text-[10px] font-black text-white">
                      03
                    </span>

                    <div>
                      <h3 className="text-xs font-black uppercase tracking-[0.15em] text-zinc-900">
                        Follow Up
                      </h3>

                      <p className="mt-1 text-[10px] font-medium text-zinc-400">
                        Optional — let us know if you would like us to contact
                        you.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                    <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                      Preferred Contact Method
                    </span>

                    <Radio.Group
                      onChange={handleRadioChange}
                      value={formData.contactMethod}
                      className="flex flex-col gap-3 sm:flex-row sm:gap-8"
                    >
                      <Radio
                        value="email"
                        className="text-sm font-medium text-zinc-700"
                      >
                        Email
                      </Radio>

                      <Radio
                        value="phone"
                        className="text-sm font-medium text-zinc-700"
                      >
                        Phone
                      </Radio>
                    </Radio.Group>
                  </div>
                </div>

                {/* CONFIDENTIALITY */}
                <div className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
                  <HiShieldCheck className="mt-0.5 shrink-0 text-xl text-emerald-600" />

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-wider text-emerald-800">
                      Your request is confidential
                    </p>

                    <p className="mt-1 text-xs font-medium leading-6 text-emerald-700/80">
                      We treat the information you share with care and respect.
                    </p>
                  </div>
                </div>

                {/* SUBMIT */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group flex h-16 w-full items-center justify-center gap-3 rounded-xl text-xs font-black uppercase tracking-[0.15em] shadow-xl transition-all duration-300 ${
                      isSubmitting
                        ? "cursor-not-allowed bg-zinc-300 text-zinc-500 shadow-none"
                        : "bg-zinc-950 text-white shadow-zinc-950/10 hover:bg-rose-600 active:scale-[0.99]"
                    }`}
                  >
                    <HiPaperAirplane
                      className={`text-lg ${
                        isSubmitting
                          ? "animate-spin"
                          : "transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      }`}
                    />

                    {isSubmitting
                      ? "Submitting Request..."
                      : "Submit Prayer Request"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* =========================================================
            CLOSING CTA
        ========================================================= */}
        <section className="bg-zinc-950 px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/10 text-rose-400">
              <HiHeart className="text-xl" />
            </div>

            <p className="mt-6 text-[10px] font-black uppercase tracking-[0.35em] text-rose-400">
              We Would Love To Hear From You
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Need to speak with someone?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-zinc-400">
              If you would like to connect with the church directly or have
              another question, our team is here to help.
            </p>

            <Link
              href="/contact"
              className="group mx-auto mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.15em] text-zinc-950 transition-all duration-300 hover:bg-rose-600 hover:text-white"
            >
              <span>Contact Us</span>

              <HiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;