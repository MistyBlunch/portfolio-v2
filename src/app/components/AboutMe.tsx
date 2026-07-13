'use client'

import { useState, useEffect } from 'react'
import { Trans, useTranslation } from 'next-i18next'
import { Component } from 'react'

export const AboutMe = () => {
  const { t } = useTranslation(['about-me', 'common'])
  const [showProfessional, setShowProfessional] = useState(true)

  useEffect(() => {
    const id = setInterval(() => setShowProfessional(p => !p), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      className='md:container max-sm:px-4 max-sm:py-8 sm:mx-auto sm:px-8 sm:pt-16 lg:p-12'
      id='aboutme'
    >
      <div className='lg:flex lg:items-center'>
        <div className='flex-1'>
          <div className='mb-4'>
            <div className='relative min-h-[2rem] sm:min-h-[3rem] md:min-h-[4rem]'>
              <h1
                className='text-2xl font-bold text-gray-700 transition-opacity duration-700 dark:text-slate-200 md:text-5xl'
                style={{ opacity: showProfessional ? 1 : 0 }}
              >
                {`${t('common:name')}, `}
                <span className='highlight'>{t('position')}</span>
              </h1>
              <div
                className='absolute inset-0 flex items-center transition-opacity duration-700'
                style={{ opacity: showProfessional ? 0 : 1 }}
              >
                <span
                  className='text-6xl font-normal text-gray-700 dark:text-slate-200 md:text-8xl'
                  style={{ fontFamily: 'MyHandWrittenFont', lineHeight: '0.8' }}
                >
                  {t('common:nickname')}
                </span>
                <span
                  className='ml-4 text-6xl font-normal text-gray-700 dark:text-slate-200 md:text-8xl'
                  style={{ fontFamily: 'MyHandWrittenFont', lineHeight: '0.5' }}
                >
                  {t('common:sign')}
                </span>
              </div>
            </div>
            <p className='mt-0 md:mt-2'>{t('highlight')}</p>
          </div>
          <div className='mb-4'>
            <Trans
              i18nKey='about-me:intro'
              components={{
                component: <Component />
              }}
            />
          </div>
          <div className='mb-4 inline max-md:hidden'>
            <span>{` ${t('denouement')}`}</span>
          </div>
          <div className='mb-4 inline max-md:hidden'>
            <div>
              <Trans
                i18nKey='about-me:hobbies'
                components={{
                  component: <Component />,
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
      </div>
    </section>
  )
}
