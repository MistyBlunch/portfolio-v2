'use client'

import { Trans, useTranslation } from 'next-i18next'
import { AboutMeImageWrapper } from '../elements/AboutMeImageWrapper'
import { Component } from 'react'

export const AboutMe = () => {
  const { t } = useTranslation(['about-me', 'common'])

  return (
    <section
      className='md:container max-sm:px-4 max-sm:py-8 sm:mx-auto sm:px-8 sm:pt-16 lg:p-12'
      id='aboutme'
    >
      <div className='lg:flex lg:items-center'>
        <div>
          <div className='mb-4'>
            <h1 className='text-3xl font-bold text-gray-700 dark:text-slate-200'>
              {t('common:nickname')}, {t('position')}
            </h1>
            <p>{t('highlight')}</p>
          </div>
          <div className='mb-4'>
            <Trans
              i18nKey='about-me:intro'
              components={{
                component: <Component />,
                anchorOrganizations: (
                  <a
                    href={t('anchorOrganizations')}
                    target='_blank'
                    className='link font-bold'
                  />
                )
              }}
            />
          </div>
          <div className='mb-4'>
            <span className='inline max-md:hidden'>
              {' ' + t('denouement')}
            </span>
          </div>
          <div className='mb-4'>
            <div className='inline max-md:hidden'>
              <Trans
                i18nKey='about-me:hobbies'
                components={{
                  component: <Component />,
                  anchorMusic: (
                    <a
                      href={t('anchorOrganizations')}
                      target='_blank'
                      className='link font-bold'
                    />
                  ),
                  anchorEmma: (
                    <a
                      href={t('anchorEmma')}
                      target='_blank'
                      className='link font-bold'
                    />
                  )
                }}
              />
            </div>
          </div>
        </div>
        <div className='m-5'>
          <AboutMeImageWrapper />
        </div>
      </div>
    </section>
  )
}
