"use client"
import Link from "next/link"
import React,{useState,useEffect} from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash  } from "react-icons/fa";
import toast from "react-hot-toast"



export default function LoginPage() {
    const router = useRouter();
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const OpenEye = <FaEye />
    const CloseEye = <FaEyeSlash  />
    const [showPassword, setShowPassword] = useState(false); // Step 1

    const togglePasswordVisibility = () => {
        setShowPassword((prev:any) => !prev); 
    };
    const [user, setUser] = useState({
email: "",
password: "",


    })

    useEffect(()=>{
if(user.email.length > 0 && user.password.length > 0){
    setButtonDisabled(false)
}else{
    setButtonDisabled(true)
}
    },[user])
    const onLogin=  async() =>{
        try {
            setLoading(true);
         const response =   await axios.post("api/users/login",user);
         console.log("Login success",response.data);
         toast.success("Login success")
         router.push("/profile")
         
        } catch (error:any) {
            console.log("Login Failed", error.message)
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

        // Listen for Enter key press
        const handleKeyPress = (event:any) => {
            if (event.key === "Enter") {
                onLogin();
            }
        };
    
        // Attach event listener when component mounts
        useEffect(() => {
            document.addEventListener("keydown", handleKeyPress);
            return () => {
                document.removeEventListener("keydown", handleKeyPress);
            };
        }, []);
    return(
        <div className="flex bg-black text-white flex-col items-center justify-center min-h-screen py-2">
           <div className=" gap-4"> <h1 className="">
           {loading ? "Processing" : "Login"} nibi
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
             disabled={buttonDisabled}
             className="p-2 border border-gray-300 rounded-2xl mb-4 focus:outline-none  focus:border-gray-600 text">
                {buttonDisabled ? "No Login" : "Login here"}</button>
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