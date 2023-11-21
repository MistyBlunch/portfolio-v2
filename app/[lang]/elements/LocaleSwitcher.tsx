'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import { i18n } from '../../types/i18n.types'
import { usePathname } from 'next/navigation'
import { redirectedPathName } from '@/app/lib/localeSwitcher'

export const LocaleSwitcher = () => {
  const pathName = usePathname()

  useEffect(() => {
    const initTWE = async () => {
      const { Collapse, Ripple, initTE } = await import('tw-elements')
      initTE({ Collapse, Ripple })
    }
    initTWE()
  }, [])

  return (
    <>
      <div className='relative'>
        <button
          className='inline-block px-4 pb-2 pt-2.5 text-xs font-medium'
          type='button'
          data-te-collapse-init
          data-te-ripple-init
          data-te-ripple-color='light'
          data-te-target='#collapseLang'
          aria-expanded='false'
          aria-controls='collapseLang'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802'
            />
          </svg>
        </button>
        <div
          className='!visible absolute left-0 right-0 hidden'
          id='collapseLang'
          data-te-collapse-item
        >
          <div className='block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 dark:text-neutral-50'>
            <ul className='flex flex-col py-2'>
              {i18n.locales.map(locale => {
                return (
                  <Link
                    key={locale}
                    className='px-2 text-center'
                    href={redirectedPathName(pathName, locale)}
                  >
                    {locale}
                  </Link>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
