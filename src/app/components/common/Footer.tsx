"use client"
import { Input, Button } from 'antd';
import Link from 'next/link';
import {  MdEmail } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaTelegram } from "react-icons/fa";


const Footer = () => {
  const socialLinks = [
    { href: "https://x.com/wordtabernaclen", icon: FaTwitter,id:1 },
    { href: "https://www.instagram.com/wordtabernacleng/", icon: FaInstagram,id:2 },
    { href: "https://www.facebook.com/wordtabernacle", icon: FaFacebookF,id:3 },
    { href: "https://www.youtube.com/@wordtabernacleng", icon: FaYoutube,id:4 },
    { href: "https://www.tiktok.com/@wordtabernacleng", icon: FaTiktok,id:5 },
    { href: "https://t.me/+ufId9mRBMlVlMzY8", icon: FaTelegram,id:5 },
   
  ];
  return (
    <div className="bg-black text-white pt-16 font   w-screen">
      <div className="container mx-auto">
        <div className="text-center pb-4">
          <h3 className="text-xl">Subscribe for updates</h3>
        </div>
        <div className="flex justify-center">
          <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
            <div className="flex">
              <Input
                className="w-full"
                size="large"
                placeholder="Enter your email address here"
              />
              <Button type="primary" size="large" className="ml-2">
                SUBSCRIBE
              </Button>
            </div>
            <p className="mt-2 text-sm">
              By subscribing to Word tabernacle Newsletter, you consent to receive frequent information regarding the church via automated technology
            </p>
            <div className="flex justify-center mt-4 gap-2">
            {socialLinks.map(({ href, icon: Icon }, id) => (
                <Link key={id} href={href} className="md:w-8 lg:w-8 xl:w-8 2xl:w-8 w-6 md:h-8 lg:h-8 xl:h-8 2xl:h-8 h-6 bg-red-600 rounded-full flex items-center justify-center">
                  <Icon className="text-white text-lg" />
                </Link>
              ))}
                        <a href={"mailto:wordtabernaclebc@gmail.com"} className="md:w-8 lg:w-8 xl:w-8 2xl:w-8 w-6 md:h-8 lg:h-8 xl:h-8 2xl:h-8 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <MdEmail />
                            
                        </a>
            </div>
            <div className="flex justify-center mt-4 ">
            </div>
              <div className="xl:text-sm 2xl:text-sm flex text-[.75rem]"> <p className='mr-[3px] mt-[-.45rem]'><span className='text-lg  mt-[-0.27rem]'>&copy;</span> Word Tabernacle. v1.00</p><p>All Rights Reserved (2024) </p>   </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
