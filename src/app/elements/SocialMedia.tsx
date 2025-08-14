'use client'

import { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'

import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import { AnimatePresence, motion } from 'framer-motion'

import { ISocialMedia } from '../interfaces/locales/social.media.interface'

import { RenderSocialMediaIcon } from './RenderSocialMediaIcon'
import { AtSign } from 'iconoir-react'

export const SocialMedia = () => {
  const [isOpen, setOpen] = useState(false)
  const [socialMediaData, setSocialMediaData] = useState<ISocialMedia[]>([])

  const ref = useRef(null)
  const { t } = useTranslation('socialmedia')

  useClickAway(ref, () => setOpen(false))

  useEffect(() => {
    setSocialMediaData(
      t('socialmedia:navigation', {
        returnObjects: true
      }) as ISocialMedia[]
    )
  }, [t])

  const buttonSocialMedia = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      display: 'flex',
      justifyContent: 'center',
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 0.3,
        ease: 'easeIn',
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }
    }
  }

  return (
    <div
      ref={ref}
      className='fixed bottom-2 right-2 z-10 flex w-fit flex-col justify-center max-lg:bottom-14'
    >
      <AnimatePresence>
        {isOpen && (
          <motion.ul className='my-2 grid gap-y-2'>
            {socialMediaData.map((item, id) => (
              <Link
                key={id}
                href={item.url}
                target='_blank'
                onClick={() => setOpen(false)}
              >
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + id / 10
                  }}
                >
                  <RenderSocialMediaIcon icon={item.name} />
                </motion.li>
              </Link>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setOpen(!isOpen)}
        whileTap={{ scale: 0.8 }}
        variants={buttonSocialMedia}
        initial='hidden'
        animate='visible'
        id='social-media-button'
        aria-label='Social Media button'
        className='rounded-full border border-gray-700  bg-light  dark:border-slate-200 dark:bg-dark max-lg:px-[0.5rem] max-lg:py-[0.3rem] lg:p-1.5'
      >
        <AtSign className='social-icon max-lg:w-5 lg:w-6' />
      </motion.button>
    </div>
  )
}
