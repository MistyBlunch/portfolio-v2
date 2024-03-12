'use client'

import { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'

import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import { AnimatePresence, motion } from 'framer-motion'

import { ISocialMedia } from '../interfaces/locales/social.media.interface'

import { AtSymbolIcon } from '@heroicons/react/24/outline'
import { RenderSocialMediaIcon } from './RenderSocialMediaIcon'

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

  // const socialMediaIconContainer = {
  //   open: {
  //     transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  //   },
  //   closed: {
  //     transition: { staggerChildren: 0.05, staggerDirection: -1 }
  //   }
  // }

  // const socialMediaIcon = {
  //   open: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       y: { stiffness: 1000, velocity: -100 }
  //     }
  //   },
  //   closed: {
  //     y: 50,
  //     opacity: 0,
  //     transition: {
  //       y: { stiffness: 1000 }
  //     }
  //   }
  // }

  return (
    <div
      ref={ref}
      className='fixed bottom-2 right-2 z-10 w-fit'
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.3
                    }
                  }}
                  exit={{
                    y: 100,
                    transition: {
                      duration: 0.3
                    },
                    opacity: 0,
                  }}
                  className='bg-light dark:bg-dark'
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
        className='rounded-full border border-gray-700  dark:border-slate-200  max-lg:p-1 lg:p-1.5 bg-light dark:bg-dark'
      >
        <AtSymbolIcon className='social-icon max-lg:w-5 lg:w-6' />
      </motion.button>
    </div>
  )
}
