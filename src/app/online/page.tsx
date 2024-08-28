"use client"
import {FC} from 'react'
import YouTubePlayer from '../components/common/YouTubePlayer'
import Header from '../components/common/Header'

const page: FC = () => {
    const videoId = "U2c6EMa9NJY?si"
  return (
    <div>
        <Header/>
    <div className='h-[100svh] flex items-center mx-[5%]'> <YouTubePlayer  videoId={videoId} />
    
    </div>
    <div className='h-[100svh] '>
    <iframe 
  src="https://mixlr.com/embed-player/your-broadcast-id" 
  className="w-full  overflow-hidden border-none"
></iframe>
</div>
    </div> )
}

export default page
