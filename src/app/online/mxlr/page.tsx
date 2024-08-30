"use client"
import { FC, useEffect, useState } from "react";
import {Spin} from "antd";


const MixlrPage: FC = () => {
  const [isLive, setIsLive] = useState<boolean | null>(null);
const [loading,setLoading] =  useState<boolean | null>(null);
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('/api/checkMixlrStatus');
        const data = await response.json();
        setIsLive(data.isLive);
      } catch (error) {
        console.error('Failed to fetch channel status:', error);
      }
    };

    fetchStatus();
  }, []);

  if (loading) {
    return (
      <div className="h-[100svh] flex items-center justify-center">
        <Spin size="large" />
      </div>
    )
  }

  return (
    <div className="h-[100svh] flex items-center justify-center">
      <iframe 
    src="https://mixlr.com/wordtabernacle" 
    className="w-full h-full overflow-hidden border-none"
    allowFullScreen
    title="Mixlr Event"
  ></iframe>
    </div>
  );
};

export default MixlrPage;





/* {isLive ? (
  <iframe 
    src="https://mixlr.com/wordtabernacle/embed" 
    className="w-full h-full overflow-hidden border-none"
    allowFullScreen
    title="Mixlr Event"
  ></iframe>
) : (
  <div className="text-center">
    <p>The channel is not currently live. Please check back later.</p>
    {/* You can add additional content or a fallback message here */
  