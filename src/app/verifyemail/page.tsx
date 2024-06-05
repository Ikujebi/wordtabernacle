'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"


const Page = () => {
    const [token, setToken] = useState("")
    const [verified, setVerified] = useState(false)
    const [error, setError] = useState(false)

   

    useEffect(() => {
        const urlToken = window.location.search.split("=")
        [1];
        setToken(urlToken || "");
    }, [token])

    useEffect(() => {
        if (token.length > 0) {
            const verifyUserEmail = async () => {
                try {
                    await axios.post('/api/users/verifyemail', { token })
                    setVerified(true)
                } catch (error: any) {
                    setError(true)
                    console.log(error.response.data);
        
                }
            }
            verifyUserEmail();
        }
    }, [ token])


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl">Verify your email</h1>
            <h2 className="p-2 bg-orange-500 text-black">{token ? `${token}`: "no token"}</h2>
       
       {verified &&(
        <div className=" text-blue-500">
            <h2 className="">
                Email Verified
            </h2>
            <Link href="/login">
               Login
            </Link>
        </div>
       )}
       {error && (
        <div>
            <h2 className="text-2xl bg-red-500 text-black">
                Error
            </h2>
        </div>
       )}
        </div>
    )
}

export default Page