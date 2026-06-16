import { NextResponse } from "next/server";

const cache = new Map<string, { data: any; expiry: number }>();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pageToken = searchParams.get("pageToken") || "";

  const cacheKey = `yt-${pageToken}`;

  // ⏱ Cache TTL: 6 hours
  const cached = cache.get(cacheKey);
  if (cached && cached.expiry > Date.now()) {
    return NextResponse.json(cached.data);
  }

  const API_KEY = process.env.YOUTUBE_API_KEY!;
  const PLAYLIST_ID = process.env.YOUTUBE_UPLOADS_PLAYLIST_ID!;

  const url =
    `https://www.googleapis.com/youtube/v3/playlistItems` +
    `?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=6` +
    `&pageToken=${pageToken}&key=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  const formatted = {
    videos: data.items.map((item: any) => ({
      videoId: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      publishedAt: item.snippet.publishedAt,
    })),
    nextPageToken: data.nextPageToken || null,
  };

  cache.set(cacheKey, {
    data: formatted,
    expiry: Date.now() + 1000 * 60 * 60 * 6,
  });

  return NextResponse.json(formatted);
}