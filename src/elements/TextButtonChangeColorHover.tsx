'use client'

import { useTranslation } from 'next-i18next'
import { useTheme } from 'next-themes'

import { TextColorChangeLight } from './TextColorChangeLight'
import { TextColorChangeDark } from './TextColorChangeDark'
import NoSsr from './NoSsr'
import Link from 'next/link'

export const TextButtonChangeColorHover = (props: { translateDoc: string }) => {
  const { theme } = useTheme()
  const { t } = useTranslation(props.translateDoc)

  return (
    <div className='p-4 max-lg:mr-auto lg:m-auto lg:w-4/5 mt-2'>
      <Link href={t('cto-link')} className='link flex w-fit font-semibold'>
        <NoSsr>
          {theme === 'dark' ? (
            <TextColorChangeDark text={t('cto-text')} />
          ) : (
            <TextColorChangeLight text={t('cto-text')} />
          )}
        </NoSsr>
      </Link>
    </div>
  )
}
