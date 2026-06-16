"use client";

import { useState, useEffect, useRef, FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "antd";
import { MdClose, MdEmail, MdMenu, MdOndemandVideo, MdKeyboardArrowDown } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaTelegram } from "react-icons/fa";
import wordlogo from "../../img/wordlogo.png";
import {Gyahegi } from "@/app/fonts";


interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
  subItems?: NavItem[];
}

const Header: FC = () => {
  const router = useRouter();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [activeSubNav, setActiveSubNav] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleSubNav = (subNav: string) => {
    setActiveSubNav(prev => (prev === subNav ? null : subNav));
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
    if (!mobileMenuVisible) setActiveSubNav(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveSubNav(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems: NavItem[] = [
    { name: "Online", icon: <MdOndemandVideo className="text-base" />, link: "/online" },
    {
      name: "About",
      link: "",
      subItems: [
        { name: "Mission, Vision & Values", link: "/mission" },
        { name: "Our Story", link: "/executive" },
        { name: "Executive Leadership", link: "/executive" },
      ],
    },
    { name: "Contact", link: "/contact" },
    {
      name: "Ministries",
      link: "",
      subItems: [
        { name: "EMERGENZ", link: "/emergenz" },
        { name: "Teens", link: "/teen" },
        { name: "Children", link: "/children" },
        { name: "Women", link: "/women" },
        { name: "Men", link: "/men" },
      ],
    },
    { name: "Giving", link: "/giving" },
    { name: "Prayer Requests", link: "/prayer" },
  ];

  const socialLinks = [
    { href: "https://x.com/wordtabernaclen", icon: FaTwitter },
    { href: "https://www.instagram.com/wordtabernacleng/", icon: FaInstagram },
    { href: "https://www.facebook.com/wordtabernacle", icon: FaFacebookF },
    { href: "https://www.youtube.com/@wordtabernacleng", icon: FaYoutube },
    { href: "https://www.tiktok.com/@wordtabernacleng", icon: FaTiktok },
    { href: "https://t.me/+ufId9mRBMlVlMzY8", icon: FaTelegram },
  ];

  return (
    <div ref={headerRef} className="w-full fixed top-0 inset-x-0 z-50 transition-all duration-300">
      
      {/* Top Utility Ribbon (Fixed Black-on-Black Conflict) */}
      <div className="w-full h-9 bg-red-700 flex items-center justify-between px-4 sm:px-6 lg:px-12 border-b border-red-800 shadow-sm">
        <div className="text-[10px] font-bold tracking-wider text-white/90 uppercase hidden sm:block Gyahegi.className">
          Welcome to Word Tabernacle Bible Church !!
        </div>
        <div className="flex items-center gap-2.5 ml-auto sm:ml-0">
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <Link 
                key={i} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-5 h-5 rounded-md bg-red-800/50 flex items-center justify-center text-white hover:text-zinc-950 hover:bg-white transition-all duration-200"
              >
                <Icon className="text-[11px]" />
              </Link>
            );
          })}
          <a 
            href="mailto:wordtabernaclebc@gmail.com" 
            className="w-5 h-5 rounded-md bg-red-800/50 flex items-center justify-center text-white hover:text-zinc-950 hover:bg-white transition-all duration-200"
          >
            <MdEmail className="text-[11px]" />
          </a>
        </div>
      </div>

      {/* Main Navigation Bar Deck (High Contrast Light Canvas) */}
      <div className="w-full bg-white border-b border-zinc-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Platform Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
              <Image alt="Word Tabernacle Church Logo" fill sizes="40px" src={wordlogo} className="object-contain" priority />
            </div>
            <div className="flex flex-col">
              <span className={`${Gyahegi.className} text-zinc-900 text-sm tracking-widest uppercase leading-none`}>
                WORD
              </span>
              <span className={`${Gyahegi.className} font-extrabold text-red-600 text-xs tracking-wider uppercase mt-1`}>
                TABERNACLE
              </span>
            </div>
          </Link>

          {/* Desktop View Menu System Layout */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item, index) => {
              const hasSub = !!item.subItems;
              const isOpen = activeSubNav === item.name;

              return (
                <div key={index} className="relative">
                  {hasSub ? (
                    <>
                      <button
                        onClick={() => toggleSubNav(item.name)}
                        className={`flex items-center gap-1 text-[13px] font-bold uppercase tracking-wider transition-colors py-2 ${
                          isOpen ? "text-red-600" : "text-zinc-700 hover:text-red-600"
                        }`}
                      >
                        {item.name}
                        <MdKeyboardArrowDown className={`text-base transition-transform duration-300 ${isOpen ? "rotate-180 text-red-500" : "text-zinc-400"}`} />
                      </button>
                      
                      {/* Dropdown Box with crisp contrast outlines */}
                      {isOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-zinc-200 rounded-xl shadow-xl py-2 z-50">
                          <div className="absolute top-0 inset-x-0 h-[2px] bg-red-600 rounded-t-xl" />
                          {item.subItems?.map((sub, subIdx) => (
                            <Link
                              key={subIdx}
                              href={sub.link}
                              onClick={() => setActiveSubNav(null)}
                              className="block px-4 py-2.5 text-xs font-semibold text-zinc-700 hover:text-red-600 hover:bg-zinc-50 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.link}
                      className="flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wider text-zinc-700 hover:text-red-600 transition-colors py-2"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              );
            })}

            <Button
              type="primary"
              onClick={() => router.push("/in")}
              className="bg-red-600 hover:bg-red-700 border-none font-bold text-xs tracking-widest h-9 px-6 rounded-lg shadow-md shadow-red-600/10"
            >
              LOGIN
            </Button>
          </nav>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg bg-zinc-100 text-zinc-800 hover:text-red-600 transition-colors border border-zinc-200"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuVisible ? <MdClose className="w-6 h-6" /> : <MdMenu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* High-Fidelity Mobile Sidebar Panel */}
      <div 
        className={`lg:hidden fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-white shadow-2xl border-l border-zinc-200 flex flex-col transform transition-transform duration-300 ease-in-out ${
          mobileMenuVisible ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "116px" }} // Perfectly sits below ribbon offsets safely
      >
        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
          {navItems.map((item, index) => {
            const hasSub = !!item.subItems;
            const isOpen = activeSubNav === item.name;

            return (
              <div key={index} className="border-b border-zinc-100 pb-4 last:border-none">
                {hasSub ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleSubNav(item.name)}
                      className="flex items-center justify-between w-full text-sm font-extrabold text-zinc-800 uppercase tracking-wide py-1"
                    >
                      <span>{item.name}</span>
                      <MdKeyboardArrowDown className={`text-xl transition-transform duration-200 ${isOpen ? "rotate-180 text-red-500" : "text-zinc-400"}`} />
                    </button>
                    {isOpen && (
                      <div className="pl-3 border-l-2 border-red-600 space-y-1 mt-2">
                        {item.subItems?.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sub.link}
                            onClick={toggleMobileMenu}
                            className="block py-2 text-xs font-bold text-zinc-600 hover:text-red-600 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    onClick={toggleMobileMenu}
                    className="flex items-center gap-2 text-sm font-extrabold text-zinc-800 uppercase tracking-wide py-1 hover:text-red-600 transition-colors"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            );
          })}
          
          <div className="pt-4">
            <Link
              href="/in"
              onClick={toggleMobileMenu}
              className="flex items-center justify-center w-full bg-zinc-900 text-white font-mono text-xs uppercase font-bold tracking-widest py-3.5 rounded-xl border border-zinc-800 shadow-md transition-colors hover:bg-red-600 hover:border-red-600"
            >
              Portal Login
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;