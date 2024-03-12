'use client'

import Link from 'next/link'
import { useRouter } from 'next/router'
import nextI18nextConfig from '@/next-i18next.config'
import { LanguageIcon } from '@heroicons/react/24/outline'

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
            className='navbar-link mb-1 hidden cursor-pointer xs:w-8 sm:flex sm:w-6 lg:w-8'
          >
            <LanguageIcon />
          </Link>
        )}
        <div className='grid grid-cols-2 divide-x'>
          {locales.map((locale, i) => (
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
            >
              <h5>{locale}</h5>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
