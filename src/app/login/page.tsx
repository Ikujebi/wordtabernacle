"use client"
import Link from "next/link"
import React,{useState} from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash  } from "react-icons/fa";



export default function LoginPage() {
    const OpenEye = <FaEye />
    const CloseEye = <FaEyeSlash  />
    const [showPassword, setShowPassword] = useState(false); // Step 1

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev); 
    };
    const [user, setUser] = useState({
email: "",
password: "",


    })

    const onLogin= async() =>{
        
    }
    return(
        <div className="flex bg-black text-white flex-col items-center justify-center min-h-screen py-2">
           <div className=" gap-4"> <h1 className="">
           Login nibi
                -&gt;
            </h1>
            <hr />
            <div className="flex flex-col mt-5">
           
            <label htmlFor="email">email</label>
            <input
            className="p-2 text-gray-700 border border-gray-300 rounded-xl mb-2 focus:outline-none  focus:border-gray-600"
            id="email" type="email" value={user.email} placeholder="email" onChange={(e) => setUser
             ({...user, email:e.target.value})}/>
            <label htmlFor="password">password</label>

            <div className="relative">
            <input
            className="p-2 text-gray-700 border border-gray-300 rounded-xl mb-2 focus:outline-none  focus:border-gray-600"
            id="password" type={showPassword ? "text": "password"} value={user.password} placeholder="password" onChange={(e) => setUser
             ({...user, password:e.target.value})}/>
             <button
             type="button"
             className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600 "
             onClick={togglePasswordVisibility}>
                    {showPassword ? OpenEye : CloseEye}
             </button>
             </div>
             <button 
             onClick={onLogin}
             className="p-2 border border-gray-300 rounded-2xl mb-4 focus:outline-none  focus:border-gray-600 text">Login here</button>
             </div></div>
            <p>
                <Link href={"/signup"}>Visit Signup Page</Link>
            </p>
            <p>
                <Link href={"/"}>HOME</Link>
            </p>
        </div>
    )
}