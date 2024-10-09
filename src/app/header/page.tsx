"use client"
import Link from "next/link"
import { useState, useEffect, useCallback, FC } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import Footer from "../components/common/Footer"
import Header from "../components/common/Header"
import Image from "next/image"

const SignupPage: FC = () => {
  const OpenEye = <FaEye />
  const CloseEye = <FaEyeSlash />
  const sermonpix = "https://res.cloudinary.com/dalylashp/image/upload/v1728486243/86QxYjwq8LU_qhirfa.png"
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  })
  const [buttonDisabled, setButtonDisabled] = useState(true)

  useEffect(() => {
    setButtonDisabled(!(user.email.length > 0 && user.password.length > 0 && user.username.length > 0))
  }, [user])

  const onSignup = useCallback(async () => {
    try {
      setLoading(true)
      const response = await axios.post("/api/users/signup", user)
      console.log("Signup success", response.data)
      router.push("/login")
    } catch (error: any) {
      console.log(`Signup failed: ${error.message}`)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }, [router, user])

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === "Enter") onSignup()
    }
    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [onSignup])

  return (
    <div>
      <header><Header /></header>
      <main>
        <section className="flex items-center justify-center min-h-screen gap-5">
          {/* First Section with Image and Text */}
          <article className="w-[50%] py-2 mx-[3rem]">
            {/* Container for aligning all elements */}
            <div className="w-full max-w-[600px] mx-auto">
              <div className="mb-1">
                {/* Set Image width to match container */}
                <Image src={sermonpix} width={600} height={200} alt="" className="w-full" />
              </div>
              <h1 className="text-lg font-bold my-4">HOW TO TRULY TRUST SOMEONE</h1>
              <p className="text-[.8rem] text-red-400 mb-2">Upcoming Event</p>
              <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra sit amet aliquam id diam maecenas ultricies.</p>
              <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat.</p>
              <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra sit amet aliquam id diam maecenas ultricies.</p>
            </div>
          </article>
          
          {/* Signup Form Section */}
          <article className="py-2 w-[50%]">
            <div className="flex gap-4">
              <h1>{loading ? "Processing !!!!" : 'Signup nibi '}-&gt;</h1>
              <hr />
            </div>
            <div className="flex flex-col mt-5 text-black">
              <label htmlFor="username">Username</label>
              <input
                className="p-2 border border-gray-300 rounded-xl mb-2 focus:outline-none focus:border-gray-600"
                id="username" type="text" value={user.username} placeholder="username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
              <label htmlFor="email">Email</label>
              <input
                className="p-2 border border-gray-300 rounded-xl mb-2 focus:outline-none focus:border-gray-600"
                id="email" type="email" value={user.email} placeholder="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <label htmlFor="password">Password</label>
              <div className="relative">
                <input
                  className="p-2 border border-gray-300 rounded-xl mb-2 focus:outline-none focus:border-gray-600"
                  id="password"
                  type={showPassword ? "text" : "password"} 
                  value={user.password}
                  placeholder="password"
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? OpenEye : CloseEye}
                </button>
              </div>
              <button 
                onClick={onSignup}
                disabled={buttonDisabled}
                className="p-2 border border-gray-300 rounded-2xl mb-4 focus:outline-none focus:border-gray-600">
                {buttonDisabled ? "No signup" : "Signup"}
              </button>
            </div>
            <p><Link href={"/login"}>Visit login</Link></p>
            <p><Link href={"/"}>HOME</Link></p>
          </article>
        </section>
      </main>
      <footer><Footer /></footer>
    </div>
  )
}

export default SignupPage
