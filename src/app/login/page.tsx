"use client"
import Link from "next/link"
import React,{useState} from "react"
import { useRouter } from "next/navigation"
import { Axios } from "axios"



export default function LoginPage() {
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
            className="p-2 border border-gray-300 rounded-xl mb-2 focus:outline-none  focus:border-gray-600"
            id="email" type="email" value={user.email} placeholder="email" onChange={(e) => setUser
             ({...user, email:e.target.value})}/>
            <label htmlFor="password">password</label>
            <input
            className="p-2 border border-gray-300 rounded-xl mb-2 focus:outline-none  focus:border-gray-600"
            id="password" type="password" value={user.password} placeholder="password" onChange={(e) => setUser
             ({...user, password:e.target.value})}/>
             
             <button 
             onClick={onLogin}
             className="p-2 border border-gray-300 rounded-2xl mb-4 focus:outline-none  focus:border-gray-600">Login here</button>
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