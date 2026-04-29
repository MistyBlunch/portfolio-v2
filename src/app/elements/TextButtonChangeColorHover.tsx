'use client'

import { useTranslation } from 'next-i18next'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

import { TextColorChangeLight } from './TextColorChangeLight'
import { TextColorChangeDark } from './TextColorChangeDark'
import NoSsr from './NoSsr'

export const TextButtonChangeColorHover = (props: { translateDoc: string }) => {
  const { theme } = useTheme()
  const { t } = useTranslation(props.translateDoc)
  const { locale } = useRouter()
  const ctoLink = t('cto-link')
  const isResume = ctoLink === '/resume'
  const href = isResume ? `/pdfs/grace-alvarado_resume_${locale}.pdf` : ctoLink

  return (
    <div className='mt-2 max-lg:mr-auto max-lg:p-2 lg:m-auto lg:w-4/5 lg:p-4'>
      <a href={href} target='_blank' rel='noopener noreferrer' className='link flex w-fit font-semibold'>
        <NoSsr>
          {theme === 'dark' || theme === 'system' ? (
            <TextColorChangeDark text={t('cto-text')} />
          ) : (
            <TextColorChangeLight text={t('cto-text')} />
          )}
        </NoSsr>
      </a>
    </div>
  )
}
