"use client"
import { Input, Button } from 'antd';
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import wordlogo from '../../img/wordlogo.png';

const Footer = () => {
  return (
    <div className="bg-black text-white pt-16">
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
              <FaTwitter className="mr-2" size={24} />
              <FaInstagram className="mr-2" size={24} />
              <FaFacebookF className="mr-2" size={24} />
              <FaYoutube size={24} />
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
