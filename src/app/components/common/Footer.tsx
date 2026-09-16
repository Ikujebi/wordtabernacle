"use client";

import { useState } from "react";
import { message } from "antd";
import Link from "next/link";
import { MdEmail as EmailIcon } from "react-icons/md";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaTiktok, 
  FaTelegram 
} from "react-icons/fa";
import { subscribeToBlog } from "@/lib/subscribers";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const currentYear = new Date().getFullYear();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      message.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await subscribeToBlog({ email: email.trim() });
      message.success(res?.message || "Thank you for subscribing!");
      setEmail("");
    } catch (err) {
      message.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { id: 1, href: "https://x.com/wordtabernaclen", icon: FaTwitter },
    { id: 2, href: "https://www.instagram.com/wordtabernacleng/", icon: FaInstagram },
    { id: 3, href: "https://www.facebook.com/wordtabernacle", icon: FaFacebookF },
    { id: 4, href: "https://www.youtube.com/@wordtabernacleng", icon: FaYoutube },
    { id: 5, href: "https://www.tiktok.com/@wordtabernacleng", icon: FaTiktok },
    { id: 6, href: "https://t.me/+ufId9mRBMlVlMzY8", icon: FaTelegram },
  ];

  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10 border-t border-zinc-900 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top/Main Grid Partition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 items-start">
          
          {/* Brand Identity */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 uppercase">
              WORD TABERNACLE
            </h2>
            <p className="text-zinc-400 font-light text-sm leading-relaxed max-w-sm">
              Building word practitioners grounded in truths, dedicated to transforming lives, communities, and global spheres through faith.
            </p>
          </div>

          {/* Subscription Form */}
          <div className="lg:col-span-7 space-y-4 w-full">
            <span className="text-red-500 font-mono text-xs uppercase tracking-[0.25em] block">
              Stay Connected
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
              Subscribe for updates
            </h3>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-xl w-full pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address here"
                disabled={loading}
                className="flex-1 h-12 rounded-lg bg-zinc-900/60 border border-zinc-800 px-4 text-sm text-zinc-300 placeholder:text-zinc-500 outline-none transition-all hover:border-zinc-700 focus:border-red-600 focus:bg-zinc-900/80 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-red-600 hover:bg-red-700 text-xs font-bold tracking-widest text-white shadow-lg shadow-red-900/20 transition-all disabled:opacity-60 shrink-0 cursor-pointer"
              >
                {loading ? (
                  <>
                    <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    SUBSCRIBING...
                  </>
                ) : (
                  "SUBSCRIBE"
                )}
              </button>
            </form>

            <p className="text-[11px] font-light text-zinc-500 leading-normal max-w-xl">
              By subscribing to the Word Tabernacle Newsletter, you consent to receive periodic communications and automated update content regarding schedules, ministries, and events.
            </p>
          </div>

        </div>

        {/* Separator */}
        <div className="w-full h-px bg-zinc-900" />

        {/* Bottom Utility Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <div className="text-zinc-500 font-mono text-[11px] tracking-wider text-center md:text-left order-2 md:order-1">
            &copy; {currentYear} WORD TABERNACLE (v1.00). ALL RIGHTS RESERVED.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 order-1 md:order-2">
            {socialLinks.map(({ id, href, icon: Icon }) => (
              <Link 
                key={id} 
                href={href} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300 hover:scale-105 shadow-inner"
              >
                <Icon className="text-sm" />
              </Link>
            ))}
            
            <a 
              href="mailto:wordtabernaclebc@gmail.com" 
              className="w-9 h-9 bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300 hover:scale-105 shadow-inner"
            >
              <EmailIcon className="text-sm" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;