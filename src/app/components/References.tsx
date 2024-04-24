'use client'
import { Component } from 'react'
import { Trans, useTranslation } from 'next-i18next'

export const References = () => {
  const { t } = useTranslation(['references'])

  return (
    <section
      className='md:container max-sm:px-4 max-sm:py-8 sm:mx-auto sm:p-8 lg:p-12'
      id='references'
    >
      <p className='text-sm text-gray-700 opacity-60 dark:text-slate-400'>
        <Trans
          i18nKey='references:designRef'
          components={{
            component: <Component />,
            anchorRefPortfolio: (
              <a
                href={t('anchorRefPortfolio')}
                target='_blank'
                className='link font-bold'
              />
            ),
            anchorRefPage: (
              <a
                href={t('anchorRefPage')}
                target='_blank'
                className='link font-bold'
              />
            )
          }}
        />
        <Trans
          i18nKey='references:builtWithRef'
          components={{
            component: <Component />,
            anchorNextJS: (
              <a
                href={t('anchorNextJS')}
                target='_blank'
                className='link font-bold'
              />
            ),
            anchorTailwindCSS: (
              <a
                href={t('anchorTailwindCSS')}
                target='_blank'
                className='link font-bold'
              />
            ),
            anchorVercel: (
              <a
                href={t('anchorVercel')}
                target='_blank'
                className='link font-bold'
              />
            ),
            anchorVSCode: (
              <a
                href={t('anchorVSCode')}
                target='_blank'
                className='link font-bold'
              />
            )
          }}
        />
        <Trans
          i18nKey='references:textFontRef'
          components={{
            component: <Component />,
            anchorInterFont: (
              <a
                href={t('anchorInterFont')}
                target='_blank'
                className='link font-bold'
              />
            )
          }}
        />
      </p>
    </section>
  )
}
