'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import { LanguageIcon } from '@heroicons/react/24/outline'

import i18nConfig from '../../../i18n.json'

export const LocaleSwitcher = () => {
  const router = useRouter()
  const { lang } = useTranslation()
  const { locales } = i18nConfig

  const changeLocale = () => {
    if (lang === 'es') router.push(`/en`)
    if (lang === 'en') router.push(`/es`)
  }

  return (
    <>
      <div className='my-2 flex flex-col items-center'>
        <LanguageIcon
          className='navbar-link mb-1 hidden cursor-pointer xs:w-8 sm:flex sm:w-6 lg:w-8'
          onClick={changeLocale}
        />
        <div className='grid grid-cols-2 divide-x'>
          {locales.map(local => (
            <Link
              href={`/${local}`}
              as={`/${local}`}
              key={local}
              className={
                local === lang
                  ? 'navbar-link px-2 font-bold'
                  : 'navbar-link px-2'
              }
            >
              <h5>{local}</h5>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
