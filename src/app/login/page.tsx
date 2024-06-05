"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import Image from "next/image";
import wordlogo from '../img/wordlogo.png';

export default function LoginPage() {
    const router = useRouter();
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const OpenEye = <FaEye />;
    const CloseEye = <FaEyeSlash />;
    const [showPassword, setShowPassword] = useState(false); 

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev); 
    };

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/profile");
        } catch (error:any) {
            console.log("Login Failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

   

    const handleKeyPress = useCallback((event:any) => {
        if (event.key === "Enter") {
            const onLogin = async () => {
                try {
                    setLoading(true);
                    const response = await axios.post("api/users/login", user);
                    console.log("Login success", response.data);
                    toast.success("Login success");
                    router.push("/profile");
                } catch (error:any) {
                    console.log("Login Failed", error.message);
                    toast.error(error.message);
                } finally {
                    setLoading(false);
                }
            };
            onLogin();
        }
    }, [router]); // Add `user` as dependency

    useEffect(() => {
        document.addEventListener("keypress", handleKeyPress);
        return () => {
            document.removeEventListener("keypress", handleKeyPress);
        };
    });

    return (
        <div className="flex bg-[#80847c] text-white flex-col items-center justify-center min-h-screen py-2">
            <Image width={1000} height={500} src={wordlogo} alt="Word Logo" className="w-[10rem] mt-[-5rem] mb-5" />
            <div className="bg-white rounded-md text-[#80847c] px-[5rem] py-[6rem]">
                <div className="gap-4">
                    <h1 className="text-center">
                        {loading ? "Processing" : "Login"} -&gt;
                    </h1>
                    <hr />
                    <div className="flex flex-col mt-5">
                        <label htmlFor="email">Email</label>
                        <input
                            className="p-2 text-gray-700 border border-gray-300 rounded-xl mb-2 focus:outline-none focus:border-gray-600"
                            id="email"
                            type="email"
                            value={user.email}
                            placeholder="Email"
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                        <label htmlFor="password">Password</label>
                        <div className="relative">
                            <input
                                className="p-2 text-gray-700 border border-gray-300 rounded-xl mb-2 focus:outline-none focus:border-gray-600"
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={user.password}
                                placeholder="Password"
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? OpenEye : CloseEye}
                            </button>
                        </div>
                        <button
                            onClick={onLogin}
                            disabled={buttonDisabled}
                            className="p-2 border border-gray-300 rounded-2xl mb-4 focus:outline-none focus:border-gray-600 text"
                        >
                            {buttonDisabled ? "No Login" : "Login here"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
