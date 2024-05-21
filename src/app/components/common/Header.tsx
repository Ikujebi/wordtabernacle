"use client"
import {     Button } from "antd"
import Image from "next/image";
import { MdClose, MdEmail, MdMenu, MdOndemandVideo } from 'react-icons/md';
import 'animate.css';

import Link from "next/link";
import wordlogo from '../../img/wordlogo.png'
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
    let routes = useRouter();
    let [display, changeDisplay] = useState('none')
    return (
        <div className="w-[100%] bg-white fixed z-20 pb-3 mb-13 animate__animated animate__fadeInDown">
            <div className="w-full hidden md:block lg:block xl:block 2xl:block">
                <div className="h-10 gap-5 bg-white border-b border-gray-200 flex px-14 justify-between">
                    <div className="mt-3">
                        <span className="text-red-600 font-semibold text-sm md:text-[1.2rem]">
                            <Link href={"/login"}>Login</Link>
                        </span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                            <FaTwitter className="text-white text-lg" />
                        </div>
                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                            <FaInstagram className="text-white text-lg" />
                        </div>
                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                            <FaFacebookF className="text-white text-lg" />
                        </div>
                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                            <FaYoutube className="text-white text-lg" />
                        </div>
                        <div className="ml-2 flex items-center">
                            <MdEmail />
                            <span className="ml-1">wordtabernacle@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div id="nav" className="h-10 w-[100svw] flex mt-10 justify-between px-14">
                        <div>
                            <Link href={"#"}>
                                <div className="flex">
                                    <div className="">
                                        <Image alt="church logo" width={300} height={100} src={wordlogo} className="h-10 w-10" />
                                    </div>
                                    <span className="font-semibold text-sm text-red-600">WORD TABERNACLE</span>
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center gap-5">
                            <Link href={"#"}>
                                <div className="flex">
                                    <MdOndemandVideo />
                                    <span className="ml-1">Online</span>
                                </div>
                            </Link>
                            <Link href={"#"}>About</Link>
                            <Link href={"#"}>Contact</Link>
                            <Link href={"#"}>Community</Link>
                            <Link href={"#"}>Announcement</Link>
                            <Button className="text-white bg-red-600 hover:bg-red-700 m-auto rounded-lg" onClick={() => { routes.push("/login") }}>LOGIN</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="items-center mt-5 md:hidden lg:hidden xl:hidden 2xl:hidden">
                <Link href={"#"}>
                    <div className="flex items-center">
                        <div className="ml-4">
                            <Image alt="church logo" width={300} height={100} src={wordlogo} className="h-5 w-5" />
                        </div>
                        <span className="font-semibold text-sm text-red-600">WORD TABERNACLE</span>
                    </div>
                </Link>
            </div>
            <div className="mt-5 hidden">
                <Button className="bg-#FFFAFA mr-2" aria-label="Open Menu" onClick={() => { changeDisplay('flex') }}>
                    <MdMenu className="text-gray-700" />
                </Button>
            </div>
            <div className="fixed top-0 left-0 z-20 w-screen h-screen bg-#FFFAFA flex flex-col overflow-auto" style={{ display: display }}>
                <div className="mt-5 justify-end flex">
                    <Button className="bg-#FFFAFA mr-6" aria-label="Close Menu" onClick={() => { changeDisplay('none') }}>
                        <MdClose className="text-gray-700" />
                    </Button>
                </div>
                <div className="flex flex-col items-center">
                    <Link href={"#"}>LOGIN</Link>
                    <Link href={"#"}>
                        <div className="flex items-center">
                            <MdOndemandVideo />
                            <span className="ml-1">Online</span>
                        </div>
                    </Link>
                    <Link href={"#"}>About</Link>
                    <Link href={"#"}>Contact</Link>
                    <Link href={"#"}>Community</Link>
                    <Link href={"#"}>Announcement</Link>
                </div>
            </div>
        </div>

    )
}

export default Header;