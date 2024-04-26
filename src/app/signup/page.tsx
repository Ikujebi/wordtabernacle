"use client"
import Link from "next/link"
import React,{useState,useEffect} from "react"
import { useRouter } from "next/navigation"
import  axios  from "axios"
import toast from "react-hot-toast"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash  } from "react-icons/fa";


 

export default function SignupPage() {
    const OpenEye = <FaEye />
    const CloseEye = <FaEyeSlash  />
    const [showPassword, setShowPassword] = useState(false); // Step 1

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev); 
    };
    const [loading, setLoading] = useState(false)
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
        try {
            setLoading(true);
         const response =  await axios.post("/api/users/signup", user)

         console.log("Signup success", response.data);
         router.push("/login")
         
            
        } catch (error:any) {
            console.log(`signUp failed  ${error.message}`);
            
            toast.error(error.message)
        }finally{
            setLoading(false);
        }
    }

    const handleKeyPress = (event:any) => {
        if (event.key === "Enter") {
            onSignup   ();
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
           <div className="flex gap-4"> <h1 className="">
                {loading ? "Processing !!!!": 'Signup nibi '}
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
            <div className="relative">
                        <input
                            className="p-2 border border-gray-300 rounded-xl mb-2 focus:outline-none  focus:border-gray-600"
                            id="password"
                            type={showPassword ? "text" : "password"} 
                            value={user.password}
                            placeholder="password"
                            onChange={(e) =>
                                setUser({ ...user, password: e.target.value })
                            }
                        />
                        <button
                            type="button"
                            className="absolute top-1/2 right-2 transform -translate-y-1/2  "
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? OpenEye : CloseEye}
                        </button>
                    </div>
             
             <button 
             onClick={onSignup}
             disabled={buttonDisabled}
             className="text-white p-2 border border-gray-300 rounded-2xl mb-4 focus:outline-none  focus:border-gray-600">
                {buttonDisabled ? "No signup": "Signup"} </button>
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