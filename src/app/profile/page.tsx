"use client"
import axios from "axios"
import Link from "next/link"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { useState } from "react"

const ProfilePage = () => {

  const router = useRouter()

  const [data, setData] = useState("nothing!!!")

  const logout = async () => {
    try {
      await axios.get('api/users/logout')
      router.push("/login")
      toast.success("Successfully logged out");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message)

    }
  }
   
  const getUserDetails = async () =>{
   const response = await axios.get("/api/users/admin")

   console.log(response.data);
   setData(response.data.data._id)
   
  }

  return (
    <div className="flex bg-black text-white flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
<h2 className="p-2 rounded bg-orange-500 mt-2">{data === "nothing!!!" ? "Nothing!!!" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
      <hr />

      <button
        onClick={getUserDetails}
        className="bg-green-500 hover:bg-blue-700 text-white py-2 px-4 mt-5 font-bold rounded">Get User Details</button>

      <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mt-5 font-bold rounded">Logout</button>
      <Link className="bg-pink-500 hover:bg-green-700 text-white py-2 px-4 mt-[20rem] ml-[20rem] font-bold rounded" href={"/"}>
        HOME
      </Link >
    </div>
  )
}

export default ProfilePage