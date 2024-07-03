"use client";
import { Button } from "antd";
import Image from "next/image";
import { MdClose, MdEmail, MdMenu, MdOndemandVideo } from 'react-icons/md';
import 'animate.css';
import Link from "next/link";
import wordlogo from '../../img/wordlogo.png';
import { useState, useEffect, FC } from 'react';
import { useRouter } from "next/navigation";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaTelegram } from "react-icons/fa";

const Header: FC = () => {
    const router = useRouter();
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const [activeSubNav, setActiveSubNav] = useState<string | null>(null);

    const toggleSubNav = (subNav: string) => {
        setActiveSubNav(prevSubNav => prevSubNav === subNav ? null : subNav);
    };

    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    };

    const closeMobileMenu = () => {
        setMobileMenuVisible(false);
        setActiveSubNav(null);
    };

    const handleClickOutside = (event: any) => {
        if (!event.target.closest('.submenu')) {
            setActiveSubNav(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="w-full bg-white bg-opacity-90 shadow-md fixed  pb-3 mb-13 animate__animated animate__fadeInDown z-50">
            <div className="w-full">
                <div className="h-10 gap-5 bg-white border-b border-gray-200 flex lg:px-14 xl:px-14 2xl:px-14 md:px-14 justify-around md:justify-between 2xl:justify-between xl:justify-between lg:justify-between">
                    <div className="mt-2">
                        <span className="text-red-600 font-semibold text-[1.2rem]">
                            <Link href={"/login"}>Login</Link>
                        </span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
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
                        <a href={"mailto:wordtabernaclebc@gmail.com"} className="ml-2 md:flex lg:flex 2xl:flex hidden xl:flex items-center">
                            <MdEmail />
                            <span className="ml-1">wordtabernaclebc@gmail.com</span>
                        </a>
                    </div>
                </div>
                <div className="hidden md:block lg:block xl:block 2xl:block">
                    <div id="nav" className="h-10 w-full flex mt-10 justify-between px-14">
                        <div>
                            <Link href={"/"}>
                                <div className="flex gap-1">
                                    <Image alt="church logo" width={300} height={100} src={wordlogo} className="h-10 w-10" />
                                    <span className="font-semibold text-red-600 mt-3">WORD TABERNACLE</span>
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center gap-5">
                            <Link href={"#"}>
                                <div className="flex items-center">
                                    <MdOndemandVideo />
                                    <span className="ml-1">Online</span>
                                </div>
                            </Link>
                            <div className="relative">
                                <button onClick={() => toggleSubNav('about')} className="flex items-center">
                                    About
                                </button>
                                {activeSubNav === 'about' && (
                                    <div className="absolute top-full left-0 mt-2 w-[200%] bg-white border border-gray-200 shadow-lg submenu">
                                        <Link href={"/mission"} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mission, Vision & Values</Link>
                                        <Link href={"#"} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Story</Link>
                                        <Link href={"/executive"} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Executive Leadership</Link>
                                    </div>
                                )}
                            </div>
                            <Link href={"/contact"}>Contact</Link>
                            <div className="relative">
                                <button onClick={() => toggleSubNav('ministries')} className="flex items-center">
                                    Ministries
                                </button>
                                {activeSubNav === 'ministries' && (
                                    <div className="absolute top-full left-0 mt-2 w-[200%] bg-white border border-gray-200 shadow-lg submenu">
                                        <Link href={"/emergenz"} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">EMERGENZ</Link>
                                        <Link href={"#"} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Teens</Link>
                                        <Link href={"/executive"} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Children</Link>
                                        <Link href={"/executive"} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Women</Link>
                                        <Link href={"/men"} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Men</Link>
                                    </div>
                                )}
                            </div>
                            <Link href={"/giving"}>Giving</Link>
                            <Link href={"#"}>Announcement</Link>
                            <Button className="text-white bg-red-600 hover:!text-red-700 hover:!border-red-500 m-auto rounded-lg" onClick={() => { router.push("/login") }}>LOGIN</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="items-center flex justify-around md:justify-between 2xl:justify-between xl:justify-between lg:justify-between mt-5 md:hidden lg:hidden xl:hidden 2xl:hidden">
                <Link href={"/"}>
                    <div className="flex items-center">
                        <Image alt="church logo" width={300} height={100} src={wordlogo} className="h-6 w-6" />
                        <span className="font-semibold text-[.67rem] text-red-600 ml-2">WORD<br />TABERNACLE</span>
                    </div>
                </Link>
                <Button className="bg-white mr-2" aria-label="Open Menu" onClick={toggleMobileMenu}>
                    <MdMenu className="text-gray-700" />
                </Button>
            </div>
            {mobileMenuVisible && (
                <div className="fixed top-0 left-0 z-20 w-screen h-screen bg-white flex flex-col overflow-auto">
                    <div className="mt-5 justify-end flex">
                        <Button className="bg-white mr-6" aria-label="Close Menu" onClick={toggleMobileMenu}>
                            <MdClose className="text-gray-700" />
                        </Button>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link onClick={closeMobileMenu} href={"/login"}>LOGIN</Link>
                        <Link onClick={closeMobileMenu} href={"/online"}>
                            <div className="flex items-center">
                                <MdOndemandVideo />
                                <span className="ml-1">Online</span>
                            </div>
                        </Link>
                        <div className="relative">
                            <button onClick={() => toggleSubNav('about')} className="flex items-center">
                                About
                            </button>
                            {activeSubNav === 'about' && (
                                <div className="absolute top-full left-0 mt-2 w-[400%] bg-white border border-gray-200 shadow-lg submenu z-100">
                                    <Link onClick={closeMobileMenu} href={"/mission"} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mission, Vision & Values</Link>
                                    <Link onClick={closeMobileMenu} href={"#"} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Story</Link>
                                    <Link onClick={closeMobileMenu} href={"/executive"} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Executive Leadership</Link>
                                </div>
                            )}
                        </div>
                        <Link onClick={closeMobileMenu} href={"/contact"}>Contact</Link>
                        <div className="relative">
                            <button onClick={() => toggleSubNav('ministries')} className="flex items-center">
                                Ministries
                            </button>
                            {activeSubNav === 'ministries' && (
                                <div className="absolute top-full left-0 mt-2 w-[200%] bg-white border border-gray-200 shadow-lg submenu">
                                    <Link onClick={closeMobileMenu} href={"/emergenz"} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">EMERGENZ</Link>
                                    <Link onClick={closeMobileMenu} href={"#"} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Teens</Link>
                                    <Link onClick={closeMobileMenu} href={"/executive"} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Children</Link>
                                    <Link onClick={closeMobileMenu} href={"/executive"} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Women</Link>
                                    <Link onClick={closeMobileMenu} href={"/men"} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Men</Link>
                                </div>
                            )}
                        </div>
                        <Link onClick={closeMobileMenu} href={"/giving"}>Giving</Link>
                        <Link onClick={closeMobileMenu} href={"#"}>Announcement</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
