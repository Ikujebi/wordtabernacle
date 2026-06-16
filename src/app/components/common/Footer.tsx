"use client";

import { Input, Button } from "antd";
import Link from "next/link";
import { MdEmail as EmailIcon } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaTelegram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
          
          {/* Brand Identity / Legal Disclaimers */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 uppercase">
              WORD TABERNACLE
            </h2>
            <p className="text-zinc-400 font-light text-sm leading-relaxed max-w-sm">
              Building word practitioners grounded in truths, dedicated to transforming lives, communities, and global spheres through faith.
            </p>
          </div>

          {/* Interactive Form System Layout */}
          <div className="lg:col-span-7 space-y-4 w-full">
            <span className="text-red-500 font-mono text-xs uppercase tracking-[0.25em] block">
              Stay Connected
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
              Subscribe for updates
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl w-full pt-2">
              <Input
                size="large"
                placeholder="Enter your email address here"
                className="bg-zinc-900/60 border-zinc-800 text-white placeholder-zinc-500 hover:border-zinc-700 focus:border-red-600 h-12 rounded-lg transition-all"
              />
              <Button 
                type="primary" 
                size="large" 
                className="bg-red-600 hover:bg-red-700 border-none text-xs font-bold tracking-widest text-white h-12 px-8 rounded-lg shadow-lg shadow-red-900/20"
              >
                SUBSCRIBE
              </Button>
            </div>

            <p className="text-[11px] font-light text-zinc-500 leading-normal max-w-xl">
              By subscribing to the Word Tabernacle Newsletter, you consent to receive periodic communications and automated update content regarding schedules, ministries, and events.
            </p>
          </div>

        </div>

        {/* Separator Accent Divider */}
        <div className="w-full h-px bg-zinc-900" />

        {/* Bottom Utility Deck Row Layout */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright Tracker */}
          <div className="text-zinc-500 font-mono text-[11px] tracking-wider text-center md:text-left order-2 md:order-1">
            &copy; {currentYear} WORD TABERNACLE (v1.00). ALL RIGHTS RESERVED.
          </div>

          {/* Luxury-Grade Interactive Social Ribbon */}
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