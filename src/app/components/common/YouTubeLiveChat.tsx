"use client";

import { useEffect, useState } from "react";

interface YouTubeLiveChatProps {
  videoId: string;
}

export default function YouTubeLiveChat({ videoId }: YouTubeLiveChatProps) {
  const [embedDomain, setEmbedDomain] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // 1. Safe Client Execution: Bypasses SSR window reference panics gracefully
  useEffect(() => {
    if (typeof window !== "undefined") {
      setEmbedDomain(window.location.hostname);
    }
  }, []);

  // Hydration guard: Show loading frame while determining domain on the client
  if (!embedDomain) {
    return <LiveChatSkeleton />;
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl bg-gray-900 border border-gray-800 shadow-inner">
      
      {/* 2. Elegant Loading State Overlay */}
      {!isLoaded && <LiveChatSkeleton className="absolute inset-0 z-10" />}

      {/* 3. Secure Production-Grade Iframe */}
      <iframe
        src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${embedDomain}`}
        title="YouTube Live Chat Stream"
        className="w-full h-full border-0 transition-opacity duration-300"
        style={{ opacity: isLoaded ? 1 : 0 }}
        onLoad={() => setIsLoaded(true)}
        // 4. Critical Security Sandbox Protocols
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        allow="autoplay; encrypted-media"
      />
    </div>
  );
}

/**
 * Premium Loading Skeleton Component
 */
function LiveChatSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-full bg-gray-950 flex flex-col p-4 space-y-4 animate-pulse ${className}`}>
      {/* Mock Header */}
      <div className="flex items-center space-x-3 pb-3 border-b border-gray-800">
        <div className="w-8 h-8 rounded-full bg-gray-800" />
        <div className="h-4 bg-gray-800 rounded-sm w-24" />
      </div>
      
      {/* Mock Messages */}
      <div className="flex-1 space-y-4 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-start space-x-3 opacity-75" style={{ opacity: 1 - i * 0.15 }}>
            <div className="w-6 h-6 rounded-full bg-gray-800 shrink-0" />
            <div className="space-y-2 flex-1">
              <div className="h-3 bg-gray-800 rounded-sm w-16" />
              <div className="h-3 bg-gray-800 rounded-sm w-5/6" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Mock Input */}
      <div className="pt-3 border-t border-gray-800 flex space-x-2">
        <div className="h-9 bg-gray-800 rounded-md flex-1" />
        <div className="h-9 bg-gray-800 rounded-md w-12" />
      </div>
    </div>
  );
}