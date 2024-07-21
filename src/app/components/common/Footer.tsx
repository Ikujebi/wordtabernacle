"use client"
import { Input, Button } from 'antd';
import Link from 'next/link';
import {  MdEmail } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaTelegram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-black text-white pt-16 font">
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
            <div className="flex justify-center mt-4">
            <Link href={"https://x.com/wordtabernaclen"} className="md:w-8 lg:w-8 xl:w-8 2xl:w-8 w-6 md:h-8 lg:h-8 xl:h-8 2xl:h-8 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <FaTwitter className="text-white text-lg" />
                        </Link>
                        <Link href={"https://www.instagram.com/wordtabernacleng/"} className="md:w-8 lg:w-8 xl:w-8 2xl:w-8 w-6 md:h-8 lg:h-8 xl:h-8 2xl:h-8 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <FaInstagram className="text-white text-lg" />
                        </Link>
                        <Link href={"https://www.facebook.com/wordtabernacle"} className="md:w-8 lg:w-8 xl:w-8 2xl:w-8 w-6 md:h-8 lg:h-8 xl:h-8 2xl:h-8 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <FaFacebookF className="text-white text-lg" />
                        </Link>
                        <Link href={"https://www.youtube.com/@wordtabernacleng"} className="md:w-8 lg:w-8 xl:w-8 2xl:w-8 w-6 md:h-8 lg:h-8 xl:h-8 2xl:h-8 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <FaYoutube className="text-white text-lg" />
                        </Link>
                        <Link href={"https://www.tiktok.com/@wordtabernacleng"} className="md:w-8 lg:w-8 xl:w-8 2xl:w-8 w-6 md:h-8 lg:h-8 xl:h-8 2xl:h-8 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <FaTiktok className="text-white text-lg" />
                        </Link>
                        <Link href={"https://t.me/+ufId9mRBMlVlMzY8"} className="md:w-8 lg:w-8 xl:w-8 2xl:w-8 w-6 md:h-8 lg:h-8 xl:h-8 2xl:h-8 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <FaTelegram className="text-white text-lg" />
                        </Link>
                        <a href={"mailto:wordtabernaclebc@gmail.com"} className="ml-2  items-center">
                            <MdEmail />
                            
                        </a>
            </div>
            <div className="flex justify-center mt-4">
              <p className="text-sm">Word Tabernacle. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
