import type { NextApiRequest, NextApiResponse } from 'next'

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL!
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN!

async function redisCommand(command: string[]) {
  const res = await fetch(`${UPSTASH_URL}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${UPSTASH_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(command)
  })
  return res.json()
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const data = await redisCommand(['GET', 'portfolio:likes'])
    const likes = parseInt(data.result ?? '0', 10)
    return res.status(200).json({ likes })
  }

  if (req.method === 'POST') {
    const data = await redisCommand(['INCR', 'portfolio:likes'])
    return res.status(200).json({ likes: data.result })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
