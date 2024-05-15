'use client'

import { useTranslation } from 'next-i18next'
import { useTheme } from 'next-themes'
import Link from 'next/link'

import { TextColorChangeLight } from './TextColorChangeLight'
import { TextColorChangeDark } from './TextColorChangeDark'
import NoSsr from './NoSsr'

export const TextButtonChangeColorHover = (props: { translateDoc: string }) => {
  const { theme } = useTheme()
  const { t } = useTranslation(props.translateDoc)

  return (
    <div className='mt-2 max-lg:mr-auto max-lg:p-2 lg:m-auto lg:w-4/5 lg:p-4'>
      <Link href={t('cto-link')} className='link flex w-fit font-semibold'>
        <NoSsr>
          {theme === 'dark'  || theme === 'system' ? (
            <TextColorChangeDark text={t('cto-text')} />
          ) : (
            <TextColorChangeLight text={t('cto-text')} />
          )}
        </NoSsr>
      </Link>
    </div>
  )
}
