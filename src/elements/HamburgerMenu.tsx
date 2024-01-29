'use client'

import { useState, useRef, useEffect } from 'react'
import { useClickAway } from 'react-use'

import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import { AnimatePresence, motion } from 'framer-motion'

import { INavbar } from '../interfaces/locales/navbar.interface'
import { RenderNavbarIcon } from './RenderNavbarIcon'
import { Turn as Hamburger } from 'hamburger-react'

export const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false)
  const [navbarData, setNavbarData] = useState<INavbar[]>([])
  const ref = useRef(null)
  const { t } = useTranslation('navbar')

  useClickAway(ref, () => setOpen(false))

  useEffect(() => {
    setNavbarData(
      t('navbar:navigation', {
        returnObjects: true
      }) as INavbar[]
    )
  }, [t])

  return (
    <div ref={ref} className='ml-2 flex w-8 sm:hidden'>
      <div className={!isOpen ? 'navbar-link' : 'navbar-link z-50'}>
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className='shadow-4xl p-x-5 fixed bottom-0 left-0 right-0 top-0 w-28 border-r bg-light py-2 pt-10 dark:bg-dark'>
              <ul className='grid justify-center gap-2'>
                {navbarData.map((item, id) => (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + id / 10
                    }}
                    key={id}
                    className='w-24 rounded-xl p-[0.08rem]'
                  >
                    <Link
                      href={'#' + item.name}
                      onClick={() => setOpen(false)}
                      className='navbar-link'
                    >
                      <div className='mx-3 flex flex-col items-center py-2 lg:mx-0 lg:py-4'>
                        <RenderNavbarIcon icon={item.name} />
                        <h5 className='text-center text-sm'>{item.title}</h5>
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
