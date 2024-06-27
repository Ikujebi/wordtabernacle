"use client"
import {FC} from 'react'
import YouTubePlayer from '../components/common/YouTubePlayer'
import Header from '../components/common/Header'

const page: FC = () => {
    const videoId = "v0eVDVMf_g0?si"
  return (
    <div>
        <Header/>
    <div className='h-[100svh] flex items-center mx-[5%]'> <YouTubePlayer  videoId={videoId} ></YouTubePlayer></div>
    </div> )
}

export default page
