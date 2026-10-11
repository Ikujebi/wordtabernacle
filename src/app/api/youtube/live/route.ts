import { NextResponse } from "next/server";

type LiveResponse = {
  isLive: boolean;
  videoId: string | null;
  title: string | null;
  error?: string;
};

const CHANNEL_ID = "UCmANLm6SlLsdUReFBhj4IvA";

// search.list (eventType=live) costs 100 quota units per call — by far the
// most expensive YouTube Data API endpoint. With no caching, every single
// page view burned 100 units against the default 10,000/day quota, so the
// channel could go "live-blind" after roughly 100 visits in a day and stay
// that way (silently returning 403 quotaExceeded) until the daily reset.
// A short server-side cache means all visitors within the TTL window share
// one lookup instead of each triggering their own.
const CACHE_TTL_MS = 45_000; // 45s — short enough to feel responsive, long enough to meaningfully cut quota use
let cachedResult: { data: LiveResponse; expiry: number } | null = null;

export async function GET() {
  if (cachedResult && cachedResult.expiry > Date.now()) {
    return NextResponse.json<LiveResponse>(cachedResult.data);
  }

  const API_KEY = process.env.YOUTUBE_API_KEY;

  if (!API_KEY) {
    return NextResponse.json<LiveResponse>(
      {
        isLive: false,
        videoId: null,
        title: null,
        error: "Missing YouTube API key",
      },
      { status: 500 }
    );
  }

  const url = new URL("https://www.googleapis.com/youtube/v3/search");

  url.searchParams.set("part", "snippet");
  url.searchParams.set("channelId", CHANNEL_ID);
  url.searchParams.set("eventType", "live");
  url.searchParams.set("type", "video");
  url.searchParams.set("key", API_KEY);
  url.searchParams.set("maxResults", "1");

  try {
    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 8000); // 8s safety timeout

    const res = await fetch(url.toString(), {
      method: "GET",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    clearTimeout(timeout);

    if (!res.ok) {
      // Previously this branch never looked at YouTube's actual error body,
      // so a 403 quotaExceeded, a bad/restricted API key, and a wrong
      // channel ID were all indistinguishable from the client — logging
      // the real reason here is what makes this debuggable going forward.
      let reason = `YouTube API error: ${res.status}`;
      try {
        const errorBody = await res.json();
        const apiMessage = errorBody?.error?.message;
        const apiReason = errorBody?.error?.errors?.[0]?.reason;
        console.error("[youtube/live] YouTube API error:", {
          status: res.status,
          reason: apiReason,
          message: apiMessage,
        });
        if (apiMessage) reason = `YouTube API error: ${apiMessage}`;
      } catch {
        // Body wasn't JSON — fall back to the generic status-based message
      }

      const errorResult: LiveResponse = {
        isLive: false,
        videoId: null,
        title: null,
        error: reason,
      };

      // Cache failures too (briefly) — if we're quota-exhausted, there's no
      // point hammering YouTube again for every visitor in the next 45s.
      cachedResult = { data: errorResult, expiry: Date.now() + CACHE_TTL_MS };

      return NextResponse.json<LiveResponse>(errorResult, { status: 502 });
    }

    const data = await res.json();

    const liveVideo = data?.items?.[0];

    const result: LiveResponse = {
      isLive: Boolean(liveVideo),
      videoId: liveVideo?.id?.videoId ?? null,
      title: liveVideo?.snippet?.title ?? null,
    };

    cachedResult = { data: result, expiry: Date.now() + CACHE_TTL_MS };

    return NextResponse.json<LiveResponse>(result);
  } catch (error: any) {
    const isAbort = error?.name === "AbortError";

    return NextResponse.json<LiveResponse>(
      {
        isLive: false,
        videoId: null,
        title: null,
        error: isAbort
          ? "Request timed out"
          : "Failed to fetch live stream",
      },
      { status: 500 }
    );
  }
}