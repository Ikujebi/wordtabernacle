export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.wordtabernacle.org.ng/api";

export function unwrap<T>(json: any): T {
  if (json && typeof json === "object" && "success" in json && "data" in json) {
    return json.data as T;
  }
  return json as T;
}

export async function apiPost<T>(endpoint: string, payload: unknown): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data: unknown = await response.json();

  if (!response.ok) {
    const message =
      data && typeof data === "object" && "message" in data
        ? String((data as { message: unknown }).message)
        : "Request failed";
    throw new Error(message);
  }

  return unwrap<T>(data);
}

export async function apiGet<T>(endpoint: string, revalidateSeconds = 60): Promise<T | null> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      next: { revalidate: revalidateSeconds },
    });
    if (!response.ok) return null;
    const data: unknown = await response.json();
    return unwrap<T>(data);
  } catch (error) {
    console.error(`Failed to fetch ${endpoint}:`, error);
    return null;
  }
}