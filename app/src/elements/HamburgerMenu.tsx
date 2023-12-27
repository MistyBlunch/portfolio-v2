'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { IHeader } from '../interfaces/locales/header.interface'
import { RenderIcon } from './RenderIcon'
import { Squash as Hamburger } from 'hamburger-react'
import { useClickAway } from 'react-use'
import { useState, useRef } from 'react'

import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false)
  const ref = useRef(null)
  const { t } = useTranslation('header')

  useClickAway(ref, () => setOpen(false))

  const navigation = t(
    'header:navigation',
    {},
    { returnObjects: true }
  ) as IHeader[]

  return (
    <div ref={ref} className='ml-2 flex w-8 sm:hidden'>
      <div className={!isOpen ? '' : 'z-50 '}>
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='shadow-4xl fixed bottom-0 left-0 right-0 top-0 w-28 bg-light p-5 pt-0 dark:bg-dark'
          >
            <div className='shadow-4xl p-x-5 fixed bottom-0 left-0 right-0 top-0 w-28 border-r bg-light py-2 pt-10 dark:bg-dark'>
              <ul className='grid justify-center gap-2'>
                {navigation.map((item, idx) => (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10
                    }}
                    key={item.name}
                    className='w-24 rounded-xl p-[0.08rem]'
                  >
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                    >
                      <div className='mx-3 flex flex-col items-center py-2 lg:mx-0 lg:py-4'>
                        <RenderIcon icon={item.icon} />
                        <h5 className='text-center text-sm'>{item.name}</h5>
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
