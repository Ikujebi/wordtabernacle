"use client";

import { FC, useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../img/wordlogo.png";
import commingSoon from "@/../public/bunch_of_nice_people.svg";

const ComingSoon: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    
    // Process launch newsletter subscription mechanics safely here
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <div className="w-full min-h-screen bg-zinc-50 flex flex-col justify-between antialiased font-sans">
      
      {/* Brand Identity Header Navigation Deck */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <Link href="/" className="inline-flex items-center gap-3 group">
          <div className="relative w-9 h-9 transition-transform duration-300 group-hover:scale-105">
            <Image 
              src={logo} 
              fill
              sizes="36px"
              className="object-contain" 
              alt="Word Tabernacle Church Logo" 
              priority
            />
          </div>
          <div className="flex flex-col border-l border-zinc-200 pl-3">
            <span className="font-black text-zinc-950 text-sm tracking-[0.18em] uppercase leading-none">
              WORD
            </span>
            <span className="font-bold text-red-600 text-[10px] tracking-[0.24em] uppercase mt-1 leading-none">
              TABERNACLE
            </span>
          </div>
        </Link>
      </header>

      {/* Main Focus Landing Display Array */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12">
        <div className="max-w-xl w-full text-center space-y-8">
          
          {/* Main Visual Vector Accent Frame */}
          <div className="relative w-64 sm:w-[26rem] h-48 sm:h-60 mx-auto transition-transform duration-500 hover:scale-[1.02]">
            <Image 
              src={commingSoon} 
              fill
              sizes="(max-w-640px) 256px, 416px"
              className="object-contain" 
              alt="Community network gathering illustration" 
              priority
            />
          </div>

          {/* Context Dynamic Copy Elements */}
          <div className="space-y-3">
            <h1 className="text-zinc-900 font-black text-xl sm:text-2xl tracking-tight">
              Hey there 👋🏽
            </h1>
            <p className="text-zinc-600 text-sm sm:text-base font-medium leading-relaxed max-w-md mx-auto">
              It seems this page is still under construction, but leave your email with us and we will notify you when we fully launch.
            </p>
          </div>

          {/* Interactive Form System Panel Layout */}
          <div className="max-w-md mx-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2.5">
                <div className="w-full relative">
                  <input
                    type="email"
                    required
                    name="coming-soon-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-800 placeholder-zinc-400 font-medium outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-500/10 shadow-sm"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full sm:w-auto shrink-0 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-md shadow-red-600/10 transition-all duration-200"
                >
                  Notify Me
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-xl bg-green-50 border border-green-100/70 flex items-center justify-center gap-2.5 animate-in fade-in zoom-in-95 duration-300">
                <span className="w-2 h-2 rounded-full bg-green-600" />
                <p className="text-xs font-bold text-green-800 uppercase tracking-wider">
                  Awesome! We will keep you updated.
                </p>
              </div>
            )}
          </div>

        </div>
      </main>

      {/* Auxiliary Context Safety Buffer Footer Spacer */}
      <footer className="w-full py-6 text-center text-[11px] font-mono font-bold tracking-wider text-zinc-400 uppercase">
        Word Tabernacle Church © {new Date().getFullYear()}
      </footer>

    </div>
  );
};

export default ComingSoon;