'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import db from '../utils/firestore'
import { ThumbsUp } from 'iconoir-react'
import { processNumber } from '../utils/helpers/processNumber'

export const LikeButton = () => {
  const [likes, setLikes] = useState(0)
  const [existslikes, setExistsLikes] = useState(false)

  const iLikeIt = async () => {
    try {
      const docRef = doc(db, 'application', 'data')
      await updateDoc(docRef, { likes: likes + 1 })
      setLikes(likes + 1)
    } catch (err) {
      console.warn('Failed to update likes. Possibly offline.', err)
    }
  }

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const docRef = doc(db, 'application', 'data')
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setExistsLikes(true)
          setLikes(docSnap.data().likes)
        }
      } catch (err) {
        console.warn('Failed to fetch likes. Possibly offline.', err)
        setExistsLikes(true)
      }
    }
    fetchItems()
  }, [])

  return (
    <div>
      {existslikes && (
        <motion.button
          whileTap={{ scale: 0.85 }}
          className='fixed right-0 top-0 mr-4 mt-4 cursor-pointer rounded-full border px-[.8rem] py-[.3rem] max-lg:bottom-0 max-lg:left-0 max-lg:right-auto max-lg:top-auto max-lg:mb-4 max-lg:ml-2 max-sm:hidden'
          onClick={() => iLikeIt()}
        >
          <ThumbsUp className='m-auto h-6 w-6 max-lg:h-4 max-lg:w-4' />
          <div className='text-center text-xs'>{processNumber(likes)}</div>
        </motion.button>
      )}
    </div>
  )
}
