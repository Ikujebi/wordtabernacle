"use client"
import Link from "next/link"
import React,{useState,useEffect} from "react"
import { useRouter } from "next/navigation"
import { Axios } from "axios"



export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState({
email: "",
password: "",
username: "",

    })
    const [buttonDisabled, setButtonDisabled] = useState(false)

    useEffect(() =>{
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    },[user]);
    const onSignup = async() =>{
        
    }
    return(
        <div className="flex bg-black text-white flex-col items-center justify-center min-h-screen py-2">
           <div className="flex gap-4"> <h1 className="">
                Signup nibi
                -&gt;
            </h1>
            <hr />
            <div className="flex flex-col mt-5 text-black">
            <label htmlFor="username">username</label>
            <input
            className="p-2 border border-gray-300 rounded-xl mb-2 focus:outline-none  focus:border-gray-600"
            id="username" type="text" value={user.username} placeholder="username" onChange={(e) => setUser
             ({...user, username:e.target.value})}/>
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
             onClick={onSignup}
             disabled={buttonDisabled}
             className="text-white p-2 border border-gray-300 rounded-2xl mb-4 focus:outline-none  focus:border-gray-600">{buttonDisabled ? "No signup": "Signup"} </button>
             </div></div>
            <p>
                <Link href={"/login"}>Visit login</Link>
            </p>
            <p>
                <Link href={"/"}>HOME</Link>
            </p>
        </div>
    )
}