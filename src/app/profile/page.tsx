"use client"
import axios from "axios"
import Link from "next/link"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

const profilePage = () => {

  const router = useRouter()

const logout = async () =>{
  try {
  await  axios.get('api/users/logout')
  router.push("/login")
    toast.success("Successfully logged out");
  } catch (error:any) {
    console.log(error.message);
    toast.error(error.message)
    
  }
}

  return (
        <div className="flex bg-black text-white flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
        <p>Profile page</p>

        <hr />

        <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mt-5 font-bold rounded">Logout</button>
            
            </div>
  )
}

export default profilePage