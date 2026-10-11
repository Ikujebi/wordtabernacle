
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type YouTubePlaylistItem = {
  snippet: {
    title: string;
    publishedAt: string;
    thumbnails?: {
      high?: { url: string };
      medium?: { url: string };
      default?: { url: string };
    };
    resourceId: {
      videoId: string;
    };
  };
  contentDetails?: {
    videoPublishedAt?: string;
  };
};

type YouTubePlaylistResponse = {
  items?: YouTubePlaylistItem[];
  nextPageToken?: string;
  error?: {
    message?: string;
  };
};

const CACHE_TTL_MS = 5 * 60 * 1000;

const cache = new Map<
  string,
  { data: unknown; expiry: number }
>();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pageToken = searchParams.get("pageToken") || "";
  const cacheKey = `yt-${pageToken}`;

  const cached = cache.get(cacheKey);

  if (cached && cached.expiry > Date.now()) {
    return NextResponse.json(cached.data, {
      headers: { "Cache-Control": "no-store" },
    });
  }

  const API_KEY = process.env.YOUTUBE_API_KEY;
  const PLAYLIST_ID = process.env.YOUTUBE_UPLOADS_PLAYLIST_ID;

  if (!API_KEY || !PLAYLIST_ID) {
    return NextResponse.json(
      { error: "Missing YouTube API configuration" },
      { status: 500 }
    );
  }

  const url = new URL(
    "https://www.googleapis.com/youtube/v3/playlistItems"
  );

  url.searchParams.set("part", "snippet,contentDetails");
  url.searchParams.set("playlistId", PLAYLIST_ID);
  url.searchParams.set("maxResults", "20");
  url.searchParams.set("key", API_KEY);

  if (pageToken) {
    url.searchParams.set("pageToken", pageToken);
  }

  try {
    const res = await fetch(url.toString(), {
      cache: "no-store",
    });

    const data =
      (await res.json()) as YouTubePlaylistResponse;

    if (!res.ok) {
      console.error("[youtube/videos] API error:", data.error);

      return NextResponse.json(
        { error: data.error?.message || "YouTube API request failed" },
        { status: res.status === 403 ? 502 : res.status }
      );
    }

    const formatted = {
      videos: (data.items ?? []).map((item) => ({
        videoId: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        thumbnail:
          item.snippet.thumbnails?.high?.url ??
          item.snippet.thumbnails?.medium?.url ??
          item.snippet.thumbnails?.default?.url ??
          "",
        publishedAt:
          item.contentDetails?.videoPublishedAt ??
          item.snippet.publishedAt,
      })),
      nextPageToken: data.nextPageToken ?? null,
    };

    cache.set(cacheKey, {
      data: formatted,
      expiry: Date.now() + CACHE_TTL_MS,
    });

    return NextResponse.json(formatted, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("[youtube/videos] Fetch failed:", error);

    return NextResponse.json(
      { error: "Failed to fetch YouTube videos" },
      { status: 502 }
    );
  }
}
