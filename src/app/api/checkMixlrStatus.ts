import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const mixlrChannelId = 'wordtabernacle'; // Your Mixlr channel ID or username
  const response = await fetch(`https://api.mixlr.com/v1/channels/${mixlrChannelId}`);
  
  if (!response.ok) {
    return res.status(response.status).json({ error: 'Failed to fetch channel status' });
  }

  const data = await response.json();
  
  // Check if the channel is live
  const isLive = data.status === 'live';

  res.status(200).json({ isLive });
}
