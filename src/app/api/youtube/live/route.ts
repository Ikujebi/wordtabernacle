import { NextResponse } from "next/server";

type LiveResponse = {
  isLive: boolean;
  videoId: string | null;
  title: string | null;
  error?: string;
};

const CHANNEL_ID = "UCmANLm6SlLsdUReFBhj4IvA";

export async function GET() {
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
      return NextResponse.json<LiveResponse>(
        {
          isLive: false,
          videoId: null,
          title: null,
          error: `YouTube API error: ${res.status}`,
        },
        { status: 502 }
      );
    }

    const data = await res.json();

    const liveVideo = data?.items?.[0];

    return NextResponse.json<LiveResponse>({
      isLive: Boolean(liveVideo),
      videoId: liveVideo?.id?.videoId ?? null,
      title: liveVideo?.snippet?.title ?? null,
    });
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