import {     Button } from "antd"
import Image from "next/image";
import { MdClose, MdEmail, MdMenu, MdOndemandVideo } from 'react-icons/md';
import 'animate.css';

import Link from "next/link";
import wordlogo from '../../img/wordlogo.png'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
    let routes = useRouter();
    let [display, changeDisplay] = useState('none')
    return (
        <div className="w-full bg-white fixed z-20 pb-10 animate__animated animate__fadeInDown">
    <div className="w-full hidden md:block">
        <div className="h-10 bg-white border-b border-gray-200 flex px-14 justify-between">
            <div>
                <span className="text-red-600 font-semibold text-sm">
                    <Link href={"/login"}>Login</Link>
                </span>
            </div>
            <div className="flex items-center text-gray-600 text-sm">
                <div className="w-8 h-3 bg-red-600 rounded-full flex items-center justify-center">
                    <FaTwitter className="text-white text-lg" />
                </div>
                <div className="w-8 h-3 bg-red-600 rounded-full flex items-center justify-center">
                    <FaInstagram className="text-white text-lg" />
                </div>
                <div className="w-8 h-3 bg-red-600 rounded-full flex items-center justify-center">
                    <FaFacebookF className="text-white text-lg" />
                </div>
                <div className="w-8 h-3 bg-red-600 rounded-full flex items-center justify-center">
                    <FaYoutube className="text-white text-lg" />
                </div>
            </div>
            <div className="ml-2 flex items-center">
                <MdEmail />
                <span className="ml-1">wordtabernacle@gmail.com</span>
            </div>
        </div>
        <div className="px-12">
            <div className="h-10 bg-white flex mt-20 justify-between">
                <div>
                    <Link href={"#"}>
                        <div className="flex items-center">
                            <div className="ml-40">
                                <Image alt="church logo" width={300} height={100} src={wordlogo} className="h-30" />
                            </div>
                            <span className="font-semibold text-sm text-red-600">WORD TABERNACLE</span>
                        </div>
                    </Link>
                </div>
                <div className="flex space-x-40 md:space-x-70 text-gray-600 text-sm">
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
                <Button className="text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-sm" onClick={() => {routes.push("/login")}}>LOGIN</Button>
            </div>
        </div>
    </div>
    <div className="items-center mt-5 hidden md:flex">
        <Link href={"#"}>
            <div className="flex items-center">
                <div className="ml-40">
                    <Image alt="church logo" width={300} height={100} src={wordlogo} className="h-30" />
                </div>
                <span className="font-semibold text-sm text-red-600">WORD TABERNACLE</span>
            </div>
        </Link>
    </div>
    <div className="mt-5 hidden md:flex">
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