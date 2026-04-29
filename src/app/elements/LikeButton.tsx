'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ThumbsUp } from 'iconoir-react'
import { processNumber } from '../utils/helpers/processNumber'

export const LikeButton = () => {
  const [likes, setLikes] = useState(0)
  const [existslikes, setExistsLikes] = useState(false)

  const iLikeIt = async () => {
    try {
      const res = await fetch('/api/likes', { method: 'POST' })
      const data = await res.json()
      setLikes(data.likes)
    } catch (err) {
      console.warn('Failed to update likes.', err)
    }
  }

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const res = await fetch('/api/likes')
        const data = await res.json()
        setLikes(data.likes)
        setExistsLikes(true)
      } catch (err) {
        console.warn('Failed to fetch likes.', err)
        setExistsLikes(true)
      }
    }
    fetchLikes()
  }, [])

  return (
    <div>
      {existslikes && (
        <motion.button
          whileTap={{ scale: 0.85 }}
          className='fixed right-0 top-0 mr-4 mt-4 cursor-pointer
          rounded-full border bg-light px-[.8rem]
          py-[.3rem] dark:bg-dark max-lg:bottom-2 max-lg:right-2 max-lg:top-auto max-lg:mr-0 max-lg:mt-0 max-lg:px-[.6rem] max-lg:py-[.2rem]'
          onClick={() => iLikeIt()}
        >
          <ThumbsUp className='m-auto h-6 w-6 max-lg:h-4 max-lg:w-4' />
          <div className='text-center text-xs'>{processNumber(likes)}</div>
        </motion.button>
      )}
    </div>
  )
}
