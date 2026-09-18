"use client";

import { useState } from "react";
import { Share2, Check, Link as LinkIcon } from "lucide-react";

interface ShareActionsProps {
  title: string;
}

export default function ShareActions({ title }: ShareActionsProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
        return;
      } catch (err) {
        // User cancelled or share failed, fallback to copy
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleShare}
        className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-slate-700 border border-slate-200/80 shadow-xs hover:bg-slate-50 hover:text-[#5F021F] transition-all active:scale-95 cursor-pointer"
        title="Share or Copy Link"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-emerald-600" />
            <span className="text-emerald-700">Link Copied!</span>
          </>
        ) : (
          <>
            <Share2 className="h-4 w-4 text-[#5F021F]" />
            <span>Share Article</span>
          </>
        )}
      </button>
    </div>
  );
}