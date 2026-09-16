"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { subscribeToBlog } from "@/lib/subscribers";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await subscribeToBlog({ email: email.trim() });
      setStatus("success");
      setMessage(res.message || "You're subscribed!");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-gradient-to-br from-[#5F021F] to-[#8B1538] p-8 sm:p-10 text-center shadow-lg shadow-[#5F021F]/20">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white mb-4">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-extrabold text-white">You're all set!</h3>
        <p className="text-sm text-white/80 font-medium mt-1.5 max-w-sm mx-auto">{message}</p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#5F021F] to-[#8B1538] p-8 sm:p-10 shadow-lg shadow-[#5F021F]/20">
      <div className="max-w-xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-xs font-bold tracking-wide mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Stay Connected</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-white">Never miss a new post</h3>
        <p className="text-sm text-white/75 font-medium mt-2 mb-6">
          Get our latest articles and reflections delivered straight to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
          <div className="relative flex-1">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              disabled={status === "loading"}
              className="w-full rounded-xl bg-white/10 border border-white/20 pl-10 pr-4 py-3 text-sm font-medium text-white placeholder:text-white/40 outline-none focus:bg-white/15 focus:border-white/40 transition-all disabled:opacity-60"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#5F021F] hover:bg-white/90 active:scale-[0.98] transition-all disabled:opacity-60 cursor-pointer shrink-0"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Subscribing...
              </>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>

        {status === "error" && (
          <p className="text-xs font-semibold text-red-100 bg-red-500/20 border border-red-300/20 rounded-lg py-2 px-3 mt-3 max-w-md mx-auto">
            {message}
          </p>
        )}

        <p className="text-[11px] text-white/50 font-medium mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}