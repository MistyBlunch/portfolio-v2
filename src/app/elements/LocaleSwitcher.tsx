'use client'

import Link from 'next/link'
import { useRouter } from 'next/router'
import nextI18nextConfig from '@/next-i18next.config'

import { Translate } from 'iconoir-react'

export const LocaleSwitcher = (props?: { icon: Boolean }) => {
  const router = useRouter()
  const locales = nextI18nextConfig.i18n.locales
  const currentLang = router.locale
  const changeTo = router.locale === locales[0] ? locales[1] : locales[0]
  const icon = props?.icon ?? true

  return (
    <>
      <div className='my-1 flex flex-col items-center'>
        {icon && (
          <Link
            scroll={false}
            href={router.pathname}
            locale={changeTo}
            aria-label='Language Switcher'
            className='navbar-link mb-1 hidden cursor-pointer sm:flex sm:justify-center '
          >
            <Translate className='max-lg:w-6 lg:w-8 max-lg:h-6 lg:h-8' />
          </Link>
        )}
        <div className='grid grid-cols-2 divide-x'>
          {locales.map((locale: string, i: number) => (
            <Link
              scroll={false}
              href={router.pathname}
              locale={locale}
              key={i}
              className={
                locale === currentLang
                  ? 'navbar-link px-2 font-bold'
                  : 'navbar-link px-2'
              }
              aria-label='Locale Switcher'
            >
              <h5>{locale}</h5>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
