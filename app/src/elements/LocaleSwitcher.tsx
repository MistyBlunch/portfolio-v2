'use client'

import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import i18nConfig from '../../../i18n.json'

export const LocaleSwitcher = () => {
  const { lang } = useTranslation()
  const { locales } = i18nConfig

  return (
    <>
      <div className='relative'>
        {locales.map(local => (
          <Link
            href={`/?lang=${local}`}
            as={`/${local}`}
            key={local}
            className={local === lang ? 'font-bold' : ''}
          >
            <h5>{local}</h5>
          </Link>
        ))}
      </div>
    </>
  )
}
