"use client"
import Link from "next/link"
import {useState,useEffect, useCallback,FC} from "react"
import { useRouter } from "next/navigation"
import  axios  from "axios"
import toast from "react-hot-toast"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash  } from "react-icons/fa";
import Footer from "../components/common/Footer"
import Header from "../components/common/Header"
import Image from "next/image"


 

const  SignupPage: FC =() => {
    const OpenEye = <FaEye />
    const CloseEye = <FaEyeSlash  />
    const sermonpix = "https://res.cloudinary.com/dalylashp/image/upload/v1728486243/86QxYjwq8LU_qhirfa.png"
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

    const onSignup = useCallback(async() =>{
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
    },[router, user])


    // Attach event listener when component mounts
    useEffect(() => {
        const handleKeyPress = (event:any) => {
            if (event.key === "Enter") {
                onSignup();
            }
        };
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [onSignup]);
    return(
        <div className="bg-red-100">
          <header><Header/></header>
          <main>
            <section className="flex items-center justify-center min-h-screen gap-5">

            
            <article id="a1" className="w-[50%]  py-2 mx-[3rem]">
              <div className="mb-1">
            <Image src={sermonpix} width={2000} height={200} alt=""/>
            
            </div>
            <p className="text-[.7rem] text-red-400 my-5">Upcoming Event</p>
            <p id="h1">HOW TO TRULY TRUST SOMEONE</p>
            <p id="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra sit amet aliquam id diam maecenas ultricies.
            </p>
            <p id="p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat.</p>
          <p id="p3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra sit amet aliquam id diam maecenas ultricies.</p>
            </article>
            <article className=" w-[50%]">
           <div className="flex flex-col items-center shadow-xl mx-2 py-5 bg-white rounded-xl"> <h1 className="">
                {loading ? "Processing !!!!": 'Signup Here '}
                -&gt;
            </h1>
            <hr />
            <div className="flex flex-col mt-5 text-black ">
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
             className=" p-2 border border-gray-300 rounded-2xl mb-4 focus:outline-none  focus:border-gray-600">
                {buttonDisabled ? "No signup": "Signup"} </button>
             </div>
            <p>
                <Link href={"/login"}>Visit login</Link>
            </p>
            <p>
                <Link href={"/"}>HOME</Link>
            </p>
            </div>
            </article>
            </section>
            </main>
            <footer>
              <Footer/>
            </footer>
        </div>
    )
}
export default SignupPage;